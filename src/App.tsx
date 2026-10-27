import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VibesGallery } from "./components/VibesGallery";
import { Events } from "./components/Events";
import { Perks } from "./components/Perks";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="bg-rich-black relative">
      {/* Page-wide neon glow, sits behind every section */}
      <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#ff2a2a]/15 blur-[140px] neon-drift" />
        <div className="absolute top-1/3 -right-48 w-[38rem] h-[38rem] rounded-full bg-[#00e5ff]/10 blur-[150px] neon-drift-alt" />
        <div className="absolute -bottom-48 left-1/3 w-[34rem] h-[34rem] rounded-full bg-[#ff3fa4]/10 blur-[140px] neon-drift" />
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
