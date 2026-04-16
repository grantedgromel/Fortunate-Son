# Fortunate Son

An interactive world map of post-1945 armed conflicts and the songs that
have, over the years, become culturally attached to them — through films,
veteran adoption, protest, or the accidents of radio.

Static site. No backend, no analytics, no tracking, no cookie banners, no
email capture.

## Stack

- Vite + React + TypeScript
- TailwindCSS
- [react-simple-maps](https://www.react-simple-maps.io/) with the Natural
  Earth projection and `world-atlas` 110m TopoJSON
- Framer Motion for marker / panel transitions
- Fraunces (display) + Inter (text), loaded from Google Fonts

## Data

All conflict entries live in `src/data/conflicts.ts` and conform to the
types in `src/lib/types.ts`. Track curation rules:

- Prioritize culturally annexed tracks (film placements, veteran adoption,
  contemporaneous protest, period radio pop) over martial/official music.
- Each track gets a one-sentence `note` explaining the association.
- 3–6 tracks per conflict. Sparse is fine; don't invent linkages.
- `youtubeId` is only set when the mapping is confidently known; when it's
  missing the UI falls back to a YouTube search link.

## Local development

```bash
npm install --legacy-peer-deps
npm run dev       # http://localhost:5173
npm run build     # outputs /dist
npm run preview
```

`--legacy-peer-deps` is required because `react-simple-maps@3` still
declares its peer as React ≤18; it works with React 19 at runtime.

## Features

- World map with decade-coded markers (chronological palette, not political).
- Marker size scales with rough casualty magnitude (log scale, 4–14 px).
- Ongoing conflicts pulse.
- Controls overlay: decade range slider, region multi-select, text search
  (name, aka, country).
- Right-side drawer with conflict summary, belligerents, casualties, and
  playlist. Each track has an expand-on-click inline YouTube embed
  (youtube-nocookie, lazy-loaded, no autoplay).
- Bottom timeline grouped by region; click a bar to fly to the conflict.
- Shareable URLs via hash (e.g. `/#vietnam-war`).
- Keyboard: arrow keys navigate the filtered set, `Esc` closes the drawer.
- Print stylesheet renders a clean static version of the open conflict.

## Deploy

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
3. Install command override: `npm install --legacy-peer-deps`.
4. Deploy. Push to the default branch to trigger subsequent deploys.

### GitHub Pages

The site is a pure static bundle under `/dist`. For project-page hosting
at `https://<user>.github.io/<repo>/`, set Vite's `base` to `"/<repo>/"`
in `vite.config.ts`, then:

```bash
npm install --legacy-peer-deps
npm run build
# publish /dist to the gh-pages branch, e.g. with:
npx gh-pages -d dist
```

Or configure GitHub Pages to deploy from `/dist` via an Actions workflow
(`actions/upload-pages-artifact` + `actions/deploy-pages`).

### Netlify

Build command `npm run build`, publish directory `dist`, and an install
override of `npm install --legacy-peer-deps` (Netlify respects
`NPM_FLAGS=--legacy-peer-deps` in environment variables).

## Not a canonical list

The curation is opinionated and incomplete. Several conflicts have no
stable musical canon; their entries are sparse by design. Songs are
included as cultural-memory proxies — not as endorsements, and not as
claims that any artist intended their work as war commentary.
