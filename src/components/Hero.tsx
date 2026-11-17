import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Custom scroll that re-reads the target every frame. Native smooth scroll fixes
// its destination up front, so on first load (images still loading, layout
// shifting) it can stall partway, e.g. in the Events section.
let joinScrollCancel: (() => void) | null = null;

function scrollToJoin() {
  const el = document.getElementById("join");
  if (!el) return;
  const target = () => el.getBoundingClientRect().top + window.scrollY;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    window.scrollTo({ top: target(), behavior: "instant" as ScrollBehavior });
    return;
  }

  joinScrollCancel?.();
  const start = window.scrollY;
  const t0 = performance.now();
  const duration = Math.min(1800, Math.max(900, Math.abs(target() - start) * 0.25));
  let raf = 0;

  const stop = () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    joinScrollCancel = null;
  };
  joinScrollCancel = stop;
  // Let the user take over
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);

  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    const dest = target();
    window.scrollTo({ top: start + (dest - start) * eased, behavior: "instant" as ScrollBehavior });
    if (p < 1) {
      raf = requestAnimationFrame(step);
    } else {
      // Final pass: land exactly, even if the layout moved during the last frames
      requestAnimationFrame(() => {
        window.scrollTo({ top: target(), behavior: "instant" as ScrollBehavior });
        stop();
      });
    }
  };
  raf = requestAnimationFrame(step);
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={ref}
      className="flex items-center justify-center px-6 relative overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image, fading out into the page below */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y: bgY,
            backgroundImage: `url('/hero_2026.webp')`,
            backgroundPosition: 'center 65%',
            filter: 'brightness(0.45) contrast(1.15)',
          }}
        />
      </div>

      {/* Soft blur band over the fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 md:h-64 backdrop-blur-sm md:backdrop-blur-md pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img
            src="/hksa_logo.png"
            alt="UBC HKSA"
            width={323}
            height={103}
            className="h-20 md:h-28 w-auto mx-auto"
            style={{ filter: "drop-shadow(0 0 6px rgba(255,42,42,0.9)) drop-shadow(0 0 18px rgba(255,42,42,0.6))" }}
          />
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tight mb-6">
            WELCOME TO<br />
            <span className="text-bauhinia glow-red">UBC HKSA</span>
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToJoin}
          className="mt-12 px-12 py-4 border-2 border-stark bg-transparent text-white text-lg tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
        >
          JOIN US
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-stark rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}