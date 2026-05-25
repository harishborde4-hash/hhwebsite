# Touch Interface — System Specification

_Covers SS-1301 through SS-1400: the canonical 100-axis spec for the Touch Interface subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-1301 | define player-facing goal | `Touch Interface` exists so the player can touch interface-related outcomes feel intentional and learnable. |
| SS-1302 | declare data ownership | Owned by `gameplay/touch-interface/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-1303 | document tuning variables | All tunables in `config/touch-interface.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-1304 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-1305 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-1306 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-1307 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-1308 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-1309 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-1310 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-1311 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-1312 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-1313 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-1314 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-1315 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-1316 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-1317 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-1318 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-1319 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-1320 | set performance budget | Listed in `config/perf-budgets.json` under `touch-interface`; CI gate. |
| SS-1321 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-1322 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-1323 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-1324 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-1325 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-1326 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-1327 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-1328 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-1329 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-1330 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-1331 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-1332 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-1333 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-1334 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-1335 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-1336 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-1337 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-1338 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-1339 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-1340 | define error message | Localized, actionable, never reveals internals. |
| SS-1341 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-1342 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-1343 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-1344 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-1345 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-1346 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-1347 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-1348 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-1349 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-1350 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-1351 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-1352 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-1353 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-1354 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-1355 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-1356 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-1357 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-1358 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-1359 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-1360 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-1361 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-1362 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-1363 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-1364 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-1365 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-1366 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-1367 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-1368 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-1369 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-1370 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-1371 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-1372 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-1373 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-1374 | define base reaction | Settlement morale/raid risk updated. |
| SS-1375 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-1376 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-1377 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-1378 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-1379 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-1380 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-1381 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-1382 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-1383 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-1384 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-1385 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-1386 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-1387 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-1388 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-1389 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-1390 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-1391 | define asset naming | `touch-interface_<type>_<variant>_<lod>` per asset spec doc. |
| SS-1392 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-1393 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-1394 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-1395 | define event bus message | `touch_interface_*` namespace; typed payloads; documented. |
| SS-1396 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-1397 | define logging category | `touch-interface` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-1398 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-1399 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-1400 | define sign-off owner | Lead of the Touch Interface pod; cross-signed by QA + Production. |
