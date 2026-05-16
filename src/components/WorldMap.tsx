import {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import { geoOrthographic, geoDistance } from "d3-geo";
import type { Conflict } from "../lib/types";
import { isoOf } from "../lib/geo";
import { isActiveInYear } from "../lib/filter";
import { vinylLabelColor } from "../lib/vinyl";
import { parseCasualtyMagnitude } from "../lib/casualties";
import VinylDisc from "./VinylDisc";

const GEO_URL = "/countries-110m.json";
const VIEW_W = 980;
const VIEW_H = 560;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const BASE_SCALE = 250;
const MIN_SCALE = 250;
const MAX_SCALE = 1100;
const DEFAULT_ROTATION: [number, number] = [-12, -16];

interface Props {
  conflicts: Conflict[];
  activeYear: number | null;
  selectedId: string | null;
  hoveredId: string | null;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

interface Placed {
  conflict: Conflict;
  x: number;
  y: number;
  r: number;
  mag: number;
}

function WorldMap({
  conflicts,
  activeYear,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<[number, number]>(DEFAULT_ROTATION);
  const [scale, setScale] = useState(BASE_SCALE);

  // One orthographic projection drives both the country paths (via RSM) and
  // the marker placement. clipAngle(90) makes it return null for points on
  // the hidden hemisphere — which doubles as our back-of-globe cull.
  const projection = useMemo(
    () =>
      geoOrthographic()
        .clipAngle(90)
        .rotate([rotation[0], rotation[1], 0])
        .scale(scale)
        .translate([CX, CY]),
    [rotation, scale],
  );

  const rotationRef = useRef(rotation);
  useEffect(() => {
    rotationRef.current = rotation;
  });
  const dragRef = useRef<{ x: number; y: number; rot: [number, number] } | null>(null);
  const draggedRef = useRef(false);
  const spinRaf = useRef(0);

  // Drag anywhere on the globe to rotate it.
  const onPointerDown = (e: React.PointerEvent) => {
    if (spinRaf.current) {
      cancelAnimationFrame(spinRaf.current);
      spinRaf.current = 0;
    }
    draggedRef.current = false;
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      rot: [...rotation] as [number, number],
    };
    const sens = 0.34 * (BASE_SCALE / scale);
    const onMove = (ev: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = ev.clientX - d.x;
      const dy = ev.clientY - d.y;
      if (!draggedRef.current && Math.hypot(dx, dy) < 4) return;
      draggedRef.current = true;
      setRotation([
        d.rot[0] + dx * sens,
        Math.max(-90, Math.min(90, d.rot[1] - dy * sens)),
      ]);
    };
    const onUp = () => {
      dragRef.current = null;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  // Wheel to zoom (native + non-passive so the page doesn't scroll).
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      setScale((s) => Math.max(MIN_SCALE, Math.min(MAX_SCALE, s * factor)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Spin the globe to face a newly selected conflict.
  useEffect(() => {
    if (!selectedId) return;
    const c = conflicts.find((x) => x.id === selectedId);
    if (!c) return;
    const start = [...rotationRef.current] as [number, number];
    const target: [number, number] = [-c.coords[0], -c.coords[1]];
    const dLng = ((target[0] - start[0] + 540) % 360) - 180;
    const dLat = target[1] - start[1];
    if (Math.abs(dLng) < 1 && Math.abs(dLat) < 1) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / 650);
      const e = 1 - Math.pow(1 - t, 3);
      setRotation([start[0] + dLng * e, start[1] + dLat * e]);
      spinRaf.current = t < 1 ? requestAnimationFrame(tick) : 0;
    };
    spinRaf.current = requestAnimationFrame(tick);
    return () => {
      if (spinRaf.current) cancelAnimationFrame(spinRaf.current);
      spinRaf.current = 0;
    };
  }, [selectedId, conflicts]);

  // Project conflicts to the visible hemisphere, then relax overlaps apart.
  // clipAngle only clips paths — markers must be culled against the globe
  // centre by angular distance, or back-of-globe discs would show through.
  const placed = useMemo<Placed[]>(() => {
    const center: [number, number] = [-rotation[0], -rotation[1]];
    const mags = conflicts.map((c) => parseCasualtyMagnitude(c.casualties));
    const max = Math.max(1, ...mags);
    const out: (Placed & { ox: number; oy: number })[] = [];
    conflicts.forEach((c, i) => {
      if (geoDistance(c.coords, center) > (Math.PI / 2) * 0.98) return;
      const p = projection(c.coords);
      if (!p || !isFinite(p[0]) || !isFinite(p[1])) return;
      const mag = mags[i] > 0 ? Math.log(mags[i] + 1) / Math.log(max + 1) : 0.25;
      const r = 9 + mag * 7;
      out.push({ conflict: c, x: p[0], y: p[1], ox: p[0], oy: p[1], r, mag });
    });
    const MAX_DRIFT = 14;
    for (let pass = 0; pass < 10; pass++) {
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
    return out.map(({ conflict, x, y, r, mag }) => ({ conflict, x, y, r, mag }));
  }, [conflicts, projection, rotation]);

  const focusedId = hoveredId ?? selectedId;
  const focusedCountries = useMemo(() => {
    if (!focusedId) return null;
    const c = conflicts.find((x) => x.id === focusedId);
    return c ? new Set(c.countries) : null;
  }, [focusedId, conflicts]);

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

  const hovered = conflicts.find((c) => c.id === hoveredId) ?? null;

  return (
    <div
      ref={wrapRef}
      className="map-wrap globe"
      onPointerDown={onPointerDown}
    >
      <ComposableMap
        projection={projection as never}
        width={VIEW_W}
        height={VIEW_H}
        className="map-svg"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient id="oceanSphere" cx="0.4" cy="0.34" r="0.78">
            <stop offset="0%" stopColor="#f4eddd" />
            <stop offset="58%" stopColor="#e8ddc7" />
            <stop offset="100%" stopColor="#d4c6a6" />
          </radialGradient>
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

        <Sphere
          id="globe-sphere"
          fill="url(#oceanSphere)"
          stroke="#1a1a1a"
          strokeOpacity={0.4}
          strokeWidth={0.9}
        />
        <Graticule stroke="#1a1a1a" strokeOpacity={0.07} strokeWidth={0.4} />
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

        {ordered.map(({ conflict: c, x, y, r, mag }) => {
          const isSel = c.id === selectedId;
          const isHov = c.id === hoveredId;
          const dim = Boolean(focusedId) && !isSel && !isHov;
          const active = activeYear == null || isActiveInYear(c, activeYear);
          const sc = isSel ? 1.4 : isHov ? 1.18 : 1;
          const rr = r * sc;
          return (
            <g
              key={c.id}
              data-conflict={c.id}
              transform={`translate(${x},${y})`}
              style={{
                cursor: "pointer",
                opacity: !active ? 0 : dim ? 0.4 : 1,
                pointerEvents: active ? "auto" : "none",
                transition: "opacity 0.45s ease",
              }}
              onMouseEnter={() => onHover(c.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => {
                if (draggedRef.current) return;
                onSelect(isSel ? null : c.id);
              }}
            >
              <VinylDisc
                r={rr}
                labelColor={vinylLabelColor(c.id)}
                spinning={isSel || isHov}
                magnitude={mag}
              />
              <circle r={rr * 1.3} fill="transparent" />
            </g>
          );
        })}
      </ComposableMap>

      <div className="zoom-ctl mono micro">
        <button
          onClick={() => setScale((s) => Math.min(MAX_SCALE, s * 1.4))}
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={() => setScale((s) => Math.max(MIN_SCALE, s / 1.4))}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          onClick={() => {
            setRotation(DEFAULT_ROTATION);
            setScale(BASE_SCALE);
          }}
          aria-label="Reset view"
        >
          ⤾
        </button>
      </div>

      <HoverTooltip
        wrapRef={wrapRef}
        hovered={hovered}
        selectedId={selectedId}
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

// Hover tooltip — tracks the hovered marker per-frame in its own state so it
// never re-renders the map SVG.
function HoverTooltip({
  wrapRef,
  hovered,
  selectedId,
}: {
  wrapRef: RefObject<HTMLDivElement | null>;
  hovered: Conflict | null;
  selectedId: string | null;
}) {
  const [rect, setRect] = useState<Rect | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !hovered) return;
    let raf = 0;
    const tick = () => {
      setRect(measure(wrap, hovered.id));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [wrapRef, hovered]);

  if (!hovered || hovered.id === selectedId || !rect) return null;
  return (
    <div
      className="vinyl-tip"
      style={{ left: rect.x, top: rect.y - rect.r - 6 }}
    >
      <div className="serif vt-title">{hovered.name}</div>
      <div className="mono micro vt-years">
        {hovered.startYear}–{hovered.endYear ?? "present"}
      </div>
    </div>
  );
}

export default memo(WorldMap);
