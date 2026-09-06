# Änderungsprotokoll

Alle nennenswerten Änderungen an easyRADAR werden ab hier festgehalten.

## 0.72.1 – 2026-09-07
- Wikipedia-Link für Boeing 737 MAX 7/8/9/10 springt jetzt direkt zum passenden Abschnitt im Artikel "Boeing 737" (z. B. `#Boeing_737_Max_8`) statt nur zum übergeordneten Kapitel "Die „Max"-Versionen" - die deutsche Wikipedia fasst anders als die englische alle MAX-Varianten in einem gemeinsamen Artikel mit benannten Unterabschnitten zusammen, ohne dass die normale Suche dorthin direkt springen kann
- Dabei nebenbei einen Qualitätsverlust auf der englischen Wikipedia behoben: Dort hat jede MAX-Variante einen eigenen Artikel (z. B. "Boeing 737 MAX 8"), die bisherige Nummer-Kürzung führte dort unnötig auf den allgemeineren Familienartikel statt auf die genaue Seite

## 0.72.0 – 2026-09-07
- Neuer Fallback für Luftfahrzeuge mit ICAO-Typ (z. B. `EC45`) aber (noch) ganz ohne Klartext-Beschreibung, live beobachtet bei Christoph 82 (Rettungshubschrauber): "Eurocopter EC "+Modellnummer wird für EC120/EC130/EC135/EC145 automatisch erzeugt und sowohl in der Anzeige als auch für den Wikipedia-Link genutzt - landet dadurch ohne Zwischenstopp direkt auf dem Artikel. EC25 bewusst ausgenommen: der Code steht für zwei unterschiedliche reale Modelle (EC225 zivil/EC725 militärisch), eine Rückrichtung wäre geraten statt belegt - dort greift weiterhin der allgemeine ICAO-Code+"Flugzeug"-Fallback
- Nebenbei behoben: Die Großbuchstaben-Normalisierung konnte kurze 2-Buchstaben-Codes wie "EC" (wenn durch ein Leerzeichen von der Modellnummer getrennt) versehentlich klein schreiben ("Ec")

## 0.71.2 – 2026-09-07
- Wikipedia-Suchbegriff kürzt jetzt die angehängte Untervarianten-Nummer bei "Boeing 737 MAX 7/8/10" auf "Boeing 737 MAX" - dafür existiert bereits ein Direkt-Redirect (auf den die MAX 9 sowieso verweist), wo die einzelnen Nummern-Varianten sonst nur auf der Suchergebnisseite hängen blieben. Bewusst NICHT als allgemeine Regel für jede Endziffer umgesetzt: A350-900/A320neo etc. haben bereits eigene, noch präzisere Redirects und würden durch das Kürzen nur schlechter treffen
- Nebenbei behoben: Großbuchstaben-Normalisierung für Herstellernamen (z. B. "BOEING" -> "Boeing") konnte bei Bindestrich-Codes wie "EC-135" den Buchstabenteil isoliert erwischen und zu "Ec135" verstümmeln, statt "EC135" zu erhalten

## 0.71.1 – 2026-09-07
- Wikipedia-Suchbegriff ersetzt jetzt "AIRBUS HELICOPTERS" durch die ältere Bezeichnung "Eurocopter", gegen die viele Weiterleitungen tatsächlich geschrieben sind - "Eurocopter EC135" landet dadurch ohne Zwischenstopp direkt auf dem Artikel, wo "AIRBUS HELICOPTERS EC135" nur auf der Suchergebnisseite hängen blieb. Geprüft gegen alle 9 betroffenen Typen in der Datenbank: durchweg gleich gut oder besser, kein einziger Fall verschlechtert sich

## 0.71.0 – 2026-09-05
- Browser-Benachrichtigungen gibt es jetzt auch für neu gesichtete Einsatzfahrzeuge (Luftrettung/Polizei), analog zu Militärflugzeugen und Achievements
- Klick auf eine Militär-/Einsatz-Benachrichtigung zentriert die Karte jetzt direkt auf das auslösende Flugzeug und öffnet dessen Detailansicht - wechselt dafür zum bereits offenen easyRADAR-Tab, oder öffnet einen neuen, falls keiner mehr offen ist. Dafür registriert die App erstmals einen Service Worker (sw.js), rein für dessen notificationclick-Handling - keine Offline-Funktionen oder Caching

