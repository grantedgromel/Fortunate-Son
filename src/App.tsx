import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import WorldMap from "./components/WorldMap";
import PeriodStrip from "./components/PeriodStrip";
import SearchOverlay from "./components/SearchOverlay";
import { conflicts } from "./data/conflicts";
import { inYearRange } from "./lib/filter";
import { FULL_RANGE } from "./lib/periods";

const AboutModal = lazy(() => import("./components/AboutModal"));

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
  const [yearWindow, setYearWindow] = useState<[number, number]>(FULL_RANGE);

  // Conflicts active within the selected period — plus the selected one,
  // so its marker (and the anchored popover) always has somewhere to live.
  const visible = useMemo(() => {
    const inWindow = conflicts.filter((c) =>
      inYearRange(c, yearWindow[0], yearWindow[1]),
    );
    if (selectedId && !inWindow.some((c) => c.id === selectedId)) {
      const sel = conflicts.find((c) => c.id === selectedId);
      if (sel) return [...inWindow, sel];
    }
    return inWindow;
  }, [yearWindow, selectedId]);

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
      const list = visible;
      const idx = list.findIndex((c) => c.id === selectedId);
      if (idx === -1) return;
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
      const next = list[(idx + dir + list.length) % list.length];
      if (next) {
        e.preventDefault();
        setSelectedId(next.id);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedId, searchOpen, aboutOpen, visible]);

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
            conflicts={visible}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={setSelectedId}
            onHover={setHoveredId}
          />
        </div>
      </main>

      <footer className="period-foot">
        <PeriodStrip yearWindow={yearWindow} onChange={setYearWindow} />
      </footer>

      {searchOpen ? (
        <SearchOverlay
          conflicts={conflicts}
          onClose={() => setSearchOpen(false)}
          onSelect={(id) => {
            setYearWindow(FULL_RANGE);
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
