# Desktop Optimization — System Specification

_Covers SS-2901 through SS-3000: the canonical 100-axis spec for the Desktop Optimization subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-2901 | define player-facing goal | `Desktop Optimization` exists so the player can desktop optimization-related outcomes feel intentional and learnable. |
| SS-2902 | declare data ownership | Owned by `gameplay/desktop-optimization/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-2903 | document tuning variables | All tunables in `config/desktop-optimization.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-2904 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-2905 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-2906 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-2907 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-2908 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-2909 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-2910 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-2911 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-2912 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-2913 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-2914 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-2915 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-2916 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-2917 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-2918 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-2919 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-2920 | set performance budget | Listed in `config/perf-budgets.json` under `desktop-optimization`; CI gate. |
| SS-2921 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-2922 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-2923 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-2924 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-2925 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-2926 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-2927 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-2928 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-2929 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-2930 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-2931 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-2932 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-2933 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-2934 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-2935 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-2936 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-2937 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-2938 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-2939 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-2940 | define error message | Localized, actionable, never reveals internals. |
| SS-2941 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-2942 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-2943 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-2944 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-2945 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-2946 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-2947 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-2948 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-2949 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-2950 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-2951 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-2952 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-2953 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-2954 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-2955 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-2956 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-2957 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-2958 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-2959 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-2960 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-2961 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-2962 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-2963 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-2964 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-2965 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-2966 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-2967 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-2968 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-2969 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-2970 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-2971 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-2972 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-2973 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-2974 | define base reaction | Settlement morale/raid risk updated. |
| SS-2975 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-2976 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-2977 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-2978 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-2979 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-2980 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-2981 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-2982 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-2983 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-2984 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-2985 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-2986 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-2987 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-2988 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-2989 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-2990 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-2991 | define asset naming | `desktop-optimization_<type>_<variant>_<lod>` per asset spec doc. |
| SS-2992 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-2993 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-2994 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-2995 | define event bus message | `desktop_optimization_*` namespace; typed payloads; documented. |
| SS-2996 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-2997 | define logging category | `desktop-optimization` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-2998 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-2999 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-3000 | define sign-off owner | Lead of the Desktop Optimization pod; cross-signed by QA + Production. |
