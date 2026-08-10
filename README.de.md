# easyRADAR

*[English](README.md)*

Selbstgehostetes ADS-B-Web-Dashboard auf Basis von [ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) — eine Live-Flugzeugkarte, ein eigener kreisförmiger Radar-Modus und ein leichtgewichtiges Achievement-/Level-System fürs Entdecken verschiedener Flugzeugtypen, Airlines und Länder. Deutsch und Englisch von Haus aus.

## Screenshots

| Live-Karte | Radar-Modus |
|---|---|
| ![Live-Karte mit Flugzeugliste](docs/screenshots/map-list.png) | ![Radar-Modus](docs/screenshots/radar-mode.png) |

| Detailansicht mit Route | Achievements & Radar-Level |
|---|---|
| ![Detailansicht eines Flugzeugs](docs/screenshots/detail-route.png) | ![Achievements-Übersicht](docs/screenshots/achievements.png) |

## Funktionen

- Live-Karte (Leaflet) mit höhenkodierten Flugzeugen, Filtern (Airliner/Helikopter/Militär/Business/Propeller/Favoriten) und durchsuchbarer Flugzeug-/Callsign-Liste
- **Radar-Modus** — ein eigener kreisförmiger PPI-Scope mit echtem Geländehintergrund, Sweep-Nachleuchten und Reichweitenringen, jederzeit umschaltbar
- **Achievements & Radar-Level** — XP fürs Entdecken neuer Flugzeugtypen, Airlines, Länder, seltener Flugzeuge, Höhen-/Reichweiten-/Nachrichtenrekorde, Tag-/Nacht-Muster und Jahrestage; Drilldown-Kategorieansicht, kein Account nötig (Fortschritt lebt im localStorage des Browsers)
- **Luftfahrt-Legenden-Galerie** — ein kleiner, XP-freier "Museums"-Bereich für historisch bedeutsame Flugzeuge, die live nie wieder empfangen werden können (Concorde, SR-71, ...)
- Deutsche/englische Oberfläche, merkt sich die Wahl, fällt sonst auf die Browsersprache zurück
- Installierbar als PWA
- Änderungsprotokoll direkt in der App

## Architektur

easyRADAR besteht aus zwei Diensten, die vor ein bestehendes ultrafeeder-/tar1090-Setup gesetzt werden:

| Komponente | Repo | Rolle |
|---|---|---|
| **radar-de** | dieses Repo | Statisches Frontend (`html/`) + `nginx.conf`, reverse-proxied `/data/` zu ultrafeeder, `/stats-api/` zu radar-stats, `/external/` zu opendata.adsb.fi, `/geocode/` zu Nominatim |
| **radar-stats** | eigenes Repo | Python-Dienst, der Achievements/XP/Rekorde anhand der Live-Daten von ultrafeeder verfolgt, Speicherung in SQLite |

Ein bestehender `ultrafeeder`-Container, der `/data/aircraft.json` und `/data/stats.json` im selben Docker-Netzwerk bereitstellt, wird vorausgesetzt — dieses Repo enthält kein Empfänger-/Decoder-Setup.

## Einrichtung

1. Dieses Repo und `radar-stats` als Geschwisterverzeichnisse neben eurer bestehenden `docker-compose.yml` klonen.
2. `html/site-config.example.js` nach `html/site-config.js` kopieren und die Koordinaten des eigenen Empfängers eintragen. Diese Datei ist gitignored — sie soll lokal beim eigenen Deployment bleiben und nie committet werden.
3. Beide Dienste zur Compose-Datei hinzufügen, neben dem bestehenden `ultrafeeder`-Dienst:

   ```yaml
   services:
     radar-stats:
       image: python:3-alpine
       container_name: radar-stats
       restart: unless-stopped
       depends_on:
         - ultrafeeder
       environment:
         - TZ=Europe/Berlin
         - STATION_NAME=YourStationName
         - SITE_LAT=52.5200
         - SITE_LON=13.4050
       volumes:
         - ./radar-stats/stats-service.py:/app/stats-service.py:ro
         - ./radar-stats/data:/data
       command: python3 /app/stats-service.py

     easyradar:
       image: nginx:alpine
       container_name: easyradar
       restart: unless-stopped
       depends_on:
         - ultrafeeder
         - radar-stats
       ports:
         - 8087:80
       volumes:
         - ./radar-de/html:/usr/share/nginx/html:ro
         - ./radar-de/nginx.conf:/etc/nginx/conf.d/default.conf:ro
   ```

4. `docker compose up -d radar-stats easyradar`, danach `http://<host>:8087/` öffnen.

## Lizenz

MIT, siehe [LICENSE](LICENSE).
