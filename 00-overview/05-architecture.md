# Tech Architecture Overview

## Layers (top → bottom)

```
+-------------------------------------------------------+
|  Presentation: HUD, Menus, Cinematic, Photo Mode       |
+-------------------------------------------------------+
|  Gameplay Systems: Combat, Survival, Crafting,         |
|  Settlement, Quest, Faction, Companion, AI, Weather    |
+-------------------------------------------------------+
|  Simulation Core: ECS, Event Bus, Tick Scheduler,      |
|  Save Service, Time Service, World Streamer            |
+-------------------------------------------------------+
|  Platform Services: Input, Audio, Haptics, Storage,    |
|  Network, Telemetry, Entitlement, Crash Reporter       |
+-------------------------------------------------------+
|  Engine: Renderer, Physics, Animation, Audio Engine    |
+-------------------------------------------------------+
```

## Core principles

- **ECS for runtime entities.** Components are plain data; systems are pure functions over component queries. No virtual inheritance in hot paths.
- **Data-driven content.** Items, recipes, enemies, biomes, quests, dialogue, balance tables — all JSON/YAML with JSON-schema validation in CI.
- **Typed event bus.** Cross-system communication uses strongly-typed events. No system holds a reference to another system.
- **Deterministic core loop.** The simulation tick is deterministic given inputs + seed. This enables replay, rollback co-op, and debug reproduction.
- **Streaming world.** Cells of 256 m × 256 m, async-loaded, with LOD rings at 4/8/16 cells. Mobile uses 3 rings, desktop 5.
- **Save snapshots.** A save is a serialized ECS snapshot + delta journal. Atomic write via temp-file-then-rename. Three rotating slots per save.
- **Per-system performance budgets** in `config/perf-budgets.json`. CI fails if a system exceeds its budget in the benchmark scene.

## Module boundaries

- `engine/` — rendering, physics, animation, audio. Platform-agnostic, no game logic.
- `core/` — ECS, events, time, save, streaming.
- `platform/` — concrete implementations per OS/store.
- `gameplay/` — one folder per category in this GDD (combat, crafting, etc.).
- `content/` — data, prefabs, scenes, localized strings.
- `mods/` — sandboxed user content, signature-checked.
- `tools/` — editors, validators, benchmark runners.
- `tests/` — unit, integration, performance, accessibility, localization.

## Networking model

Authoritative host for co-op (drop-in, max 4 players). Client prediction + server reconciliation for movement. Quest state, inventory, and economy are host-owned. Host migration on disconnect preserves world state.

## Modding sandbox

Mods run in a restricted Lua/JS-like VM with explicit capability grants (filesystem, network, persistence). Native code mods are disallowed on mobile and console.
