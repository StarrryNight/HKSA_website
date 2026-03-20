import { Hero } from "./components/Hero";
import { VibesGallery } from "./components/VibesGallery";
import { Events } from "./components/Events";
import { Perks } from "./components/Perks";
import { CTA } from "./components/CTA";

export default function App() {
  return (
    <div className="bg-rich-black">
      <Hero />
      <VibesGallery />
      <Events />
      <Perks />
      <CTA />
    </div>
  );
}
