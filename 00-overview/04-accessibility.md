# Accessibility Commitments

Aetherbound Frontiers ships these features on day one. They are designed into every system, not bolted on.

## Visual
- Subtitle size, background opacity, speaker color, speaker name.
- Three colorblind palettes (protan, deutan, tritan) + custom HSV remap.
- High-contrast UI theme; large-font mode (1.5× and 2×).
- Reduce motion: caps camera shake, removes parallax, slows UI transitions.
- Photosensitivity mode: caps flash frequency to WCAG 2.3.1.
- Reduce VFX: opt-out of bloom, screen-space distortion, post effects.

## Audio
- Per-channel volumes (master, music, dialogue, SFX, ambient, UI).
- Mono compatibility mode for single-earbud users.
- Audio captions for non-dialogue cues (footsteps, weather, hazards).
- Dynamic-range slider (cinema / standard / night).

## Input
- Full rebind for every action, every device.
- Hold-to-toggle for sprint, crouch, aim, block.
- Auto-sprint, auto-run, auto-aim assist with strength slider.
- One-handed mobile layout (left or right thumb).
- Left-handed swap (controller and touch).
- QTE auto-complete option.
- Aim assist magnetism: off / low / medium / high / heavy.

## Cognitive
- Difficulty assist menu (separate sliders for damage taken, damage dealt, stamina, enemy aggression, puzzle hint frequency).
- Spoiler-free hint system with cooldown.
- Navigation guidance (audio breadcrumbs, visible path, autopath companion).
- Cognitive load presets: minimal HUD, recommended, full.

## Haptics
- Intensity slider 0–100% with separate light/heavy curves.
- Battery-saver haptic mode.
- Disable entirely.

## Compliance
- WCAG 2.1 AA for menu surfaces.
- Xbox Accessibility Guidelines (XAG) compliance.
- Game Accessibility Guidelines (GAG) Bronze/Silver/Gold checklist tracked in `release-checklist.md`.

## Settings persistence
All accessibility settings sync to cloud and apply before the first input prompt on a new device.
