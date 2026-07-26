# CLAUDE.md

Guidance for Claude Code when working in this folder: a single-page birthday invitation for Jovita's 60th birthday.

Standalone project. Not related to any other portfolio/codebase. Do not import conventions from outside this folder.

## Source of truth

[jovita-master-prompt.md](jovita-master-prompt.md) is the original brief: tech stack, color tokens, motif, animation guidance, mobile-first rules, and the Definition of Done. [front-end-skill.md](front-end-skill.md) and [taste-skill.md](taste-skill.md) are the general design-taste guidelines behind it (anti-slop discipline, copy self-audit, motion restraint) — apply them wherever the master prompt leaves a choice open, but the master prompt's specifics (colors, fonts-with-personality, RSVP-by-Messenger-reply requirement) always win.

**Section list has since diverged from the master prompt** — the "Program of the Day / Order of Events" section was removed at the user's request (2026-07-27). Current order: Hero, Countdown, Welcome, Her Story, Gallery, Event Details, Getting There, RSVP, Closing (9 sections, not the original 10).

**Design read:** milestone birthday invitation for family/friends invited via Messenger, elegant and refined language, sage green + gold + cream palette with an arched gold picture-frame motif as the signature element.

**Color tokens have since diverged from the master prompt** — the green family was changed from a saturated emerald/forest green to a muted, desaturated sage green at the user's request (2026-07-27). Current values: `--green-deep: #1D2518`, `--green-mid: #303E28`, `--green-light: #577147` (was `#08241A` / `#113A2A` / `#215C40`). Gold/cream tokens are unchanged. If you touch any hardcoded rgba() greens outside the `:root` tokens (e.g. hero wash/scrim gradients), keep them in sync with these values, not the master prompt's originals.

## Real content status

- **Photos:** real photos exist in [jovita-photos/](jovita-photos/) — `jovita-hero.webp` (hero) + `jovita1.webp` through `jovita7.webp`. Do not use placeholder blocks; these are final assets. Current assignment:
  - Hero: `jovita-hero.webp`
  - Welcome/"With Love": `jovita5.webp`
  - Her Story (3 photos): `jovita1.webp`, `jovita3.webp`, `jovita6.webp`
  - Gallery (3 photos): `jovita2.webp`, `jovita4.webp`, `jovita7.webp`
- **Event facts (updated 2026-07-27):** Sunday, August 23, 2026, 5:30 PM · St. Agatha Subdivision, Clubhouse Phase 1 · theme Gold • White • Green · hosted by the Domingo Family · RSVP is by replying to the Messenger message, no form/button.
- **"Her Story" honesty note:** there are no archival/childhood photos, only recent candid ones. Don't caption them as fake chronology ("The Early Years," a baby photo, etc.) — that would be inventing history that isn't real. Caption this section around facets of who Jovita is now (faith, joy, adventurousness) instead of a fabricated life timeline.

## Stack

Plain HTML + CSS + JS, split into `index.html` / `styles.css` / `script.js`. No build step, no frameworks, no backend. Google Fonts via CDN `<link>` is fine here (client-side only). Deployable as static files as-is.

## Pre-flight check before calling the page done

- [ ] All 9 current sections present, in order (see note above — Program section was intentionally removed).
- [ ] Countdown ticks live toward 2026-08-23T17:30:00.
- [ ] RSVP section has no button/link, just the Messenger-reply copy.
- [ ] Zero em-dashes in visible copy; copy self-audit done.
- [ ] Looks intentional at 375–430px width, not just "responsive" as an afterthought.
- [ ] `prefers-reduced-motion` disables/shortens non-essential motion.
- [ ] No fabricated chronology/history in photo captions.
