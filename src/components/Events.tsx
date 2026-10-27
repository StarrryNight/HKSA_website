import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

type Event = {
  id: number;
  title: string;
  sortDate: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  image?: string;
  prospective?: boolean;
};

const events: Event[] = ([
  {
    id: 1,
    title: "FIRST-YEAR EAT AND GREET",
    sortDate: "2026-09-25",
    date: "SEP 25, 2026",
    time: "4PM – 8PM",
    description: "A social made for first-years. Good food, card games, and dice on the table, so you can meet people and make UBC feel a little smaller. Sign-up was required.",
    image: "/first_year_social.webp",
  },
  {
    id: 2,
    title: "ICE BREAKER",
    sortDate: "2026-10-02",
    date: "OCT 2, 2026",
    time: "7PM – 9:30PM",
    location: "Great Hall North",
    description: "The season's first big night out. Free for members, $8 for everyone else, with prizes from Teadot, Exit (Richmond), and more. Come solo, leave with a new group chat.",
    image: "/ice_breaker.webp",
  },
  {
    id: 7,
    title: "MATCHA MAHJONG",
    sortDate: "2026-10-23",
    date: "OCT 23, 2026",
    time: "6:30PM – 9PM",
    location: "Great Hall North",
    description: "Matcha drinks meet mahjong tables, together with the UBC Mahjong Club. Matcha from Matcha Made, free for members and $6 for non-members. No experience needed to sit down and play.",
    image: "/matcha_mahjong_2026.webp",
  },
  {
    id: 3,
    title: "NO NET NOVEMBER",
    sortDate: "2026-11-15",
    date: "NOV 2026",
    description: "Rules are loose, nets are optional. Expect a month-long challenge and a little friendly competition. Details coming soon.",
    prospective: true,
  },
  {
    id: 4,
    title: "SIP AND SLIME",
    sortDate: "2027-01-15",
    date: "JAN 2027",
    description: "Drinks in one hand, slime in the other. Probably messy, definitely fun. Details coming soon.",
    prospective: true,
  },
  {
    id: 5,
    title: "DESERT DATE NIGHT",
    sortDate: "2027-02-12",
    date: "FEB 2027",
    description: "Date-night energy, whether or not you have a date. Dress up, show up, and save room for dessert. Details coming soon.",
    prospective: true,
  },
] as Event[]).sort((a, b) => a.sortDate.localeCompare(b.sortDate));

export function Events() {
  const [activeEvent, setActiveEvent] = useState<Event>(events[0]);

  return (
    <section className="snap-section py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
              <span className="text-bauhinia">EVENTS</span>
            </h2>
            <p className="text-xl text-stone mt-4 font-light">Where we turn up</p>
          </div>
        </motion.div>

        {/* Events Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          {/* Events List */}
          <div className="space-y-1">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setActiveEvent(event)}
                onClick={() => setActiveEvent(event)}
                className={`border-b border-stone/30 py-6 cursor-pointer transition-all duration-300 group ${
                  activeEvent.id === event.id ? 'border-bauhinia' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className={`text-2xl tracking-wide transition-all duration-300 ${
                        activeEvent.id === event.id 
                          ? 'text-bauhinia font-bold' 
                          : event.prospective
                            ? 'text-[#78716C]/60 group-hover:text-[#78716C]'
                            : 'text-white'
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p className={`text-sm mt-2 ${event.prospective ? 'text-[#78716C]/60' : 'text-stone'}`}>
                      {event.date}{event.time ? ` · ${event.time}` : ""}{event.prospective ? " · TBA" : ""}
                    </p>
                  </div>
                  <ArrowRight 
                    className={`transition-all duration-300 ${
                      activeEvent.id === event.id 
                        ? 'text-bauhinia opacity-100 translate-x-2' 
                        : 'text-stone opacity-0 group-hover:opacity-100 group-hover:translate-x-2'
                    }`}
                    size={24}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Preview Canvas */}
          <div className="relative h-[320px] md:h-[600px] border-2 border-stark overflow-hidden order-first md:order-none sticky top-2 md:relative md:top-auto z-20 bg-rich-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {activeEvent.prospective ? (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <span className="text-[10rem] md:text-[16rem] font-black leading-none text-[#78716C]/40 select-none">?</span>
                  </div>
                ) : (
                  <img
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="w-full h-full object-cover"
                    style={{ filter: 'saturate(0.8) contrast(1.2)' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-2 md:mb-4">
                    {activeEvent.title}
                  </h3>
                  <p className="text-stone text-sm md:text-lg mb-3 line-clamp-4 md:line-clamp-none">{activeEvent.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    {activeEvent.location && (
                      <span className="px-3 py-1 border border-bauhinia text-bauhinia">
                        {activeEvent.location}
                      </span>
                    )}
                    <span className="text-stone">{activeEvent.date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}