# Save Architecture — System Specification

_Covers SS-2401 through SS-2500: the canonical 100-axis spec for the Save Architecture subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-2401 | define player-facing goal | `Save Architecture` exists so the player can save architecture-related outcomes feel intentional and learnable. |
| SS-2402 | declare data ownership | Owned by `gameplay/save-architecture/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-2403 | document tuning variables | All tunables in `config/save-architecture.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-2404 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-2405 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-2406 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-2407 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-2408 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-2409 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-2410 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-2411 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-2412 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-2413 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-2414 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-2415 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-2416 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-2417 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-2418 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-2419 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-2420 | set performance budget | Listed in `config/perf-budgets.json` under `save-architecture`; CI gate. |
| SS-2421 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-2422 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-2423 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-2424 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-2425 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-2426 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-2427 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-2428 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-2429 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-2430 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-2431 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-2432 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-2433 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-2434 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-2435 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-2436 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-2437 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-2438 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-2439 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-2440 | define error message | Localized, actionable, never reveals internals. |
| SS-2441 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-2442 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-2443 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-2444 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-2445 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-2446 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-2447 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-2448 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-2449 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-2450 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-2451 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-2452 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-2453 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-2454 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-2455 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-2456 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-2457 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-2458 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-2459 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-2460 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-2461 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-2462 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-2463 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-2464 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-2465 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-2466 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-2467 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-2468 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-2469 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-2470 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-2471 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-2472 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-2473 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-2474 | define base reaction | Settlement morale/raid risk updated. |
| SS-2475 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-2476 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-2477 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-2478 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-2479 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-2480 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-2481 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-2482 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-2483 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-2484 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-2485 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-2486 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-2487 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-2488 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-2489 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-2490 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-2491 | define asset naming | `save-architecture_<type>_<variant>_<lod>` per asset spec doc. |
| SS-2492 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-2493 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-2494 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-2495 | define event bus message | `save_architecture_*` namespace; typed payloads; documented. |
| SS-2496 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-2497 | define logging category | `save-architecture` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-2498 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-2499 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-2500 | define sign-off owner | Lead of the Save Architecture pod; cross-signed by QA + Production. |
