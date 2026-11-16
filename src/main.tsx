import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hold the first paint until web fonts are ready (or 1.5s), so text doesn't
// reflow and shift down when Space Grotesk / Noto Sans HK swap in.
const root = document.documentElement;
root.classList.add("fonts-loading");
const reveal = () => root.classList.remove("fonts-loading");
const timeout = window.setTimeout(reveal, 1500);
Promise.race([
  Promise.all([
    document.fonts.load("700 1em 'Space Grotesk'"),
    document.fonts.load("400 1em 'Space Grotesk'"),
    document.fonts.load("900 1em 'Noto Sans HK'"),
  ]).catch(() => {}),
  new Promise((r) => window.setTimeout(r, 1500)),
]).then(() => {
  window.clearTimeout(timeout);
  reveal();
});

createRoot(document.getElementById("root")!).render(<App />);
