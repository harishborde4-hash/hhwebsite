# Emotes — Animation Requirements
_Covers AR-341 through AR-360._
### AR-341 — cheer

**Category:** Emotes  
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

### AR-342 — laugh

**Category:** Emotes  
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

### AR-343 — cry

**Category:** Emotes  
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

### AR-344 — sit

**Category:** Emotes  
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

### AR-345 — kneel

**Category:** Emotes  
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

### AR-346 — dance simple

**Category:** Emotes  
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

### AR-347 — dance festival

**Category:** Emotes  
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

### AR-348 — clap

**Category:** Emotes  
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

### AR-349 — point forward

**Category:** Emotes  
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

### AR-350 — point ground

**Category:** Emotes  
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

### AR-351 — shrug

**Category:** Emotes  
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

### AR-352 — facepalm

**Category:** Emotes  
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

### AR-353 — salute

**Category:** Emotes  
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

### AR-354 — bow deep

**Category:** Emotes  
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

### AR-355 — wave goodbye

**Category:** Emotes  
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

### AR-356 — taunt

**Category:** Emotes  
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

### AR-357 — thank

**Category:** Emotes  
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

### AR-358 — sorry

**Category:** Emotes  
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

### AR-359 — ready stance

**Category:** Emotes  
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

### AR-360 — photo pose

**Category:** Emotes  
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

