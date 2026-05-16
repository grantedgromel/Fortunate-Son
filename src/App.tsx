import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Header from "./components/Header";
import WorldMap from "./components/WorldMap";
import Timeline from "./components/Timeline";
import SearchOverlay from "./components/SearchOverlay";
import ConflictModal from "./components/ConflictModal";
import { conflicts } from "./data/conflicts";
import { isActiveInYear } from "./lib/filter";
import { AXIS_MIN, AXIS_PRESENT } from "./lib/periods";

const AboutModal = lazy(() => import("./components/AboutModal"));

// Years per second when the timeline is playing.
const PLAYBACK_RATE = 1;

function readHashId(): string | null {
  if (typeof window === "undefined") return null;
  const id = window.location.hash.replace(/^#/, "");
  return id && conflicts.some((c) => c.id === id) ? id : null;
}

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(readHashId);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutEverOpened, setAboutEverOpened] = useState(false);
  const [currentYear, setCurrentYear] = useState(AXIS_MIN);
  const [playing, setPlaying] = useState(false);
  const [showAll, setShowAll] = useState(true);

  // null = show every conflict; otherwise only those active that year.
  const activeYear = showAll ? null : Math.round(currentYear);

  const selected = useMemo(
    () => conflicts.find((c) => c.id === selectedId) ?? null,
    [selectedId],
  );
  const closeConflict = useCallback(() => setSelectedId(null), []);

  // The set arrow keys step through — the conflicts currently on the map.
  const navList = useMemo(
    () =>
      activeYear == null
        ? conflicts
        : conflicts.filter((c) => isActiveInYear(c, activeYear)),
    [activeYear],
  );

  // Timeline playback — sweep the year forward, looping at the present.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setCurrentYear((y) => {
        const next = y + dt * PLAYBACK_RATE;
        return next >= AXIS_PRESENT ? AXIS_MIN : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  // Selection ⇄ URL hash.
  useEffect(() => {
    const url = new URL(window.location.href);
    url.hash = selectedId ?? "";
    window.history.replaceState(null, "", url.toString());
  }, [selectedId]);

  useEffect(() => {
    const onHash = () => setSelectedId(readHashId());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Global keyboard: ⌘K search, arrow keys step through the visible set.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
        return;
      }
      if (!selectedId || searchOpen || aboutOpen) return;
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
      const idx = navList.findIndex((c) => c.id === selectedId);
      if (idx === -1) return;
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const next = navList[(idx + dir + navList.length) % navList.length];
      if (next) {
        e.preventDefault();
        setSelectedId(next.id);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedId, searchOpen, aboutOpen, navList]);

  const scrub = useCallback((year: number) => {
    setShowAll(false);
    setPlaying(false);
    setCurrentYear(year);
  }, []);
  const togglePlay = useCallback(() => {
    setShowAll(false);
    setPlaying((p) => !p);
  }, []);
  const showAllYears = useCallback(() => {
    setShowAll(true);
    setPlaying(false);
  }, []);

  return (
    <div className="app">
      <Header
        onSearch={() => setSearchOpen(true)}
        onAbout={() => {
          setAboutEverOpened(true);
          setAboutOpen(true);
        }}
      />

      <main className="stage">
        <div className="map-stage">
          <WorldMap
            conflicts={conflicts}
            activeYear={activeYear}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={setSelectedId}
            onHover={setHoveredId}
          />
        </div>
      </main>

      <footer className="period-foot">
        <Timeline
          currentYear={currentYear}
          playing={playing}
          showAll={showAll}
          onScrub={scrub}
          onTogglePlay={togglePlay}
          onShowAll={showAllYears}
        />
      </footer>

      {selected ? (
        <ConflictModal conflict={selected} onClose={closeConflict} />
      ) : null}

      {searchOpen ? (
        <SearchOverlay
          conflicts={conflicts}
          onClose={() => setSearchOpen(false)}
          onSelect={(id) => {
            setShowAll(true);
            setPlaying(false);
            setSelectedId(id);
          }}
        />
      ) : null}

      {aboutEverOpened ? (
        <Suspense fallback={null}>
          <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
        </Suspense>
      ) : null}
    </div>
  );
}
