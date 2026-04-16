import { motion, AnimatePresence } from "framer-motion";
import type { Conflict } from "../lib/types";
import Playlist from "./Playlist";

interface Props {
  conflict: Conflict;
}

const REGION_LABEL: Record<Conflict["region"], string> = {
  Europe: "Europe",
  MENA: "Middle East & North Africa",
  SubSaharanAfrica: "Sub-Saharan Africa",
  SouthAsia: "South Asia",
  SoutheastAsia: "Southeast Asia",
  EastAsia: "East Asia",
  LatinAmerica: "Latin America",
  NorthAmerica: "North America",
  Oceania: "Oceania",
};

export default function ConflictPanel({ conflict }: Props) {
  const years = `${conflict.startYear}–${conflict.endYear ?? "present"}`;

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={conflict.id}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-full overflow-y-auto bg-ink/80 border-l border-parchment/10 p-6 md:p-8"
      >
        <header className="mb-4">
          <p className="text-xs uppercase tracking-widest text-parchment/50">
            {REGION_LABEL[conflict.region]} · {conflict.country} · {years}
          </p>
          <h2 className="mt-1 text-3xl font-semibold text-parchment">
            {conflict.name}
          </h2>
          {conflict.aka && conflict.aka.length > 0 ? (
            <p className="mt-1 text-sm text-parchment/60 italic">
              also known as {conflict.aka.join(", ")}
            </p>
          ) : null}
        </header>

        <p className="text-parchment/85 leading-relaxed">{conflict.summary}</p>

        <section className="mt-5 grid gap-4 md:grid-cols-2">
          {conflict.belligerents.map((b) => (
            <div key={b.side}>
              <h3 className="text-sm uppercase tracking-wider text-rust/90">
                {b.side}
              </h3>
              <ul className="mt-1 text-sm text-parchment/80 list-disc list-inside">
                {b.parties.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {conflict.casualties ? (
          <section className="mt-5">
            <h3 className="text-sm uppercase tracking-wider text-rust/90">
              Casualties
            </h3>
            <p className="mt-1 text-sm text-parchment/80">
              {conflict.casualties}
            </p>
          </section>
        ) : null}

        <section className="mt-8">
          <h3 className="mb-4 text-sm uppercase tracking-wider text-rust/90">
            Playlist
          </h3>
          <Playlist tracks={conflict.musicTracks} />
        </section>
      </motion.aside>
    </AnimatePresence>
  );
}
