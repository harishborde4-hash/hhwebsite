# Aetherbound Frontiers — Game Design Document

A premium cross-platform open-world action RPG / survival / strategy / sandbox.
Targets: Windows, macOS, Linux, Steam Deck, Android (phone/tablet/foldable), iOS (iPhone/iPad), browser, and future consoles.

This GDD is split across many small markdown files so it's navigable and diff-friendly. Start with the overview, then drill into whichever category you need.

## How to read this document

- **`docs/00-overview/`** — pillars, world bible, design philosophy, glossary, and the master index.
- **`docs/01-features/`** — every numbered FEATURE REQUIREMENT (1000 items), grouped by category.
- **`docs/02-animations/`** — every numbered ANIMATION REQUIREMENT (500 items), grouped by rig/category.
- **`docs/03-systems/`** — every numbered SYSTEM SPECIFICATION (3500 items), grouped by subsystem.
- **`docs/04-acceptance/`** — every numbered ACCEPTANCE DETAIL (990 items), grouped by UI surface.

Every numbered ID from the source brief appears at least once and is addressable by anchor (e.g. `docs/01-features/01-world-geography.md#fr-0001`).

## Quick links

- [Design pillars](docs/00-overview/01-pillars.md)
- [World bible](docs/00-overview/02-world-bible.md)
- [Cross-platform strategy](docs/00-overview/03-platforms.md)
- [Accessibility commitments](docs/00-overview/04-accessibility.md)
- [Tech architecture overview](docs/00-overview/05-architecture.md)
- [Master index](docs/00-overview/99-index.md)

## Status

This document is a coverage-first first pass. Every requirement is acknowledged with a terse, consistent spec entry containing the canonical attribute set (purpose, controls, UI state, audio, VFX, save, accessibility, perf budget, QA, recovery). Production teams should expand the rows that matter most for their milestone.
