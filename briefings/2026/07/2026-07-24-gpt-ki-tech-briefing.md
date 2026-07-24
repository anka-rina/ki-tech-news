# GPT KI- & Tech-Briefing – 24. Juli 2026

**Erstellt von:** GPT  
**Ausgabe:** Tägliches Morning Briefing  
**Stand:** 24. Juli 2026, 10:10 Uhr (Europe/Berlin)

## Kurzlage

Die vergangenen 48 Stunden zeigen, wie KI gleichzeitig persönlicher, operativer und infrastrukturell größer wird. OpenAI bringt mit **Health in ChatGPT** medizinische Unterlagen und Apple-Health-Daten in einen eigenen, freiwillig aktivierbaren Kontext. Das ist kein Diagnoseprodukt, aber ein großer Schritt von der allgemeinen Frage-Antwort-Oberfläche zum dauerhaften, sensiblen Datenbegleiter. Parallel zielt **OpenAI Presence** auf die andere Seite des Marktes: klar begrenzte Unternehmensagenten mit Berechtigungen, Prüfungen, genehmigten Aktionen und menschlicher Eskalation.

Google setzt im Modellmarkt auf Effizienz statt nur auf maximale Größe. Gemini 3.6 Flash und 3.5 Flash-Lite sollen agentische Abläufe günstiger und schneller machen; das spezialisierte Gemini 3.5 Flash Cyber wird wegen seines Dual-Use-Risikos zunächst nur begrenzt an Regierungen und vertrauenswürdige Partner gegeben. Alphabets Quartalsangaben liefern dazu den wirtschaftlichen Kontext: starkes Cloud-Wachstum, steigende Tokenmengen und eine weiterhin angespannte Versorgungslage bei Rechenkapazität.

Auf der Infrastrukturstufe versucht AMD, die komplette Alternative zu einem geschlossenen Beschleuniger-Stack zu liefern: neue Instinct-GPUs, Helios-Racks, EPYC-CPUs, ROCm.ai und eine Robotikplattform. Samsung trägt denselben Agententrend direkt auf mobile Geräte. Die neue Foldable-Generation soll kontextbezogene Aufgaben über mehrere Apps vorbereiten, während Nutzer kritische Aktionen bestätigen.

Der rote Faden lautet: Das Modell allein ist nicht mehr das Produkt. Wert entsteht durch erlaubte Daten, kontrollierte Aktionen, spezialisierte Werkzeuge, wirtschaftliche Inferenz und überprüfbare Übergaben. Für Apps und autonome Studios wird deshalb die Systemarchitektur wichtiger als der spektakulärste Einzelprompt.

## Top-Meldungen

### 1. OpenAI verbindet ChatGPT freiwillig mit Gesundheitsdaten und Patientenakten

