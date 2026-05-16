import { useEffect, type CSSProperties } from "react";
import type { Conflict } from "../lib/types";
import { REGION_LABELS } from "../lib/filter";
import { vinylLabelColor } from "../lib/vinyl";
import TrackList from "./TrackList";

interface Props {
  conflict: Conflict;
  onClose: () => void;
}

// Right-side conflict detail panel — slides in when a conflict is selected.
export default function ConflictPanel({ conflict, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const labelColor = vinylLabelColor(conflict.id);
  const years = `${conflict.startYear}–${conflict.endYear ?? "present"}`;

  return (
    <aside
      className="conflict-panel"
      role="dialog"
      aria-modal="false"
      aria-label={conflict.name}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <button className="cp-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <div className="cp-scroll">
        <div className="cp-vinyl">
          <div
            className="big-vinyl spinning"
            style={{ "--label": labelColor } as CSSProperties}
          >
            <div className="bv-label" />
            <div className="bv-spindle" />
          </div>
        </div>

        <div className="cp-eyebrow mono micro dim">
          {REGION_LABELS[conflict.region].toUpperCase()} · {years}
        </div>
        <h2 className="cp-title serif">{conflict.name}</h2>
        {conflict.aka && conflict.aka.length > 0 ? (
          <div className="cp-aka mono micro dim">{conflict.aka.join(" · ")}</div>
        ) : null}

        <dl className="cp-meta">
          <div>
            <dt className="mono micro dim">Location</dt>
            <dd>{conflict.country}</dd>
          </div>
          {conflict.casualties ? (
            <div>
              <dt className="mono micro dim">Estimated toll</dt>
              <dd>{conflict.casualties}</dd>
            </div>
          ) : null}
        </dl>

        <p className="cp-summary">{conflict.summary}</p>

        <div className="cp-tracks-h mono micro dim">
          TRACKLIST · {conflict.musicTracks.length}
        </div>
        <TrackList tracks={conflict.musicTracks} />
      </div>
    </aside>
  );
}
