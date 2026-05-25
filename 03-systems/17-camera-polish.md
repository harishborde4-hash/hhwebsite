# Camera Polish — System Specification

_Covers SS-1601 through SS-1700: the canonical 100-axis spec for the Camera Polish subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-1601 | define player-facing goal | `Camera Polish` exists so the player can camera polish-related outcomes feel intentional and learnable. |
| SS-1602 | declare data ownership | Owned by `gameplay/camera-polish/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-1603 | document tuning variables | All tunables in `config/camera-polish.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-1604 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-1605 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-1606 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-1607 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-1608 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-1609 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-1610 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-1611 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-1612 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-1613 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-1614 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-1615 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-1616 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-1617 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-1618 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-1619 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-1620 | set performance budget | Listed in `config/perf-budgets.json` under `camera-polish`; CI gate. |
| SS-1621 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-1622 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-1623 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-1624 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-1625 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-1626 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-1627 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-1628 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-1629 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-1630 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-1631 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-1632 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-1633 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-1634 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-1635 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-1636 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-1637 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-1638 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-1639 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-1640 | define error message | Localized, actionable, never reveals internals. |
| SS-1641 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-1642 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-1643 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-1644 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-1645 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-1646 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-1647 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-1648 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-1649 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-1650 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-1651 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-1652 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-1653 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-1654 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-1655 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-1656 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-1657 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-1658 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-1659 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-1660 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-1661 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-1662 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-1663 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-1664 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-1665 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-1666 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-1667 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-1668 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-1669 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-1670 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-1671 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-1672 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-1673 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-1674 | define base reaction | Settlement morale/raid risk updated. |
| SS-1675 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-1676 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-1677 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-1678 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-1679 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-1680 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-1681 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-1682 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-1683 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-1684 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-1685 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-1686 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-1687 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-1688 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-1689 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-1690 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-1691 | define asset naming | `camera-polish_<type>_<variant>_<lod>` per asset spec doc. |
| SS-1692 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-1693 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-1694 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-1695 | define event bus message | `camera_polish_*` namespace; typed payloads; documented. |
| SS-1696 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-1697 | define logging category | `camera-polish` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-1698 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-1699 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-1700 | define sign-off owner | Lead of the Camera Polish pod; cross-signed by QA + Production. |
