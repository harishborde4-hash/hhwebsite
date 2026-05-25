# Biome Authoring — System Specification

_Covers SS-0201 through SS-0300: the canonical 100-axis spec for the Biome Authoring subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-0201 | define player-facing goal | `Biome Authoring` exists so the player can biome authoring-related outcomes feel intentional and learnable. |
| SS-0202 | declare data ownership | Owned by `gameplay/biome-authoring/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-0203 | document tuning variables | All tunables in `config/biome-authoring.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-0204 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-0205 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-0206 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-0207 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-0208 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-0209 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-0210 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-0211 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-0212 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-0213 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-0214 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-0215 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-0216 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-0217 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-0218 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-0219 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-0220 | set performance budget | Listed in `config/perf-budgets.json` under `biome-authoring`; CI gate. |
| SS-0221 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-0222 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-0223 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-0224 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-0225 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-0226 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-0227 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-0228 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-0229 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-0230 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-0231 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-0232 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-0233 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-0234 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-0235 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-0236 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-0237 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-0238 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-0239 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-0240 | define error message | Localized, actionable, never reveals internals. |
| SS-0241 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-0242 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-0243 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-0244 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-0245 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-0246 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-0247 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-0248 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-0249 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-0250 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-0251 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-0252 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-0253 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-0254 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-0255 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-0256 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-0257 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-0258 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-0259 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-0260 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-0261 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-0262 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-0263 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-0264 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-0265 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-0266 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-0267 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-0268 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-0269 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-0270 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-0271 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-0272 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-0273 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-0274 | define base reaction | Settlement morale/raid risk updated. |
| SS-0275 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-0276 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-0277 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-0278 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-0279 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-0280 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-0281 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-0282 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-0283 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-0284 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-0285 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-0286 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-0287 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-0288 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-0289 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-0290 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-0291 | define asset naming | `biome-authoring_<type>_<variant>_<lod>` per asset spec doc. |
| SS-0292 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-0293 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-0294 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-0295 | define event bus message | `biome_authoring_*` namespace; typed payloads; documented. |
| SS-0296 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-0297 | define logging category | `biome-authoring` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-0298 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-0299 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-0300 | define sign-off owner | Lead of the Biome Authoring pod; cross-signed by QA + Production. |
