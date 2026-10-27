import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export function CTA() {
  return (
    <section id="join" className="snap-section flex items-center py-32 px-6 relative overflow-hidden">
      {/* Fixed Background Text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ 
          fontFamily: "'Noto Sans HK', sans-serif",
          fontSize: '15vw',
          fontWeight: 900,
          color: '#FFFFFF',
          opacity: 0.03,
          userSelect: 'none'
        }}
      >
        UBC HKSA
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            {["READY", "TO"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {["RUN", "IT", "UP?"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="inline-block mr-4 text-bauhinia glow-red"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-2xl text-stone font-light mb-12 max-w-2xl mx-auto">
            Join UBC's most tightknit student social club. All vibes, no drama.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdgZ7niLqLQCIyZ858JRY-3IEcxqnfdTHxYrqBgEuV_k1lrg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ boxShadow: ["0 0 0px rgba(204,0,0,0.0)", "0 0 30px rgba(204,0,0,0.6)", "0 0 0px rgba(204,0,0,0.0)"] }}
              transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-16 py-5 border-2 border-bauhinia bg-bauhinia text-white text-xl tracking-widest font-bold hover:bg-transparent hover:text-bauhinia transition-all duration-300 box-shadow-red"
            >
              BECOME A MEMBER
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ubchksa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-16 py-5 border-2 border-stark bg-transparent text-white text-xl tracking-widest font-bold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              BECOME A SPONSOR
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-stark pt-12"
        >
          <p className="text-center text-stone text-sm tracking-widest mb-8">
            CONNECT WITH US
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <motion.a
              href="https://www.instagram.com/ubchksa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 text-white hover:text-bauhinia transition-colors duration-300"
            >
              <Instagram size={24} />
              <span className="text-lg">@ubchksa</span>
            </motion.a>
            <motion.a
              href="https://www.tiktok.com/@ubchksa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 text-white hover:text-bauhinia transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.54V6.84a4.85 4.85 0 0 1-1.07-.15z"/>
              </svg>
              <span className="text-lg">@ubchksa</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-stone text-sm">
            © 2026 Hong Kong Student Association, University of British Columbia
          </p>
          <p className="text-stone text-xs mt-2 italic">
			More than just a club.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
