# Änderungsprotokoll

Alle nennenswerten Änderungen an easyRADAR werden ab hier festgehalten.

## 0.51.0 – 2026-08-04
- Radar-Modus: visuelle Hierarchie überarbeitet, damit die Flugzeuge im Blick stehen statt mit der Empfangskontur zu konkurrieren
- Empfangskontur jetzt als Fläche mit dünnem Rand in eigenem Cyan-Grün statt dominanter Linie
- Sweep deutlich zurückgenommen (weniger Deckkraft), damit er die Ziele nicht überstrahlt
- Reichweitenringe abwechselnd kräftiger/schwächer (Primär-/Sekundärringe), entsättigtes Grün, Beschriftung wandert über Nord/Ost/Süd/West statt immer oben zu kleben
- Landschaft ca. 10 % dunkler
- Flugzeuge haben jetzt einen dezenten Halo, wirken lebendiger im dunklen Zentrum
- Stationssymbol im Zentrum um ein kleines Mast-Glyph ergänzt

## 0.50.1 – 2026-08-04
- Radar-Modus: Ringe, Empfangskontur, Sweep und Ziele waren unsichtbar (von der Kartenebene verdeckt) – behoben durch explizite Ebenen-Reihenfolge
- Radar-Modus: falsche Zoomstufe behoben, die die Karte nicht zur eingestellten Reichweite passen ließ
- Radar-Modus: Renderer-Hänger durch teuren Leucht-Effekt behoben (günstigere Alternative ohne Qualitätsverlust)
- Radar-Modus: Empfangskontur leuchtet jetzt stärker und pulsiert im ~20-Sekunden-Rhythmus, Reichweitenringe gepunktet statt durchgezogen, Sweep hellt die Landschaft sichtbarer auf, kleine Impulsringe am Stationssymbol
- Radar-Modus: Landschaft blendet zum Rand hin in Nebel aus statt hart abzuschneiden

## 0.50.0 – 2026-08-04
- Radar-Modus: echte Landschaft statt reinem Grünbildschirm – dieselben Kartendaten wie im Kartenmodus, aber im Radar-Stil eingefärbt (Straßen/Gebäude/Ortsnamen ausgeblendet, Wasser/Wälder/Landnutzung monochrom grün)
- Jeder Nutzer sieht automatisch seine eigene Umgebung – keine Standortkonfiguration nötig, da dieselben Live-Kartendaten wie im Kartenmodus verwendet werden
- Karte blendet zum Rand hin kreisförmig aus, statt hart abzuschneiden
- Sweep-Kegel hellt die durchscheinende Landschaft beim Überstreichen sichtbar auf
- Ringe, Empfangskontur und Ziele nutzen jetzt dieselbe Kartenprojektion wie die echte Landschaft darunter – exakte Deckungsgleichheit statt Näherung
- Radar-Modus: Ziele bewegen sich jetzt gleitend zwischen zwei Aktualisierungen statt zu springen
- Radar-Modus: Ziele leuchten kurz auf, wenn die Sweep-Nadel sie überstreicht – bleiben aber weiterhin dauerhaft sichtbar
- Radar-Modus: echte, unregelmäßige Empfangskontur (aus den ohnehin gesammelten Messdaten) jetzt sichtbar und leicht pulsierend
- Radar-Modus: Reichweitenringe deutlich lesbarer beschriftet, Kompassrose um NO/SO/SW/NW ergänzt, pulsierendes Stationssymbol im Zentrum
- Radar-Modus: Hover auf ein Ziel in der Liste hebt den passenden Punkt im Radar hervor und umgekehrt
- Radar-Modus: Statusleiste zeigt "Kontakte" statt "Flugzeuge", solange der Radar-Modus aktiv ist

## 0.48.0 – 2026-08-04
- Radar-Modus: Punkte jetzt farbcodiert nach Flughöhe (gleiche Farben wie auf der Karte) statt einheitlich grün
- Radar-Modus: Zielform je Flugzeugkategorie (Kreis/Raute/Quadrat/Dreieck/Stern) statt einheitlicher Punkte
- Landkarte im Radar-Modus jetzt mit leichter Flächenfüllung statt reiner Umrisslinie
- Neuer Karte/Radar-Umschalter unten links statt einzelnem Radar-Knopf
- Legende zeigt im Radar-Modus zusätzlich zur Höhenfarbe auch die Zieltyp-Symbole

## 0.47.1 – 2026-08-04
- Radar-Modus überarbeitet: Flugzeuge bleiben jetzt dauerhaft sichtbar statt nur beim Sweep-Durchlauf aufzuleuchten, deutlich größere Punkte, Rufzeichen wird über jedem Punkt angezeigt
- Echte Landesgrenzen/Küstenlinien im Hintergrund – korrekt nach Peilung/Entfernung von deiner Station projiziert, keine Ortsnamen oder sonstige Beschriftung
- Sweep-Nadel zeichnet jetzt einen nachziehenden Lichtkegel statt eines reinen Nachleucht-Effekts

## 0.47.0 – 2026-08-04
- Neu: 🎯 Radar-Modus – eigener kreisförmiger Radarschirm anstelle der Karte, umschaltbar über den neuen Knopf unten links
- Flugzeuge erscheinen als schlichte grüne Punkte (Peilung/Entfernung von deiner Empfangsstation), keine Ortsnamen oder Flughäfen
- Echte Sweep-Nadel mit Nachleuchten wie bei einem klassischen Röhrenradar – Punkte leuchten beim Überstreichen auf und verblassen danach wieder
- Äußerster Ring entspricht deinem bisherigen Distanz-Rekord (+10% Puffer) statt einem festen Wert
- Klick auf einen Punkt öffnet wie gewohnt die Detailansicht des Flugzeugs

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
