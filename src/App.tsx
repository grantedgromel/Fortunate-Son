import { useState } from "react";
import WorldMap from "./components/WorldMap";
import ConflictPanel from "./components/ConflictPanel";
import { conflicts } from "./data/conflicts";
import type { Conflict } from "./lib/types";

export default function App() {
  // Default to Vietnam (the only seeded entry) so the scaffold demo shows
  // content immediately.
  const [selected, setSelected] = useState<Conflict>(conflicts[0]);

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="border-b border-parchment/10 px-6 py-4">
        <h1 className="text-2xl font-semibold tracking-wide text-parchment">
          Fortunate Son
        </h1>
        <p className="text-xs text-parchment/60">
          Post-WWII conflicts and the music that travels with them. 1945 →
          present.
        </p>
      </header>

      <main className="flex flex-1 flex-col md:flex-row md:overflow-hidden">
        <section className="md:flex-1 md:overflow-hidden">
          <WorldMap
            conflicts={conflicts}
            selectedId={selected.id}
            onSelect={setSelected}
          />
        </section>
        <section className="md:w-[28rem] md:max-w-[40%] md:overflow-hidden">
          <ConflictPanel conflict={selected} />
        </section>
      </main>
    </div>
  );
}
