# Testing — Feature Requirements
_Covers FR-0821 through FR-0840._
### FR-0821 — unit test harness

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *unit test harness* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `UNI`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0821.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0822 — integration quest test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *integration quest test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `INT`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0822.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0823 — combat smoke test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *combat smoke test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0823.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0824 — crafting regression test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *crafting regression test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0824.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0825 — save migration test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *save migration test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SAV`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0825.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0826 — mobile background test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *mobile background test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0826.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0827 — desktop fullscreen test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *desktop fullscreen test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0827.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0828 — accessibility audit

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *accessibility audit* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ACC`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0828.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0829 — localization pseudo test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *localization pseudo test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `LOC`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0829.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0830 — network reconnect test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *network reconnect test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `NET`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0830.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0831 — performance benchmark

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *performance benchmark* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `PER`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0831.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0832 — memory leak test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *memory leak test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MEM`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0832.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0833 — AI fairness test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *AI fairness test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `AI`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0833.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0834 — economy exploit test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *economy exploit test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0834.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0835 — base placement test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *base placement test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0835.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0836 — inventory corruption test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *inventory corruption test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `INV`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0836.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0837 — controller navigation test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *controller navigation test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `CON`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0837.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0838 — touch gesture test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *touch gesture test* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `TOU`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0838.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0839 — crash recovery test

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *crash recovery test* that supports the Testing pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0839.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0840 — release checklist

**Category:** Testing  
**Purpose:** Give players a meaningful, discoverable interaction with *release checklist* that supports the Testing pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `REL`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0840.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