## 0.70.3 – 2026-09-05
- Wikipedia-Suchbegriff für Flugzeugtyp/-modell schneidet jetzt Schrägstrich-Varianten in der Modellbeschreibung ab, bevor gesucht wird - die Typdatenbank listet für ca. 80 Typen mehrere Varianten in einem Feld (z. B. wird aus "AIRBUS HELICOPTERS EC-135/635" so "AIRBUS HELICOPTERS EC135" statt der bisher unbereinigten "EC135/635")

## 0.70.2 – 2026-09-05
- Wikipedia-Verlinkung bei Flugzeugtyp/-modell nutzt jetzt primär die bereinigte Modellbeschreibung (a.desc) statt des ICAO-Codes - der reine 4-stellige Code ist bei manchen Typen zu kurz/mehrdeutig (z. B. matcht "EC35" für den Eurocopter EC135 auf de.wikipedia.org eher ein chinesisches Elektroauto als den Hubschrauber). Nur wenn keine Beschreibung vorliegt, wird weiterhin der ICAO-Code genutzt, jetzt ergänzt um "Flugzeug"/"aircraft", um die Zuordnung zur Luftfahrt zu erzwingen

## 0.70.1 – 2026-09-05
- Wikipedia-Verlinkung bei Flugzeugtyp/-modell nutzt jetzt bevorzugt den reinen ICAO-Typ-Code (z. B. "B738", "DA40") statt der Bezeichnung als Suchbegriff - Wikipedia hat dafür fast durchweg direkte Weiterleitungsseiten, die exakt beim richtigen Artikel landen. Kein ICAO-Code vorhanden? Dann weiterhin die bereinigte Modellbezeichnung, jetzt aber mit Einschränkung auf den Artikel-Namensraum, damit Diskussions-/Benutzer-/Kategorieseiten nicht mehr die Trefferliste verwässern

## 0.70.0 – 2026-09-05
- Glassmorphism-Look für Seitenleiste, Einstellungen/Statistiken-Panel und Legende: leicht transparenter Hintergrund mit Weichzeichner-Effekt, durch den die Karte dahinter dezent durchschimmert (im Radar-Modus bewusst unverändert, um den Retro-HUD-Look zu erhalten)
- Schlankere, abgerundete Scrollbar (6px, transparente Spur) für alle scrollbaren Bereiche statt des klobigen Standard-Browser-Balkens, passend zu Hell-/Dunkelmodus
- Kleine Propellerflugzeuge ohne ADS-B-Kategorie (z. B. MLAT-only, wie bei der Cessna 208 Caravan und der Piper PA-28R beobachtet) wurden bisher mit dem generischen "unbekannt"-Symbol dargestellt, das auf der Karte eher wie ein Verkehrsflugzeug aussieht - werden jetzt anhand der bereits vorhandenen Propellerflugzeug-Typliste korrekt mit dem Propellerflugzeug-Symbol angezeigt

## 0.69.0 – 2026-09-05
- Neue Statistik "davon Einsatz": zeigt die Anzahl unterschiedlicher Einsatzfahrzeuge (Luftrettung, Bundes-/Landespolizei) im gewählten Zeitraum an, analog zur bestehenden "davon Militär"-Zeile

## 0.68.4 – 2026-08-28
- Kartensymbole von Einsatz- und Militaerflugzeugen haben jetzt einen deutlich kraeftigeren weissen Umriss statt des duennen Standard-Randes - zweifarbiges Icon (Fuellung + Kontur) fuer bessere Erkennbarkeit auf einen Blick

