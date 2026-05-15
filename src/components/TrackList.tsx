import { useState } from "react";
import type { Track } from "../lib/types";

interface Props {
  tracks: Track[];
}

function youtubeSearchUrl(t: Track): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${t.artist} ${t.title}`,
  )}`;
}

// Conflict tracklist for the anchored popover. Rows expand in place to reveal
// the cultural note and either a lazy YouTube embed or a search fallback.
export default function TrackList({ tracks }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  if (tracks.length === 0) {
    return <div className="mono micro dim no-tracks">— no tracks catalogued —</div>;
  }

  return (
    <div>
      {tracks.map((t, i) => {
        const isOpen = open === i;
        return (
          <div key={`${t.title}-${t.artist}-${i}`}>
            <button
              type="button"
              className="track-row"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="t-num mono micro dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="t-title serif">{t.title}</span>{" "}
                <span className="mono micro dim">{t.artist}</span>
              </span>
              <span className="t-year mono micro">{t.year ?? ""}</span>
              <span className="t-play">▸</span>
            </button>
            {isOpen ? (
              <div style={{ padding: "0 2px 4px" }}>
                <p className="track-note">{t.note}</p>
                {t.youtubeId ? (
                  <div className="track-embed">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0`}
                      title={`${t.title} — ${t.artist}`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <a
                    className="track-fallback mono micro"
                    href={youtubeSearchUrl(t)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    SEARCH YOUTUBE ↗
                  </a>
                )}
                {t.spotifyId ? (
                  <a
                    className="track-fallback mono micro"
                    href={`https://open.spotify.com/track/${t.spotifyId}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: 6 }}
                  >
                    SPOTIFY ↗
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
