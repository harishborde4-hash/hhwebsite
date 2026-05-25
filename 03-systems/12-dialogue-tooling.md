# Dialogue Tooling — System Specification

_Covers SS-1101 through SS-1200: the canonical 100-axis spec for the Dialogue Tooling subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-1101 | define player-facing goal | `Dialogue Tooling` exists so the player can dialogue tooling-related outcomes feel intentional and learnable. |
| SS-1102 | declare data ownership | Owned by `gameplay/dialogue-tooling/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-1103 | document tuning variables | All tunables in `config/dialogue-tooling.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-1104 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-1105 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-1106 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-1107 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-1108 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-1109 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-1110 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-1111 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-1112 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-1113 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-1114 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-1115 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-1116 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-1117 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-1118 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-1119 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-1120 | set performance budget | Listed in `config/perf-budgets.json` under `dialogue-tooling`; CI gate. |
| SS-1121 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-1122 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-1123 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-1124 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-1125 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-1126 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-1127 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-1128 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-1129 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-1130 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-1131 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-1132 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-1133 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-1134 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-1135 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-1136 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-1137 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-1138 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-1139 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-1140 | define error message | Localized, actionable, never reveals internals. |
| SS-1141 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-1142 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-1143 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-1144 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-1145 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-1146 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-1147 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-1148 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-1149 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-1150 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-1151 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-1152 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-1153 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-1154 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-1155 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-1156 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-1157 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-1158 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-1159 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-1160 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-1161 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-1162 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-1163 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-1164 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-1165 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-1166 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-1167 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-1168 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-1169 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-1170 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-1171 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-1172 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-1173 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-1174 | define base reaction | Settlement morale/raid risk updated. |
| SS-1175 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-1176 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-1177 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-1178 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-1179 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-1180 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-1181 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-1182 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-1183 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-1184 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-1185 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-1186 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-1187 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-1188 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-1189 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-1190 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-1191 | define asset naming | `dialogue-tooling_<type>_<variant>_<lod>` per asset spec doc. |
| SS-1192 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-1193 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-1194 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-1195 | define event bus message | `dialogue_tooling_*` namespace; typed payloads; documented. |
| SS-1196 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-1197 | define logging category | `dialogue-tooling` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-1198 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-1199 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-1200 | define sign-off owner | Lead of the Dialogue Tooling pod; cross-signed by QA + Production. |
