import { DECADES, FULL_RANGE } from "../lib/periods";

interface Props {
  yearWindow: [number, number];
  onChange: (range: [number, number]) => void;
}

// Bottom decade-chip strip — replaces the old timeline + decade slider.
// Selecting a chip sets the year window that filters the map's markers.
export default function PeriodStrip({ yearWindow, onChange }: Props) {
  const isAll =
    yearWindow[0] === FULL_RANGE[0] && yearWindow[1] === FULL_RANGE[1];

  return (
    <div className="period-row">
      <button
        type="button"
        className={`period-chip all ${isAll ? "active" : ""}`}
        onClick={() => onChange(FULL_RANGE)}
      >
        <span className="period-label serif">All</span>
        <span className="period-sub mono micro dim">
          {FULL_RANGE[0]}–{FULL_RANGE[1] - 1}
        </span>
      </button>
      {DECADES.map((d) => {
        const active =
          yearWindow[0] === d.range[0] && yearWindow[1] === d.range[1];
        return (
          <button
            key={d.id}
            type="button"
            className={`period-chip ${active ? "active" : ""}`}
            onClick={() => onChange(d.range)}
          >
            <span className="period-label serif">{d.label}</span>
            <span className="period-sub mono micro dim">
              {d.range[0]}–{d.range[1] >= 2026 ? "now" : d.range[1]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