## 0.68.3 – 2026-08-28
- Deutsche Marine-Hubschrauber (Marinefliegergeschwader 5, Callsign-Praefix GNY) werden jetzt zusaetzlich per Callsign als Militaer erkannt - Lynx und Sea King (S61) fehlten bisher komplett in der Typliste, und der EC135 (auch bei der Marine im Einsatz) kann dort nicht pauschal eingetragen werden, da dieser Typ ueberwiegend zivil (Rettung/Polizei) genutzt wird

## 0.68.2 – 2026-08-28
- Bundeswehr-Rettungshubschrauber (Heer/Marine SAR) und der zivile Offshore-Betreiber Northern Helicopter werden jetzt erkannt - Bundeswehr-SAR sendet tatsaechlich "RESQ" (nicht "RESCUE") als Kennung, Northern Helicopter "NHC". Beide zaehlen jetzt auch fuer das Rettungshubschrauber-Achievement

## 0.68.1 – 2026-08-28
- Einsatzfahrzeuge (Luftrettung, Bundes-/Landespolizei) bekommen jetzt eine eigene Farbe (Tuerkis) sowohl auf dem Kartensymbol als auch beim Callsign in der Liste, statt vorher nur den Callsign-Text rot einzufaerben (was mit der Sink-Rahmenfarbe und Grossflug-Rot verwechselbar war). Legende entsprechend ergaenzt

## 0.68.0 – 2026-08-28
- 13 weitere deutsche Landespolizei-Hubschrauber-Kennungen ergaenzt (Berlin lief schon vorher ueber die Bundespolizei-Kennung mit) (z. B. PBW fuer Baden-Wuerttemberg, EDL fuer Bayern, HUMMEL fuer NRW) - werden jetzt genau wie Bundespolizei und Rettungshubschrauber rot als "Einsatz" markiert. Quelle: vatsim-germany.org Wissensdatenbank zur Polizeifliegerei

## 0.67.2 – 2026-08-28
- Bundespolizei-Hubschrauber wurden nicht als "Einsatz" markiert - die Erkennung suchte nach "BPOL" (4 Buchstaben), tatsaechlich uebertragen wird aber "BPO" (z. B. BPO441). Praefix korrigiert

## 0.67.1 – 2026-08-28
- Rettungshubschrauber (z. B. Christoph31) wurden weder als "Einsatz" farblich markiert noch loesten sie das Meilenstein-Achievement aus - die Erkennung suchte nach "CHRISTOPH" im Callsign, tatsaechlich uebertragen wird aber "CHX31" (der gesprochene Funkrufname unterscheidet sich vom ADS-B-Callsign). CHX als Praefix ergaenzt

## 0.67.0 – 2026-08-28
- Route wird jetzt gegen die tatsaechliche Position des Flugzeugs geprueft, bevor sie angezeigt wird (Liste und Detailansicht) - ADSBDB liefert pro Callsign manchmal eine veraltete oder falsche Strecke (z. B. wiederverwendete Flugnummern), was dann komplett unplausibel zur beobachteten Position war (z. B. Route Graz-Wien bei einer Position ueber Berlin). Liegt das Flugzeug mehr als 200 km abseits der behaupteten Strecke, wird die Route lieber gar nicht angezeigt statt einer falschen

## 0.66.1 – 2026-08-28
- Statistiken: Erklaerungs-Tooltip bei "Flugzeuge" ergaenzt - zaehlt eindeutige Flugzeuge im gewaehlten Zeitraum, nicht die Summe der Sichtungen (Mehrfachsichtungen desselben Flugzeugs zaehlen nur einmal)

## 0.66.0 – 2026-08-24
- Neu: Flugzeugtyp (Liste und Detailansicht) ist jetzt klickbar und verlinkt zur Wikipedia-Sprungsuche fuer das jeweilige Modell - endlich nachschlagen koennen, was sich hinter Kuerzeln wie "A21N" oder "E75L" eigentlich verbirgt

## 0.65.3 – 2026-08-24
- Statistiken: Scrollposition bleibt jetzt erhalten, wenn man in eine Kategorie (z. B. Seltene Flugzeuge) reingeht und wieder zurueckgeht - sprang vorher immer ganz nach oben

