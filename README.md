# HKSA Website

Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on Vercel.

## Clone & Run

```bash
git clone <repo-url>
cd hksa_website
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build & Deploy

```bash
npm run build   # outputs to /build
vercel --prod   # deploy to Vercel
```

---

## Editing Content

All editable content — text, images, descriptions — lives at the **top of each component file** as a simple array. You don't need to touch any layout code.

### Files and what they control

| File | What's inside |
|------|--------------|
| `src/components/Events.tsx` | Upcoming events (title, date, time, location, description, image) |
| `src/components/VibesGallery.tsx` | Past event gallery (photo, caption, date, description) |
| `src/components/Perks.tsx` | Membership perks (category, title, description) |
| `src/components/Hero.tsx` | Hero background image and tagline text |

---

### Adding or changing an event

Open `src/components/Events.tsx`. At the top you'll see an array like this:

```ts
const events = [
  {
    id: 1,
    title: "JEOPARDY NIGHT",
    date: "MAR 12, 2026",
    time: "5:30PM – 8:30PM (Check-in at 5PM)",
    location: "AMS Great Hall North",
    description: "Teams of four, $20 to enter...",
    image: "/jeopardy_game_night.png",
  },
  ...
];
```

- **Change text** — edit the `title`, `date`, `time`, `location`, or `description` strings directly.
- **Change the image** — drop the new image into `src/public/`, then update the `image` field to `"/your-image.png"`.
- **Add an event** — copy an existing `{ ... }` block, paste it, and increment the `id`.
- **Remove an event** — delete its `{ ... }` block.

---

### Adding or changing a gallery photo

Open `src/components/VibesGallery.tsx`. Same idea — array at the top:

```ts
const galleryImages = [
  {
    url: "/external.jpg",           // thumbnail shown in the grid
    popupUrl: "/external_popup.JPG", // full-size shown when clicked
    caption: "EXTERNAL ICE BREAKER",
    date: "SEP 26, 2025",
    description: "...",
  },
  ...
];
```

- Drop both the thumbnail and popup image into `src/public/`.
- Add a new object to the array with the filenames and info.

---

### Changing images

1. Put the new image file in `src/public/` (e.g. `new_event.png`).
2. In the relevant component, change the `image` or `url` field to `"/new_event.png"`.

That's it — no imports needed, Vite serves everything in `src/public/` automatically.

---

## Editing with AI (Claude Code)

[Claude Code](https://claude.ai/code) can read the codebase and make edits for you.

**Install:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Run from the project folder:**
```bash
cd hksa_website
claude
```

Describe what you want in plain English:
- *"Add a new event called Casino Night on April 5th at AMS Nest"*
- *"Change the hero tagline to ..."*
- *"Add this photo to the gallery with the caption Potluck Night"*

Claude will find the right array at the top of the component and make the edit. After changes, run `npm run dev` to preview, then `vercel --prod` to ship.

---

## Contact

For any issues or if you need something redeployed, email **lausingsamuel@gmail.com**.
