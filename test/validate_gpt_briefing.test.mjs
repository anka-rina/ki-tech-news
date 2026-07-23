import test from "node:test";
import assert from "node:assert/strict";
import { validateBriefing } from "../scripts/validate_gpt_briefing.mjs";

function validBriefing() {
  const stories = Array.from({ length: 6 }, (_, index) => `### ${index + 1}. Meldung ${index + 1}`).join("\n");
  const sources = Array.from({ length: 6 }, (_, index) => `- [Quelle ${index + 1}](https://example.com/${index + 1})`).join("\n");
  const filler = "Analyse Kontext Bedeutung Wettbewerb Entwicklung ".repeat(370);
  return `# GPT KI- & Tech-Briefing – 23. Juli 2026

**Erstellt von:** GPT
**Ausgabe:** Tägliches Morning Briefing
**Stand:** 23. Juli 2026, 09:00 Uhr (Europe/Berlin)

## Kurzlage
${filler}
## Top-Meldungen
${stories}
## Markt- und Konkurrenzbild
## Bedeutung für Agenten, Apps und autonome Studios
## Begriffskasten
## Was als Nächstes wichtig wird
## Quellenverzeichnis
${sources}`;
}

test("akzeptiert ein vollständiges GPT-Briefing", () => {
  const result = validateBriefing("2026-07-23-gpt-ki-tech-briefing.md", validBriefing());
  assert.equal(result.valid, true, result.errors.join("\n"));
});

test("blockiert falschen Namen und fehlende Quellen", () => {
  const result = validateBriefing("2026-07-23-claude-ki-tech-briefing.md", validBriefing().replaceAll(/https?:\/\/[^\s)]+/g, ""));
  assert.equal(result.valid, false);
  assert(result.errors.some((error) => error.includes("Dateiname")));
  assert(result.errors.some((error) => error.includes("Quellen")));
});
