# Changelog

Notable changes to easyRADAR are documented here from this version onward. Earlier releases were German-only — see [CHANGELOG.md](CHANGELOG.md) for the full history.

## 0.60.1 – 2026-08-07
- Aircraft list: corrected the route display to the actually-intended look – large, blue-highlighted route centered in a single row instead of its own third line; rows with a known route now get a subtle blue border/background

## 0.60.0 – 2026-08-07
- Reworked the detail view: route now sits at the top with the airport name instead of codes (codes moved to a small secondary line), airline now shows right in the header next to the aircraft type, every section now has an icon

## 0.59.0 – 2026-08-07
- Aircraft list: the route now gets its own row with a plane icon, highlighted in blue (e.g. "✈️ Berlin → Stockholm"), codes moved to the hover tooltip

## 0.58.0 – 2026-08-07
- The aircraft list's route now shows city names instead of bare airport codes (e.g. "London (STN) → Budapest (BUD)"), with the code only as a parenthetical - automatically shortens to just city names when space is tight, full detail available as a hover tooltip

## 0.57.1 – 2026-08-07
- The aircraft list's route now shows ICAO codes like the detail view does (e.g. "EGSS → LHBP" instead of "STN → BUD") – previously showed different codes for the same airport in two places

## 0.57.0 – 2026-08-07
- The aircraft list now shows origin → destination (e.g. "FRA → JFK") in the middle of each row, whenever a route is known for that callsign

## 0.56.0 – 2026-08-07
- New: 🏛️ Aviation Legends gallery in Milestones – Concorde, SR-71, and the Spruce Goose with short historical facts, purely informational with no effect on level or XP

## 0.55.0 – 2026-08-07
- Removed Concorde and SR-71 from the active milestone list – no flightworthy example exists anywhere in the world anymore, so they were permanently unreachable for every new user
- New "rare aircraft found" milestones (1/5/10/20) – reward the number of rare aircraft found rather than a specific type, so progress stays fair regardless of your own region
- Individual rare aircraft remain collectible one by one and keep their existing XP

## 0.54.0 – 2026-08-04
- A sidebar that was automatically opened by clicking an aircraft now also automatically closes again once no aircraft is selected – manually opening/closing it is unaffected
- New "Auto-collapse sidebar" setting to turn this behavior off

## 0.53.0 – 2026-08-04
- Radar Mode: removed the reception contour – doesn't fit a pure radar picture, but remains available on the regular map as before
- Radar Mode: range rings are 50% more visible
- Radar Mode: replaced the Map/Radar switcher with a round button matching Settings/Stats – glows green while Radar Mode is active

## 0.52.0 – 2026-08-04
- Radar Mode: sidebar, legend, and buttons are now dark-themed to match while Radar Mode is active
- Radar Mode: the status bar (ADS-B status, message rate, location) is hidden in Radar Mode since it doesn't fit the picture there
- Removed the old "Rotating radar sweep" setting – made redundant by the full Radar Mode

## 0.51.1 – 2026-08-04
- Radar Mode: a real afterglow trail for the sweep (angular gradient, bright at the sweep line, fading toward the tail) instead of a uniformly filled pie slice

## 0.51.0 – 2026-08-04
- Radar Mode: reworked the visual hierarchy so aircraft stay the focus instead of competing with the reception contour
- The reception contour is now a filled area with a thin edge in its own cyan-green instead of a dominant line
- The sweep is noticeably toned down (less opacity) so it doesn't outshine the targets
- Range rings now alternate stronger/weaker (primary/secondary rings), desaturated green, labels cycle through North/East/South/West instead of always sitting on top
- Terrain is about 10% darker
- Aircraft now have a subtle halo, making them feel more alive against the dark center
- The station icon at the center now includes a small mast glyph

## 0.50.1 – 2026-08-04
- Radar Mode: rings, reception contour, sweep, and targets were invisible (hidden behind the map layer) – fixed with explicit layer ordering
- Radar Mode: fixed an incorrect zoom level that kept the map from matching the configured range
- Radar Mode: fixed a renderer hang caused by an expensive glow effect (replaced with a cheaper equivalent, no quality loss)
- Radar Mode: reception contour now glows more and pulses on a ~20-second rhythm, range rings are dotted instead of solid, the sweep visibly brightens the terrain, small pulse rings now emanate from the station icon
- Radar Mode: terrain now fades into fog toward the edge instead of a hard cutoff

## 0.50.0 – 2026-08-04
- Radar Mode: real terrain instead of a plain green screen – the same map data as Map mode, restyled for radar (roads/buildings/place names hidden, water/forests/land use in monochrome green)
- Every user automatically sees their own surroundings – no location setup needed, since it's the same live map data used in Map mode
- The map now fades out circularly toward the edge instead of a hard cutoff
- The sweep cone visibly brightens the terrain showing through as it passes
- Rings, the reception contour, and targets now use the same map projection as the real terrain beneath them – exact alignment instead of an approximation

## 0.49.0 – 2026-08-04
- Radar Mode: targets now glide between updates instead of jumping
- Radar Mode: targets briefly flash as the sweep needle passes over them, while staying permanently visible otherwise
- Radar Mode: the real, irregular reception contour (from data already being collected) is now shown and gently pulses
- Radar Mode: range rings are labelled much more legibly, compass rose extended with NE/SE/SW/NW, a pulsing station icon sits at the centre
- Radar Mode: hovering a target in the list highlights the matching dot on the radar, and vice versa
- Radar Mode: the status bar shows "Contacts" instead of "Aircraft" while Radar Mode is active

## 0.48.0 – 2026-08-04
- Radar Mode: dots are now colour-coded by altitude (same colours as on the map) instead of plain green
- Radar Mode: target shape now varies by aircraft category (circle/diamond/square/triangle/star) instead of uniform dots
- The background map in Radar Mode now has a light area fill instead of just an outline
- New Map/Radar switcher at the bottom left instead of a single radar button
- The legend now also shows target-type symbols alongside altitude colours while in Radar Mode

## 0.47.1 – 2026-08-04
- Reworked Radar Mode: aircraft now stay permanently visible instead of only flashing as the sweep passes, noticeably bigger dots, callsign shown above each dot
- Real country borders/coastlines in the background – correctly projected by bearing/distance from your station, no place names or other labels
- The sweep needle now draws a trailing light cone instead of a pure afterglow effect

## 0.47.0 – 2026-08-04
- New: 🎯 Radar Mode – a dedicated circular radar scope in place of the map, switchable via the new button at the bottom left
- Aircraft appear as plain green dots (bearing/distance from your receiver station), no place names or airports shown
- A genuine sweep needle with afterglow, like a classic CRT radar – dots flash as the sweep passes and fade afterward
- The outer ring matches your all-time distance record (+10% headroom) instead of a fixed value
- Clicking a dot opens the aircraft's detail view, same as on the map

## 0.46.2 – 2026-08-04
- Replaced the drop shadow under the sticky section headers in Settings with a subtle divider line – the shadow looked like a stray bar rather than depth when scroll distance was short

## 0.46.1 – 2026-08-04
- Added a drop shadow under the sticky section headers in Settings, so it's clearer while scrolling that they sit above the content instead of blending into it

## 0.46.0 – 2026-08-04
- Added English language support – full switcher between German and English in Settings, covering the Radar Level, achievements, stats, and changelog
- Language choice is remembered permanently; without a saved preference, the browser language is detected (German browsers → German, everything else → English)
- Translations now live in separate JSON files, so the community can contribute additional languages in the future
- The changelog is now maintained bilingually from this version onward – older entries remain German-only
