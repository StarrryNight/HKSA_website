# HKSA Website

UBC Hong Kong Student Association site. React + TypeScript + Vite + Tailwind v4, `motion/react` for animation, deployed on Vercel. Current season: **2026/27**.

## Commands
- `npm run dev` runs the dev server at http://localhost:3000
- `npm run build` outputs to `/build` (the way to type-check; there is no standalone `tsc` script)

## Structure
Single page, sections rendered in order by `src/App.tsx`: Hero, About, VibesGallery (Memories), Events, Perks, CTA. Static images live in `src/public/` and are referenced as `"/file.webp"`. Prefer `.webp`.

Content is data arrays at the top of each component:
- `About.tsx`: `history` (2008, 2008 – 2025, 2026 onwards), `values`, `stats`
- `Events.tsx`: `events`, each with `sortDate` (ISO, used for sorting) and optional `prospective: true`
- `Perks.tsx`: `PRICE`, `VALID_UNTIL`, `perks`, `sponsors`
- `VibesGallery.tsx`: `galleryImages` (last season's photos)
- `src/links.ts`: `MEMBERSHIP_URL` (Showpass) and `SPONSOR_EMAIL`, plus Gmail-compose and mailto URLs. `SponsorButton.tsx` opens a dialog with copy-email, Open in Gmail and mail-app options; it is used by `CTA.tsx` and `About.tsx`

## Conventions
- **Events**: sorted chronologically. Past events have an `image` and show white titles. `prospective: true` events show greyed titles and a giant "?" banner (no descriptions anymore), so they need no image.
- **Facts**: HKSA started in 2008. Membership is $13, valid until April 30, 2027. 2026/27 sponsors: MYST, Drive Motorsports, A. Bento, Taiwan Bento, Eatery, Molly Tea, 101 Boba, Bak'd. Don't invent club history, counts or dates; ask.
- **Styling**: theme colours are `--color-rich-black`, `--color-bauhinia-red` (#CC0000), `--color-stone-gray` (#78716C). Tailwind has no `stone` colour, so `text-stone` is a custom class and **opacity variants like `text-stone/60` do nothing**. Use `text-[#78716C]/60`.
- **Look**: HK neon theme. A fixed page-wide glow lives in `App.tsx`, so sections must stay transparent (no `bg-rich-black` on sections). Neon helpers (`neon-red`, `neon-cyan`, `neon-pink`, `neon-box`, `neon-flicker`) are in `src/styles/globals.css`.
- **Scroll**: scroll-snap was tried and removed because it jumped on tall sections. Don't re-add without testing.
- **Animation**: each section has its own entrance animation, and motion effects respect `prefers-reduced-motion`.
- Buttons: "BECOME A MEMBER" and "BECOME A SPONSOR" in `CTA.tsx`, plus "BECOME A SPONSOR" next to "OUR STORY". All sponsor buttons open the `SponsorButton` dialog.

## Open items
- Confirm the sponsor email address (`@gmail.com` was assumed)
- Sponsor logo files for the marquee (currently text)
- Real dates and details for the prospective events (No Net November, Sip and Slime, Desert Date Night)
