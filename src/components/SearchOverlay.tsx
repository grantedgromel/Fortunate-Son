import { useEffect, useMemo, useRef, useState } from "react";
import type { Conflict } from "../lib/types";

interface Props {
  conflicts: Conflict[];
  onClose: () => void;
  onSelect: (id: string) => void;
}

interface Hit {
  conflict: Conflict;
  detail: string;
}

// ⌘K search overlay — matches conflict name, aka, country, and track metadata.
// Mounted only while open, so it always opens with an empty query.
export default function SearchOverlay({ conflicts, onClose, onSelect }: Props) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(id);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const results = useMemo<Hit[] | null>(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return null;
    const hits: Hit[] = [];
    for (const c of conflicts) {
      if (c.name.toLowerCase().includes(needle)) {
        hits.push({
          conflict: c,
          detail: `${c.startYear}–${c.endYear ?? "present"}`,
        });
        continue;
      }
      if (c.aka?.some((a) => a.toLowerCase().includes(needle))) {
        hits.push({ conflict: c, detail: c.aka.join(" · ") });
        continue;
      }
      if (c.country.toLowerCase().includes(needle)) {
        hits.push({ conflict: c, detail: c.country });
        continue;
      }
      const track = c.musicTracks.find(
        (t) =>
          t.title.toLowerCase().includes(needle) ||
          t.artist.toLowerCase().includes(needle),
      );
      if (track) {
        hits.push({ conflict: c, detail: `${track.title} — ${track.artist}` });
      }
    }
    return hits.slice(0, 14);
  }, [q, conflicts]);

  return (
    <div className="search-scrim" onClick={onClose}>
      <div
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-bar">
          <span className="mono micro dim">⌘K</span>
          <input
            ref={inputRef}
            className="search-input serif"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search conflicts, songs, artists…"
          />
          <span className="mono micro dim">esc</span>
        </div>
        {results ? (
          <div className="search-results">
            {results.length === 0 ? (
              <div className="mono micro dim no-results">No matches.</div>
            ) : (
              results.map(({ conflict, detail }) => (
                <button
                  key={conflict.id}
                  className="search-row"
                  onClick={() => {
                    onSelect(conflict.id);
                    onClose();
                  }}
                >
                  <span className="serif">{conflict.name}</span>
                  <span className="mono micro dim">{detail}</span>
                </button>
              ))
            )}
          </div>
        ) : (
          <div className="search-hint mono micro dim">
            Try: Vietnam, Fortunate Son, CCR, Chile
          </div>
        )}
      </div>
    </div>
  );
}
