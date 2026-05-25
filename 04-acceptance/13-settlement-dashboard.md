# settlement dashboard — Acceptance Detail

_Covers AD-0397 through AD-0429: every release-blocking acceptance row for this UI surface._

| ID | Axis | Acceptance criterion |
|---|---|---|
| AD-0397 | first-time onboarding | On first open of settlement dashboard, a single tooltip or step-through explains primary action; skippable; remembered. |
| AD-0398 | returning-player clarity | Reopens to last-viewed sub-tab; recent items pinned; no redundant prompts. |
| AD-0399 | empty-state copy | Localized headline + supporting line + primary action; never a blank panel. |
| AD-0400 | loading-state behavior | Spinner appears after 200 ms; skeleton rows fill before content; cancel safe. |
| AD-0401 | error-state recovery | User-facing reason + retry button; logs detail; never leaves UI broken. |
| AD-0402 | focus-order navigation | Tab/D-pad cycles logically left-to-right, top-to-bottom; wraps; visible focus ring. |
| AD-0403 | touch target spacing | Min 48 dp targets; ≥ 8 dp gap; no accidental adjacency. |
| AD-0404 | controller glyph accuracy | Glyphs match connected pad (Xbox/DualSense/Switch/generic); hot-swap re-renders. |
| AD-0405 | keyboard shortcut visibility | Shortcut hints visible when keyboard last used; tooltip on hover. |
| AD-0406 | mouse hover affordance | Hover changes cursor + brightens; tooltip after 400 ms; no flicker. |
| AD-0407 | screen-reader label | Every interactive element has a localized accessible name and role. |
| AD-0408 | colorblind readability | All meaning conveyed via shape + label, not color alone; tested under three filters. |
| AD-0409 | large-font layout | Layout reflows at 1.5× and 2× scale without overlap or clipping. |
| AD-0410 | RTL layout support | Mirrored layout in RTL locales; icons that imply direction also mirror. |
| AD-0411 | text overflow handling | Long strings ellipsize with tooltip; multi-line capped per locale. |
| AD-0412 | safe-area compliance | Respects notch/island/rounded corners on iOS/Android; ultrawide letterboxes UI. |
| AD-0413 | offline functionality | All non-networked features remain usable; networked actions show offline state. |
| AD-0414 | cloud-sync conflict | Side-by-side preview with thumbnail + timestamp; user picks; merge log saved. |
| AD-0415 | autosave timing | Autosaves on close + every 60 s edit; never blocks UI > 100 ms. |
| AD-0416 | manual-save confirmation | Save toast with success/failure + slot; failure includes retry. |
| AD-0417 | analytics opt-out | Honors the global telemetry toggle; no events fired when off. |
| AD-0418 | privacy notice | Link to privacy policy reachable in ≤ 2 taps from this surface. |
| AD-0419 | child-safety setting | When child mode is on, networked, chat, and UGC features hidden or disabled. |
| AD-0420 | low-memory response | Drops cached previews first; functional core remains. |
| AD-0421 | thermal-throttle response | Reduces animation density on this surface when thermal state is critical. |
| AD-0422 | battery-saver behavior | Caps frame rate to 30; pauses background loops; respects OS setting. |
| AD-0423 | ultrawide layout | Content anchored to safe central band; decorative columns fill margins. |
| AD-0424 | small-phone layout | All primary actions reachable in thumb-zone; nested menus collapse. |
| AD-0425 | tablet layout | Two-pane master/detail layout where applicable; uses extra width. |
| AD-0426 | foldable layout | Splits across hinge with logical pane assignment; posture-aware. |
| AD-0427 | Steam Deck layout | Controller-first; text scales for 7" 1280×800 default; trackpads supported. |
| AD-0428 | modded-content warning | Surface flags modded entries with badge; warns when actions might be mod-blocked. |
| AD-0429 | localization key coverage | 100% of strings keyed; pseudo-loc shows ≥ 30% expansion without truncation. |
