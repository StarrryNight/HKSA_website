import { useState } from "react";
import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    url: "/external.webp",
    popupUrl: "/external_popup.webp",
    caption: "EXTERNAL ICE BREAKER",
    date: "SEP 26, 2025",
    type: "external",
    description: "HKSA opened the doors at Life Building 2202 for the first social of the year, no membership required. New faces, name tags, and two hours to figure out who was worth keeping in contact with. Free for members, $8 for everyone else — cheap for what you got out of it. Most left with a group chat invite.",
  },
  {
    url: "/matcha_mahjong.webp",
    popupUrl: "/matcha_popup.webp",
    caption: "MATCHA MAHJONG",
    date: "NOV 7, 2025",
    type: "external",
    description: "HKSA brought a full matcha pop-up into Great Hall North and paired it with a mahjong crash course that filled up fast. Iced lattes in banana, blueberry, and strawberry, hojicha in maple brown sugar, madeleines on the side — $6.50 while they lasted. Free for members, $5 for everyone else. The tiles stayed out until 8:30.",
  },
  {
    url: "/Fortune.webp",
    popupUrl: "/fortune_popup.webp",
    caption: "LK FORTUNE",
    date: "NOV 7, 2025",
    type: "external",
    description: "Same night, different energy. After the matcha and mahjong wrapped, HKSA moved the party to Fortune Sound Club on E Pender. $10 to get in before 11, one of Vancouver's best rooms, and a crowd that was already warmed up. Nobody was thinking about mahjong anymore.",
  },
  {
    url: "/Smash%20Or%20PAss..webp",
    popupUrl: "/smah_or_pass_popup.webp",
    caption: "SMASH OR PASS",
    date: "OCT 24, 2025",
    type: "external",
    description: "HKSA took over UBC Rec North with two courts, ten teams, and three hours of volleyball that got competitive fast. $8 for members, prizes on the line, and no excuses for sitting out — HKSA paired up anyone who didn't have a full squad. The courts closed at 9. The bragging rights lasted longer.",
  },
  {
    url: "/Desert%20Date%20Night.webp",
    popupUrl: "/ddn_popup.webp",
    caption: "DESERT DATE NIGHT",
    date: "FEB 13, 2026",
    type: "external",
    description: "HKSA packed LIFE 2302 for its biggest speed dating night of the year, complete with free desserts, BIGWAY goodie bags, and $50 Astele Beauty gift cards for the first ten sign-ups. The rounds flew by fast. Some left with a number, a few with plans for the 14th.",
  },
  {
    url: "/rush_hour.webp",
    popupUrl: "/rush_hour_popup.webp",
    caption: "RUSH HOUR",
    date: "NOV 21, 2025",
    type: "external",
    description: "Five clubs. One night. CVC, HKSA, CSA, Japan, and Taiwan brought the biggest campus collab of the year to The Pit UBC on November 21st — a 19+ night running 9:30 to 2AM. All genres, custom themed drinks, and a room that didn't need much convincing. Early birds already knew. Everyone else found out the hard way.",
  },
  {
    url: "/GingerHouse.webp",
    popupUrl: "/ginger_popup.webp",
    caption: "GINGER HOUSE",
    date: "DEC 1, 2025",
    type: "external",
    description: "HKSA turned Nest 2311 into a gingerbread battleground. Teams of four, hot cocoa in hand, competing for the best house and whatever prizes were worth fighting over. $5 to get in, three hours to build, and a surprising amount of pressure for something made of frosting.",
  },
  {
    url: "/Potluck.webp",
    popupUrl: "/potluck_popup.webp",
    caption: "HKSA POTLUCK",
    date: "2025",
    type: "internal",
    description: "Everyone brought something, nobody left hungry. The kind of afternoon where the food was good but the company was better — plates piled high, space packed tight, and a room full of people who didn't need a reason to stay longer than planned.",
  },
  {
    url: "/retreat.webp",
    popupUrl: "/retreat_popup.webp",
    caption: "HKSA INTERNAL RETREAT",
    date: "NOV 9–10, 2025",
    type: "internal",
    description: "Away from campus for a weekend, the exec team went in a little stiff and came back a lot closer. Late nights, early mornings, and the kind of conversations that don't happen in group chats. The retreat that set the tone for the whole year.",
  },
];

type GalleryImage = { url: string; popupUrl: string; caption: string; date: string; type: string; description: string };

export function VibesGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <Dialog
      open={selectedImage !== null}
      onOpenChange={(open) => { if (!open) setSelectedImage(null); }}
    >
      <DialogContent className="bg-[#0A0A0A] border border-white/10 p-0 gap-0 overflow-hidden max-w-[calc(100%-2rem)] sm:max-w-2xl [&>button]:text-white [&>button]:opacity-80">
        <img
          src={selectedImage?.popupUrl}
          alt={selectedImage?.caption}
          className="w-full h-auto block max-h-[60vh] object-contain"
        />
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <div className="border-l-4 border-[#CC0000] pl-4">
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-xs text-[#CC0000] tracking-widest uppercase">
                {selectedImage?.date}
              </p>
              <span className="text-xs tracking-widest uppercase px-2 py-0.5 border border-white/20 text-white/40">
                {selectedImage?.type}
              </span>
            </div>
            <p className="text-lg sm:text-xl text-white tracking-widest mb-3">
              {selectedImage?.caption}
            </p>
            <p className="text-sm text-white/60 leading-relaxed font-light">
              {selectedImage?.description}
            </p>
          </div>
        </div>
      </DialogContent>
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

          {/* Masonry Grid */}
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 768: 3 }}>
          <Masonry gutter="12px">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                  style={{
                    filter: 'brightness(0.82)',
                    borderRadius: '0px'
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 md:bg-black/20 md:group-hover:bg-black/70 max-md:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white text-xs md:text-2xl tracking-widest max-md:opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </Dialog>
  );
}
