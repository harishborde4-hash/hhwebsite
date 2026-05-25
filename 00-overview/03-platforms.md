# Cross-Platform Strategy

## Tiered targets

| Tier | Devices | Frame target | Resolution | Notes |
|---|---|---|---|---|
| **A — High desktop** | RTX 3060+ / M1 Pro+ / Steam Deck OLED | 60+ fps, 120 hz unlocked | Native 1440p–4K, DLSS/FSR optional | Volumetric clouds, full dense ecosystem, ultra shadows. |
| **B — Mid desktop** | GTX 1060 / Intel Arc A380 / base M1 / Steam Deck LCD | Locked 60 fps | 1080p, dynamic | Default preset; benchmark-tuned. |
| **C — Low desktop / cloud** | Integrated GPUs, GeForce NOW basic | 30–45 fps | 900p, dynamic | Simplified VFX, shorter draw distance. |
| **D — High mobile / tablet / foldable** | iPad Pro, Galaxy S-tier, Pixel-tier | Locked 60 fps | Device-native, dynamic | Adaptive resolution, thermal-aware. |
| **E — Mid mobile** | 4-year-old midrange | Locked 30 fps | 720p, dynamic | Reduced flocking, smaller streamed radius. |
| **F — Low mobile / browser** | Entry phones, WebGL2 | Stable 30 fps | 540p, dynamic | Simplified shaders, no volumetrics, reduced AI tick. |

## Input parity

All seven input methods are first-class:

- Keyboard + mouse (raw input, rebindable, modifier chords).
- Gamepad (Xbox / DualSense / Switch Pro / generic) with hot-swap and per-controller glyph swap.
- Touch (radial, virtual stick + face buttons, customizable thumb-zone).
- Gesture (swipe, pinch, two-finger rotate; opt-in spell glyph drawing).
- Gyro micro-aim (assist layer on top of stick aim).
- Foldable (split HUD across hinge, posture-aware layout).
- Accessibility (single-switch, eye-tracking via OS, hold-to-toggle).

No mechanic is locked to a single input. Anything possible with a stick must be possible with touch and with a key, even if the ergonomics differ.

## Save & sync

- Local saves are the source of truth; cloud is a mirror.
- Schema is version-tagged; loading an older save triggers a documented migration.
- Cloud conflicts surface a side-by-side preview with thumbnail, playtime, location, and last-played timestamp.
- Mobile background suspension triggers a non-blocking autosave within 250 ms.

## Build pipeline

Single content trunk; per-platform asset variants are resolved by suffix (`_low`, `_mid`, `_high`) and feature flags. CI ships builds nightly for all six tiers from the same commit.

## Future console adaptation

Input, save, and entitlement abstractions sit behind a `PlatformService` interface so console-specific implementations (cert, achievements, party, controller, storage) drop in without touching gameplay code.
