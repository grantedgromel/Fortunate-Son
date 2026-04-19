import { useEffect, useRef, useState } from "react";
import type { Region } from "../lib/types";
import { ALL_REGIONS, REGION_LABELS, type Filter } from "../lib/filter";
import { DECADE_COLORS, DECADE_LABELS, DECADE_ORDER } from "../lib/decade";

interface Props {
  filter: Filter;
  onChange: (next: Filter) => void;
  minYearBound: number;
  maxYearBound: number;
}

export default function MapControls({
  filter,
  onChange,
  minYearBound,
  maxYearBound,
}: Props) {
  const [regionsOpen, setRegionsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!regionsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setRegionsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [regionsOpen]);

  const setMin = (v: number) =>
    onChange({ ...filter, minYear: Math.min(v, filter.maxYear) });
  const setMax = (v: number) =>
    onChange({ ...filter, maxYear: Math.max(v, filter.minYear) });

  const toggleRegion = (r: Region) => {
    const has = filter.regions.includes(r);
    const next = has
      ? filter.regions.filter((x) => x !== r)
      : [...filter.regions, r];
    onChange({ ...filter, regions: next });
  };

  return (
    <div
      ref={wrapRef}
      className="app-controls pointer-events-auto flex w-72 flex-col gap-3 rounded-sm border border-slate2 bg-surface/90 p-4 text-sm shadow-xl backdrop-blur"
    >
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest text-parchment/60">
          Search
        </span>
        <input
          type="search"
          value={filter.query}
          onChange={(e) => onChange({ ...filter, query: e.target.value })}
          placeholder="Name, aka, or country"
          className="rounded-sm border border-slate2 bg-ink px-2 py-1.5 text-parchment placeholder:text-parchment/35 focus:border-accent"
        />
      </label>

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-widest text-parchment/60">
            Years
          </span>
          <span className="tabular-nums text-parchment/80">
            {filter.minYear}–{filter.maxYear}
          </span>
        </div>
        <div className="dual-range relative h-6 px-[7px]">
          <div className="pointer-events-none absolute inset-x-[7px] top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate2" />
          <div
            className="pointer-events-none absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent/70"
            style={{
              left: `calc(${
                ((filter.minYear - minYearBound) /
                  Math.max(1, maxYearBound - minYearBound)) *
                100
              }% + 0px)`,
              right: `calc(${
                ((maxYearBound - filter.maxYear) /
                  Math.max(1, maxYearBound - minYearBound)) *
                100
              }% + 0px)`,
            }}
          />
          <input
            type="range"
            min={minYearBound}
            max={maxYearBound}
            value={filter.minYear}
            onChange={(e) => setMin(Number(e.target.value))}
            aria-label="Earliest year"
            className="dual-range__input"
          />
          <input
            type="range"
            min={minYearBound}
            max={maxYearBound}
            value={filter.maxYear}
            onChange={(e) => setMax(Number(e.target.value))}
            aria-label="Latest year"
            className="dual-range__input dual-range__input--upper"
          />
        </div>
        <ol className="mt-1 flex gap-1 text-[10px] uppercase tracking-wider text-parchment/50">
          {DECADE_ORDER.map((band) => (
            <li key={band} className="flex items-center gap-1">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: DECADE_COLORS[band] }}
              />
              <span>{DECADE_LABELS[band]}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest text-parchment/60">
          Regions
        </span>
        <button
          type="button"
          onClick={() => setRegionsOpen((v) => !v)}
          aria-expanded={regionsOpen}
          className="flex items-center justify-between rounded-sm border border-slate2 bg-ink px-2 py-1.5 text-left text-parchment hover:border-accent"
        >
          <span>
            {filter.regions.length === ALL_REGIONS.length
              ? "All regions"
              : `${filter.regions.length} selected`}
          </span>
          <span className="text-parchment/60">{regionsOpen ? "▲" : "▼"}</span>
        </button>
        {regionsOpen ? (
          <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-64 overflow-y-auto rounded-sm border border-slate2 bg-surface p-2 shadow-xl">
            {ALL_REGIONS.map((r) => (
              <label
                key={r}
                className="flex cursor-pointer items-center gap-2 px-1 py-1 text-parchment hover:bg-slate1"
              >
                <input
                  type="checkbox"
                  checked={filter.regions.includes(r)}
                  onChange={() => toggleRegion(r)}
                  className="accent-accent"
                />
                <span>{REGION_LABELS[r]}</span>
              </label>
            ))}
            <div className="mt-2 flex gap-2 border-t border-slate2 pt-2 text-xs">
              <button
                type="button"
                className="text-accent hover:underline"
                onClick={() =>
                  onChange({ ...filter, regions: [...ALL_REGIONS] })
                }
              >
                All
              </button>
              <button
                type="button"
                className="text-parchment/60 hover:underline"
                onClick={() => onChange({ ...filter, regions: [] })}
              >
                None
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
