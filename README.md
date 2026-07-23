# KI Tech News — Executive AI Intelligence Briefing

Automatisch erstelltes tägliches KI-Intelligence-Briefing (Sprache: Deutsch).
Läuft jeden Morgen ~09:00 Uhr (Europe/Berlin) und legt pro Tag eine HTML-Datei unter `briefings/` ab.

## GPT Morning Briefing

Der primäre Ablauf ist ein Codex-Chat-Workflow: Im mit diesem Repository verbundenen Task genügt der Befehl `go`. Codex recherchiert dann das heutige Briefing, validiert es, committed es und pusht es nach GitHub. Die verbindlichen Regeln stehen in `AGENTS.md`.

Der optionale GitHub-Workflow `.github/workflows/gpt-daily-briefing.yml` kann manuell ein recherchiertes GPT-Briefing über die OpenAI Responses API mit Websuche erzeugen. Er benötigt aktive OpenAI-API-Abrechnung und ist nicht zeitgesteuert, solange diese nicht aktiviert ist.

Verbindliche Konvention:

```text
briefings/YYYY/MM/YYYY-MM-DD-gpt-ki-tech-briefing.md
```

Jede Datei beginnt mit `# GPT KI- & Tech-Briefing – DATUM`. Der automatische Commit folgt dem Muster:

```text
briefing(gpt): add daily briefing for YYYY-MM-DD
```

Beide Publishing-Wege:

1. verwenden `Europe/Berlin`,
2. überschreibt keine bestehende Tagesdatei,
3. prüft Überschrift, Metadaten, Pflichtabschnitte, Umfang, Meldungszahl und sichtbare Quellen,
4. committed nur eine erfolgreich validierte neue GPT-Datei.

Benötigtes Repository-Secret: `OPENAI_API_KEY`. Optional kann das Modell über `OPENAI_MODEL` angepasst werden.

Manueller lokaler Vorabtest ohne API-Aufruf:

```bash
node scripts/generate_gpt_briefing.mjs --dry-run
node --test
```

Der Workflow kann in GitHub unter **Actions → GPT Daily KI & Tech Briefing → Run workflow** auch manuell und optional für ein bestimmtes Datum gestartet werden.

## Neuestes Briefing
Die Dateien liegen unter [`briefings/`](briefings/) im Format `YYYY-MM-DD.html`.
Zum Ansehen im Browser: Datei öffnen (bzw. via GitHub Pages / htmlpreview).

_Inhalte sind Analyse, keine Anlage-, Rechts- oder Steuerberatung._
