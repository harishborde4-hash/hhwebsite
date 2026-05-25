# User Interface — Feature Requirements
_Covers FR-0561 through FR-0580._
### FR-0561 — adaptive HUD density

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *adaptive HUD density* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ADA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0561.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0562 — mini-map zoom

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *mini-map zoom* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `MIN`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0562.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0563 — quest tracker collapse

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *quest tracker collapse* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `QUE`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0563.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0564 — damage number option

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *damage number option* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `DAM`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0564.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0565 — status effect row

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *status effect row* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `STA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0565.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0566 — radial menu touch

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *radial menu touch* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `RAD`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0566.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0567 — keyboard shortcut labels

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *keyboard shortcut labels* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `KEY`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0567.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0568 — controller glyph swap

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *controller glyph swap* that supports the User Interface pillar.  
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
**QA test:** Automated smoke + manual checklist `qa/feature/0568.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0569 — tooltip compare panel

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *tooltip compare panel* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `TOO`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0569.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0570 — notification stack limit

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *notification stack limit* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `NOT`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0570.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0571 — safe-area layout

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *safe-area layout* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SAF`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0571.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0572 — large-font mode

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *large-font mode* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `LAR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0572.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0573 — colorblind palette

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *colorblind palette* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `COL`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0573.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0574 — screen-reader labels

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *screen-reader labels* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `SCR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0574.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0575 — drag alternative buttons

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *drag alternative buttons* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `DRA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0575.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0576 — error toast clarity

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *error toast clarity* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `ERR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0576.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0577 — loading tip context

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *loading tip context* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `LOA`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0577.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0578 — first-run setup wizard

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *first-run setup wizard* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `FIR`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0578.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0579 — UI theme customization

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *UI theme customization* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `UI`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0579.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

### FR-0580 — UI performance budget

**Category:** User Interface  
**Purpose:** Give players a meaningful, discoverable interaction with *UI performance budget* that supports the User Interface pillar.  
**Discovery:** Surfaced via world hint, codex entry, NPC bark, or contextual prompt the first time the player is within range and meets the prerequisites.  
**Desktop controls:** Default keybind from `config/input.kbm.json` for `UI`; rebindable; mouse hover affordance on interactable.  
**Mobile controls:** Context button appears in thumb-zone with 48 dp target; long-press for variants; gesture fallback per `input.touch.json`.  
**Controller:** Face button A confirm / X variant; glyphs auto-swap per detected pad.  
**UI state:** Idle → highlighted → focused → engaged → resolved; error toast on failed prerequisite.  
**Audio cue:** Soft confirm tick on focus; layered diegetic SFX on engage; resolution stinger on success.  
**Animation response:** Character interact anim (~0.4 s) with anticipation/active/recovery split; root motion locked if interactable is static.  
**VFX response:** Subtle outline shimmer on focus; particles on engage scaled by quality preset.  
**Save persistence:** Result stored in world state delta; idempotent across reloads; survives save migration.  
**Accessibility fallback:** Hold-to-toggle option; outline boost; audio caption; one-handed mobile path; QTE auto-complete eligible.  
**Performance budget:** ≤ 0.1 ms CPU / ≤ 32 KB GPU per active instance; pooled; LOD beyond 30 m.  
**QA test:** Automated smoke + manual checklist `qa/feature/0580.md`; covers happy path, prerequisite fail, save/load mid-action, controller hot-swap.  
**Failure recovery:** Any interrupted state auto-resets within 2 s; save snapshot guards against corruption.

