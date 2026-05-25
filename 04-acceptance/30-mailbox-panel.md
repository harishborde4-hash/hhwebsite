# mailbox panel — Acceptance Detail

_Covers AD-0958 through AD-0990: every release-blocking acceptance row for this UI surface._

| ID | Axis | Acceptance criterion |
|---|---|---|
| AD-0958 | first-time onboarding | On first open of mailbox panel, a single tooltip or step-through explains primary action; skippable; remembered. |
| AD-0959 | returning-player clarity | Reopens to last-viewed sub-tab; recent items pinned; no redundant prompts. |
| AD-0960 | empty-state copy | Localized headline + supporting line + primary action; never a blank panel. |
| AD-0961 | loading-state behavior | Spinner appears after 200 ms; skeleton rows fill before content; cancel safe. |
| AD-0962 | error-state recovery | User-facing reason + retry button; logs detail; never leaves UI broken. |
| AD-0963 | focus-order navigation | Tab/D-pad cycles logically left-to-right, top-to-bottom; wraps; visible focus ring. |
| AD-0964 | touch target spacing | Min 48 dp targets; ≥ 8 dp gap; no accidental adjacency. |
| AD-0965 | controller glyph accuracy | Glyphs match connected pad (Xbox/DualSense/Switch/generic); hot-swap re-renders. |
| AD-0966 | keyboard shortcut visibility | Shortcut hints visible when keyboard last used; tooltip on hover. |
| AD-0967 | mouse hover affordance | Hover changes cursor + brightens; tooltip after 400 ms; no flicker. |
| AD-0968 | screen-reader label | Every interactive element has a localized accessible name and role. |
| AD-0969 | colorblind readability | All meaning conveyed via shape + label, not color alone; tested under three filters. |
| AD-0970 | large-font layout | Layout reflows at 1.5× and 2× scale without overlap or clipping. |
| AD-0971 | RTL layout support | Mirrored layout in RTL locales; icons that imply direction also mirror. |
| AD-0972 | text overflow handling | Long strings ellipsize with tooltip; multi-line capped per locale. |
| AD-0973 | safe-area compliance | Respects notch/island/rounded corners on iOS/Android; ultrawide letterboxes UI. |
| AD-0974 | offline functionality | All non-networked features remain usable; networked actions show offline state. |
| AD-0975 | cloud-sync conflict | Side-by-side preview with thumbnail + timestamp; user picks; merge log saved. |
| AD-0976 | autosave timing | Autosaves on close + every 60 s edit; never blocks UI > 100 ms. |
| AD-0977 | manual-save confirmation | Save toast with success/failure + slot; failure includes retry. |
| AD-0978 | analytics opt-out | Honors the global telemetry toggle; no events fired when off. |
| AD-0979 | privacy notice | Link to privacy policy reachable in ≤ 2 taps from this surface. |
| AD-0980 | child-safety setting | When child mode is on, networked, chat, and UGC features hidden or disabled. |
| AD-0981 | low-memory response | Drops cached previews first; functional core remains. |
| AD-0982 | thermal-throttle response | Reduces animation density on this surface when thermal state is critical. |
| AD-0983 | battery-saver behavior | Caps frame rate to 30; pauses background loops; respects OS setting. |
| AD-0984 | ultrawide layout | Content anchored to safe central band; decorative columns fill margins. |
| AD-0985 | small-phone layout | All primary actions reachable in thumb-zone; nested menus collapse. |
| AD-0986 | tablet layout | Two-pane master/detail layout where applicable; uses extra width. |
| AD-0987 | foldable layout | Splits across hinge with logical pane assignment; posture-aware. |
| AD-0988 | Steam Deck layout | Controller-first; text scales for 7" 1280×800 default; trackpads supported. |
| AD-0989 | modded-content warning | Surface flags modded entries with badge; warns when actions might be mod-blocked. |
| AD-0990 | localization key coverage | 100% of strings keyed; pseudo-loc shows ≥ 30% expansion without truncation. |
