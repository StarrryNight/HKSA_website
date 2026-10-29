import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";

const galleryImages = [
  {
    url: "/external_icebreaker_2026.webp",
    caption: "EXTERNAL ICE BREAKER",
    date: "2026",
  },
  {
    url: "/internal_icebreaker_2026.webp",
    caption: "INTERNAL ICE BREAKER",
    date: "2026",
  },
  {
    url: "/imagine_day_2026.webp",
    caption: "IMAGINE DAY",
    date: "2026",
  },
  {
    url: "/hksa101.webp",
    caption: "HKSA 101",
    date: "2026",
  },
  {
    url: "/external.webp",
    caption: "EXTERNAL ICE BREAKER",
    date: "SEP 26, 2025",
  },
  {
    url: "/matcha_mahjong.webp",
    caption: "MATCHA MAHJONG",
    date: "NOV 7, 2025",
  },
  {
    url: "/Fortune.webp",
    caption: "LK FORTUNE",
    date: "NOV 7, 2025",
  },
  {
    url: "/Smash%20Or%20PAss..webp",
    caption: "SMASH OR PASS",
    date: "OCT 24, 2025",
  },
  {
    url: "/Desert%20Date%20Night.webp",
    caption: "DESERT DATE NIGHT",
    date: "FEB 13, 2026",
  },
  {
    url: "/rush_hour.webp",
    caption: "RUSH HOUR",
    date: "NOV 21, 2025",
  },
  {
    url: "/GingerHouse.webp",
    caption: "GINGER HOUSE",
    date: "DEC 1, 2025",
  },
  {
    url: "/Potluck.webp",
    caption: "HKSA POTLUCK",
    date: "2025",
  },
  {
    url: "/retreat.webp",
    caption: "HKSA INTERNAL RETREAT",
    date: "NOV 9–10, 2025",
  },
];

type GalleryImage = { url: string; caption: string; date: string };

function GalleryItem({
  image,
  index,
  className = "",
  fill = false,
}: {
  image: GalleryImage;
  index: number;
  className?: string;
  fill?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`relative group overflow-hidden ${className}`}
    >
      <img
        src={image.url}
        alt={image.caption}
        className={fill ? "w-full h-full object-cover block" : "w-full h-auto block"}
        loading="lazy"
        decoding="async"
        style={{ filter: "brightness(0.82)" }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 max-md:bg-black/40 transition-all duration-300 flex items-center justify-center p-2">
        <p className="text-white text-[10px] md:text-2xl text-center tracking-widest max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.caption}
        </p>
      </div>
    </motion.div>
  );
}

export function VibesGallery() {
  return (
    <>
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
                <span className="text-bauhinia">MEMORIES</span>
              </h2>
              <p className="text-xl text-stone mt-4 font-light">See what we're about</p>
            </div>
          </motion.div>

          {/* Phones: even two-column grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {galleryImages.map((image, index) => (
              <GalleryItem key={index} image={image} index={index} className="aspect-[4/5]" fill />
            ))}
          </div>

          {/* Tablet and up: masonry */}
          <div className="hidden md:block">
            <Masonry columnsCount={3} gutter="20px">
              {galleryImages.map((image, index) => (
                <GalleryItem key={index} image={image} index={index} />
              ))}
            </Masonry>
          </div>
        </div>
      </section>
    </>
  );
}