## 0.65.2 – 2026-08-10
- Meilensteine (z. B. seltene Flugzeuge): Hex-Code des Flugzeugs wird jetzt zusaetzlich zum Rufnamen angezeigt und verlinkt zur Hex-Suche auf planespotters.net, um einen Fund im Nachhinein pruefen zu koennen (z. B. "war es wirklich eine Antonov"). Rufname fehlte bisher oft, wenn er beim allerersten Erfassen des Flugzeugs noch nicht gesendet wurde - wird jetzt nachtraeglich ergaenzt, sobald er in einem spaeteren Update erscheint

## 0.65.1 – 2026-08-10
- Design: dritte Option "System" ergaenzt, die dem Hell/Dunkel-Modus des Betriebssystems folgt und live reagiert, wenn sich dieser waehrend die Seite offen ist aendert. Neu ohne gespeicherte Wahl (z. B. beim ersten Besuch) ist jetzt System der Standard statt Hell - genau wie bei der Sprachauswahl folgt easyRADAR damit zunaechst dem System, bis man aktiv Hell oder Dunkel waehlt

## 0.65.0 – 2026-08-10
- Neu: echtes App-weites Dark Mode - die "Dunkel"-Einstellung (vorher nur Kartenkacheln) faerbt jetzt auch Seitenleiste, Statistik, Einstellungen und Detailansicht dunkel; Radar-Modus behaelt seine eigene Farbgebung unveraendert. Einstellung dafuer umbenannt von "Kartendesign" zu "Design"

## 0.64.2 – 2026-08-10
- Statistiken: die vier Flugrekord-Bezeichnungen gekuerzt (Max. Hoehe / Min. Hoehe / Max. Speed / Max. Distanz statt Hoechste Flughoehe / Niedrigster Ueberflug / Hoechste Geschwindigkeit / Weiteste Entfernung) - Wert und Callsign dahinter quetschten sich vorher zusammen

## 0.64.1 – 2026-08-10
- Statistiken: Zeitraum-Auswahl (Heute/Gestern/Ø-Tag/Gesamt) direkt unter die Ueberschrift "Rekorde" verschoben statt eigener Abschnitt, jetzt einzeilig statt 2x2; Rekorde in "Verkehr" und "Flugrekorde" unterteilt fuer bessere Uebersicht

## 0.64.0 – 2026-08-10
- Statistiken: zwei neue Zeitraeume ergaenzt – Gestern und Ø/Tag (Durchschnitt seit Aufzeichnungsbeginn, nur aus vollstaendig abgeschlossenen Tagen berechnet, laufender Tag zaehlt nicht mit)

## 0.63.1 – 2026-08-10
- Sicherheit: Text aus externen Quellen (Flugzeug-Fotos von Planespotters, Routen von ADSBDB, Nominatim-Ortsnamen, Callsigns/Flugzeugtypen vom ADS-B-Signal selbst) wird jetzt vor der Anzeige escaped, statt ungefiltert in die Seite eingefuegt zu werden

## 0.63.0 – 2026-08-10
- Neu: dezenter Hinweispunkt neben der Versionsnummer, wenn auf GitHub eine neuere Version verfuegbar ist – klickt man auf die Versionsnummer, oeffnet sich wie gewohnt das Aenderungsprotokoll und der Hinweis verschwindet

## 0.62.2 – 2026-08-08
- Detailansicht: Route zeigt jetzt nur noch Zielstadt + IATA-Code (z. B. "Prague (PRG)") statt des vollen Flughafennamens – vereinheitlicht mit der Liste und behebt nebenbei, dass manche Flughafennamen (z. B. "Václav Havel Airport Prague") nicht sauber gekürzt wurden und dreizeilig umgebrochen sind

## 0.62.1 – 2026-08-07
- Route (Liste + Detailansicht): gängige Städtenamen werden auf Deutsch jetzt eingedeutscht (z. B. "Warsaw" → "Warschau", "Tenerife" → "Teneriffa") – vorher immer Englisch, unabhängig von der eingestellten Sprache

