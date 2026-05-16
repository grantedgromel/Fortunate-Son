import { useRef, type KeyboardEvent, type PointerEvent } from "react";
import { AXIS_MIN, AXIS_PRESENT, DECADES } from "../lib/periods";

interface Props {
  currentYear: number;
  playing: boolean;
  showAll: boolean;
  onScrub: (year: number) => void;
  onTogglePlay: () => void;
  onShowAll: () => void;
}

const SPAN = AXIS_PRESENT - AXIS_MIN;
const clampYear = (y: number) => Math.min(AXIS_PRESENT, Math.max(AXIS_MIN, y));

// Bottom transport bar — play/pause sweep, draggable year scrubber with
// decade quick-jumps, and an "All" toggle for the full overview.
export default function Timeline({
  currentYear,
  playing,
  showAll,
  onScrub,
  onTogglePlay,
  onShowAll,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const display = Math.round(currentYear);
  const pct = ((currentYear - AXIS_MIN) / SPAN) * 100;

  const yearFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return currentYear;
    const r = el.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    return Math.round(AXIS_MIN + f * SPAN);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    onScrub(yearFromClientX(e.clientX));
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.buttons !== 1) return;
    onScrub(yearFromClientX(e.clientX));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = display - 1;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = display + 1;
    else if (e.key === "PageDown") next = display - 10;
    else if (e.key === "PageUp") next = display + 10;
    else if (e.key === "Home") next = AXIS_MIN;
    else if (e.key === "End") next = AXIS_PRESENT;
    if (next === null) return;
    e.preventDefault();
    onScrub(clampYear(next));
  };

  return (
    <div className="timeline">
      <button
        type="button"
        className="tl-play"
        onClick={onTogglePlay}
        aria-label={playing ? "Pause" : "Play timeline"}
        aria-pressed={playing}
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <div className="tl-readout">
        <div className={`tl-year mono ${showAll ? "is-all" : ""}`}>
          {showAll ? "ALL" : display}
        </div>
        <div className="tl-caption mono micro dim">
          {showAll ? `${AXIS_MIN}–${AXIS_PRESENT}` : "year"}
        </div>
      </div>

      <div
        ref={trackRef}
        className={`tl-scrub ${showAll ? "dimmed" : ""}`}
        role="slider"
        tabIndex={0}
        aria-label="Timeline year"
        aria-valuemin={AXIS_MIN}
        aria-valuemax={AXIS_PRESENT}
        aria-valuenow={display}
        aria-valuetext={showAll ? "All years" : String(display)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
      >
        <div className="tl-track">
          <div className="tl-fill" style={{ width: `${pct}%` }} />
          {DECADES.map((d) => {
            const left = ((d.range[0] - AXIS_MIN) / SPAN) * 100;
            return (
              <button
                key={d.id}
                type="button"
                className="tl-tick"
                style={{ left: `${left}%` }}
                tabIndex={-1}
                aria-label={`Jump to ${d.range[0]}`}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => onScrub(d.range[0])}
              >
                <span className="tl-tick-mark" />
                <span className="tl-tick-label mono micro">{d.label}</span>
              </button>
            );
          })}
          {!showAll ? (
            <div className="tl-handle" style={{ left: `${pct}%` }} />
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className={`tl-all ${showAll ? "active" : ""}`}
        onClick={onShowAll}
        aria-pressed={showAll}
      >
        All
      </button>
    </div>
  );
}