**Bestätigter Fakt:** OpenAI hat am 23. Juli **Health in ChatGPT** für angemeldete Nutzer ab 18 Jahren in den USA angekündigt. Das Produkt wird zunächst im Web und unter iOS für Free-, Go-, Plus- und Pro-Konten ausgerollt. Nutzer können Apple Health und unterstützte medizinische Unterlagen verbinden. ChatGPT soll damit beispielsweise Veränderungen zwischen Laborwerten zusammenfassen, Arzttermine vorbereiten oder Aktivitäts- und Schlafdaten in einen verständlichen Kontext bringen. [OpenAI beschreibt Einführung, Zielgruppe und unterstützte Datenquellen in der offiziellen Ankündigung](https://openai.com/index/health-in-chatgpt/).

OpenAI erklärt, dass verbundene Gesundheitsdaten und die damit geführten Gespräche nicht zum Training der Basismodelle und nicht für Werbung verwendet werden. Die Nutzung ist freiwillig; Nutzer sollen steuern können, welche Informationen verbunden werden und wann ChatGPT darauf zugreifen darf. Das Unternehmen betont außerdem, dass der Dienst medizinische Versorgung unterstützen, aber nicht ersetzen soll.

**Einordnung:** Der entscheidende Schritt ist nicht eine neue Chatfunktion, sondern ein persistenter, hochsensibler Kontext. Ein allgemeines Modell wird nützlicher, wenn es nicht bei jeder Frage erneut mit verstreuten PDF-Dateien, Laborwerten und Wearable-Daten versorgt werden muss. Gleichzeitig steigt das Schadenspotenzial: falsche Zusammenfassungen, veraltete Daten, unklare Herkunft oder eine zu selbstsichere Interpretation können in einem Gesundheitskontext gravierender sein als in gewöhnlichen Produktivitätsaufgaben.

**Praktische Bedeutung:** Entwickler persönlicher Agenten brauchen für sensible Daten ein explizites Berechtigungsmodell: Welche Quelle ist verbunden, wie aktuell ist sie, für welche Aufgabe darf sie genutzt werden und wie kann der Nutzer sie widerrufen? Gute Produkte sollten relevante Daten sichtbar nennen, Unsicherheit erklären und bei medizinischen Risiken klar an Fachpersonal eskalieren. „Mehr Kontext“ ist nur dann ein Vorteil, wenn Herkunft, Aktualität und Zweck kontrollierbar bleiben.

### 2. AMD baut einen offenen Full-Stack-Gegenentwurf für agentische KI

**Bestätigter Fakt:** AMD hat auf Advancing AI 2026 eine breite Infrastruktur-Roadmap vorgestellt. Dazu gehören Instinct-MI400-GPUs, Helios-Racks, die sechste EPYC-Generation, die neue Entwicklungsplattform **ROCm.ai** und eine Kria-AI-Plattform für Robotik. AMD nennt OpenAI, Anthropic, Meta, Microsoft, Oracle und weitere Anbieter als Nutzer oder Partner des Helios-Ökosystems. OpenAI plane nach AMD-Angaben, Helios ab dem vierten Quartal 2026 in Betrieb zu nehmen; Anthropic und AMD skizzierten eine mehrjährige Zusammenarbeit für bis zu zwei Gigawatt MI455X-Kapazität. [AMDs offizielle Mitteilung bündelt Produkte, Partner und Roadmap](https://ir.amd.com/news-events/press-releases/detail/1294/aai-2026-amd-delivers-full-stack-compute-for-the-agentic-ai-era).

ROCm.ai soll Coding-Agenten wie Claude, Codex und Cursor ein natives Verständnis der AMD-Plattform geben und GPU-Software schneller optimieren. Für Physical AI stellte AMD Kria-System-on-Modules und eine integrierte Robotik-Entwicklungsplattform vor, die CPU, GPU, NPU und FPGA kombiniert. Zusätzlich kündigte das Unternehmen MI500-GPUs für 2027, MI600 für 2028 sowie weitere EPYC- und Helios-Generationen bis 2030 an.

**Einordnung:** AMD konkurriert nicht mehr nur über einen einzelnen Beschleuniger. Das Unternehmen versucht, Hardware, Rack-Architektur, Netzwerk, Entwicklungswerkzeuge und Partner zu einem vollständigen Stack zu verbinden. Genau dort liegt NVIDIAs stärkster Burggraben. ROCm.ai ist deshalb strategisch mindestens so wichtig wie eine neue GPU: Wenn Agenten Portierung, Profiling und Optimierung erleichtern, sinken die Softwarekosten eines Hardwarewechsels.

Leistungswerte wie „34-fach höherer Token-Durchsatz“ für MI455X gegenüber MI355X oder Preis-Leistungs-Vergleiche sind Herstellerangaben mit eigenen Testbedingungen. Sie sollten vor Beschaffungsentscheidungen durch workload-spezifische, unabhängige Messungen ergänzt werden.

**Praktische Bedeutung:** Für autonome Studios entsteht mehr Wahlfreiheit, aber nicht automatisch Austauschbarkeit. Teams sollten Modelle und Agenten so bauen, dass Inferenzanbieter, Beschleuniger und Laufzeit getrennt konfigurierbar bleiben. Entscheidend sind reale Kosten pro erfolgreicher Aufgabe, Stabilität langer Toolketten, Softwareunterstützung und die Zeit bis zur Fehlerbehebung — nicht nur Tokens pro Sekunde.

### 3. Gemini 3.6 Flash und Flash-Lite drücken die Kosten agentischer Abläufe

**Bestätigter Fakt:** Google hat Gemini 3.6 Flash und Gemini 3.5 Flash-Lite veröffentlicht. 3.6 Flash kostet laut Google 1,50 US-Dollar pro Million Eingabetokens und 7,50 US-Dollar pro Million Ausgabetokens. Das Unternehmen berichtet gegenüber 3.5 Flash von 17 Prozent weniger Ausgabetokens im Artificial Analysis Index und von weniger Reasoning-Schritten und Werkzeugaufrufen in mehrstufigen Aufgaben. Flash-Lite soll mit 350 Ausgabetokens pro Sekunde besonders hohen Durchsatz liefern und kostet laut Preisliste 0,30 beziehungsweise 2,50 US-Dollar pro Million Ein- und Ausgabetokens. [Google nennt Modelle, Preise, Verfügbarkeit und Benchmarks im Produktbeitrag](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/).

Beide Modelle sind über die Gemini API und Google AI Studio verfügbar; Google integriert sie außerdem in eigene Agenten- und Unternehmensprodukte. Computersteuerung ist als Werkzeug vorgesehen. Google positioniert 3.6 Flash als koordinierendes Arbeitsmodell und Flash-Lite als schnelle Ausführungsschicht für große Mengen, Dokumentverarbeitung und Unteragenten.

**Einordnung:** Für reale Agenten ist die Länge des Lösungswegs oft genauso wichtig wie der Preis pro Token. Ein günstiges Modell kann teuer werden, wenn es unnötig viele Schleifen, Toolaufrufe und Korrekturen erzeugt. Umgekehrt kann ein kleineres Modell wirtschaftlich attraktiv sein, wenn ein stärkeres Modell nur Planung und schwierige Entscheidungen übernimmt. Google macht diese Rollenverteilung nun zum Produktkonzept.

Die veröffentlichten Benchmarkwerte stammen überwiegend von Google oder von ausgewählten Messplattformen. Sie sind nützliche Signale, aber kein Ersatz für Tests mit den eigenen Daten, Werkzeugen und Abbruchkriterien.

**Praktische Bedeutung:** Studios sollten Aufgaben nicht pauschal an ein einziges Frontier-Modell senden. Ein sinnvoller Aufbau nutzt ein starkes Modell für Planung, Bewertung und ungewöhnliche Fälle; schnelle Modelle erledigen Extraktion, Klassifikation, Variantenbildung und andere gut prüfbare Schritte. Evals müssen dabei die gesamte Aufgabe messen: Ergebnisqualität, Anzahl der Schritte, Laufzeit, Kosten und nötige menschliche Korrektur.

### 4. Google begrenzt sein Cybermodell bewusst auf vertrauenswürdige Partner

**Bestätigter Fakt:** Google DeepMind hat **Gemini 3.5 Flash Cyber** vorgestellt. Das auf 3.5 Flash aufbauende Modell ist auf das Finden, Prüfen und Beheben von Softwareschwachstellen spezialisiert. CodeMender setzt mehrere Instanzen als Unteragenten ein und führt deren Ergebnisse zu einem Bericht zusammen. Wegen des Dual-Use-Risikos soll das Modell zunächst in einem begrenzten Pilotprogramm ausschließlich Regierungen und vertrauenswürdigen Partnern über CodeMender zugänglich sein. [Google DeepMind erläutert Zweck, Multi-Agenten-Ansatz und Zugangsbeschränkung](https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/).

**Einordnung:** Leistungsfähige Cybermodelle können Verteidiger beschleunigen, aber dieselben Fähigkeiten können auch Angreifern helfen, große Codebasen nach verwertbaren Schwachstellen zu durchsuchen. Google trennt deshalb zwischen allgemein verfügbaren CodeMender-Funktionen mit regulären Gemini-Modellen und dem spezialisierten Cybermodell mit begrenztem Zugang.

Der Multi-Agenten-Ansatz zeigt zugleich einen wichtigen Architekturtrend: Statt eine einzige sehr teure Modellabfrage zu verwenden, durchsuchen viele günstigere Spezialinstanzen unterschiedliche Codepfade. Eine weitere Stufe konsolidiert und bewertet die Befunde. Das passt zu Sicherheitsarbeit, weil Kandidaten anschließend durch Tests, Reproduktion und Patch-Validierung überprüft werden können.

**Praktische Bedeutung:** Automatisierte Sicherheitsagenten dürfen keine reine Textausgabe liefern. Jeder Befund braucht betroffene Version, reproduzierbaren Testfall, Schweregrad, Patch und Regressionstest. Außerdem sollten Scans isoliert laufen und keine Produktionszugänge besitzen. Autonomie ist hier dann wertvoll, wenn sie mehr Suchraum abdeckt, während deterministische Prüfungen über Freigabe und Veröffentlichung entscheiden.

### 5. Alphabets Zahlen zeigen die wirtschaftliche Größenordnung des KI-Wettlaufs

**Bestätigter Fakt:** Alphabet meldete für das zweite Quartal 2026 ein Umsatzwachstum von 24 Prozent gegenüber dem Vorjahr. Google Cloud wuchs nach Unternehmensangaben um 82 Prozent; der Cloud-Auftragsbestand erreichte 514 Milliarden US-Dollar. Die eigenen Modell-APIs verarbeiten laut Google rund 22 Milliarden Tokens pro Minute, nach 16 Milliarden im Vorquartal. Die Gemini-App komme auf 950 Millionen monatlich aktive Nutzer, und fast 90 Prozent der Fortune 100 nutzten Gemini Enterprise. [Sundar Pichais veröffentlichte Quartalsrede enthält die Kennzahlen und den strategischen Ausblick](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/).

Pichai erklärte zugleich, Google sei trotz eigener Chips und Infrastruktur weiterhin angebotsbeschränkt. Das Unternehmen habe seinen bislang ambitioniertesten Pretraining-Lauf für Gemini 4 begonnen. Für Search nennt Google mehr als eine Milliarde monatlich aktive Nutzer im AI Mode; diese Funktionen würden insgesamt zusätzliche Suchanfragen erzeugen. Alle genannten Nutzungs- und Wachstumswerte sind Unternehmensangaben.

**Einordnung:** Die Zahlen machen deutlich, dass KI nicht nur ein Forschungs- oder Produktwettbewerb ist. Sie verändert Cloud-Nachfrage, Werbung, Suche und Kapitalbedarf gleichzeitig. Googles besondere Position besteht darin, Chips, Rechenzentren, Modelle, Entwicklerplattform, Search, YouTube und Workspace aus einer Hand verbinden zu können. Das schafft Verteilung und Nutzungsdaten, erhöht aber auch den Investitionsdruck.

**Praktische Bedeutung:** Für kleinere Anbieter ist Reichweite kein realistischer direkter Wettbewerbsvorteil gegen Plattformkonzerne. Differenzierung entsteht eher durch exklusive Arbeitsabläufe, vertrauenswürdige Daten, bessere Evals, Branchenwissen und einen messbaren Nutzen. Produkte sollten außerdem auf Kostenänderungen vorbereitet sein: Modellrouting, Caching, kompakte Kontexte und harte Budgets gehören zur Architektur.

### 6. OpenAI Presence definiert die Kontrollschicht für Unternehmensagenten

**Bestätigter Fakt:** OpenAI hat am 22. Juli **Presence** als betreutes Enterprise-Produkt für Sprach- und Chat-Agenten vorgestellt. Unternehmen definieren einen eng begrenzten Job, erlaubte Wissensquellen, Systemzugriffe, Richtlinien, genehmigungspflichtige Aktionen und menschliche Eskalationspunkte. Presence kombiniert dafür Standardprozesse, Guardrails, Simulationen, Evals und einen Codex-gestützten Verbesserungszyklus. Das Produkt ist in begrenzter allgemeiner Verfügbarkeit für geeignete Unternehmenskunden und nicht als Self-Service-Angebot erhältlich. [OpenAI beschreibt Funktionsumfang und Verfügbarkeit im Originalbeitrag](https://openai.com/index/introducing-openai-presence/).

OpenAI gibt an, dass Presence im eigenen englischen Telefonsupport 75 Prozent der eingehenden Anliegen ohne menschliche Hilfe löse. Ein Codex-basierter Verbesserungsprozess habe die Übergaben an Menschen innerhalb von zehn Tagen um 15 Prozentpunkte reduziert. Diese Werte sind interne Herstellerkennzahlen und keine unabhängige Vergleichsstudie.

**Einordnung:** Presence macht sichtbar, worum sich der Enterprise-Wettbewerb verschiebt: nicht nur um Modellintelligenz, sondern um kontrollierte Produktion. Richtlinien, Zugriffskontrolle, Simulation, Qualitätsmessung und Eskalation werden als zusammenhängendes Produkt verkauft. OpenAI tritt damit auch gegen Contact-Center-, CRM-, ITSM- und Integrationsanbieter an.

**Praktische Bedeutung:** Ein produktionsreifer Agent braucht mehr als einen Systemprompt. Die Mindestarchitektur umfasst eine klare Jobdefinition, kleinste notwendige Rechte, nachvollziehbare Toolaufrufe, Testfälle, Stop-Bedingungen und eine menschliche Rückfallebene. Änderungen sollten nicht selbsttätig in Produktion landen: Produktionsfehler erzeugen neue Eval-Fälle; ein Agent kann Verbesserungen vorschlagen, aber Tests und Freigaben kontrollieren den Rollout.

### 7. Samsung bringt agentische KI als geräteübergreifende Bedienlogik auf Foldables

**Bestätigter Fakt:** Samsung hat am 22. Juli Galaxy Z Fold8 Ultra, Fold8 und Flip8 vorgestellt. Das Fold8 Ultra besitzt laut Samsung ein acht Zoll großes Hauptdisplay, ist aufgeklappt 4,1 Millimeter dünn und wiegt 215 Gramm. Zu den neuen KI-Funktionen gehören **Gemini Notebook**, das Besprechungsunterlagen und Aufnahmen in Zusammenfassungen, Videos, Präsentationen, Podcasts oder Quizformate umwandeln soll, sowie **Now Nudge**, das passende Mehrfenster-Aktionen vorschlägt. [Samsungs Produktvorstellung beschreibt Geräte und agentische Funktionen](https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8).

Samsung nennt als Beispiel einen Agenten, der aus einem geteilten Foto des Eiffelturms passende Hotels sucht, während der Nutzer andere Apps verwendet. Aktionen mit höherer Tragweite sollen anschließend zur Bestätigung vorgelegt werden. Auf dem Flip8 zeigt Now Brief Termine, Wetter, Benachrichtigungen und weitere personalisierte Karten auf dem Außendisplay.

**Einordnung:** Mobile Agenten werden nicht dadurch wertvoll, dass sie längere Chatantworten erzeugen. Sie müssen Kontext zwischen Apps verstehen, den passenden Moment erkennen und eine Aufgabe vorbereiten, ohne den Nutzer die Kontrolle verlieren zu lassen. Samsungs Ansatz verbindet dafür Formfaktor, Betriebssystemoberfläche, Google-Modelle und eigene Personalisierung.

**Praktische Bedeutung:** Für App-Entwickler wird die einzelne Oberfläche weniger isoliert. Funktionen sollten als klar begrenzte, aufrufbare Aktionen mit aussagekräftiger Vorschau angeboten werden. Kritische Schritte wie Buchung, Kauf, Versand oder Veröffentlichung brauchen eine verständliche Bestätigung. Wer diese Action-Schicht sauber gestaltet, kann in künftige Geräteagenten integriert werden, statt nur eine weitere abgeschlossene App zu bleiben.

## Markt- und Konkurrenzbild

Der Markt ordnet sich derzeit in vier Ebenen:

1. **Persönlicher Kontext:** OpenAI Health, Samsungs Now Brief und vergleichbare Funktionen konkurrieren darum, dauerhaft relevante Nutzerdaten zu verstehen. Vertrauen, Widerruf und Datenqualität werden hier zum Burggraben.
2. **Effiziente Modelle:** Google setzt mit Flash auf Kosten, Geschwindigkeit und Rollenverteilung zwischen Planer und Unteragenten. In dieser Ebene zählen Kosten pro gelöster Aufgabe statt nur Benchmarkpunkte.
3. **Agentenbetrieb:** OpenAI Presence und Googles Enterprise-Plattformen bündeln Rechte, Tools, Evals, Monitoring und Eskalationen. Hier treffen Modellanbieter auf klassische Unternehmenssoftware.
4. **Compute und Physical AI:** NVIDIA besitzt ein starkes geschlossenes Ökosystem; AMD versucht mit Helios, Instinct, EPYC, ROCm.ai und Kria einen offenen Full-Stack-Gegenpol aufzubauen.

Google hat durch Search, Android, Cloud und eigene Modelle einen außergewöhnlich großen Vertriebskanal. OpenAI nutzt ChatGPT als direkten Nutzereinstieg und Presence als kontrollierte Unternehmensschicht. Samsung besitzt die Geräteoberfläche, ist beim Modell aber auf Partnerschaften angewiesen. AMD kann von steigender Nachfrage und dem Wunsch nach Alternativen profitieren, muss jedoch beweisen, dass Software, Verfügbarkeit und Betriebskosten im Alltag konkurrenzfähig sind.

Die Gewinner werden voraussichtlich nicht nur das „klügste“ Modell besitzen. Entscheidend ist, wer den kompletten Kreislauf kontrolliert: Kontext erfassen, Aufgabe planen, Aktionen sicher ausführen, Ergebnis messen und aus Fehlern lernen. Gleichzeitig wächst Raum für kleinere Anbieter, die eine vertikale Aufgabe besser definieren und prüfen können als eine allgemeine Plattform.

## Bedeutung für Agenten, Apps und autonome Studios

Für Agentenprodukte sollte **Berechtigung vor Autonomie** kommen. Ein Agent darf nur die Daten und Werkzeuge erhalten, die er für seinen konkreten Job benötigt. Lesen, vorschlagen, simulieren, zur Genehmigung vorlegen und selbst ausführen sind unterschiedliche Rechte und brauchen unterschiedliche Tests.

Apps sollten ihre Funktionen als überprüfbare Aktionen anbieten. Ein Geräte- oder Unternehmensagent kann nur zuverlässig integrieren, wenn Parameter, erwartete Wirkung, Kosten, Nebenwirkungen und Rückgabewerte klar sind. Eine Vorschau vor externen Aktionen reduziert Fehler und stärkt Vertrauen.

Für autonome Studios ergibt sich eine wirtschaftliche Modellhierarchie:

- Ein starkes Modell plant, priorisiert und bewertet ungewöhnliche Fälle.
- Günstige Modelle erledigen große Mengen klar prüfbarer Teilaufgaben.
- Deterministische Werkzeuge validieren Format, Links, Builds und Grenzwerte.
- Menschen genehmigen riskante externe Aktionen und unklare Aussagen.
- Fehler aus der Produktion werden zu dauerhaften Eval-Fällen.

Bei sensiblen Daten muss zusätzlich Provenienz gespeichert werden: Quelle, Zeitpunkt, Einwilligung, verwendetes Modell und menschliche Änderungen. Das gilt nicht nur für Gesundheit. Auch Kundenservice, Finanzdaten, Recherchematerial und unveröffentlichte kreative Assets brauchen nachvollziehbare Grenzen.

Der AMD-Google-Wettbewerb zeigt außerdem, warum Infrastrukturaustauschbarkeit wichtig ist. Studios sollten Modelle nicht tief in jedes Produktmodul einbauen, sondern über eine klare Laufzeitschicht aufrufen. Dann lassen sich Modelle nach Qualität, Latenz, Preis, Datenschutz und Verfügbarkeit routen.

## Begriffskasten

**Persistenter Kontext:** Informationen, die über eine einzelne Anfrage hinaus verfügbar bleiben, etwa verbundene Gesundheitsdaten, Profile oder Projektwissen. Er erhöht den Nutzen, aber auch Anforderungen an Zustimmung und Aktualität.

**Dual Use:** Eine Fähigkeit kann sowohl defensiv oder nützlich als auch schädlich eingesetzt werden. Cybermodelle können Sicherheitslücken schließen oder Angriffe beschleunigen.

**Modellrouting:** Auswahl des passenden Modells je Aufgabe. Ein Router kann Schwierigkeit, Kosten, Datenschutz, Geschwindigkeit und benötigte Werkzeuge berücksichtigen.

**Token-Effizienz:** Verhältnis zwischen verbrauchten Tokens und erreichtem Ergebnis. Weniger Tokens sind nur dann besser, wenn Qualität und Zuverlässigkeit erhalten bleiben.

**Rack-Scale-System:** Als Gesamteinheit geplante Rechenzentrumsarchitektur aus Beschleunigern, CPUs, Netzwerk, Speicher, Kühlung und Software statt einer isolierten Chipkarte.

**NPU:** Neural Processing Unit; spezialisierter Rechenblock für KI-Aufgaben, häufig auf Endgeräten oder in eingebetteten Systemen.

**Eval:** Wiederholbarer Test, der prüft, ob ein Modell oder Agent eine konkrete Aufgabe korrekt, sicher und wirtschaftlich erledigt.

**Eskalation:** Kontrollierte Übergabe eines Falls an einen Menschen oder ein stärkeres System, wenn Risiko, Unsicherheit oder fehlende Berechtigung einen Grenzwert überschreiten.

## Was als Nächstes wichtig wird

1. **Health-Rollout:** Entscheidend sind reale Fehlerklassen, Datenkorrekturen, Widerruf, regionale Verfügbarkeit und die verständliche Abgrenzung zur medizinischen Versorgung.
2. **Unabhängige AMD-Benchmarks:** Helios, MI455X und ROCm.ai müssen in realen Agenten-, Training- und Inferenz-Workloads gegen etablierte Stacks bestehen.
3. **Kosten pro Agentenaufgabe:** Googles Effizienzversprechen sollte mit vollständigen Workflows gemessen werden — einschließlich Toolaufrufen, Wiederholungen und menschlicher Korrektur.
4. **Cyber-Zugangskontrolle:** Bei spezialisierten Sicherheitsmodellen wird wichtig, wie Partner geprüft, Nutzungen protokolliert und Missbrauchssignale behandelt werden.
5. **Presence in der Praxis:** Zu beobachten sind Integrationsdauer, Preismodell, messbare Eskalationsqualität und die Übertragbarkeit auf Branchen mit hohen Risiken.
6. **Mobile Actions:** Geräteagenten brauchen standardisierte, sichere App-Aktionen. Die Qualität der Bestätigungs- und Rückgabelogik wird über Vertrauen entscheiden.
7. **Compute-Angebot:** Alphabets Hinweis auf Angebotsknappheit zeigt, dass Effizienz und alternative Hardware auch bei weiter steigenden Investitionen zentral bleiben.

**Einschätzung:** Die nächste Phase der KI wird durch kontrollierte, wirtschaftliche Handlungssysteme geprägt. Persönlicher Kontext macht Agenten relevanter; spezialisierte Modelle und alternative Hardware machen sie günstiger; Evals, Berechtigungen und Eskalationen machen sie überhaupt erst produktionsfähig.

## Quellenverzeichnis

- [OpenAI: Launching Health in ChatGPT, 23. Juli 2026](https://openai.com/index/health-in-chatgpt/)
- [AMD: Full-Stack Compute for the Agentic AI Era, 23. Juli 2026](https://ir.amd.com/news-events/press-releases/detail/1294/aai-2026-amd-delivers-full-stack-compute-for-the-agentic-ai-era)
- [Google: Gemini 3.6 Flash, 3.5 Flash-Lite und Flash Cyber, 21. Juli 2026](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
- [Google DeepMind: Introducing Gemini 3.5 Flash Cyber, 21. Juli 2026](https://deepmind.google/blog/introducing-gemini-3-5-flash-cyber/)
- [Google/Alphabet: Q2 2026 earnings call remarks, 22. Juli 2026](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/)
- [OpenAI: Introducing OpenAI Presence, 22. Juli 2026](https://openai.com/index/introducing-openai-presence/)
- [Samsung: Galaxy Z Fold8 Ultra, Fold8 und Flip8, 22. Juli 2026](https://news.samsung.com/global/galaxy-unpacked-july-2026-a-first-look-at-galaxy-z-fold8-ultra-galaxy-z-fold8-and-galaxy-z-flip8)
- [OpenAI: Advancing the next era of national science, 22. Juli 2026](https://openai.com/index/advancing-the-next-era-of-national-science/)

_Hinweis: Dieses Briefing ist eine journalistisch-analytische Einordnung und keine medizinische, rechtliche oder finanzielle Beratung._
