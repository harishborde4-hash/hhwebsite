# load-game flow — Acceptance Detail

_Covers AD-0034 through AD-0066: every release-blocking acceptance row for this UI surface._

| ID | Axis | Acceptance criterion |
|---|---|---|
| AD-0034 | first-time onboarding | On first open of load-game flow, a single tooltip or step-through explains primary action; skippable; remembered. |
| AD-0035 | returning-player clarity | Reopens to last-viewed sub-tab; recent items pinned; no redundant prompts. |
| AD-0036 | empty-state copy | Localized headline + supporting line + primary action; never a blank panel. |
| AD-0037 | loading-state behavior | Spinner appears after 200 ms; skeleton rows fill before content; cancel safe. |
| AD-0038 | error-state recovery | User-facing reason + retry button; logs detail; never leaves UI broken. |
| AD-0039 | focus-order navigation | Tab/D-pad cycles logically left-to-right, top-to-bottom; wraps; visible focus ring. |
| AD-0040 | touch target spacing | Min 48 dp targets; ≥ 8 dp gap; no accidental adjacency. |
| AD-0041 | controller glyph accuracy | Glyphs match connected pad (Xbox/DualSense/Switch/generic); hot-swap re-renders. |
| AD-0042 | keyboard shortcut visibility | Shortcut hints visible when keyboard last used; tooltip on hover. |
| AD-0043 | mouse hover affordance | Hover changes cursor + brightens; tooltip after 400 ms; no flicker. |
| AD-0044 | screen-reader label | Every interactive element has a localized accessible name and role. |
| AD-0045 | colorblind readability | All meaning conveyed via shape + label, not color alone; tested under three filters. |
| AD-0046 | large-font layout | Layout reflows at 1.5× and 2× scale without overlap or clipping. |
| AD-0047 | RTL layout support | Mirrored layout in RTL locales; icons that imply direction also mirror. |
| AD-0048 | text overflow handling | Long strings ellipsize with tooltip; multi-line capped per locale. |
| AD-0049 | safe-area compliance | Respects notch/island/rounded corners on iOS/Android; ultrawide letterboxes UI. |
| AD-0050 | offline functionality | All non-networked features remain usable; networked actions show offline state. |
| AD-0051 | cloud-sync conflict | Side-by-side preview with thumbnail + timestamp; user picks; merge log saved. |
| AD-0052 | autosave timing | Autosaves on close + every 60 s edit; never blocks UI > 100 ms. |
| AD-0053 | manual-save confirmation | Save toast with success/failure + slot; failure includes retry. |
| AD-0054 | analytics opt-out | Honors the global telemetry toggle; no events fired when off. |
| AD-0055 | privacy notice | Link to privacy policy reachable in ≤ 2 taps from this surface. |
| AD-0056 | child-safety setting | When child mode is on, networked, chat, and UGC features hidden or disabled. |
| AD-0057 | low-memory response | Drops cached previews first; functional core remains. |
| AD-0058 | thermal-throttle response | Reduces animation density on this surface when thermal state is critical. |
| AD-0059 | battery-saver behavior | Caps frame rate to 30; pauses background loops; respects OS setting. |
| AD-0060 | ultrawide layout | Content anchored to safe central band; decorative columns fill margins. |
| AD-0061 | small-phone layout | All primary actions reachable in thumb-zone; nested menus collapse. |
| AD-0062 | tablet layout | Two-pane master/detail layout where applicable; uses extra width. |
| AD-0063 | foldable layout | Splits across hinge with logical pane assignment; posture-aware. |
| AD-0064 | Steam Deck layout | Controller-first; text scales for 7" 1280×800 default; trackpads supported. |
| AD-0065 | modded-content warning | Surface flags modded entries with badge; warns when actions might be mod-blocked. |
| AD-0066 | localization key coverage | 100% of strings keyed; pseudo-loc shows ≥ 30% expansion without truncation. |
