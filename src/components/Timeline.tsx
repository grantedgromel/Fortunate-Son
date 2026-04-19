import { useMemo, useState } from "react";
import type { Conflict, Region } from "../lib/types";
import { decadeBand, DECADE_COLORS } from "../lib/decade";
import { REGION_LABELS } from "../lib/filter";

interface Props {
  conflicts: Conflict[];
  /** Ids that pass the active map filter. Bars outside this set render dimmed. */
  filteredIds?: Set<string>;
  selectedId?: string | null;
  hoveredId?: string | null;
  onSelect: (c: Conflict) => void;
  onHover: (id: string | null) => void;
  minYear: number;
  maxYear: number;
  axisMinYear: number;
  axisMaxYear: number;
}

export default function Timeline({
  conflicts,
  filteredIds,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  minYear,
  maxYear,
  axisMinYear,
  axisMaxYear,
}: Props) {
  const span = Math.max(1, axisMaxYear - axisMinYear);
  const [collapsed, setCollapsed] = useState<Set<Region>>(new Set());

  const byRegion = useMemo(() => {
    const map = new Map<Region, Conflict[]>();
    for (const c of conflicts) {
      const arr = map.get(c.region) ?? [];
      arr.push(c);
      map.set(c.region, arr);
    }
    return Array.from(map.entries()).sort((a, b) =>
      REGION_LABELS[a[0]].localeCompare(REGION_LABELS[b[0]]),
    );
  }, [conflicts]);

  const pct = (year: number) =>
    ((year - axisMinYear) / span) * 100;

  const decadeTicks: number[] = [];
  for (let y = Math.ceil(axisMinYear / 10) * 10; y <= axisMaxYear; y += 10) {
    decadeTicks.push(y);
  }

  const toggle = (r: Region) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(r)) next.delete(r);
      else next.add(r);
      return next;
    });
  };

  return (
    <div className="app-timeline border-t border-slate2 bg-surface/95 backdrop-blur">
      <div className="flex items-stretch">
        <div className="w-40 shrink-0 border-r border-slate2 px-3 py-2 text-[11px] uppercase tracking-widest text-parchment/60">
          Timeline
        </div>
        <div className="relative flex-1">
          <div className="flex h-6 items-end justify-between px-2 text-[10px] tabular-nums text-parchment/50">
            {decadeTicks.map((y) => (
              <span
                key={y}
                className="absolute -translate-x-1/2"
                style={{ left: `${pct(y)}%` }}
              >
                {y}
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 top-0 border-x border-accent/70 bg-accent/5"
            style={{
              left: `${pct(minYear)}%`,
              width: `${pct(maxYear) - pct(minYear)}%`,
            }}
          />
        </div>
      </div>

      <div className="max-h-56 overflow-y-auto">
        {byRegion.map(([region, list]) => {
          const isCollapsed = collapsed.has(region);
          return (
            <div key={region} className="flex items-stretch border-t border-slate2/60">
              <button
                type="button"
                onClick={() => toggle(region)}
                aria-expanded={!isCollapsed}
                className="flex w-40 shrink-0 items-center justify-between border-r border-slate2 px-3 py-1.5 text-left text-xs text-parchment/80 hover:text-accent"
              >
                <span className="truncate">{REGION_LABELS[region]}</span>
                <span className="text-parchment/40">
                  {isCollapsed ? "▸" : "▾"}
                </span>
              </button>
              <div className="relative flex-1">
                {!isCollapsed
                  ? list.map((c, i) => {
                      const end = c.endYear ?? axisMaxYear;
                      const left = pct(c.startYear);
                      const width = Math.max(0.4, pct(end) - left);
                      const band = decadeBand(c.startYear);
                      const isActive =
                        c.id === selectedId || c.id === hoveredId;
                      const inFilter =
                        !filteredIds || filteredIds.has(c.id);
                      const baseOpacity = inFilter ? 0.72 : 0.18;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => onSelect(c)}
                          onMouseEnter={() => onHover(c.id)}
                          onMouseLeave={() => onHover(null)}
                          onFocus={() => onHover(c.id)}
                          onBlur={() => onHover(null)}
                          aria-label={`${c.name} ${c.startYear}–${
                            c.endYear ?? "present"
                          }`}
                          className="absolute rounded-sm transition-[height,opacity] hover:opacity-100 focus:z-10"
                          style={{
                            left: `${left}%`,
                            width: `${width}%`,
                            top: 4 + (i % 3) * 7,
                            height: isActive ? 7 : 5,
                            background: DECADE_COLORS[band],
                            opacity: isActive ? 1 : baseOpacity,
                            outline: isActive
                              ? `1px solid #ece7d9`
                              : "none",
                          }}
                        />
                      );
                    })
                  : null}
                <div style={{ height: isCollapsed ? 8 : 30 }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
