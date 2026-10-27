import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, useScroll } from "motion/react";
import { Ticket, CreditCard, Tag } from "lucide-react";

const PRICE = 13;
const VALID_UNTIL = "April 30, 2027";

const perks = [
  {
    category: "EVENTS",
    icon: Ticket,
    title: "10+ Events All Year",
    deal: "Free & discounted entry to parties, competitions, sports, and more throughout the year",
  },
  {
    category: "MEMBERSHIP",
    icon: CreditCard,
    title: "Membership Card",
    deal: "Claim your HKSA card at AMS Clubs Fair — includes stickers and freebies",
  },
  {
    category: "DISCOUNTS",
    icon: Tag,
    title: "Member Deals",
    deal: "Exclusive discounts at our 2026/27 sponsors, listed below",
  },
];

const sponsors = [
  "MYST",
  "DRIVE MOTORSPORTS",
  "A. BENTO",
  "TAIWAN BENTO",
  "EATERY",
  "MOLLY TEA",
  "101 BOBA",
  "BAK'D",
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Perks() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="snap-section flex flex-col justify-center py-24 relative overflow-hidden"
    >
      {/* Parallax background text */}
      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none whitespace-nowrap"
        style={{
          x: bgX,
          fontFamily: "'Noto Sans HK', sans-serif",
          fontSize: "30vw",
          fontWeight: 900,
          color: "#FFFFFF",
          opacity: 0.03,
          userSelect: "none",
        }}
      >
        PERKS
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="border-l-4 border-bauhinia pl-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              THE <span className="text-bauhinia">PERKS</span>
            </h2>
            <p className="text-xl text-stone mt-4 font-light">What you get as a member</p>
          </div>
        </motion.div>

        {/* Price + perks */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="text-[9rem] md:text-[13rem] font-black leading-none text-bauhinia glow-red">
              $<CountUp to={PRICE} />
            </div>
            <p className="text-stone text-sm tracking-widest mt-2">
              ALL YEAR · VALID UNTIL {VALID_UNTIL.toUpperCase()}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 0 20px rgba(204, 0, 0, 0.5)",
                  }}
                  className="border-2 border-stark bg-white/5 p-6 transition-colors duration-300 cursor-pointer group"
                >
                  <span className="text-bauhinia text-xs tracking-widest font-bold">
                    {perk.category}
                  </span>
                  <div className="my-6">
                    <Icon
                      className="text-white group-hover:text-bauhinia transition-colors duration-300"
                      size={40}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-2xl font-black italic mb-2 group-hover:text-bauhinia transition-colors duration-300">
                    {perk.title}
                  </h3>
                  <p className="text-stone text-sm font-light">{perk.deal}</p>
                  <div className="mt-6 pt-4 border-t border-stone/30">
                    <span className="text-stone text-xs tracking-widest">MEMBERS ONLY</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sponsor marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-stone text-xs tracking-widest mb-4">2026/27 SPONSORS</p>
          <div className="marquee overflow-hidden border-y border-[#78716C]/30 py-6">
            <div className="marquee-track flex w-max gap-12">
              {[...sponsors, ...sponsors].map((name, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-4xl font-black tracking-wide text-white/40 hover:text-bauhinia transition-colors duration-300 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-stone text-sm">
          *Memberships valid from date of purchase until {VALID_UNTIL}
        </p>
      </div>
    </section>
  );
}
