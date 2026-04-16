# Fortunate Son

An interactive world map of post-WWII conflicts (1945–present). Clicking a
conflict reveals its culturally-associated music playlist.

Static site — no backend. Deployable to Vercel, Netlify, or GitHub Pages.

## Stack

- Vite + React + TypeScript
- TailwindCSS
- react-simple-maps (world TopoJSON)
- framer-motion

## Scripts

```bash
npm install --legacy-peer-deps   # react-simple-maps peer is React 16/17/18; works with 19 at runtime
npm run dev                      # http://localhost:5173
npm run build                    # outputs /dist
npm run preview                  # preview the production build
```

## Data

All conflict entries live in `src/data/conflicts.ts` and conform to the types
in `src/lib/types.ts`. The current scaffold seeds a single entry (Vietnam War)
with five tracks.
