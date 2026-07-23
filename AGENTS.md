# GPT KI- & Tech-Briefing

## Kurzbefehl `go`

Wenn der Benutzer in diesem Repository nur `go` schreibt, ist das die ausdrückliche Freigabe für den vollständigen heutigen Publishing-Workflow:

1. Bestimme das aktuelle Datum und die Uhrzeit in `Europe/Berlin`.
2. Synchronisiere zuerst den lokalen `main`-Branch sicher mit `origin/main`. Überschreibe keine fremden oder uncommitteten Änderungen.
3. Prüfe, ob `briefings/YYYY/MM/YYYY-MM-DD-gpt-ki-tech-briefing.md` bereits existiert.
   - Falls die Datei bereits veröffentlicht ist, validiere sie und melde den vorhandenen GitHub-Link. Erzeuge keine zweite Ausgabe und überschreibe sie nicht.
4. Recherchiere aktuelle, materielle KI- und Tech-Nachrichten aus den letzten 24 bis 48 Stunden mit aktueller Websuche.
5. Nutze bevorzugt Primärquellen: offizielle Unternehmensmeldungen, Produktdokumentation, Forschungsarbeiten, Behörden und Originalstatements. Medienberichte sind ergänzende Quellen.
6. Trenne bestätigte Fakten, Einordnung und Prognose. Jede zeitabhängige Tatsachenbehauptung benötigt einen sichtbaren, klickbaren Quellenlink.
7. Erstelle das Briefing direkt als:
   `briefings/YYYY/MM/YYYY-MM-DD-gpt-ki-tech-briefing.md`
8. Die Datei beginnt verbindlich mit:

   ```markdown
   # GPT KI- & Tech-Briefing – DATUM

   **Erstellt von:** GPT
   **Ausgabe:** Tägliches Morning Briefing
   **Stand:** DATUM, UHRZEIT (Europe/Berlin)
   ```

9. Verwende mindestens diese Abschnitte:
   - `## Kurzlage`
   - `## Top-Meldungen`
   - `## Markt- und Konkurrenzbild`
   - `## Bedeutung für Agenten, Apps und autonome Studios`
   - `## Begriffskasten`
   - `## Was als Nächstes wichtig wird`
   - `## Quellenverzeichnis`
10. Ziel sind 6 bis 10 relevante Meldungen und ein substanzielles, verständliches Briefing. Qualität geht vor Menge.
11. Führe anschließend aus:
    `node scripts/validate_gpt_briefing.mjs <Dateipfad>`
12. Wenn die Validierung fehlschlägt, verbessere die Datei und validiere erneut. Veröffentliche keine unvalidierte Ausgabe.
13. Prüfe den Git-Diff und stage ausschließlich die neue GPT-Briefing-Datei.
14. Committe mit:
    `briefing(gpt): add daily briefing for YYYY-MM-DD`
15. Pushe den Commit nach `origin/main` und prüfe, ob er im Remote-Repository angekommen ist.
16. Antworte abschließend knapp mit:
    - Ergebnis
    - Zahl der Meldungen und Quellen
    - Commit-ID
    - direktem GitHub-Link zur veröffentlichten Markdown-Datei

## Grenzen

- `go` autorisiert Recherche, Erstellung, Validierung, Commit und Push genau für das heutige GPT-Briefing.
- `go` autorisiert keine Änderungen an Claude-Ausgaben, bestehenden Briefings oder anderen Projektdateien.
- Verwende für diesen Chat-Workflow keinen `OPENAI_API_KEY`; die Recherche und Texterstellung erfolgen durch den aktiven Codex-Task.
- Erfinde keine Meldungen, Quellen, Daten oder Zitate.
- Wenn aktuelle Webrecherche nicht verfügbar ist oder der Push scheitert, veröffentliche nicht blind. Melde den konkreten Blocker.
