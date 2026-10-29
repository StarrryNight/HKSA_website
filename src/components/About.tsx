import { useEffect, useRef } from "react";
import { motion, useTransform, useInView, useMotionValue, animate } from "motion/react";
import { SPONSOR_URL } from "../links";


const history = [
  {
    year: "2008",
    title: "WHERE IT STARTED",
    text: "HKSA began at UBC in 2008, a home away from home for Hong Kong students.",
  },
  {
    year: "2008 – 2025",
    title: "GROWING UP",
    text: "Over the years we grew in size and expanded from a student association into a full social club, with parties, sports, and competitions all year round.",
  },
  {
    year: "2026 ONWARDS",
    title: "OPEN TO EVERYONE",
    text: "Today we're one of UBC's biggest social clubs, with a community built on diversity and a welcome for everyone, whatever your background.",
  },
];

// Event photos from src/public, used for the family collage.
const familyPhotos = [
  { src: "/retreat.webp", alt: "HKSA internal retreat", rotate: -3 },
  { src: "/Potluck.webp", alt: "HKSA potluck", rotate: 2 },
  { src: "/family_group.webp", alt: "HKSA members group photo", rotate: 3 },
  { src: "/family_holiday.webp", alt: "HKSA holiday party", rotate: -2, position: "center 62%" },
];

const values = [
  {
    title: "COMMUNITY FIRST",
    text: "We're UBC's most tightknit student social club. Everyone who walks in gets a seat at the table.",
  },
  {
    title: "ALL VIBES, NO DRAMA",
    text: "Good energy only. We show up to have fun and look out for each other.",
  },
  {
    title: "OPEN DOORS",
    text: "Our socials welcome members and non-members alike. Bring a friend, make a few more.",
  },
  {
    title: "MORE THAN JUST A CLUB",
    text: "Events are the excuse. The lifelong friendships and the group chats are the point.",
  },
];

// Figures taken from this site's own content (perks, events, sponsors).
const stats = [
  { value: 10, suffix: "+", label: "EVENTS A YEAR" },
  { value: 8, suffix: "", label: "SPONSORS" },
  { value: 13, prefix: "$", suffix: "", label: "MEMBERSHIP" },
];

function Stat({ value, prefix = "", suffix, label }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-4xl md:text-6xl font-black neon-cyan">{text}</motion.div>
      <p className="text-stone text-[10px] md:text-xs tracking-widest mt-2">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section className="snap-section flex flex-col justify-center py-24 px-6 relative overflow-hidden">
      {/* Vertical neon signs */}
      <div
        aria-hidden
        className="hidden xl:flex absolute left-6 top-24 flex-col items-center gap-1 neon-box px-2 py-3 bg-black/40 neon-flicker"
        style={{ fontFamily: "'Noto Sans HK', sans-serif" }}
      >
        {"香港學生會".split("").map((c) => (
          <span key={c} className="text-3xl font-black neon-red">{c}</span>
        ))}
      </div>
      <div
        aria-hidden
        className="hidden xl:flex absolute right-6 top-40 flex-col items-center gap-1 px-2 py-3 border-2 border-[#00e5ff] bg-black/40 neon-flicker-slow"
        style={{
          fontFamily: "'Noto Sans HK', sans-serif",
          boxShadow: "0 0 6px #00e5ff, 0 0 20px rgba(0,229,255,0.6), inset 0 0 12px rgba(0,229,255,0.4)",
        }}
      >
        {"加油".split("").map((c) => (
          <span key={c} className="text-3xl font-black neon-cyan">{c}</span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="border-l-4 border-bauhinia pl-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              WHO <span className="neon-red neon-flicker">WE ARE</span>
            </h2>
            <p className="text-xl text-stone mt-4 font-light">
              The Hong Kong Student Association at UBC
            </p>
          </div>
        </motion.div>

        {/* Neon stats band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-20 border-y border-white/10 py-10"
        >
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* History timeline */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-8">
              <p className="text-stone text-xs tracking-widest">OUR STORY</p>
              <motion.a
                href={SPONSOR_URL}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 border-2 border-bauhinia text-bauhinia text-xs tracking-widest font-bold hover:bg-bauhinia hover:text-white transition-all duration-300"
              >
                BECOME A SPONSOR
              </motion.a>
            </div>
            <div className="relative pl-10">
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-white/15" />
              <div className="space-y-12">
                {history.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    <div className="absolute -left-10 top-2 w-[15px] h-[15px] rounded-full bg-bauhinia" />
                    <span className="text-bauhinia text-sm tracking-widest font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black italic mt-1 mb-2">{item.title}</h3>
                    <p className="text-stone font-light">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Family photos */}
          <div>
            <p className="text-stone text-xs tracking-widest mb-8">THE FAMILY</p>
            <div className="grid grid-cols-2 gap-4">
              {familyPhotos.map((photo, index) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 40, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                  className={`relative aspect-[4/3] overflow-hidden border-2 border-white/80 shadow-[0_0_18px_rgba(255,42,42,0.35)] ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.9)", objectPosition: photo.position }}
                  />
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-2xl font-black italic neon-pink neon-flicker-slow">
              MORE THAN JUST A CLUB
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 hidden md:block">
          <p className="text-stone text-xs tracking-widest mb-8">WHAT WE STAND FOR</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 0 20px rgba(204, 0, 0, 0.5)" }}
                className="border-2 border-stark bg-white/5 p-6 group"
              >
                <span className="text-bauhinia text-xs tracking-widest font-bold">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-black italic mt-3 mb-2 group-hover:text-bauhinia transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-stone text-sm font-light">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
