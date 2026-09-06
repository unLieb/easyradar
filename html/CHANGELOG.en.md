# Changelog

Notable changes to easyRADAR are documented here from this version onward. Earlier releases were German-only — see [CHANGELOG.md](CHANGELOG.md) for the full history.

## 0.72.1 - 2026-09-07
- The Wikipedia link for the Boeing 737 MAX 7/8/9/10 now jumps straight to the matching section in the "Boeing 737" article (e.g. `#Boeing_737_Max_8`) on German Wikipedia, instead of only the parent "MAX versions" chapter - unlike English Wikipedia, German Wikipedia covers every MAX variant in one shared article with named subsections, which plain search can't jump into directly
- Fixed a related regression on English Wikipedia along the way: there, every MAX variant has its own article (e.g. "Boeing 737 MAX 8"), and the previous number-stripping unnecessarily sent it to the more general family article instead of the exact page

## 0.72.0 - 2026-09-07
- New fallback for aircraft with an ICAO type (e.g. `EC45`) but no free-text description at all yet, observed live on Christoph 82 (a rescue helicopter): "Eurocopter EC "+model number is now generated for EC120/EC130/EC135/EC145 and used both for display and the Wikipedia link - lands straight on the article with no search stop. EC25 deliberately left out: that code covers two different real aircraft (EC225 civil/EC725 military), so reversing it would be a guess rather than a known fact - falls back to the general ICAO-code+"aircraft" case there instead
- Also fixed in passing: the uppercase-to-title-case step could lowercase a short 2-letter code like "EC" when separated from the model number by a space ("Ec")

## 0.71.2 - 2026-09-07
- The Wikipedia search term now strips the trailing sub-variant number from "Boeing 737 MAX 7/8/10" down to "Boeing 737 MAX" - a direct redirect already exists for that (the one MAX 9 resolves to anyway), where the individual number variants otherwise got stuck on the search-results page. Deliberately not made a general "strip any trailing number" rule: A350-900/A320neo etc. already have their own, even more precise redirects and stripping their number would only make the match worse
- Also fixed in passing: uppercase-to-title-case normalization for manufacturer names (e.g. "BOEING" -> "Boeing") could catch just the letters part of a hyphenated code like "EC-135" and mangle it into "Ec135" instead of preserving "EC135"

## 0.71.1 - 2026-09-07
- The Wikipedia search term now swaps "AIRBUS HELICOPTERS" for the older name "Eurocopter", which many redirects are actually written against - "Eurocopter EC135" now jumps straight to the article with no search stop at all, where "AIRBUS HELICOPTERS EC135" stayed on the search-results page. Checked against all 9 affected types in the database: equally good or better across the board, nothing regresses

## 0.71.0 - 2026-09-05
- Browser notifications now also fire for newly-sighted emergency vehicles (air rescue/police), matching military aircraft and achievements
- Clicking a military/emergency notification now centers the map on the aircraft that triggered it and opens its detail view - switching to the already-open easyRADAR tab, or opening a new one if none is left. This is the app's first use of a service worker (sw.js), purely for its notificationclick handling - no offline support or caching

## 0.70.3 - 2026-09-05
- The Wikipedia search term for the aircraft type/model now cuts off slash-separated variant lists in the model description before searching - the type database packs several variants into one field for around 80 types (e.g. "AIRBUS HELICOPTERS EC-135/635" now becomes "AIRBUS HELICOPTERS EC135" instead of the previously uncleaned "EC135/635")

