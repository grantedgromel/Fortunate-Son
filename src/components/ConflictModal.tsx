import { useEffect, useRef } from "react";
import type { Conflict } from "../lib/types";
import { REGION_LABELS } from "../lib/filter";
import TrackList from "./TrackList";

interface Props {
  conflict: Conflict;
  onClose: () => void;
}

// Centered conflict detail modal — opens over a dimmed map.
export default function ConflictModal({ conflict, onClose }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [onClose]);

  const years = `${conflict.startYear}–${conflict.endYear ?? "present"}`;

  return (
    <div className="conflict-modal-scrim" onClick={onClose} role="presentation">
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={conflict.name}
        className="conflict-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cm-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="cm-body">
          <div className="cm-eyebrow mono micro dim">
            {REGION_LABELS[conflict.region].toUpperCase()} · {years}
          </div>
          <h2 className="cm-title serif">{conflict.name}</h2>
          {conflict.aka && conflict.aka.length > 0 ? (
            <div className="cm-aka mono micro dim">
              {conflict.aka.join(" · ")}
            </div>
          ) : null}

          <dl className="cm-meta">
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

          <p className="cm-summary">{conflict.summary}</p>

          <div className="cm-tracks-h mono micro dim">
            TRACKLIST · {conflict.musicTracks.length}
          </div>
          <TrackList tracks={conflict.musicTracks} />
        </div>
      </div>
    </div>
  );
}
