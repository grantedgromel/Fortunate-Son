import { useEffect, useMemo, useState } from "react";
import WorldMap from "./components/WorldMap";
import ConflictPanel from "./components/ConflictPanel";
import MapControls from "./components/MapControls";
import Timeline from "./components/Timeline";
import Header from "./components/Header";
import AboutModal from "./components/AboutModal";
import { conflicts } from "./data/conflicts";
import { ALL_REGIONS, applyFilter, type Filter } from "./lib/filter";

const AXIS_MIN = 1945;
const AXIS_MAX = new Date().getFullYear();

function readHashId(): string | null {
  if (typeof window === "undefined") return null;
  const id = window.location.hash.replace(/^#/, "");
  return id && conflicts.some((c) => c.id === id) ? id : null;
}

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(readHashId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    minYear: AXIS_MIN,
    maxYear: AXIS_MAX,
    regions: [...ALL_REGIONS],
    query: "",
  });

  const filtered = useMemo(() => applyFilter(conflicts, filter), [filter]);
  const selected = useMemo(
    () => conflicts.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );

  // Selection → hash.
  useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = selectedId ?? "";
    window.history.replaceState(null, "", url.toString());
  }, [selectedId]);

  // React to user changing the hash manually (back/forward, paste).
  useEffect(() => {
    const onHash = () => setSelectedId(readHashId());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Global keyboard: ESC closes, arrow keys navigate filtered set.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (aboutOpen) return; // AboutModal handles its own ESC
        if (selectedId) {
          e.preventDefault();
          setSelectedId(null);
        }
        return;
      }
      if (!selectedId) return;
      if (
        e.key !== "ArrowLeft" &&
        e.key !== "ArrowRight" &&
        e.key !== "ArrowUp" &&
        e.key !== "ArrowDown"
      ) {
        return;
      }
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      const list = filtered.length > 0 ? filtered : conflicts;
      const idx = list.findIndex((c) => c.id === selectedId);
      if (idx === -1) return;
      const dir =
        e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const next = list[(idx + dir + list.length) % list.length];
      if (next) {
        e.preventDefault();
        setSelectedId(next.id);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedId, filtered, aboutOpen]);

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header onAbout={() => setAboutOpen(true)} />

      <main className="relative flex-1 overflow-hidden">
        <WorldMap
          conflicts={filtered}
          selectedId={selectedId}
          hoveredId={hoveredId}
          onSelect={(c) => setSelectedId(c.id)}
          onHover={setHoveredId}
          minYear={filter.minYear}
          maxYear={filter.maxYear}
        />
        <div className="pointer-events-none absolute left-4 top-4 z-20">
          <MapControls
            filter={filter}
            onChange={setFilter}
            minYearBound={AXIS_MIN}
            maxYearBound={AXIS_MAX}
          />
        </div>
      </main>

      <Timeline
        conflicts={conflicts}
        selectedId={selectedId}
        hoveredId={hoveredId}
        onSelect={(c) => setSelectedId(c.id)}
        onHover={setHoveredId}
        minYear={filter.minYear}
        maxYear={filter.maxYear}
        axisMinYear={AXIS_MIN}
        axisMaxYear={AXIS_MAX}
      />

      <ConflictPanel
        conflict={selected}
        onClose={() => setSelectedId(null)}
      />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}
