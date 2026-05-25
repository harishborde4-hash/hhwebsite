# new-game flow — Acceptance Detail

_Covers AD-0001 through AD-0033: every release-blocking acceptance row for this UI surface._

| ID | Axis | Acceptance criterion |
|---|---|---|
| AD-0001 | first-time onboarding | On first open of new-game flow, a single tooltip or step-through explains primary action; skippable; remembered. |
| AD-0002 | returning-player clarity | Reopens to last-viewed sub-tab; recent items pinned; no redundant prompts. |
| AD-0003 | empty-state copy | Localized headline + supporting line + primary action; never a blank panel. |
| AD-0004 | loading-state behavior | Spinner appears after 200 ms; skeleton rows fill before content; cancel safe. |
| AD-0005 | error-state recovery | User-facing reason + retry button; logs detail; never leaves UI broken. |
| AD-0006 | focus-order navigation | Tab/D-pad cycles logically left-to-right, top-to-bottom; wraps; visible focus ring. |
| AD-0007 | touch target spacing | Min 48 dp targets; ≥ 8 dp gap; no accidental adjacency. |
| AD-0008 | controller glyph accuracy | Glyphs match connected pad (Xbox/DualSense/Switch/generic); hot-swap re-renders. |
| AD-0009 | keyboard shortcut visibility | Shortcut hints visible when keyboard last used; tooltip on hover. |
| AD-0010 | mouse hover affordance | Hover changes cursor + brightens; tooltip after 400 ms; no flicker. |
| AD-0011 | screen-reader label | Every interactive element has a localized accessible name and role. |
| AD-0012 | colorblind readability | All meaning conveyed via shape + label, not color alone; tested under three filters. |
| AD-0013 | large-font layout | Layout reflows at 1.5× and 2× scale without overlap or clipping. |
| AD-0014 | RTL layout support | Mirrored layout in RTL locales; icons that imply direction also mirror. |
| AD-0015 | text overflow handling | Long strings ellipsize with tooltip; multi-line capped per locale. |
| AD-0016 | safe-area compliance | Respects notch/island/rounded corners on iOS/Android; ultrawide letterboxes UI. |
| AD-0017 | offline functionality | All non-networked features remain usable; networked actions show offline state. |
| AD-0018 | cloud-sync conflict | Side-by-side preview with thumbnail + timestamp; user picks; merge log saved. |
| AD-0019 | autosave timing | Autosaves on close + every 60 s edit; never blocks UI > 100 ms. |
| AD-0020 | manual-save confirmation | Save toast with success/failure + slot; failure includes retry. |
| AD-0021 | analytics opt-out | Honors the global telemetry toggle; no events fired when off. |
| AD-0022 | privacy notice | Link to privacy policy reachable in ≤ 2 taps from this surface. |
| AD-0023 | child-safety setting | When child mode is on, networked, chat, and UGC features hidden or disabled. |
| AD-0024 | low-memory response | Drops cached previews first; functional core remains. |
| AD-0025 | thermal-throttle response | Reduces animation density on this surface when thermal state is critical. |
| AD-0026 | battery-saver behavior | Caps frame rate to 30; pauses background loops; respects OS setting. |
| AD-0027 | ultrawide layout | Content anchored to safe central band; decorative columns fill margins. |
| AD-0028 | small-phone layout | All primary actions reachable in thumb-zone; nested menus collapse. |
| AD-0029 | tablet layout | Two-pane master/detail layout where applicable; uses extra width. |
| AD-0030 | foldable layout | Splits across hinge with logical pane assignment; posture-aware. |
| AD-0031 | Steam Deck layout | Controller-first; text scales for 7" 1280×800 default; trackpads supported. |
| AD-0032 | modded-content warning | Surface flags modded entries with badge; warns when actions might be mod-blocked. |
| AD-0033 | localization key coverage | 100% of strings keyed; pseudo-loc shows ≥ 30% expansion without truncation. |
