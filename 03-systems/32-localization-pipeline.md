# Localization Pipeline — System Specification

_Covers SS-3101 through SS-3200: the canonical 100-axis spec for the Localization Pipeline subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-3101 | define player-facing goal | `Localization Pipeline` exists so the player can localization pipeline-related outcomes feel intentional and learnable. |
| SS-3102 | declare data ownership | Owned by `gameplay/localization-pipeline/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-3103 | document tuning variables | All tunables in `config/localization-pipeline.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-3104 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-3105 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-3106 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-3107 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-3108 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-3109 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-3110 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-3111 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-3112 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-3113 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-3114 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-3115 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-3116 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-3117 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-3118 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-3119 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-3120 | set performance budget | Listed in `config/perf-budgets.json` under `localization-pipeline`; CI gate. |
| SS-3121 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-3122 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-3123 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-3124 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-3125 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-3126 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-3127 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-3128 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-3129 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-3130 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-3131 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-3132 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-3133 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-3134 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-3135 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-3136 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-3137 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-3138 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-3139 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-3140 | define error message | Localized, actionable, never reveals internals. |
| SS-3141 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-3142 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-3143 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-3144 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-3145 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-3146 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-3147 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-3148 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-3149 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-3150 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-3151 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-3152 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-3153 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-3154 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-3155 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-3156 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-3157 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-3158 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-3159 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-3160 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-3161 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-3162 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-3163 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-3164 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-3165 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-3166 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-3167 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-3168 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-3169 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-3170 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-3171 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-3172 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-3173 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-3174 | define base reaction | Settlement morale/raid risk updated. |
| SS-3175 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-3176 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-3177 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-3178 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-3179 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-3180 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-3181 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-3182 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-3183 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-3184 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-3185 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-3186 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-3187 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-3188 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-3189 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-3190 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-3191 | define asset naming | `localization-pipeline_<type>_<variant>_<lod>` per asset spec doc. |
| SS-3192 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-3193 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-3194 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-3195 | define event bus message | `localization_pipeline_*` namespace; typed payloads; documented. |
| SS-3196 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-3197 | define logging category | `localization-pipeline` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-3198 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-3199 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-3200 | define sign-off owner | Lead of the Localization Pipeline pod; cross-signed by QA + Production. |
