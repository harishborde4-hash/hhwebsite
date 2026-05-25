# Quest Tooling — System Specification

_Covers SS-1001 through SS-1100: the canonical 100-axis spec for the Quest Tooling subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-1001 | define player-facing goal | `Quest Tooling` exists so the player can quest tooling-related outcomes feel intentional and learnable. |
| SS-1002 | declare data ownership | Owned by `gameplay/quest-tooling/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-1003 | document tuning variables | All tunables in `config/quest-tooling.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-1004 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-1005 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-1006 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-1007 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-1008 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-1009 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-1010 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-1011 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-1012 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-1013 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-1014 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-1015 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-1016 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-1017 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-1018 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-1019 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-1020 | set performance budget | Listed in `config/perf-budgets.json` under `quest-tooling`; CI gate. |
| SS-1021 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-1022 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-1023 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-1024 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-1025 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-1026 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-1027 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-1028 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-1029 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-1030 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-1031 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-1032 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-1033 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-1034 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-1035 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-1036 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-1037 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-1038 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-1039 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-1040 | define error message | Localized, actionable, never reveals internals. |
| SS-1041 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-1042 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-1043 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-1044 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-1045 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-1046 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-1047 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-1048 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-1049 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-1050 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-1051 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-1052 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-1053 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-1054 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-1055 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-1056 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-1057 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-1058 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-1059 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-1060 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-1061 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-1062 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-1063 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-1064 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-1065 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-1066 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-1067 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-1068 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-1069 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-1070 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-1071 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-1072 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-1073 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-1074 | define base reaction | Settlement morale/raid risk updated. |
| SS-1075 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-1076 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-1077 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-1078 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-1079 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-1080 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-1081 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-1082 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-1083 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-1084 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-1085 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-1086 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-1087 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-1088 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-1089 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-1090 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-1091 | define asset naming | `quest-tooling_<type>_<variant>_<lod>` per asset spec doc. |
| SS-1092 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-1093 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-1094 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-1095 | define event bus message | `quest_tooling_*` namespace; typed payloads; documented. |
| SS-1096 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-1097 | define logging category | `quest-tooling` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-1098 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-1099 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-1100 | define sign-off owner | Lead of the Quest Tooling pod; cross-signed by QA + Production. |
