# World Geography — Feature Requirements
_Covers FR-0001 through FR-0020._
### FR-0001 — ancient crater lake

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *ancient crater lake* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ANC`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0001.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0002 — floating basalt arch

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *floating basalt arch* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `FLO`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0002.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0003 — glacier-carved canyon

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *glacier-carved canyon* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `GLA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0003.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0004 — sunken imperial road

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *sunken imperial road* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SUN`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0004.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0005 — giant-root forest maze

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *giant-root forest maze* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `GIA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0005.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0006 — obsidian desert ridge

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *obsidian desert ridge* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `OBS`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0006.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0007 — mist-covered highland

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *mist-covered highland* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MIS`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0007.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0008 — tidal mangrove labyrinth

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *tidal mangrove labyrinth* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `TID`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0008.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0009 — crystal salt flat

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *crystal salt flat* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `CRY`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0009.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0010 — storm-split mountain pass

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *storm-split mountain pass* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `STO`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0010.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0011 — abandoned canal network

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *abandoned canal network* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ABA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0011.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0012 — volcanic glass beach

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *volcanic glass beach* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `VOL`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0012.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0013 — overgrown battlefield

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *overgrown battlefield* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `OVE`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0013.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0014 — skyfall meteor field

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *skyfall meteor field* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SKY`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0014.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0015 — hollow titan skeleton

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *hollow titan skeleton* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `HOL`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0015.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0016 — moonlit mushroom valley

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *moonlit mushroom valley* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MOO`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0016.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0017 — wind-eroded mesa

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *wind-eroded mesa* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `WIN`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0017.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0018 — hidden geothermal spring

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *hidden geothermal spring* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `HID`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0018.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0019 — river-delta trading fork

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *river-delta trading fork* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `RIV`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0019.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0020 — haunted orchard basin

**Category:** World Geography  
**Purpose:** Give players a meaningful, discoverable interaction with *haunted orchard basin* that supports the World Geography pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `HAU`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0020.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

