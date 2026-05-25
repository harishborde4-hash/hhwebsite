# Player Locomotion — Animation Requirements
_Covers AR-001 through AR-020._
### AR-001 — idle breathing loop

**Category:** Player Locomotion  
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

### AR-002 — relaxed walk start

**Category:** Player Locomotion  
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

### AR-003 — relaxed walk cycle

**Category:** Player Locomotion  
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

### AR-004 — combat walk cycle

**Category:** Player Locomotion  
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

### AR-005 — sprint acceleration

**Category:** Player Locomotion  
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

### AR-006 — sprint deceleration

**Category:** Player Locomotion  
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

### AR-007 — quick stop skid

**Category:** Player Locomotion  
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

### AR-008 — ninety-degree turn

**Category:** Player Locomotion  
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

### AR-009 — one-eighty pivot

**Category:** Player Locomotion  
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

### AR-010 — crouch enter

**Category:** Player Locomotion  
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

### AR-011 — crouch exit

**Category:** Player Locomotion  
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

### AR-012 — crouch walk

**Category:** Player Locomotion  
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

### AR-013 — injured limp

**Category:** Player Locomotion  
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

### AR-014 — encumbered shuffle

**Category:** Player Locomotion  
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

### AR-015 — mud trudging

**Category:** Player Locomotion  
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

### AR-016 — snow stepping

**Category:** Player Locomotion  
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

### AR-017 — ice balance slip

**Category:** Player Locomotion  
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

### AR-018 — stealth tiptoe

**Category:** Player Locomotion  
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

### AR-019 — autorun transition

**Category:** Player Locomotion  
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

### AR-020 — victory jog

**Category:** Player Locomotion  
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

