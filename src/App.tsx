import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VibesGallery } from "./components/VibesGallery";
import { Events } from "./components/Events";
import { Perks } from "./components/Perks";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="bg-rich-black relative overflow-x-clip">
      {/* Page-wide neon glow, sits behind every section */}
      <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[20rem] h-[20rem] md:w-[36rem] md:h-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,42,42,0.22),transparent_70%)] md:bg-none md:bg-[#ff2a2a]/15 md:blur-[140px] neon-drift" />
        <div className="absolute top-1/3 -right-48 w-[20rem] h-[20rem] md:w-[38rem] md:h-[38rem] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.15),transparent_70%)] md:bg-none md:bg-[#00e5ff]/10 md:blur-[150px] neon-drift-alt" />
        <div className="absolute -bottom-48 left-1/3 w-[18rem] h-[18rem] md:w-[34rem] md:h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,63,164,0.15),transparent_70%)] md:bg-none md:bg-[#ff3fa4]/10 md:blur-[140px] neon-drift" />
      </div>
      <div className="relative z-10">
      <Hero />
      <About />
      <VibesGallery />
      <Events />
      <Perks />
      <CTA />
      </div>
    </div>
  );
}
