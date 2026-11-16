import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { MEMBERSHIP_URL } from "../links";
import { SponsorButton } from "./SponsorButton";

export function CTA() {
  return (
    <section id="join" className="snap-section flex items-center py-16 md:py-12 px-6 relative overflow-hidden">
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

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
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
        </motion.div>

        {/* Member + sponsor, side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 md:mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-bauhinia bg-white/5 p-6 md:p-8 flex flex-col items-center justify-between gap-6"
            style={{ boxShadow: "0 0 24px rgba(204,0,0,0.25)" }}
          >
            <div>
              <p className="text-bauhinia text-xs tracking-widest font-bold mb-3">FOR STUDENTS</p>
              <p className="text-lg md:text-xl text-stone font-light">
                Join HKSA for the year. $13 gets you in.
              </p>
            </div>
            <motion.a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ boxShadow: ["0 0 0px rgba(204,0,0,0.0)", "0 0 30px rgba(204,0,0,0.6)", "0 0 0px rgba(204,0,0,0.0)"] }}
              transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full md:w-auto px-8 md:px-12 py-4 border-2 border-bauhinia bg-bauhinia text-white text-lg tracking-widest font-bold hover:bg-transparent hover:text-bauhinia transition-all duration-300"
            >
              BECOME A MEMBER
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-stark bg-white/5 p-6 md:p-8 flex flex-col items-center justify-between gap-6"
          >
            <div>
              <p className="text-white/60 text-xs tracking-widest font-bold mb-3">FOR BUSINESSES</p>
              <p className="text-lg md:text-xl text-stone font-light">
                Want your business in front of UBC students? Sponsor us and we'll promote you all year.
              </p>
            </div>
            <SponsorButton className="inline-block w-full md:w-auto px-8 md:px-12 py-4 border-2 border-stark bg-transparent text-white text-lg tracking-widest font-bold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300">
              BECOME A SPONSOR
            </SponsorButton>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-stark pt-8"
        >
          <p className="text-center text-stone text-sm tracking-widest mb-6">
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
          className="mt-10 text-center"
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
