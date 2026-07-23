#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const REQUIRED_SECTIONS = [
  "## Kurzlage",
  "## Top-Meldungen",
  "## Markt- und Konkurrenzbild",
  "## Bedeutung für Agenten, Apps und autonome Studios",
  "## Begriffskasten",
  "## Was als Nächstes wichtig wird",
  "## Quellenverzeichnis",
];

export function validateBriefing(filePath, markdown) {
  const errors = [];
  const basename = path.basename(filePath);
  const match = basename.match(/^(\d{4}-\d{2}-\d{2})-gpt-ki-tech-briefing\.md$/);

  if (!match) {
    errors.push("Dateiname muss YYYY-MM-DD-gpt-ki-tech-briefing.md entsprechen.");
  }
  if (!/^# GPT KI- & Tech-Briefing – .+$/m.test(markdown)) {
    errors.push("GPT-Überschrift fehlt oder ist ungültig.");
  }
  for (const metadata of ["**Erstellt von:** GPT", "**Ausgabe:** Tägliches Morning Briefing", "**Stand:**"]) {
    if (!markdown.includes(metadata)) errors.push(`Metadaten fehlen: ${metadata}`);
  }
  for (const section of REQUIRED_SECTIONS) {
    if (!markdown.includes(section)) errors.push(`Pflichtabschnitt fehlt: ${section}`);
  }

  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  if (words < 1800) errors.push(`Briefing ist zu kurz: ${words} Wörter, mindestens 1800 erforderlich.`);

  const urls = new Set(markdown.match(/https?:\/\/[^\s)>]+/g) ?? []);
  if (urls.size < 6) errors.push(`Zu wenige sichtbare Quellen: ${urls.size}, mindestens 6 erforderlich.`);

  const topStories = markdown.match(/^### \d+\.\s+.+$/gm) ?? [];
  if (topStories.length < 6) errors.push(`Zu wenige Top-Meldungen: ${topStories.length}, mindestens 6 erforderlich.`);

  if (/```/.test(markdown.slice(0, 120))) errors.push("Briefing darf nicht in einem Codeblock stehen.");

  return { valid: errors.length === 0, errors, stats: { words, sources: urls.size, topStories: topStories.length } };
}

async function main() {
  const filePath = process.argv[2];
  if (!filePath) throw new Error("Aufruf: node scripts/validate_gpt_briefing.mjs <datei.md>");

  const markdown = await readFile(filePath, "utf8");
  const result = validateBriefing(filePath, markdown);
  if (!result.valid) {
    for (const error of result.errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }
  console.log(
    `Validiert: ${path.basename(filePath)} (${result.stats.words} Wörter, ${result.stats.sources} Quellen, ${result.stats.topStories} Meldungen)`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`Fehler: ${error.message}`);
    process.exitCode = 1;
  });
}
