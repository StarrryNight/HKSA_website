import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "JEOPARDY NIGHT",
    date: "MAR 12, 2026",
    time: "5:30PM – 8:30PM (Check-in at 5PM)",
    location: "AMS Great Hall North",
    description: "Teams of four, $20 to enter, $100 on the line. Categories, buzzers, and snacks included. Astele Beauty gift cards for the winners who want something extra to show for it.",
    image: "/jeopardy_game_night.webp",
  },
  {
    id: 2,
    title: "DOUBLES BADMINTON",
    date: "MAR 20, 2026",
    time: "6PM – 9PM",
    location: "SRC Gym 3",
    description: "Pairs, not singles. $14 for members, $20 for non-members. No partner? No problem — HKSA will pair you up. Show up ready to swing.",
    image: "/hit or miss.webp",
  },
];

export function Events() {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section className="py-24 px-6 bg-rich-black">
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
              UPCOMING <span className="text-bauhinia">EVENTS</span>
            </h2>
            <p className="text-xl text-stone mt-4 font-light">Where we turn up</p>
          </div>
        </motion.div>

        {/* Events Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Events List */}
          <div className="space-y-1">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveEvent(event)}
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
                          : 'text-stone group-hover:text-white'
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-stone text-sm mt-2">{event.date} · {event.time}</p>
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
          <div className="relative h-[600px] border-2 border-stark overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.8) contrast(1.2)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-black tracking-tight mb-4">
                    {activeEvent.title}
                  </h3>
                  <p className="text-stone text-lg mb-3">{activeEvent.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 border border-bauhinia text-bauhinia">
                      {activeEvent.location}
                    </span>
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