# MASTER PROMPT — One-Page Animated Birthday Invitation Website

Paste everything below into your AI coding assistant in VS Code to build this project from scratch.

---

## Project Goal

Build a **single-page, mobile-first, animated website invitation** for a 60th birthday celebration. This is a digital keepsake meant to be shared as a link (e.g. via Messenger) — it should feel like an elegant, personal invitation card come to life, not a generic template site.

## Core Requirements

- **Output: one webpage** (single scrollable page, no multi-page routing).
- **Mobile-first layout** — this will primarily be viewed on phones (shared via chat apps). Design and test at phone width first; treat larger/desktop viewports as a secondary concern (e.g. center the phone-width layout on a themed background rather than stretching it full-width).
- **Animated elements throughout** — scroll-triggered reveals, a hero entrance animation, ambient sparkle/confetti accents, an animated countdown. Motion should feel intentional and celebratory, not scattered — respect `prefers-reduced-motion`.
- **Headline: "Jovita @ 60"**
- **Photos: 1 hero photo + 7 additional photos** (see layout below for where each goes). Build with clearly-marked placeholder blocks for all 8 photo slots for now — real photos will be swapped in later. Make placeholders easy to find and replace (e.g. a consistent `.photo-placeholder` component/class, clearly commented in the code).
- **RSVP: no form, no button.** This invitation will be sent directly to individuals via Messenger — the ask is simply for the recipient to **reply to the Messenger message itself** to RSVP. The RSVP section should say this in words (warm, simple copy), not link anywhere.

## Tech Stack

