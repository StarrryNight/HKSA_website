import { motion } from "motion/react";
import { Ticket, CreditCard, Tag, DollarSign } from "lucide-react";

const perks = [
  {
    category: "EVENTS",
    icon: Ticket,
    title: "10+ Events All Year",
    deal: "Free & discounted entry to parties, competitions, sports, and more throughout the year",
    color: "#CC0000",
  },
  {
    category: "MEMBERSHIP",
    icon: CreditCard,
    title: "Membership Card",
    deal: "Claim your HKSA card at AMS Clubs Fair — includes stickers and freebies",
    color: "#CC0000",
  },
  {
    category: "DISCOUNTS",
    icon: Tag,
    title: "Member Deals",
    deal: "MYST, Drive Motorsports, A. Bento, Taiwan Bento, Eatery, Molly Tea, 101 Boba, Bak'd, and more",
    color: "#CC0000",
  },
  {
    category: "PRICE",
    icon: DollarSign,
    title: "All For $10",
    deal: "One of UBC's largest social clubs — membership valid until April 30, 2026",
    color: "#CC0000",
  },
];

export function Perks() {
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
              THE <span className="text-bauhinia">PERKS</span>
            </h2>
            <p className="text-xl text-stone mt-4 font-light">What you get as a member</p>
          </div>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 0 20px rgba(204, 0, 0, 0.5)'
                }}
                className="border-2 border-stark bg-white/5 p-6 transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <span className="text-bauhinia text-xs tracking-widest font-bold">
                    {perk.category}
                  </span>
                </div>
                
                <div className="mb-6">
                  <Icon 
                    className="text-white group-hover:text-bauhinia transition-colors duration-300" 
                    size={40}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-2xl font-black italic mb-2 group-hover:text-bauhinia transition-colors duration-300">
                  {perk.title}
                </h3>
                
                <p className="text-stone text-sm font-light">
                  {perk.deal}
                </p>

                {/* Decorative corner */}
                <div className="mt-6 pt-4 border-t border-stone/30">
                  <span className="text-stone text-xs tracking-widest">MEMBERS ONLY</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-stone text-lg">
            *Memberships valid from date of purchase until April 30, 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}