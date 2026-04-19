import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import WorldMap from "./components/WorldMap";
import ConflictPanel from "./components/ConflictPanel";
import MapControls from "./components/MapControls";
import Timeline from "./components/Timeline";
import Header from "./components/Header";
import { conflicts } from "./data/conflicts";
import { ALL_REGIONS, applyFilter, type Filter } from "./lib/filter";

// AboutModal is genuinely on-demand: many sessions never open it. Code-split
// behind a lazy boundary and only mount once the user has opened it at least
// once (so the modal's internal exit animation survives subsequent closes).
const AboutModal = lazy(() => import("./components/AboutModal"));

const AXIS_MIN = 1945;
const AXIS_MAX = new Date().getFullYear();

const DEFAULT_CENTER: [number, number] = [10, 20];
const DEFAULT_ZOOM = 1;
const SELECTED_ZOOM = 4;
const FLY_DURATION_MS = 600;

function readHashId(): string | null {
  if (typeof window === "undefined") return null;
  const id = window.location.hash.replace(/^#/, "");
  return id && conflicts.some((c) => c.id === id) ? id : null;
}

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(readHashId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutEverOpened, setAboutEverOpened] = useState(false);
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

  // Animated camera that "flies" to whatever conflict is currently selected.
  const [camera, setCamera] = useState<{
    center: [number, number];
    zoom: number;
  }>({ center: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  const cameraRef = useRef(camera);
  cameraRef.current = camera;

  useEffect(() => {
    const target = selected
      ? { center: selected.coords, zoom: SELECTED_ZOOM }
      : { center: DEFAULT_CENTER, zoom: DEFAULT_ZOOM };
    const start = cameraRef.current;
    if (
      start.center[0] === target.center[0] &&
      start.center[1] === target.center[1] &&
      start.zoom === target.zoom
    ) {
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / FLY_DURATION_MS);
      const e = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCamera({
        center: [
          start.center[0] + (target.center[0] - start.center[0]) * e,
          start.center[1] + (target.center[1] - start.center[1]) * e,
        ],
        zoom: start.zoom + (target.zoom - start.zoom) * e,
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [selected?.id]);

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
      <Header
        onAbout={() => {
          setAboutEverOpened(true);
          setAboutOpen(true);
        }}
      />

      <main className="relative flex-1 overflow-hidden">
        <WorldMap
          conflicts={filtered}
          selectedId={selectedId}
          hoveredId={hoveredId}
          onSelect={(c) => setSelectedId(c.id)}
          onHover={setHoveredId}
          minYear={filter.minYear}
          maxYear={filter.maxYear}
          center={camera.center}
          zoom={camera.zoom}
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
        filteredIds={new Set(filtered.map((c) => c.id))}
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
      {aboutEverOpened ? (
        <Suspense fallback={null}>
          <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
