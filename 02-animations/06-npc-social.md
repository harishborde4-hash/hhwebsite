# NPC Social — Animation Requirements
_Covers AR-101 through AR-120._
### AR-101 — friendly wave

**Category:** NPC Social  
**Anticipation:** ~100 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~80 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~120 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-102 — formal bow

**Category:** NPC Social  
**Anticipation:** ~117 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~103 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~133 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-103 — angry point

**Category:** NPC Social  
**Anticipation:** ~134 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~126 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~146 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-104 — fearful cower

**Category:** NPC Social  
**Anticipation:** ~151 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~149 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~159 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-105 — merchant coin count

**Category:** NPC Social  
**Anticipation:** ~168 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~172 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~172 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-106 — blacksmith hammer loop

**Category:** NPC Social  
**Anticipation:** ~185 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~195 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~185 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-107 — farmer hoe swing

**Category:** NPC Social  
**Anticipation:** ~202 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~218 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~198 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-108 — guard salute

**Category:** NPC Social  
**Anticipation:** ~219 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~241 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~211 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-109 — bard lute strum

**Category:** NPC Social  
**Anticipation:** ~236 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~264 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~224 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-110 — child hop play

**Category:** NPC Social  
**Anticipation:** ~253 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~287 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~237 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-111 — elder cane walk

**Category:** NPC Social  
**Anticipation:** ~270 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~310 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~250 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-112 — scholar book read

**Category:** NPC Social  
**Anticipation:** ~287 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~93 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~263 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-113 — healer bandage

**Category:** NPC Social  
**Anticipation:** ~304 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~116 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~276 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-114 — sailor rope coil

**Category:** NPC Social  
**Anticipation:** ~321 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~139 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~289 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-115 — cook pan flip

**Category:** NPC Social  
**Anticipation:** ~338 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~162 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~302 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-116 — miner pick swing

**Category:** NPC Social  
**Anticipation:** ~355 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~185 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~315 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-117 — priest blessing

**Category:** NPC Social  
**Anticipation:** ~372 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~208 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~128 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-118 — thief nervous glance

**Category:** NPC Social  
**Anticipation:** ~389 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~231 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~141 ms; cancellable by tier-3 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-119 — noble fan gesture

**Category:** NPC Social  
**Anticipation:** ~106 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~254 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~154 ms; cancellable by tier-1 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** On for traversal/finisher; off for combat/UI; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

### AR-120 — refugee shiver

**Category:** NPC Social  
**Anticipation:** ~123 ms wind-up frames; readable silhouette tell.  
**Active timing:** ~277 ms; hit/effect window aligned to gameplay code.  
**Recovery:** ~167 ms; cancellable by tier-2 actions only.  
**Blend parameters:** Driven by `Speed`, `Direction`, `Stance`, `Surface`, `Health01`.  
**Root motion:** Off; physics-driven; physics drives translation when disabled.  
**Interrupt rules:** Higher-priority states (hit-react, death, stagger) preempt; same-tier requeues.  
**Audio sync:** Foley + Foley-tail markers at anticipation/active/recovery; voice barks attached to active.  
**VFX sync:** Particle emitter triggers on active frame; quality-scaled.  
**Haptic sync:** Light/medium/heavy curve mapped to motion magnitude; battery-aware.  
**Mobile fallback:** Lower-bone-count rig variant; reduced secondary motion; capped at 30 fps if thermal-throttled.  
**Desktop high-quality variant:** Full secondary motion, cloth/hair sim, additive breathing.  
**Accessibility intensity:** Camera-shake, screen-flash, and motion-blur multipliers respect global reduce-motion slider.