## 0.70.2 - 2026-09-05
- The Wikipedia link on the aircraft type/model now prefers the cleaned model description (a.desc) over the ICAO code - the bare 4-character code is too short/ambiguous for some types (e.g. "EC35", the Eurocopter EC135's actual ICAO designator, matches a Chinese electric van on German Wikipedia before it gets anywhere near the helicopter). Only falls back to the ICAO code when there's no description at all, now with "aircraft"/"Flugzeug" appended to force the aviation match

## 0.70.1 - 2026-09-05
- The Wikipedia link on the aircraft type/model now prefers the bare ICAO type code (e.g. "B738", "DA40") as the search term over the model name - Wikipedia has direct redirect pages for almost all of them, landing exactly on the right article. No ICAO code available? Falls back to the cleaned-up model name as before, now restricted to the article namespace so Talk/User/Category pages can no longer dilute the results

## 0.70.0 - 2026-09-05
- Glassmorphism look for the sidebar, settings/stats panels, and legend: a slightly translucent, blurred background that lets the map shimmer through subtly (deliberately left untouched in Radar Mode, to keep its retro HUD look)
- Slimmer, rounded scrollbar (6px, transparent track) for every scrollable area instead of the browser's default chunky one, matching both light and dark mode

## 0.69.1 - 2026-09-05
- Small propeller aircraft without a broadcast ADS-B category (e.g. MLAT-only tracks, as observed for a Cessna 208 Caravan and a Piper PA-28R) previously showed the generic "unknown" icon, which reads more like an airliner on the map - they're now correctly shown with the propeller-plane icon using the existing propeller-type list

## 0.69.0 - 2026-09-05
- New stat "of which Emergency Services": shows the number of distinct emergency vehicles (air rescue, federal/state police) in the selected time range, mirroring the existing "of which Military" row

## 0.68.4 - 2026-08-28
- Map icons for emergency and military aircraft now get a noticeably bolder white outline instead of the thin standard border - a genuinely two-toned icon (fill + outline) for easier at-a-glance recognition

## 0.68.3 - 2026-08-28
- German Navy helicopters (Marinefliegergeschwader 5, callsign prefix GNY) are now also recognized as military via callsign - Lynx and Sea King (S61) were missing from the type list entirely, and the EC135 (also flown by the Navy) cant be blanket-listed there since that type is predominantly civilian (rescue/police)

## 0.68.2 - 2026-08-28
- Bundeswehr rescue helicopters (Heer/Marine SAR) and the civilian offshore operator Northern Helicopter are now recognized - Bundeswehr SAR actually transmits "RESQ" (not "RESCUE") as its ident, Northern Helicopter uses "NHC". Both now also count toward the rescue-helicopter achievement

## 0.68.1 - 2026-08-28
- Emergency vehicles (air rescue, federal/state police) now get their own color (teal) on both the map icon and the list callsign, instead of previously only coloring the callsign text red (which could be confused with the descending-accent color and high-altitude red). Legend updated to match

## 0.68.0 - 2026-08-28
- Added ICAO callsign prefixes for 13 more German state police (Landespolizei) helicopter fleets (Berlin was already covered via the federal police prefix) (e.g. PBW for Baden-Wuerttemberg, EDL for Bavaria, HUMMEL for North Rhine-Westphalia) - now highlighted red as "emergency" the same as federal police and rescue helicopters. Source: vatsim-germany.org knowledge base on police aviation

## 0.67.2 - 2026-08-28
- Bundespolizei (German federal police) helicopters weren'''t highlighted as "emergency" - detection looked for "BPOL" (4 letters), but what actually gets transmitted is "BPO" (e.g. BPO441). Fixed the prefix

## 0.67.1 - 2026-08-28
- Rescue helicopters (e.g. Christoph31) were neither highlighted as "emergency" nor triggering the milestone achievement - detection looked for "CHRISTOPH" in the callsign, but what actually gets transmitted is "CHX31" (the spoken radio callsign differs from the ADS-B callsign). Added CHX as a recognized prefix

## 0.67.0 - 2026-08-28
- Route is now sanity-checked against the aircraft'''s actual position before being shown (list and detail view) - ADSBDB sometimes has a stale or wrong route on file for a callsign (reused flight numbers etc.), which could be completely implausible for the observed position (e.g. a Graz-Vienna route while the aircraft is over Berlin). If the aircraft is more than 200km off the claimed route, it is no longer shown rather than showing something wrong

## 0.66.1 - 2026-08-28
- Statistics: added an explanatory tooltip on "Aircraft" - counts unique aircraft in the selected period, not a sum of sightings (repeat sightings of the same aircraft only count once)

## 0.66.0 - 2026-08-24
- New: aircraft type (list and detail view) is now clickable and links to a Wikipedia search jump for that model - finally a way to look up what a designator like "A21N" or "E75L" actually is

## 0.65.3 - 2026-08-24
- Statistics: scroll position is now preserved when going into a category (e.g. Rare Aircraft) and back out - used to always jump back to the top

## 0.65.2 - 2026-08-10
- Milestones (e.g. rare aircraft): the aircraft'''s hex code is now shown alongside the callsign and links to a planespotters.net hex search, so a sighting can actually be double-checked afterwards (e.g. "was that really an Antonov"). The callsign used to often be missing if it had not been broadcast yet at the exact moment the aircraft was first captured - it now gets backfilled once it shows up in a later update

## 0.65.1 - 2026-08-10
- Theme: added a third "System" option that follows the OS/browser light-dark setting and updates live if it changes while the page is open. New visitors without a saved choice now default to System instead of Light - same pattern already used for the language setting

## 0.65.0 - 2026-08-10
- New: real app-wide dark mode - the "Dark" setting (previously map tiles only) now also darkens the sidebar, statistics, settings, and detail view; Radar Mode keeps its own separate color scheme unchanged. Renamed the setting from "Map Style" to "Theme" to reflect the wider scope

## 0.64.2 - 2026-08-10
- Statistics: shortened the four flight-record labels (Max Alt. / Min Alt. / Max Speed / Max Dist. instead of Highest Altitude / Lowest Overflight / Highest Speed / Farthest Distance) - the value and callsign next to them used to feel squeezed

## 0.64.1 - 2026-08-10
- Statistics: the time range picker (Today/Yesterday/Avg-Day/Total) now sits directly under the "Records" heading instead of its own section, single row instead of 2x2; records split into "Traffic" and "Flight Records" for clarity

## 0.64.0 - 2026-08-10
- Statistics: two new time ranges - Yesterday and Avg/Day (average since recording began, computed only from fully-completed days; the day in progress does not count)

## 0.63.1 - 2026-08-10
- Security: text from external sources (Planespotters aircraft photos, ADSBDB routes, Nominatim place names, callsigns/aircraft types from the ADS-B signal itself) is now escaped before display instead of being inserted into the page unfiltered

## 0.63.0 - 2026-08-10
- New: a subtle dot next to the version number when a newer release is available on GitHub - clicking the version number opens the changelog as usual and dismisses the hint

## 0.62.2 – 2026-08-08
- Detail view: route now shows only the destination city + IATA code (e.g. "Prague (PRG)") instead of the full airport name - consistent with the list, and fixes some airport names (e.g. "Václav Havel Airport Prague") not trimming cleanly and wrapping to three lines

## 0.62.1 – 2026-08-07
- Route (list + detail view): common city names are now localized for German ("Warsaw" -> "Warschau", "Tenerife" -> "Teneriffa") - previously always English regardless of the selected language

## 0.62.0 – 2026-08-07
- Radar Mode: range rings now staggered in three tiers instead of two – outermost ring strongest, halfway ring medium, the rest subtle
- Radar Mode: small contact-count readout in the top-left corner ("● N Contacts")
- Radar Mode: switching in now plays a short animation instead of a hard cut – map fades out, landscape fades in, rings/compass appear, only then does the sweep start moving (~500ms)

## 0.61.7 – 2026-08-07
- Detail view: precisely measured the plane icon and centered its fuselage on the line for real (the icon shape wasn't symmetric within its own bounding box); the remaining gray portion of the route is now clearly visible instead of nearly invisible

## 0.61.6 – 2026-08-07
- Detail view: thinner route line, slightly larger plane icon

## 0.61.5 – 2026-08-07
- Detail view: enlarged the airplane icon in the route progress bar – was hard to recognize as a plane at the previous size

## 0.61.4 – 2026-08-07
- Detail view: the airplane icon in the route progress bar was invisible (wrong viewBox scale, rendered as a sub-pixel dot) – now shows up correctly

## 0.61.3 – 2026-08-07
- Detail view: the route progress marker now uses a detailed airplane icon instead of the simple arrow

## 0.61.2 – 2026-08-07
- Detail view: replaced the plane emoji in the route progress bar with a slim blue icon that reliably points toward the destination – emoji looked different per device and couldn't be oriented cleanly

## 0.61.1 – 2026-08-07
- Aircraft list: the left border on each row now shows climbing (green) / descending (red) / level flight (gray), favorites always gold – it previously marked whether a route was known, which is already obvious from the blue route text itself

## 0.61.0 – 2026-08-07
- Detail view: the plane icon in the route box now shows approximate route progress – position is estimated by projecting the aircraft's current location onto the straight origin-destination line, the flown portion of the line is shown bolder, and the marker glides smoothly instead of jumping. An approximation (straight line, not the actual flight path), not an exact reconstruction

## 0.60.4 – 2026-08-07
- Aircraft list: every row now gets the same card shadow – previously aircraft without a known route visibly looked different, and the style jump was jarring once the route loaded in. Only the blue left border still marks whether a route is known

## 0.60.3 – 2026-08-07
- Aircraft list: removed the light blue card background for rows with a known route – the card stays white and is set apart by a subtle shadow instead, the blue left border remains as the marker

## 0.60.2 – 2026-08-07
- Aircraft list: significantly shrank the route font size – at 18px, even the first city name sometimes didn't fit on the line
- Detail view: removed airport codes from the route box, city names only now

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
