# Haptic Pipeline — System Specification

_Covers SS-2101 through SS-2200: the canonical 100-axis spec for the Haptic Pipeline subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-2101 | define player-facing goal | `Haptic Pipeline` exists so the player can haptic pipeline-related outcomes feel intentional and learnable. |
| SS-2102 | declare data ownership | Owned by `gameplay/haptic-pipeline/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-2103 | document tuning variables | All tunables in `config/haptic-pipeline.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-2104 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-2105 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-2106 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-2107 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-2108 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-2109 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-2110 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-2111 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-2112 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-2113 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-2114 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-2115 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-2116 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-2117 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-2118 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-2119 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-2120 | set performance budget | Listed in `config/perf-budgets.json` under `haptic-pipeline`; CI gate. |
| SS-2121 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-2122 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-2123 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-2124 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-2125 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-2126 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-2127 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-2128 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-2129 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-2130 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-2131 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-2132 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-2133 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-2134 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-2135 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-2136 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-2137 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-2138 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-2139 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-2140 | define error message | Localized, actionable, never reveals internals. |
| SS-2141 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-2142 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-2143 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-2144 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-2145 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-2146 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-2147 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-2148 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-2149 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-2150 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-2151 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-2152 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-2153 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-2154 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-2155 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-2156 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-2157 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-2158 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-2159 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-2160 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-2161 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-2162 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-2163 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-2164 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-2165 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-2166 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-2167 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-2168 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-2169 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-2170 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-2171 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-2172 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-2173 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-2174 | define base reaction | Settlement morale/raid risk updated. |
| SS-2175 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-2176 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-2177 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-2178 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-2179 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-2180 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-2181 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-2182 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-2183 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-2184 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-2185 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-2186 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-2187 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-2188 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-2189 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-2190 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-2191 | define asset naming | `haptic-pipeline_<type>_<variant>_<lod>` per asset spec doc. |
| SS-2192 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-2193 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-2194 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-2195 | define event bus message | `haptic_pipeline_*` namespace; typed payloads; documented. |
| SS-2196 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-2197 | define logging category | `haptic-pipeline` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-2198 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-2199 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-2200 | define sign-off owner | Lead of the Haptic Pipeline pod; cross-signed by QA + Production. |
