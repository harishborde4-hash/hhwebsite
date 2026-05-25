# world map — Acceptance Detail

_Covers AD-0100 through AD-0132: every release-blocking acceptance row for this UI surface._

| ID | Axis | Acceptance criterion |
|---|---|---|
| AD-0100 | first-time onboarding | On first open of world map, a single tooltip or step-through explains primary action; skippable; remembered. |
| AD-0101 | returning-player clarity | Reopens to last-viewed sub-tab; recent items pinned; no redundant prompts. |
| AD-0102 | empty-state copy | Localized headline + supporting line + primary action; never a blank panel. |
| AD-0103 | loading-state behavior | Spinner appears after 200 ms; skeleton rows fill before content; cancel safe. |
| AD-0104 | error-state recovery | User-facing reason + retry button; logs detail; never leaves UI broken. |
| AD-0105 | focus-order navigation | Tab/D-pad cycles logically left-to-right, top-to-bottom; wraps; visible focus ring. |
| AD-0106 | touch target spacing | Min 48 dp targets; ≥ 8 dp gap; no accidental adjacency. |
| AD-0107 | controller glyph accuracy | Glyphs match connected pad (Xbox/DualSense/Switch/generic); hot-swap re-renders. |
| AD-0108 | keyboard shortcut visibility | Shortcut hints visible when keyboard last used; tooltip on hover. |
| AD-0109 | mouse hover affordance | Hover changes cursor + brightens; tooltip after 400 ms; no flicker. |
| AD-0110 | screen-reader label | Every interactive element has a localized accessible name and role. |
| AD-0111 | colorblind readability | All meaning conveyed via shape + label, not color alone; tested under three filters. |
| AD-0112 | large-font layout | Layout reflows at 1.5× and 2× scale without overlap or clipping. |
| AD-0113 | RTL layout support | Mirrored layout in RTL locales; icons that imply direction also mirror. |
| AD-0114 | text overflow handling | Long strings ellipsize with tooltip; multi-line capped per locale. |
| AD-0115 | safe-area compliance | Respects notch/island/rounded corners on iOS/Android; ultrawide letterboxes UI. |
| AD-0116 | offline functionality | All non-networked features remain usable; networked actions show offline state. |
| AD-0117 | cloud-sync conflict | Side-by-side preview with thumbnail + timestamp; user picks; merge log saved. |
| AD-0118 | autosave timing | Autosaves on close + every 60 s edit; never blocks UI > 100 ms. |
| AD-0119 | manual-save confirmation | Save toast with success/failure + slot; failure includes retry. |
| AD-0120 | analytics opt-out | Honors the global telemetry toggle; no events fired when off. |
| AD-0121 | privacy notice | Link to privacy policy reachable in ≤ 2 taps from this surface. |
| AD-0122 | child-safety setting | When child mode is on, networked, chat, and UGC features hidden or disabled. |
| AD-0123 | low-memory response | Drops cached previews first; functional core remains. |
| AD-0124 | thermal-throttle response | Reduces animation density on this surface when thermal state is critical. |
| AD-0125 | battery-saver behavior | Caps frame rate to 30; pauses background loops; respects OS setting. |
| AD-0126 | ultrawide layout | Content anchored to safe central band; decorative columns fill margins. |
| AD-0127 | small-phone layout | All primary actions reachable in thumb-zone; nested menus collapse. |
| AD-0128 | tablet layout | Two-pane master/detail layout where applicable; uses extra width. |
| AD-0129 | foldable layout | Splits across hinge with logical pane assignment; posture-aware. |
| AD-0130 | Steam Deck layout | Controller-first; text scales for 7" 1280×800 default; trackpads supported. |
| AD-0131 | modded-content warning | Surface flags modded entries with badge; warns when actions might be mod-blocked. |
| AD-0132 | localization key coverage | 100% of strings keyed; pseudo-loc shows ≥ 30% expansion without truncation. |
