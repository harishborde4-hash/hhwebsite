# Design Pillars

Ten non-negotiable commitments. Every feature in this document is justified by one or more of these.

## 1. Responsive everywhere
Input-to-feedback latency is the first-class success metric on every platform. We accept lower visual fidelity before we accept input lag. Target: ≤ 50 ms perceived latency desktop, ≤ 80 ms mobile, ≤ 120 ms cloud.

## 2. Readable at a glance
Stylized realism with high-contrast silhouettes. A player must be able to tell friend from foe, intractable from decorative, and safe from hazardous **at thumbnail size on a 5" phone in sunlight**.

## 3. Offline-first
The game is a complete solo experience without a network. Co-op, cloud save, telemetry, mods, and live events are extensions that degrade gracefully.

## 4. Save trust
Saves are atomic, versioned, rotated, and recoverable. Players never lose progress because of our bugs; corrupted saves repair or roll back automatically.

## 5. Every mechanic earns its place
No filler. Each system must improve at least one of: player agency, world believability, strategic choice, emotional impact, usability, performance, or accessibility.

## 6. Accessibility is gameplay
Subtitles, remap, colorblind, motion, difficulty assist, screen-reader labels, and one-handed mobile mode are shipped on day one, not patched in.

## 7. Data-driven and modular
Tunables live in JSON/YAML, not code. Designers can ship a balance pass without an engineering build. Systems communicate via a typed event bus.

## 8. Stable frame pacing over peak FPS
We target a flat frame-time graph. Dynamic resolution, LOD, and effect scaling protect pacing on every device.

## 9. Privacy-respecting
Telemetry is opt-in, anonymized, minimized, and disclosable. Children's safety mode disables all networked features.

## 10. Maintainable for a decade
Versioned save migrations, mod sandboxing, deprecation paths, and a release checklist mean the game can ship patches and DLC for years without rewriting foundations.
