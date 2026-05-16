import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { Conflict } from "../lib/types";
import { REGION_LABELS } from "../lib/filter";
import { vinylLabelColor } from "../lib/vinyl";
import TrackList from "./TrackList";

interface Anchor {
  x: number;
  y: number;
  r: number;
}

interface Props {
  conflict: Conflict;
  anchor: Anchor;
  mapW: number;
  mapH: number;
  onClose: () => void;
}

function years(c: Conflict): string {
  return `${c.startYear}–${c.endYear ?? "present"}`;
}

// Detail card pinned to the selected conflict's disc. Flips above/below
// depending on room and clamps horizontally to the map edges.
export default function ConflictPopover({
  conflict,
  anchor,
  mapW,
  mapH,
  onClose,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 340, h: 280 });

  useLayoutEffect(() => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setBox({ w: r.width, h: r.height });
    }
  }, [conflict.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const gap = anchor.r + 10;
  const aboveY = anchor.y - gap - box.h;
  const belowY = anchor.y + gap;
  const placeBelow = aboveY < 8;
  const top = Math.max(8, Math.min(mapH - box.h - 8, placeBelow ? belowY : aboveY));
  const left = Math.max(8, Math.min(mapW - box.w - 8, anchor.x - box.w / 2));
  const pointerOffset = Math.max(20, Math.min(box.w - 20, anchor.x - left));
  const labelColor = vinylLabelColor(conflict.id);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="false"
      aria-label={conflict.name}
      className={`vinyl-popover ${placeBelow ? "below" : "above"}`}
      style={{ left, top }}
    >
      <button className="vp-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="vp-head">
        <div className="vp-mini-vinyl">
          <div
            className="big-vinyl spinning"
            style={{ "--label": labelColor } as CSSProperties}
          >
            <div className="bv-label" />
            <div className="bv-spindle" />
          </div>
        </div>
        <div className="vp-titles">
          <div className="mono micro dim vp-eyebrow">
            {REGION_LABELS[conflict.region].toUpperCase()} · {years(conflict)}
          </div>
          <h3 className="serif vp-title">{conflict.name}</h3>
          {conflict.aka && conflict.aka.length > 0 ? (
            <div className="mono micro dim vp-aka">{conflict.aka.join(" · ")}</div>
          ) : null}
          <div className="vp-chips">
            {conflict.countries.map((iso) => (
              <span key={iso} className="chip mono micro">
                {iso}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="vp-body">
        <p className="vp-summary">{conflict.summary}</p>
        {conflict.casualties ? (
          <p className="mono micro dim vp-casualties">{conflict.casualties}</p>
        ) : null}
        <div className="vp-tracks-h mono micro dim">TRACKLIST</div>
        <div className="vp-tracks-scroll">
          <TrackList tracks={conflict.musicTracks} />
        </div>
      </div>
      <span className="vp-pointer" style={{ left: pointerOffset }} />
    </div>
  );
}
