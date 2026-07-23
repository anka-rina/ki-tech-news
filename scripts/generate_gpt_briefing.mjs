#!/usr/bin/env node

import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const BERLIN_TIMEZONE = "Europe/Berlin";
const DEFAULT_MODEL = "gpt-5.6";
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function berlinDateParts(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: BERLIN_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
}

function parseDateArgument(argv) {
  const dateIndex = argv.indexOf("--date");
  if (dateIndex !== -1) {
    const value = argv[dateIndex + 1];
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      throw new Error("--date erwartet YYYY-MM-DD");
    }
    return value;
  }
  const { year, month, day } = berlinDateParts();
  return `${year}-${month}-${day}`;
}

function germanLongDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function outputPathForDate(date) {
  const [year, month] = date.split("-");
  return path.join(repoRoot, "briefings", year, month, `${date}-gpt-ki-tech-briefing.md`);
}

export function buildPrompt(date) {
  const longDate = germanLongDate(date);
  return `Rolle: Du bist die leitende deutschsprachige Analystin für ein tägliches KI- und Technologie-Briefing.

Ziel: Erstelle das vollständige Morning Briefing für ${longDate}. Recherchiere mit der Websuche aktuelle, materielle Entwicklungen aus den letzten 24 bis 48 Stunden. Ältere Informationen dürfen nur als klar gekennzeichneter Kontext erscheinen.

Erfolgskriterien:
- Beginne exakt mit "# GPT KI- & Tech-Briefing – ${longDate}".
- Direkt darunter stehen:
  **Erstellt von:** GPT
  **Ausgabe:** Tägliches Morning Briefing
  **Stand:** ${longDate}, 09:00 Uhr (Europe/Berlin)
- Wähle 6 bis 10 wirklich wichtige Meldungen. Qualität und Relevanz gehen vor Menge.
- Erkläre jede Meldung verständlich, nenne das konkrete Neue, ordne Markt und Konkurrenz ein und beschreibe die praktische Bedeutung.
- Berücksichtige besonders Modelle, Agenten, Entwicklerwerkzeuge, Apps, Automatisierung, autonome Studios, Cloud-Infrastruktur, Chips, Sicherheit und relevante Regulierung.
- Füge einen kompakten Begriffskasten für neue oder missverständliche Fachbegriffe ein.
- Leite konkrete Auswirkungen und beobachtbare nächste Signale ab. Kennzeichne Prognosen ausdrücklich als Einschätzung.
- Nutze bevorzugt Primärquellen: offizielle Unternehmensmeldungen, Produktdokumentation, Forschungsarbeiten, Behörden und Originalstatements. Medienberichte nur ergänzend.
- Jede zeitabhängige Tatsachenbehauptung braucht unmittelbar einen sichtbaren, klickbaren Markdown-Link zur Quelle.
- Nenne Veröffentlichungs- oder Ereignisdatum, wenn es auffindbar ist.
- Trenne bestätigte Fakten, Einordnung und Prognose klar. Erfinde keine Details und verschweige Quellenkonflikte nicht.
- Schließe mit einem Quellenverzeichnis der wichtigsten Originalquellen.

Verbindliche Struktur:
## Kurzlage
## Top-Meldungen
### 1. ...
## Markt- und Konkurrenzbild
## Bedeutung für Agenten, Apps und autonome Studios
## Begriffskasten
## Was als Nächstes wichtig wird
## Quellenverzeichnis

Ausgabe:
- Nur fertiges Markdown, ohne Codeblock oder Vorrede.
- Deutsch, präzise, erklärend und substanziell.
- Zielumfang: 2.500 bis 5.000 Wörter.
- Keine Anlage-, Rechts- oder Steuerberatung.

Stop-Regel: Wenn eine zentrale Behauptung nicht belastbar belegt werden kann, lasse sie weg oder kennzeichne die Evidenzlücke. Beende erst, wenn Überschrift, Metadaten, alle Pflichtabschnitte und sichtbare Quellenlinks vorhanden sind.`;
}

function extractOutputText(response) {
  const text = response.output
    ?.filter((item) => item.type === "message")
    .flatMap((item) => item.content ?? [])
    .filter((item) => item.type === "output_text")
    .map((item) => item.text)
    .join("\n")
    .trim();
  if (!text) throw new Error("Die OpenAI-Antwort enthielt kein Briefing.");
  return text;
}

function extractCitations(response) {
  const citations = new Map();
  for (const item of response.output ?? []) {
    if (item.type !== "message") continue;
    for (const content of item.content ?? []) {
      for (const annotation of content.annotations ?? []) {
        if (annotation.type === "url_citation" && annotation.url) {
          citations.set(annotation.url, annotation.title || annotation.url);
        }
      }
    }
  }
  return [...citations].map(([url, title]) => ({ url, title }));
}

function appendMissingSourceLinks(markdown, citations) {
  const missing = citations.filter(({ url }) => !markdown.includes(url));
  if (!missing.length) return markdown;
  const lines = missing.map(({ url, title }) => `- [${title.replaceAll("[", "").replaceAll("]", "")}](${url})`);
  return `${markdown.trim()}\n\n### Weitere von der Websuche verwendete Quellen\n\n${lines.join("\n")}\n`;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function createResponse(apiKey, model, prompt) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      reasoning: { effort: "medium" },
      tools: [
        {
          type: "web_search",
          search_context_size: "high",
          user_location: {
            type: "approximate",
            country: "DE",
            timezone: BERLIN_TIMEZONE,
          },
        },
      ],
      tool_choice: "required",
      include: ["web_search_call.action.sources"],
      max_output_tokens: 18000,
      text: { verbosity: "high" },
      input: prompt,
    }),
  });

  const body = await response.json();
  if (!response.ok) {
    const message = body?.error?.message || `OpenAI API antwortete mit HTTP ${response.status}`;
    throw new Error(message);
  }
  if (body.status !== "completed") {
    throw new Error(`OpenAI-Antwort nicht abgeschlossen: ${body.status ?? "unbekannt"}`);
  }
  return body;
}

async function main() {
  const date = parseDateArgument(process.argv.slice(2));
  const outputPath = outputPathForDate(date);
  const relativeOutputPath = path.relative(repoRoot, outputPath);

  if (await fileExists(outputPath)) {
    console.log(`Briefing existiert bereits: ${relativeOutputPath}`);
    return;
  }

  const prompt = buildPrompt(date);
  if (process.argv.includes("--dry-run")) {
    console.log(`Dry-run bereit: ${relativeOutputPath}`);
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY fehlt.");

  const response = await createResponse(apiKey, process.env.OPENAI_MODEL || DEFAULT_MODEL, prompt);
  const markdown = appendMissingSourceLinks(extractOutputText(response), extractCitations(response));

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${markdown.trim()}\n`, { encoding: "utf8", flag: "wx" });
  console.log(`Briefing erstellt: ${relativeOutputPath}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`Fehler: ${error.message}`);
    process.exitCode = 1;
  });
}