- Plain HTML + CSS + JavaScript, single self-contained file (or a small `index.html` / `styles.css` / `script.js` split if the assistant prefers — either is fine, but keep it dependency-free).
- No build tools, no frameworks required.
- Google Fonts via CDN `<link>` is fine (client-side, loaded in the visitor's browser).
- No backend, no database, no API keys needed.

## Design System (reuse the established theme)

**Colors:**
```
--green-deep:  #08241A
--green-mid:   #113A2A
--green-light: #215C40
--gold:        #CDA454
--gold-light:  #F7DE96
--gold-dark:   #8C6828
--cream:       #F5EED6
```

**Typography (pick fonts with this personality, not necessarily these exact families):**
- A characterful serif display face for the headline and section titles (something with real presence, e.g. Playfair Display).
- A cursive/script accent face for a couple of special lines like "You're warmly invited" (used sparingly — one or two lines on the whole page, not everywhere).
- A clean, restrained sans-serif for body copy, labels, and captions so the ornate display face doesn't fight legibility.

**Signature motif:** an arched, gold-bordered picture-frame shape (rectangle with a rounded/arched top) reused consistently for every photo slot — this ties the hero photo, the story timeline photos, and the gallery photos together visually. Pair it with a thin double-line gold hairline border framing the page content itself, like a card edge.

Keep the boldness concentrated in that one signature motif plus the hero moment — keep supporting sections comparatively quiet and disciplined so the page doesn't feel over-decorated.

## Page Structure & Content

Build the page in this order. Suggested copy is provided — refine tone as needed, but keep it warm and personal, not corporate.

### 1. Hero
- Full-bleed hero photo (placeholder for now) with a dark green gradient overlay at the bottom for text legibility.
- Small eyebrow label: "A GOLDEN CELEBRATION" (letter-spaced, gold).
- Headline: **"Jovita @ 60"** — large display serif, entrance animation (e.g. letters/words fade and rise in on load, or a soft gold shimmer sweep).
- Script accent line: "You're warmly invited"
- A small date pill/badge: "August 22, 2026"
- A subtle scroll-down cue (bouncing chevron or similar).

### 2. Countdown
- Label: "Counting down to the celebration"
- Live countdown (days / hours / minutes / seconds) to **August 22, 2026, 5:30 PM (event start)**. Update every second via JS.
- Style as ticket-like boxes with the arched gold motif.

### 3. Welcome Message (photo slot #1)
- One placeholder photo (arched frame).
- Heading: "With Love"
- Body copy (adjust freely):
  > "Sixty years of laughter, strength, and unconditional love. Jovita has been the heart of our family, and now it's our turn to celebrate her. We'd be so happy to have you with us as we honor six wonderful decades."
- Sign-off in script font: "— The Domingo Family"

### 4. Her Story (photo slots #2, #3, #4 — a real chronological sequence, so numbering/ordering is appropriate here)
- Eyebrow: "HER STORY" / Heading: "Six Decades of Jovita"
- A vertical timeline, photos alternating left/right down the page, each with a short one-line caption:
  1. "The Early Years" — placeholder caption
  2. "Building a Family" — placeholder caption
  3. "Still Glowing Today" — placeholder caption
- Each item fades/slides in independently as it scrolls into view.

### 5. Gallery (photo slots #5, #6, #7)
- Eyebrow: "GALLERY" / Heading: "Moments Worth Celebrating"
- A simple responsive grid (e.g. one larger photo on top, two smaller below, or a clean 2-column grid) using the same arched-frame treatment.
- Photos scale/fade in on scroll.

### 6. Event Details
- Ticket/card-style panel: "SAVE THE DATE"
- Date: Saturday, August 22, 2026
- Venue: St. Agatha Subdivision, Clubhouse Phase 1
- Theme/attire: Gold • White • Green
- Small inline icons for calendar / location / palette (hand-rolled SVG, no icon library needed).
- Optional nice-to-have: an "Add to Calendar" link using a prefilled Google Calendar URL (no API key required):
  `https://www.google.com/calendar/render?action=TEMPLATE&text=Jovita%27s+60th+Birthday&dates=20260822T093000Z/20260822T153000Z&details=Celebrating+60+wonderful+years!&location=St.+Agatha+Subdivision%2C+Clubhouse+Phase+1`

### 7. Program of the Day (a genuine sequence, so a numbered timeline fits)
- Eyebrow: "ORDER OF EVENTS"
- Example schedule (placeholder times, adjust freely):
  1. Arrival & Cocktails — 5:30 PM
  2. Dinner is Served — 6:30 PM
  3. Toasts & Program — 7:30 PM
  4. Cake Cutting — 8:30 PM
  5. Dancing & Celebration — 9:00 PM onward
- Vertical line/progress style, filling in as the user scrolls.

### 8. Getting There
- Small card: venue address + a plain link to Google Maps search (`https://www.google.com/maps/search/?api=1&query=St.+Agatha+Subdivision+Clubhouse+Phase+1`) — no embedded map/API key needed.

### 9. RSVP
- Heading: "Kindly RSVP"
- Copy (no button/link — this is the key requirement):
  > "This invitation was sent to you personally — simply reply to this message to let us know if you'll be joining the celebration! 💌"

### 10. Closing
- Short sign-off: "We can't wait to celebrate with you."
- "With love and gratitude, The Domingo Family"
- A gentle confetti/sparkle flourish animation as a final celebratory beat.
- Small footer line (optional).

## Animation Guidance

- Use `IntersectionObserver` to add an `is-visible` class to sections/photos as they scroll into view; animate via CSS transitions (opacity + translateY), not JS-driven layout thrashing.
- Hero entrance animation plays once on load (headline reveal, maybe a soft fade-up of the photo).
- Countdown numbers tick every second via `setInterval`; consider a subtle flip/scale transition when a digit changes.
- Keep ambient sparkle/confetti effects restrained to the hero and closing sections only — don't run heavy background animation through the entire page (mobile performance + visual restraint).
- Wrap non-essential motion in a `@media (prefers-reduced-motion: reduce)` override that disables/shortens it.

## Mobile-First Implementation Notes

- Design the layout at ~375–430px width first; add larger-viewport rules after.
- On wider viewports, consider capping the main content column to a phone-like max-width (e.g. ~480px) and centering it on the themed background, so the page still reads like a personal invitation card rather than stretching into a generic wide website — this is a deliberate layout choice for this project, not a limitation.
- Touch targets (if any links/buttons remain, like "Add to Calendar" or "Get Directions") should be comfortably tappable (~44px minimum height).
- Test that text stays legible over the hero photo at narrow widths (gradient overlay strength, font sizing).

## Editable Content (keep near the top of the file, or in one clearly-marked config block)

```
HEADLINE          = "Jovita @ 60"
EVENT_DATE_LABEL  = "Saturday, August 22, 2026"
EVENT_DATETIME    = "2026-08-22T17:30:00" (event start, used for countdown + calendar link)
VENUE_LINE_1      = "St. Agatha Subdivision"
VENUE_LINE_2      = "Clubhouse, Phase 1"
THEME_LINE        = "Gold • White • Green"
FAMILY_SIGNOFF    = "The Domingo Family"
```

## Definition of Done

- [ ] Single scrollable page containing all 10 sections above
- [ ] Headline reads "Jovita @ 60" with an entrance animation
- [ ] 8 photo slots total (1 hero + 7), all clearly marked, easy-to-swap placeholders
- [ ] Countdown ticks live toward the event date/time
- [ ] Scroll-triggered reveal animations work smoothly on a phone-width viewport
- [ ] RSVP section has no button/link — just the Messenger-reply copy
- [ ] Looks intentional and uncluttered on a real phone screen at 375–430px wide, not just "responsive" as an afterthought
- [ ] `prefers-reduced-motion` is respected
- [ ] No external dependencies beyond optional Google Fonts (no frameworks, no API keys, no backend)
