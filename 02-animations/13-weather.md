# Weather — Animation Requirements
_Covers AR-241 through AR-260._
### AR-241 — rain onset

**Category:** Weather  
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

### AR-242 — rain intensify

**Category:** Weather  
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

### AR-243 — storm lightning flash

**Category:** Weather  
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

### AR-244 — fog roll

**Category:** Weather  
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

### AR-245 — snowfall gust

**Category:** Weather  
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

### AR-246 — sandstorm wall

**Category:** Weather  
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

### AR-247 — heat shimmer

**Category:** Weather  
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

### AR-248 — hail impact

**Category:** Weather  
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

### AR-249 — wind gust push

**Category:** Weather  
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

### AR-250 — eclipse darken

**Category:** Weather  
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

### AR-251 — aurora wave

**Category:** Weather  
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

### AR-252 — meteor streak

**Category:** Weather  
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

### AR-253 — cloud shadow pass

**Category:** Weather  
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

### AR-254 — wetness drydown

**Category:** Weather  
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

### AR-255 — mud splatter

**Category:** Weather  
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

### AR-256 — frost creep

**Category:** Weather  
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

### AR-257 — leaf swirl

**Category:** Weather  
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

### AR-258 — thunder camera tremor

**Category:** Weather  
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

### AR-259 — storm clear

**Category:** Weather  
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

### AR-260 — rainbow reveal

**Category:** Weather  
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

