# Photo Mode — Animation Requirements
_Covers AR-421 through AR-440._
### AR-421 — camera focus rack

**Category:** Photo Mode  
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

### AR-422 — aperture preview

**Category:** Photo Mode  
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

### AR-423 — filter slide

**Category:** Photo Mode  
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

### AR-424 — sticker pop

**Category:** Photo Mode  
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

### AR-425 — pose blend

**Category:** Photo Mode  
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

### AR-426 — time freeze shimmer

**Category:** Photo Mode  
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

### AR-427 — weather toggle sweep

**Category:** Photo Mode  
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

### AR-428 — sun angle rotate

**Category:** Photo Mode  
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

### AR-429 — depth-of-field pulse

**Category:** Photo Mode  
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

### AR-430 — screenshot flash

**Category:** Photo Mode  
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

### AR-431 — gallery card open

**Category:** Photo Mode  
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

### AR-432 — gallery card close

**Category:** Photo Mode  
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

### AR-433 — share button sparkle

**Category:** Photo Mode  
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

### AR-434 — frame border draw

**Category:** Photo Mode  
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

### AR-435 — character eye track

**Category:** Photo Mode  
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

### AR-436 — companion pose swap

**Category:** Photo Mode  
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

### AR-437 — hide UI fade

**Category:** Photo Mode  
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

### AR-438 — rule-of-thirds grid

**Category:** Photo Mode  
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

### AR-439 — freecam speed ramp

**Category:** Photo Mode  
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

### AR-440 — photo save tick

**Category:** Photo Mode  
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

