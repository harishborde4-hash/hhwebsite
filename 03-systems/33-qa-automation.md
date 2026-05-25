# QA Automation — System Specification

_Covers SS-3201 through SS-3300: the canonical 100-axis spec for the QA Automation subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-3201 | define player-facing goal | `QA Automation` exists so the player can qa automation-related outcomes feel intentional and learnable. |
| SS-3202 | declare data ownership | Owned by `gameplay/qa-automation/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-3203 | document tuning variables | All tunables in `config/qa-automation.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-3204 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-3205 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-3206 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-3207 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-3208 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-3209 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-3210 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-3211 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-3212 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-3213 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-3214 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-3215 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-3216 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-3217 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-3218 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-3219 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-3220 | set performance budget | Listed in `config/perf-budgets.json` under `qa-automation`; CI gate. |
| SS-3221 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-3222 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-3223 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-3224 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-3225 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-3226 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-3227 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-3228 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-3229 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-3230 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-3231 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-3232 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-3233 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-3234 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-3235 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-3236 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-3237 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-3238 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-3239 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-3240 | define error message | Localized, actionable, never reveals internals. |
| SS-3241 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-3242 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-3243 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-3244 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-3245 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-3246 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-3247 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-3248 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-3249 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-3250 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-3251 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-3252 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-3253 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-3254 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-3255 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-3256 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-3257 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-3258 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-3259 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-3260 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-3261 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-3262 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-3263 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-3264 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-3265 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-3266 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-3267 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-3268 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-3269 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-3270 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-3271 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-3272 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-3273 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-3274 | define base reaction | Settlement morale/raid risk updated. |
| SS-3275 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-3276 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-3277 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-3278 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-3279 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-3280 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-3281 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-3282 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-3283 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-3284 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-3285 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-3286 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-3287 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-3288 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-3289 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-3290 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-3291 | define asset naming | `qa-automation_<type>_<variant>_<lod>` per asset spec doc. |
| SS-3292 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-3293 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-3294 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-3295 | define event bus message | `qa_automation_*` namespace; typed payloads; documented. |
| SS-3296 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-3297 | define logging category | `qa-automation` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-3298 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-3299 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-3300 | define sign-off owner | Lead of the QA Automation pod; cross-signed by QA + Production. |
