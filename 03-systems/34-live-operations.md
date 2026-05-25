# Live Operations — System Specification

_Covers SS-3301 through SS-3400: the canonical 100-axis spec for the Live Operations subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-3301 | define player-facing goal | `Live Operations` exists so the player can live operations-related outcomes feel intentional and learnable. |
| SS-3302 | declare data ownership | Owned by `gameplay/live-operations/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-3303 | document tuning variables | All tunables in `config/live-operations.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-3304 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-3305 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-3306 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-3307 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-3308 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-3309 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-3310 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-3311 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-3312 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-3313 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-3314 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-3315 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-3316 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-3317 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-3318 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-3319 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-3320 | set performance budget | Listed in `config/perf-budgets.json` under `live-operations`; CI gate. |
| SS-3321 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-3322 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-3323 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-3324 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-3325 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-3326 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-3327 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-3328 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-3329 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-3330 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-3331 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-3332 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-3333 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-3334 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-3335 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-3336 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-3337 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-3338 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-3339 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-3340 | define error message | Localized, actionable, never reveals internals. |
| SS-3341 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-3342 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-3343 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-3344 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-3345 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-3346 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-3347 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-3348 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-3349 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-3350 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-3351 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-3352 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-3353 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-3354 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-3355 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-3356 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-3357 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-3358 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-3359 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-3360 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-3361 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-3362 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-3363 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-3364 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-3365 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-3366 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-3367 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-3368 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-3369 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-3370 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-3371 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-3372 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-3373 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-3374 | define base reaction | Settlement morale/raid risk updated. |
| SS-3375 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-3376 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-3377 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-3378 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-3379 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-3380 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-3381 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-3382 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-3383 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-3384 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-3385 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-3386 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-3387 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-3388 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-3389 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-3390 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-3391 | define asset naming | `live-operations_<type>_<variant>_<lod>` per asset spec doc. |
| SS-3392 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-3393 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-3394 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-3395 | define event bus message | `live_operations_*` namespace; typed payloads; documented. |
| SS-3396 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-3397 | define logging category | `live-operations` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-3398 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-3399 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-3400 | define sign-off owner | Lead of the Live Operations pod; cross-signed by QA + Production. |
