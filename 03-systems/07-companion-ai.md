# Companion AI — System Specification

_Covers SS-0601 through SS-0700: the canonical 100-axis spec for the Companion AI subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-0601 | define player-facing goal | `Companion AI` exists so the player can companion ai-related outcomes feel intentional and learnable. |
| SS-0602 | declare data ownership | Owned by `gameplay/companion-ai/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-0603 | document tuning variables | All tunables in `config/companion-ai.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-0604 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-0605 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-0606 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-0607 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-0608 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-0609 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-0610 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-0611 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-0612 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-0613 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-0614 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-0615 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-0616 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-0617 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-0618 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-0619 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-0620 | set performance budget | Listed in `config/perf-budgets.json` under `companion-ai`; CI gate. |
| SS-0621 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-0622 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-0623 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-0624 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-0625 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-0626 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-0627 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-0628 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-0629 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-0630 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-0631 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-0632 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-0633 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-0634 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-0635 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-0636 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-0637 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-0638 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-0639 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-0640 | define error message | Localized, actionable, never reveals internals. |
| SS-0641 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-0642 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-0643 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-0644 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-0645 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-0646 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-0647 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-0648 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-0649 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-0650 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-0651 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-0652 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-0653 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-0654 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-0655 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-0656 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-0657 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-0658 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-0659 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-0660 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-0661 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-0662 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-0663 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-0664 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-0665 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-0666 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-0667 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-0668 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-0669 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-0670 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-0671 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-0672 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-0673 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-0674 | define base reaction | Settlement morale/raid risk updated. |
| SS-0675 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-0676 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-0677 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-0678 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-0679 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-0680 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-0681 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-0682 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-0683 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-0684 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-0685 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-0686 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-0687 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-0688 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-0689 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-0690 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-0691 | define asset naming | `companion-ai_<type>_<variant>_<lod>` per asset spec doc. |
| SS-0692 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-0693 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-0694 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-0695 | define event bus message | `companion_ai_*` namespace; typed payloads; documented. |
| SS-0696 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-0697 | define logging category | `companion-ai` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-0698 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-0699 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-0700 | define sign-off owner | Lead of the Companion AI pod; cross-signed by QA + Production. |
