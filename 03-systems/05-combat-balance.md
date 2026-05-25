# Combat Balance — System Specification

_Covers SS-0401 through SS-0500: the canonical 100-axis spec for the Combat Balance subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-0401 | define player-facing goal | `Combat Balance` exists so the player can combat balance-related outcomes feel intentional and learnable. |
| SS-0402 | declare data ownership | Owned by `gameplay/combat-balance/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-0403 | document tuning variables | All tunables in `config/combat-balance.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-0404 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-0405 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-0406 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-0407 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-0408 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-0409 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-0410 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-0411 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-0412 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-0413 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-0414 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-0415 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-0416 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-0417 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-0418 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-0419 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-0420 | set performance budget | Listed in `config/perf-budgets.json` under `combat-balance`; CI gate. |
| SS-0421 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-0422 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-0423 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-0424 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-0425 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-0426 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-0427 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-0428 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-0429 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-0430 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-0431 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-0432 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-0433 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-0434 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-0435 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-0436 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-0437 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-0438 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-0439 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-0440 | define error message | Localized, actionable, never reveals internals. |
| SS-0441 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-0442 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-0443 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-0444 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-0445 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-0446 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-0447 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-0448 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-0449 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-0450 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-0451 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-0452 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-0453 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-0454 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-0455 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-0456 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-0457 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-0458 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-0459 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-0460 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-0461 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-0462 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-0463 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-0464 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-0465 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-0466 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-0467 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-0468 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-0469 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-0470 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-0471 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-0472 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-0473 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-0474 | define base reaction | Settlement morale/raid risk updated. |
| SS-0475 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-0476 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-0477 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-0478 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-0479 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-0480 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-0481 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-0482 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-0483 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-0484 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-0485 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-0486 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-0487 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-0488 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-0489 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-0490 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-0491 | define asset naming | `combat-balance_<type>_<variant>_<lod>` per asset spec doc. |
| SS-0492 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-0493 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-0494 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-0495 | define event bus message | `combat_balance_*` namespace; typed payloads; documented. |
| SS-0496 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-0497 | define logging category | `combat-balance` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-0498 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-0499 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-0500 | define sign-off owner | Lead of the Combat Balance pod; cross-signed by QA + Production. |
