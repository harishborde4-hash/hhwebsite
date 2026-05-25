# Endgame — Feature Requirements
_Covers FR-0881 through FR-0900._
### FR-0881 — mythic dungeon rotation

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *mythic dungeon rotation* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MYT`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0881.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0882 — settlement prestige project

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *settlement prestige project* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SET`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0882.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0883 — faction peace summit

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *faction peace summit* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `FAC`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0883.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0884 — world boss invasion

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *world boss invasion* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `WOR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0884.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0885 — crafting grandmaster goal

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *crafting grandmaster goal* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `CRA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0885.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0886 — legendary collection log

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *legendary collection log* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `LEG`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0886.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0887 — companion epilogue

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *companion epilogue* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `COM`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0887.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0888 — arena challenge ladder

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *arena challenge ladder* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ARE`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0888.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0889 — exploration completion map

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *exploration completion map* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `EXP`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0889.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0890 — seasonal event contract

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *seasonal event contract* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SEA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0890.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0891 — player-created bounty

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *player-created bounty* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `PLA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0891.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0892 — hardcore survival mode

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *hardcore survival mode* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `HAR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0892.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0893 — new game plus

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *new game plus* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `NEW`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0893.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0894 — cosmetic prestige

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *cosmetic prestige* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `COS`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0894.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0895 — economic trade empire

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *economic trade empire* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ECO`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0895.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0896 — base showcase sharing

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *base showcase sharing* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `BAS`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0896.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0897 — mobile short raid

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *mobile short raid* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MOB`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0897.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0898 — desktop marathon raid

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *desktop marathon raid* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `DES`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0898.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0899 — anti-burnout reward pacing

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *anti-burnout reward pacing* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ANT`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0899.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0900 — credits replay gallery

**Category:** Endgame  
**Purpose:** Give players a meaningful, discoverable interaction with *credits replay gallery* that supports the Endgame pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `CRE`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0900.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

