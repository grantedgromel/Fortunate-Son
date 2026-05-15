import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";
import { geoNaturalEarth1 } from "d3-geo";
import type { Conflict } from "../lib/types";
import { isoOf } from "../lib/geo";
import { vinylLabelColor } from "../lib/vinyl";
import { parseCasualtyMagnitude } from "../lib/casualties";
import VinylDisc from "./VinylDisc";
import ConflictPopover from "./ConflictPopover";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const VIEW_W = 980;
const VIEW_H = 520;

interface Props {
  conflicts: Conflict[];
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

interface Position {
  coordinates: [number, number];
  zoom: number;
}

interface Placed {
  conflict: Conflict;
  x: number;
  y: number;
  r: number;
}

export default function WorldMap({
  conflicts,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({
    coordinates: [10, 20],
    zoom: 1,
  });

  // Project every conflict to viewBox pixels (matching ComposableMap's own
  // geoNaturalEarth1 set-up), then relax overlapping discs apart — clamped so
  // a marker never drifts far from its true location.
  const placed = useMemo<Placed[]>(() => {
    const proj = geoNaturalEarth1()
      .translate([VIEW_W / 2, VIEW_H / 2])
      .scale(175);
    const mags = conflicts.map((c) => parseCasualtyMagnitude(c.casualties));
    const max = Math.max(1, ...mags);
    const out: (Placed & { ox: number; oy: number })[] = [];
    conflicts.forEach((c, i) => {
      const p = proj(c.coords);
      if (!p || !isFinite(p[0]) || !isFinite(p[1])) return;
      const t = mags[i] > 0 ? Math.log(mags[i] + 1) / Math.log(max + 1) : 0.3;
      const r = 9 + t * 7;
      out.push({ conflict: c, x: p[0], y: p[1], ox: p[0], oy: p[1], r });
    });
    const MAX_DRIFT = 16;
    for (let pass = 0; pass < 14; pass++) {
      for (let i = 0; i < out.length; i++) {
        for (let j = i + 1; j < out.length; j++) {
          const a = out[i];
          const b = out[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
          const min = a.r + b.r + 3;
          if (dist < min) {
            const push = ((min - dist) / 2) * 0.45;
            const ux = dx / dist;
            const uy = dy / dist;
            a.x -= ux * push;
            a.y -= uy * push;
            b.x += ux * push;
            b.y += uy * push;
          }
        }
      }
      for (const o of out) {
        const dx = o.x - o.ox;
        const dy = o.y - o.oy;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > MAX_DRIFT) {
          o.x = o.ox + (dx / d) * MAX_DRIFT;
          o.y = o.oy + (dy / d) * MAX_DRIFT;
        }
      }
    }
    return out.map(({ conflict, x, y, r }) => ({ conflict, x, y, r }));
  }, [conflicts]);

  const focusedId = hoveredId ?? selectedId;
  const focusedCountries = useMemo(() => {
    if (!focusedId) return null;
    const c = conflicts.find((x) => x.id === focusedId);
    return c ? new Set(c.countries) : null;
  }, [focusedId, conflicts]);

  const zoomBy = (factor: number) =>
    setPosition((p) => ({
      ...p,
      zoom: Math.max(1, Math.min(8, p.zoom * factor)),
    }));
  const reset = () => setPosition({ coordinates: [10, 20], zoom: 1 });

  const selected = conflicts.find((c) => c.id === selectedId) ?? null;
  const hovered = conflicts.find((c) => c.id === hoveredId) ?? null;

  // Selected disc drawn last so it sits above any it overlaps.
  const ordered = useMemo(
    () =>
      [...placed].sort(
        (a, b) =>
          (a.conflict.id === selectedId ? 1 : 0) -
          (b.conflict.id === selectedId ? 1 : 0),
      ),
    [placed, selectedId],
  );

  return (
    <div ref={wrapRef} className="map-wrap">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 175 }}
        width={VIEW_W}
        height={VIEW_H}
        className="map-svg"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient id="vinylSheen" cx="0.35" cy="0.32" r="0.6">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="hatch"
            patternUnits="userSpaceOnUse"
            width="5"
            height="5"
            patternTransform="rotate(45)"
          >
            <rect width="5" height="5" fill="#e1d8c4" />
            <line x1="0" y1="0" x2="0" y2="5" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.22" />
          </pattern>
        </defs>
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          minZoom={1}
          maxZoom={8}
          onMoveEnd={(p: Position) => setPosition(p)}
        >
          <Sphere
            id="rsm-sphere"
            stroke="#1a1a1a"
            strokeOpacity={0.18}
            strokeWidth={0.5}
            fill="#eee6d6"
          />
          <Graticule stroke="#1a1a1a" strokeOpacity={0.06} strokeWidth={0.4} />
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; id?: string }> }) =>
              geographies.map((geo) => {
                const iso = isoOf(geo.id);
                const inFocus = focusedCountries && iso && focusedCountries.has(iso);
                const fill = inFocus
                  ? "#b8332f"
                  : focusedCountries
                    ? "url(#hatch)"
                    : "#e1d8c4";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill,
                        stroke: "#1a1a1a",
                        strokeWidth: inFocus ? 0.7 : 0.4,
                        strokeOpacity: inFocus ? 0.9 : 0.3,
                        outline: "none",
                      },
                      hover: { fill, stroke: "#1a1a1a", strokeWidth: 0.4, outline: "none" },
                      pressed: { fill, outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {ordered.map(({ conflict: c, x, y, r }) => {
            const isSel = c.id === selectedId;
            const isHov = c.id === hoveredId;
            const dim = Boolean(focusedId) && !isSel && !isHov;
            const scale = isSel ? 1.45 : isHov ? 1.18 : 1;
            const screenR = (r * scale) / Math.pow(position.zoom, 0.85);
            return (
              <g
                key={c.id}
                data-conflict={c.id}
                transform={`translate(${x},${y})`}
                style={{
                  cursor: "pointer",
                  opacity: dim ? 0.35 : 1,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={() => onHover(c.id)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSelect(isSel ? null : c.id)}
              >
                <VinylDisc
                  r={screenR}
                  labelColor={vinylLabelColor(c.id)}
                  spinning={isSel || isHov}
                />
                <circle r={screenR * 1.3} fill="transparent" />
              </g>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      <div className="zoom-ctl mono micro">
        <button onClick={() => zoomBy(1.4)} aria-label="Zoom in">+</button>
        <button onClick={() => zoomBy(1 / 1.4)} aria-label="Zoom out">−</button>
        <button onClick={reset} aria-label="Reset view">⤾</button>
      </div>

      <MapOverlays
        wrapRef={wrapRef}
        selected={selected}
        hovered={hovered}
        onClose={() => onSelect(null)}
      />
    </div>
  );
}

interface Rect {
  x: number;
  y: number;
  r: number;
}

function measure(wrap: HTMLElement, id: string): Rect | null {
  const el = wrap.querySelector(`[data-conflict="${id}"]`);
  if (!el) return null;
  const g = el.getBoundingClientRect();
  const w = wrap.getBoundingClientRect();
  return {
    x: g.left + g.width / 2 - w.left,
    y: g.top + g.height / 2 - w.top,
    r: g.width / 2,
  };
}

// Overlay layer (hover tooltip + anchored popover). Holds its own per-frame
// anchor state so tracking the markers never re-renders the map SVG.
function MapOverlays({
  wrapRef,
  selected,
  hovered,
  onClose,
}: {
  wrapRef: RefObject<HTMLDivElement | null>;
  selected: Conflict | null;
  hovered: Conflict | null;
  onClose: () => void;
}) {
  const [selRect, setSelRect] = useState<Rect | null>(null);
  const [hovRect, setHovRect] = useState<Rect | null>(null);
  const [mapSize, setMapSize] = useState({ w: 1200, h: 600 });

  useEffect(() => {
    const wrap = wrapRef.current;
    // Stale rects are harmless — the render guards on `selected` / `hovered`.
    if (!wrap || (!selected && !hovered)) return;
    let raf = 0;
    const tick = () => {
      const w = wrap.getBoundingClientRect();
      setMapSize({ w: w.width, h: w.height });
      setSelRect(selected ? measure(wrap, selected.id) : null);
      setHovRect(hovered ? measure(wrap, hovered.id) : null);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [wrapRef, selected, hovered]);

  return (
    <>
      {hovered && hovered.id !== selected?.id && hovRect ? (
        <div
          className="vinyl-tip"
          style={{ left: hovRect.x, top: hovRect.y - hovRect.r - 6 }}
        >
          <div className="serif vt-title">{hovered.name}</div>
          <div className="mono micro vt-years">
            {hovered.startYear}–{hovered.endYear ?? "present"}
          </div>
        </div>
      ) : null}

      {selected && selRect ? (
        <ConflictPopover
          conflict={selected}
          anchor={selRect}
          mapW={mapSize.w}
          mapH={mapSize.h}
          onClose={onClose}
        />
      ) : null}
    </>
  );
}
