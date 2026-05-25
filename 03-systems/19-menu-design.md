# Menu Design — System Specification

_Covers SS-1801 through SS-1900: the canonical 100-axis spec for the Menu Design subsystem._

Each row binds a single design attribute to the subsystem with a one-line commitment
and a pointer to the owning artifact. Rows are filled to a production-ready level
during the subsystem's milestone; this generated form establishes coverage and IDs.

| ID | Axis | Commitment |
|---|---|---|
| SS-1801 | define player-facing goal | `Menu Design` exists so the player can menu design-related outcomes feel intentional and learnable. |
| SS-1802 | declare data ownership | Owned by `gameplay/menu-design/data/` with single-source-of-truth tables and JSON-schema validation. |
| SS-1803 | document tuning variables | All tunables in `config/menu-design.tune.json`; designer-editable, hot-reloadable in editor. |
| SS-1804 | specify editor workflow | Custom inspector with live preview; bulk-edit table; CSV round-trip. |
| SS-1805 | include debug visualization | Toggle in dev console; on-screen gizmos respect performance budget; recordable to log. |
| SS-1806 | set default values | Defaults defined in `config/defaults.json`; CI fails if missing. |
| SS-1807 | describe failure state | Surfaced as a non-blocking toast; logged to `warn` category; auto-retry where safe. |
| SS-1808 | describe recovery path | Idempotent retry; rollback to last-known-good snapshot; user-visible explanation. |
| SS-1809 | add tutorial trigger | First-use detector fires a one-shot hint with cooldown and skip-reward. |
| SS-1810 | add analytics hook | Opt-in counter + funnel step; respects privacy mode; offline-queued. |
| SS-1811 | set accessibility option | Exposed in Accessibility menu; persisted to cloud; effect previewed inline. |
| SS-1812 | set localization note | All player-facing strings keyed; translator comments included; pseudo-loc tested. |
| SS-1813 | set mobile behavior | Touch-first UI; thermal-aware tick; suspend-safe; install-size respected. |
| SS-1814 | set desktop behavior | Mouse + keyboard primary; supports ultrawide and high-refresh; benchmark covered. |
| SS-1815 | set controller behavior | Glyph-correct prompts; deadzone calibrated; hot-swap safe. |
| SS-1816 | set keyboard behavior | Every action rebindable; chord support; conflicts surfaced in UI. |
| SS-1817 | set mouse behavior | Raw input; hover affordance; right-click context where applicable. |
| SS-1818 | set touch behavior | 48 dp targets; thumb-zone aware; gesture fallback; one-handed mode safe. |
| SS-1819 | set save/load behavior | State serialized in versioned snapshot; loads idempotently; migration test covered. |
| SS-1820 | set performance budget | Listed in `config/perf-budgets.json` under `menu-design`; CI gate. |
| SS-1821 | define memory limit | Hard cap per platform tier; arena-allocated; pool size logged. |
| SS-1822 | define CPU budget | Owned and documented in the subsystem plan. |
| SS-1823 | define GPU budget | Owned and documented in the subsystem plan. |
| SS-1824 | define network budget | Bytes-per-second cap per session; deltas only; backpressure handled. |
| SS-1825 | define loading behavior | Async-loaded; placeholders during stream; teardown safe on cancel. |
| SS-1826 | define animation feedback | Anticipation/active/recovery split with audio + haptic sync points. |
| SS-1827 | define audio feedback | Layered SFX + ambient ducking; mono-compatible; captioned. |
| SS-1828 | define VFX feedback | Owned and documented in the subsystem plan. |
| SS-1829 | define haptic feedback | Light/medium/heavy curves; intensity slider; battery-aware fallback. |
| SS-1830 | define UI feedback | Owned and documented in the subsystem plan. |
| SS-1831 | define edge case | Boundary inputs (0, max, NaN, empty) explicitly handled and tested. |
| SS-1832 | define abuse case | Rate-limited; server-authoritative where relevant; exploit telemetry tagged. |
| SS-1833 | define QA scenario | Owned and documented in the subsystem plan. |
| SS-1834 | define automated test | Unit + integration coverage with deterministic seeds. |
| SS-1835 | define manual test | Checklist in QA plan; required on every milestone. |
| SS-1836 | define telemetry dashboard | Live dashboard with thresholds + alerting; owner on-call. |
| SS-1837 | define rollback plan | Feature-flag gated; instant kill-switch; safe migration on rollback. |
| SS-1838 | define content validation | CI validators check schema + cross-references; warnings block merge. |
| SS-1839 | define platform compliance | Cert requirements per platform tracked in `compliance/{slug}.md`. |
| SS-1840 | define error message | Localized, actionable, never reveals internals. |
| SS-1841 | define empty state | Helpful copy + primary action; never a blank panel. |
| SS-1842 | define disabled state | Visible greyed treatment + reason tooltip. |
| SS-1843 | define hover state | Soft brighten + cursor change; ≤ 16 ms response. |
| SS-1844 | define focused state | Visible focus ring; tabbable; screen-reader announces. |
| SS-1845 | define pressed state | Depress + tick SFX + haptic; debounced. |
| SS-1846 | define interrupted state | Cleanly aborts; partial work refunded where applicable. |
| SS-1847 | define background-app state | Autosaves within 250 ms; pauses gameplay; mutes audio. |
| SS-1848 | define offline state | Functions without network; queues sync; UI shows offline badge. |
| SS-1849 | define low-storage state | Refuses non-critical writes; surfaces explanatory dialog. |
| SS-1850 | define low-memory state | Asset purge per priority; LOD bias up; logged. |
| SS-1851 | define low-battery state | Switches to battery-saver preset; informs player. |
| SS-1852 | define high-latency state | Client-side prediction degrades gracefully; rubber-banding capped. |
| SS-1853 | define corrupted-data state | Detected via checksum; auto-repair or rollback; user notified. |
| SS-1854 | define incompatible-version state | Migration runs; if impossible, read-only mode with export option. |
| SS-1855 | define modded-content state | Flagged in UI; sandboxed; achievements still earnable per policy. |
| SS-1856 | define parental-control state | Honors OS-level controls; disables networked features as configured. |
| SS-1857 | define privacy setting | Opt-in by default off; per-feature toggles; data export/delete supported. |
| SS-1858 | define difficulty scaling | Independent sliders feed this subsystem; no hidden global multiplier. |
| SS-1859 | define exploit prevention | Server validates state transitions; client-only paths logged. |
| SS-1860 | define balancing method | Driven by telemetry + designer review every milestone. |
| SS-1861 | define content pacing | Beat sheet drives unlock cadence; anti-burnout rules enforced. |
| SS-1862 | define emotional beat | Anchored to narrative pillar; tracked in story map. |
| SS-1863 | define world reaction | Environment NPCs/weather/economy respond per reaction table. |
| SS-1864 | define NPC reaction | Owned and documented in the subsystem plan. |
| SS-1865 | define companion reaction | Companion approval +/- per loyalty rules; surfaced in journal. |
| SS-1866 | define faction reaction | Reputation delta applied; alliance/hostility recomputed. |
| SS-1867 | define economy reaction | Price/supply curves nudged; logged for inflation alerts. |
| SS-1868 | define weather reaction | Local biome weather state may shift; respects forecast UI. |
| SS-1869 | define time-of-day reaction | Schedule-aware; night variants used after dusk. |
| SS-1870 | define biome reaction | Biome modifier table applied; ambient audio re-mixed. |
| SS-1871 | define combat reaction | AI alertness, music stem, and target priority updated. |
| SS-1872 | define stealth reaction | Detection thresholds and patrol memory updated. |
| SS-1873 | define crafting reaction | Recipe availability or quality bonus may shift. |
| SS-1874 | define base reaction | Settlement morale/raid risk updated. |
| SS-1875 | define vehicle reaction | Vehicle handling/fuel/damage state may shift. |
| SS-1876 | define boss reaction | Phase triggers or arena hazards may activate. |
| SS-1877 | define dungeon reaction | Room grammar weights or trap density may shift. |
| SS-1878 | define multiplayer reaction | State synced via authoritative host; per-player deltas resolved. |
| SS-1879 | define endgame reaction | Counts toward prestige / collection / endgame ledger. |
| SS-1880 | define onboarding reaction | First-time path may unlock a guided variant. |
| SS-1881 | define patch compatibility | Backwards-compatible serialization; deprecated fields kept one minor version. |
| SS-1882 | define save migration | Per-version migrator with snapshot test; CI gate. |
| SS-1883 | define mod migration | Mod API versioned; deprecation warnings in editor; auto-fix where possible. |
| SS-1884 | define crossplay rule | Permitted when input parity verified; opt-out per player. |
| SS-1885 | define cloud-sync rule | Last-write-wins with conflict UI; manual merge option. |
| SS-1886 | define anti-cheat rule | Server-authoritative; client deltas rate-limited. |
| SS-1887 | define moderation rule | Reportable; audit-logged; reversible by mods. |
| SS-1888 | define crash-report rule | Opt-in; symbolicated; PII-scrubbed. |
| SS-1889 | define build-pipeline rule | Reproducible from commit + content lock; CI artifact attested. |
| SS-1890 | define certification rule | Maps to platform cert checklist; gates submission. |
| SS-1891 | define asset naming | `menu-design_<type>_<variant>_<lod>` per asset spec doc. |
| SS-1892 | define prefab structure | Composition over inheritance; data + script split; lint-checked. |
| SS-1893 | define scene hierarchy | Flat root with grouping nodes; no scene-global singletons. |
| SS-1894 | define script interface | Pure functions over component queries; no static state in hot paths. |
| SS-1895 | define event bus message | `menu_design_*` namespace; typed payloads; documented. |
| SS-1896 | define config schema | JSON-schema in `schemas/`; CI validates content; editor auto-completes. |
| SS-1897 | define logging category | `menu-design` category; levels trace/debug/info/warn/error; rate-limited. |
| SS-1898 | define warning threshold | Per-metric thresholds in dashboard; pager only on sustained breach. |
| SS-1899 | define acceptance criteria | Definition-of-done in QA plan; covers happy + edge + abuse paths. |
| SS-1900 | define sign-off owner | Lead of the Menu Design pod; cross-signed by QA + Production. |
