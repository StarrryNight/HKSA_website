import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="snap-section min-h-[100svh] flex items-center justify-center px-6 relative overflow-hidden">
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
            backgroundImage: `url('/hero.webp')`,
            filter: 'brightness(0.3) contrast(1.2)',
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
          <img src="/logo.png" alt="UBC HKSA" className="h-32 mx-auto" />
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
          <p className="text-lg md:text-2xl text-stone max-w-2xl mx-auto font-light">
            UBC's most tightknit social club. Where the best events happen
            and lifelong connections are made.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
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