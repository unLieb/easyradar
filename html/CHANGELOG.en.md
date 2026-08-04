# Changelog

Notable changes to easyRADAR are documented here from this version onward. Earlier releases were German-only — see [CHANGELOG.md](CHANGELOG.md) for the full history.

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
