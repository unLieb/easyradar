# Änderungsprotokoll

Alle nennenswerten Änderungen an easyRADAR werden ab hier festgehalten.

## 0.46.2 – 2026-08-04
- Schlagschatten unter den fixierten Abschnittsüberschriften in den Einstellungen durch eine dezente Trennlinie ersetzt – wirkte bei kurzer Scrolldistanz wie ein loser Balken statt wie eine Tiefenwirkung

## 0.46.1 – 2026-08-04
- Schlagschatten unter den fixierten Abschnittsüberschriften in den Einstellungen, damit beim Scrollen klar erkennbar ist, dass sie über dem Inhalt liegen statt mit ihm zu verschmelzen

## 0.46.0 – 2026-08-04
- Englische Sprache hinzugefügt – kompletter Umschalter zwischen Deutsch und Englisch in den Einstellungen, inklusive Radar-Level, Meilensteinen, Statistiken und Änderungsprotokoll
- Sprachauswahl merkt sich die Wahl dauerhaft; ohne gespeicherte Wahl wird die Browsersprache erkannt (deutsche Browser → Deutsch, alle anderen → Englisch)
- Übersetzungsdateien liegen als separate JSON-Dateien vor, damit künftig auch weitere Sprachen von der Community beigesteuert werden können
- Änderungsprotokoll wird ab dieser Version zweisprachig geführt – ältere Einträge bleiben auf Deutsch

## 0.45.0 – 2026-08-02
- Radar-Level-Profil und einzelne Meilenstein-Kategorien blenden jetzt die restlichen Statistiken komplett aus, statt darunter zu erscheinen
- Schließen des Statistik-Panels (Klick auf die Karte, erneuter Klick auf den Statistik-Button) setzt die Ansicht wieder auf die normale Übersicht zurück

## 0.44.1 – 2026-08-02
- Änderungsprotokoll aus dem Statistik-Panel in die Seitenleiste verschoben – ersetzt dort die Flugzeugliste komplett, statt unterhalb der Statistiken zu erscheinen

## 0.44.0 – 2026-08-02
- Änderungsprotokoll wird jetzt direkt in der App angezeigt (Klick auf die Versionsnummer), statt nur die Rohdatei in einem neuen Tab zu öffnen

## 0.43.1 – 2026-08-02
- Flugzeuganzahl aus der Seitenleisten-Kopfzeile entfernt (steht bereits in der Statusleiste) – Kopfzeile zeigt jetzt nur noch Logo, Name, Version und Radar-Level

## 0.43.0 – 2026-08-02
- Profilseite überarbeitet: kräftigerer Fortschrittsbalken, Motivations-Hinweis kurz vor dem nächsten Level
- XP-Vorschläge zeigen jetzt den echten Fortschritt, wo messbar (z. B. "180 / 200 km", "23 / 25 Flugzeugtypen")

## 0.41.0 – 0.42.0 – 2026-08-02
- Neu: 🛰️ Radar-Level neben Logo und Version in der Seitenleiste – ein einzelner Fortschrittswert, der ausschließlich aus freigeschalteten Meilensteinen entsteht
- Klick auf das Level öffnet eine Profilseite: Fortschritt zum nächsten Level, Anzahl freigeschalteter Meilensteine, und Vorschläge für die nächsten erreichbaren Meilensteine
- Jeder Meilenstein zeigt jetzt seinen XP-Wert und eine Raritätsstufe (Häufig bis Legendär)
- Neue Meilenstein-Kategorien: Flugzeugtypen (10/25/50/100 verschiedene Typen) und Gesamtflugzeuge (100–10.000 insgesamt empfangene Flugzeuge)

## 0.40.0 – 2026-08-02
- Seltene Flugzeuge (A380, Concorde, Militärtransporter, NASA-Flugzeuge u. a.) werden in der Flugzeugliste jetzt mit einem kleinen ⭐ markiert, statt erst im Nachhinein über den Meilenstein aufzufallen

## 0.39.0 – 2026-08-02
- Herkunftsland wird in der Flugzeug-Detailansicht jetzt zusätzlich zur Flagge ausgeschrieben
- "Betreiber" erscheint nur noch, wenn er sich vom Airline-Namen unterscheidet

## 0.38.1 – 2026-08-02
- Schreibweise auf "easyRADAR" (ohne Leerzeichen) vereinheitlicht

## 0.38.0 – 2026-08-02
- App umbenannt: "unLieb RADAR" hieß eigentlich nach dem Rufzeichen des Betreibers, das war für eine allgemeine Veröffentlichung nicht passend
- Eigener Stations-/Rufzeichen-Name erscheint jetzt stattdessen in der Statusleiste (🏷️), sofern in der Serverkonfiguration hinterlegt

## 0.37.0 – 2026-08-02
- Änderungsprotokoll hinzugefügt (diese Datei) – ab jetzt wird hier dokumentiert, was sich ändert
- Versionsnummer in der Seitenleiste verlinkt jetzt auf dieses Änderungsprotokoll
