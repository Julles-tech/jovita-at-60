# CLAUDE.md

Guidance for Claude Code when working in this folder: a single-page birthday invitation for Jovita's 60th birthday.

Standalone project. Not related to any other portfolio/codebase. Do not import conventions from outside this folder.

## Source of truth

[jovita-master-prompt.md](jovita-master-prompt.md) is the original brief: tech stack, color tokens, motif, animation guidance, mobile-first rules, and the Definition of Done. [front-end-skill.md](front-end-skill.md) and [taste-skill.md](taste-skill.md) are the general design-taste guidelines behind it (anti-slop discipline, copy self-audit, motion restraint) — apply them wherever the master prompt leaves a choice open, but the master prompt's specifics (colors, fonts-with-personality, RSVP-by-Messenger-reply requirement) always win.

**Section list has since diverged from the master prompt** — the "Program of the Day / Order of Events" section was removed at the user's request (2026-07-27). A new "Six by Sixty" section (symbolic 6 Gifts / 6 Toast / 6 Roses / 6 Candles / 6 Wishes / 6 Cupcakes honoree lists, laid out as a 2-column grid of the six groups) was added on 2026-07-28, placed between Gallery and Event Details at the user's request. It carries the eyebrow "A Cherished Tradition" at the user's explicit request, even though it sits only one section after Her Story's eyebrow (tighter than the eyebrow-adjacency spacing rule would default to) — an intentional exception, not an oversight. On 2026-07-28 the separate "Getting There" section was folded into "Event Details": one `.ticket-panel` now holds the date + venue rows plus both the "Add to calendar" and "Get directions" pill links side by side (`.ticket-panel__actions`); the standalone `.location`/`.location__card` styles and section were removed. The color-theme row ("Gold · White · Green") was also removed from Event Details at the user's request. Current order: Hero, Countdown, Welcome, Her Story, Gallery, Six by Sixty, Event Details, RSVP, Closing (9 sections).

**Design read:** milestone birthday invitation for family/friends invited via Messenger, elegant and refined language, with an arched picture-frame motif as the signature element.

**Color tokens have fully replaced the master prompt's sage-green/gold/cream palette** — on 2026-07-28 the user supplied [color-pallette.png](color-pallette.png) (a terracotta/peach/teal/blush swatch set) and asked for it to be used across the entire page. Colors were sampled directly from the image and the `:root` tokens in `styles.css` were renamed to match (not just re-hexed): `--green-deep/mid/light` → `--teal-deep/mid/light` (`#112627` / `#234B4D` / `#3C8084`, the last is the exact sampled teal), `--gold/--gold-light/--gold-dark` → `--terracotta`/`--peach`/`--terracotta-dark` (`#C86B46` / `#EAB49C` / `#7E3F26`, the first two are exact sampled swatches), `--cream` → `--blush` (`#F9EDEB`, exact sampled swatch). All hardcoded `rgba()` values that mirrored the old greens/gold/cream (page-frame hairline, hero wash/scrim gradients, frame inset shadow) were converted to the matching new RGB triples so nothing references the old hues anymore. The arched frame motif and picture-frame gradient are unchanged in structure, just recolored. If you add new colors, sample from `color-pallette.png` or derive from these four tokens rather than introducing new hues.

## Real content status

- **Photos:** real photos exist in [jovita-photos/](jovita-photos/) — `jovita-hero.webp` (hero) + `jovita1.webp` through `jovita7.webp`. Do not use placeholder blocks; these are final assets. Current assignment:
  - Hero: `jovita-hero.webp`
  - Welcome/"With Love": `jovita5.webp`
  - Her Story (3 photos): `jovita1.webp`, `jovita3.webp`, `jovita6.webp`
  - Gallery (3 photos): `jovita2.webp`, `jovita4.webp`, `jovita7.webp`
- **Event facts (updated 2026-07-28):** Sunday, August 23, 2026, 5:30 PM · St. Agatha Subdivision, Clubhouse Phase 1 · hosted by the Domingo Family · RSVP is by replying to the Messenger message, no form/button. The Gold/White/Green theme line was removed from the page at the user's request; it's no longer shown anywhere, so don't re-add it without asking.
- **"Her Story" honesty note:** there are no archival/childhood photos, only recent candid ones. Don't caption them as fake chronology ("The Early Years," a baby photo, etc.) — that would be inventing history that isn't real. Caption this section around facets of who Jovita is now (faith, joy, adventurousness) instead of a fabricated life timeline.

## Stack

Plain HTML + CSS + JS, split into `index.html` / `styles.css` / `script.js`. No build step, no frameworks, no backend. Google Fonts via CDN `<link>` is fine here (client-side only). Deployable as static files as-is.

## Pre-flight check before calling the page done

- [ ] All 9 current sections present, in order (see note above — Program section was removed, Six by Sixty was added, Getting There was folded into Event Details).
- [ ] Countdown ticks live toward 2026-08-23T17:30:00.
- [ ] RSVP section has no button/link, just the Messenger-reply copy.
- [ ] Zero em-dashes in visible copy; copy self-audit done.
- [ ] Looks intentional at 375–430px width, not just "responsive" as an afterthought.
- [ ] `prefers-reduced-motion` disables/shortens non-essential motion.
- [ ] No fabricated chronology/history in photo captions.
