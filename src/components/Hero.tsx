import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.png')`,
          filter: 'brightness(0.3) contrast(1.2)',
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
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            WELCOME TO<br />
            <span className="text-bauhinia glow-red">UBC HKSA</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone max-w-2xl mx-auto font-light">
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