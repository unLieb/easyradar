# easyRADAR

*[Deutsch](README.de.md)*

Self-hosted ADS-B web dashboard on top of [ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) — a live aircraft map, a dedicated circular radar scope, and a lightweight achievement/leveling system for spotting different aircraft types, airlines, and countries. German and English out of the box.

## Screenshots

| Live map | Radar Mode |
|---|---|
| ![Live map with aircraft list](docs/screenshots/map-list.png) | ![Radar Mode](docs/screenshots/radar-mode.png) |

| Aircraft detail with route | Achievements & Radar-Level |
|---|---|
| ![Aircraft detail view](docs/screenshots/detail-route.png) | ![Achievements panel](docs/screenshots/achievements.png) |

## Features

- Live map (Leaflet) with altitude-colored aircraft, filters (airliner/helicopter/military/business/propeller/favorites), and a searchable aircraft/callsign list
- **Radar Mode** — a dedicated circular PPI-style scope with a real terrain background, sweep afterglow, and range rings, switchable at any time
- **Achievements & Radar-Level** — XP for spotting new aircraft types, airlines, countries, rare aircraft, altitude/range/message records, day/night patterns, and anniversaries; drill-down category view, no account needed (progress lives in the browser's localStorage)
- **Aviation Legends gallery** — a small, XP-free "museum" section for historically significant aircraft that can never be received live again (Concorde, SR-71, ...)
- German/English UI, remembers your choice, falls back to browser language
- Installable as a PWA
- In-app changelog

## Architecture

easyRADAR is two services sitting in front of an existing ultrafeeder/tar1090 setup:

| Component | Repo | Role |
|---|---|---|
| **radar-de** | this repo | Static frontend (`html/`) + `nginx.conf`, reverse-proxies `/data/` to ultrafeeder, `/stats-api/` to radar-stats, `/external/` to opendata.adsb.fi, `/geocode/` to Nominatim |
| **radar-stats** | separate repo | Python service tracking achievements/XP/records against ultrafeeder's live data, backed by SQLite |

You need an existing `ultrafeeder` container exposing `/data/aircraft.json` and `/data/stats.json` on the same Docker network — this repo does not include a receiver/decoder setup.

## Requirements

- Docker / Docker Compose
- An existing [ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) container on the same Docker network, exposing `/data/aircraft.json` and `/data/stats.json`
- `radar-stats` (this project's companion repo) for achievements/XP - optional if you only want the map and radar scope

## Setup

No cloning needed - pull the published images and add them to your compose file, alongside your existing `ultrafeeder` service. Both `linux/amd64` and `linux/arm64` (Raspberry Pi) are published.

1. Create a `site-config.js` next to your compose file with your own receiver's coordinates:

   ```js
   const SITE_LAT = 52.5200, SITE_LON = 13.4050;
   ```

2. Add the service(s):

   **Minimal** - just the map and radar scope, no achievements/XP:

   ```yaml
   services:
     easyradar:
       image: ghcr.io/unlieb/easyradar:latest
       container_name: easyradar
       restart: unless-stopped
       depends_on:
         - ultrafeeder
       ports:
         - 8087:80
       volumes:
         - ./site-config.js:/usr/share/nginx/html/site-config.js:ro
   ```

   **Full** - adds `radar-stats` for achievements/XP/Radar-Level:

   ```yaml
   services:
     radar-stats:
       image: ghcr.io/unlieb/easyradar-stats:latest
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
         - radar-stats-data:/data

     easyradar:
       image: ghcr.io/unlieb/easyradar:latest
       container_name: easyradar
       restart: unless-stopped
       depends_on:
         - ultrafeeder
         - radar-stats
       ports:
         - 8087:80
       volumes:
         - ./site-config.js:/usr/share/nginx/html/site-config.js:ro

   volumes:
     radar-stats-data:
   ```

3. `docker compose up -d easyradar` (Minimal) or `docker compose up -d radar-stats easyradar` (Full), then open `http://<host>:8087/`.

### Building from source instead

Want to modify the code yourself? Clone this repo (and `radar-stats`, for Full), then `docker build -t easyradar .` / `docker build -t radar-stats .` in each, and swap `image: ghcr.io/...` above for `build: ./radar-de` / `build: ./radar-stats` pointing at your clones.

## External Services

easyRADAR calls a few third-party APIs directly from the browser - no API keys needed, all free/public:

| Service | Used for |
|---|---|
| [ADSBDB](https://www.adsbdb.com/) | Origin/destination for a callsign |
| [Planespotters.net](https://www.planespotters.net/) | Aircraft photos |
| [OpenStreetMap Nominatim](https://nominatim.org/) | Reverse-geocoding the flight timeline (proxied through nginx with a proper User-Agent) |
| [adsb.fi](https://adsb.fi/) | Optional supplementary aircraft data outside your own receiver's range |
| [CARTO](https://carto.com/) / [OpenStreetMap](https://www.openstreetmap.org/) | Base map tiles |

## License

MIT, see [LICENSE](LICENSE).