## 0.62.0 – 2026-08-07
- Radar-Modus: Reichweitenringe jetzt in drei statt zwei Stufen gestaffelt – äußerster Ring am kräftigsten, Halbwege-Ring mittelstark, restliche Ringe dezent
- Radar-Modus: kleine Kontaktzähler-Anzeige oben links ("● N Kontakte")
- Radar-Modus: Einstieg jetzt als kurze Animation statt hartem Schnitt – Karte blendet aus, Landschaft blendet ein, Ringe/Kompass erscheinen, danach startet erst der Sweep (~500ms)

## 0.61.7 – 2026-08-07
- Detailansicht: Flugzeug-Icon exakt vermessen und Rumpf jetzt wirklich mittig auf der Linie (Icon-Form war nicht symmetrisch in ihrer eigenen Box); graue Reststrecke deutlich sichtbarer statt fast unsichtbar

## 0.61.6 – 2026-08-07
- Detailansicht: Routen-Linie dünner, Flugzeug-Icon noch etwas größer

## 0.61.5 – 2026-08-07
- Detailansicht: Flugzeug-Icon im Routen-Fortschrittsbalken vergrößert – war als Flugzeug kaum erkennbar

## 0.61.4 – 2026-08-07
- Detailansicht: Flugzeug-Icon im Routen-Fortschrittsbalken war unsichtbar (falsches viewBox-Seitenverhältnis, Icon wurde als Sub-Pixel-Punkt dargestellt) – jetzt korrekt sichtbar

## 0.61.3 – 2026-08-07
- Detailansicht: Routen-Fortschrittsmarker nutzt jetzt ein detailliertes Flugzeug-Icon statt des einfachen Pfeils

## 0.61.2 – 2026-08-07
- Detailansicht: Flugzeug-Emoji im Routen-Fortschrittsbalken durch ein schlankes, blaues Icon ersetzt, das zuverlässig in Richtung Ziel zeigt – Emoji sahen je nach Gerät unterschiedlich aus und ließen sich nicht sauber ausrichten

## 0.61.1 – 2026-08-07
- Flugzeugliste: der linke Rahmen an jeder Zeile zeigt jetzt Steigen (grün) / Sinken (rot) / Geradeausflug (grau), Favoriten immer gold – vorher zeigte er, ob eine Route bekannt ist (das steht jetzt schon eindeutig am blauen Routentext selbst)

## 0.61.0 – 2026-08-07
- Detailansicht: das Flugzeug-Icon in der Route-Box zeigt jetzt den ungefähren Streckenfortschritt – Position wird per Luftlinien-Projektion aus aktuellem Standort und Start-/Zielkoordinaten geschätzt, zurückgelegter Teil der Linie kräftiger dargestellt, sanfte Bewegung statt Sprüngen. Eine Näherung (Luftlinie, kein echter Flugpfad), keine exakte Rekonstruktion

## 0.60.4 – 2026-08-07
- Flugzeugliste: alle Zeilen bekommen jetzt einheitlich den Karten-Schatten – vorher sahen Flugzeuge ohne bekannte Route sichtbar anders aus, und der Stilsprung war beim Nachladen der Route störend sichtbar. Nur der blaue Rahmen links markiert jetzt noch, ob eine Route bekannt ist

## 0.60.3 – 2026-08-07
- Flugzeugliste: hellblauer Kartenhintergrund bei bekannter Route entfernt – Karte bleibt weiß, hebt sich nur noch über einen dezenten Schatten ab, blauer Rahmen links bleibt als Markierung

## 0.60.2 – 2026-08-07
- Flugzeugliste: Route-Schrift deutlich verkleinert – bei 18px passte teilweise nicht mal die erste Stadt in die Zeile
- Detailansicht: Flughafencodes in der Routenbox entfernt, nur noch Städtenamen

## 0.60.1 – 2026-08-07
- Flugzeugliste: Route korrigiert auf die eigentlich gewünschte Darstellung – große, blau hervorgehobene Route mittig in einer Zeile statt eigener dritter Zeile; Zeilen mit bekannter Route bekommen jetzt einen dezenten blauen Rahmen/Hintergrund

## 0.60.0 – 2026-08-07
- Detailansicht überarbeitet: Route steht jetzt ganz oben mit Flughafennamen statt Codes (Codes nur noch klein darunter), Airline steht direkt im Kopfbereich neben dem Flugzeugtyp, alle Abschnitte haben jetzt Icons

## 0.59.0 – 2026-08-07
- Flugzeugliste: Route bekommt eine eigene Zeile mit Flugzeug-Icon, blau hervorgehoben (z. B. "✈️ Berlin → Stockholm"), Codes nur noch im Tooltip beim Hovern

## 0.58.0 – 2026-08-07
- Route in der Flugzeugliste zeigt jetzt Städtenamen statt bloßer Flughafencodes (z. B. "London (STN) → Budapest (BUD)"), mit Code nur als Klammerzusatz – wird bei wenig Platz automatisch auf reine Städtenamen gekürzt, volle Angabe als Tooltip beim Hovern

## 0.57.1 – 2026-08-07
- Route in der Flugzeugliste zeigt jetzt wie in der Detailansicht ICAO-Codes (z. B. "EGSS → LHBP" statt "STN → BUD") – vorher unterschiedliche Codes an zwei Stellen für denselben Flughafen

## 0.57.0 – 2026-08-07
- Flugzeugliste zeigt jetzt Herkunft → Ziel (z. B. "FRA → JFK") in der Mitte jeder Zeile, sofern für den Callsign eine Route bekannt ist

## 0.56.0 – 2026-08-07
- Neu: 🏛️ Luftfahrt-Legenden-Galerie in den Meilensteinen – Concorde, SR-71 und die Spruce Goose mit kurzen historischen Fakten, rein informativ und ohne Einfluss auf Level oder XP

## 0.55.0 – 2026-08-07
- Concorde und SR-71 aus der aktiven Meilenstein-Liste entfernt – kein flugfähiges Exemplar existiert mehr irgendwo auf der Welt, waren also für jeden neuen Nutzer dauerhaft unerreichbar
- Neue Meilensteine "Seltene Flugzeuge entdeckt" (1/5/10/20) – belohnen die Anzahl gefundener seltener Flugzeuge statt einzelner Typen, damit der Fortschritt unabhängig von der eigenen Region fair bleibt
- Die einzelnen seltenen Flugzeuge bleiben weiterhin einzeln sammelbar und behalten ihre bisherige XP

## 0.54.0 – 2026-08-04
- Seitenleiste, die durch Anklicken eines Flugzeugs automatisch aufgeklappt wurde, klappt jetzt auch wieder automatisch zu, sobald kein Flugzeug mehr ausgewählt ist – manuelles Auf-/Zuklappen bleibt davon unberührt
- Neue Einstellung "Seitenleiste automatisch zuklappen" zum Abschalten dieses Verhaltens

## 0.53.0 – 2026-08-04
- Radar-Modus: Empfangskontur entfernt – passt für ein reines Radarbild nicht, bleibt aber wie gewohnt auf der normalen Karte verfügbar
- Radar-Modus: Reichweitenringe um 50 % sichtbarer
- Radar-Modus: Karte/Radar-Umschalter durch einen runden Knopf passend zu Einstellungen/Statistik ersetzt – leuchtet grün, solange der Radar-Modus aktiv ist

## 0.52.0 – 2026-08-04
- Radar-Modus: Seitenleiste, Legende und Buttons werden jetzt passend dunkel eingefärbt, solange der Radar-Modus aktiv ist
- Radar-Modus: Statusleiste (ADS-B-Status, Nachrichtenrate, Standort) wird im Radar-Modus ausgeblendet, da sie dort nicht zum Bild passt
- Alte "Rotierende Radar-Nadel"-Einstellung entfernt – überflüssig geworden durch den vollwertigen Radar-Modus

## 0.51.1 – 2026-08-04
- Radar-Modus: echter Nachzieheffekt für den Sweep (Winkel-Gradient, hell am Sweep-Strahl, nach hinten ausfadend) statt eines gleichmäßig gefüllten Kreissegments

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
