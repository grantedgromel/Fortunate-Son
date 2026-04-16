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

export default function Playlist({ tracks }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <ol className="flex flex-col">
      {tracks.map((t, i) => {
        const isOpen = expanded === i;
        const key = `${t.title}-${t.artist}-${i}`;
        return (
          <li
            key={key}
            className="border-b border-slate2/60 py-3 last:border-b-0"
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 w-6 shrink-0 text-right tabular-nums text-xs text-parchment/40"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-display text-base text-parchment">
                    {t.title}
                  </span>
                  <span className="text-parchment/70">— {t.artist}</span>
                  {t.year ? (
                    <span className="text-xs tabular-nums text-parchment/50">
                      {t.year}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm italic text-parchment/75">{t.note}</p>
                <div className="mt-2 flex items-center gap-3 text-xs">
                  {t.youtubeId ? (
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`${key}-player`}
                      className="rounded-sm border border-slate2 bg-ink px-2 py-1 text-accent hover:border-accent"
                    >
                      {isOpen ? "Hide" : "Play"}
                    </button>
                  ) : (
                    <a
                      href={youtubeSearchUrl(t)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm border border-slate2 bg-ink px-2 py-1 text-parchment/80 hover:border-accent hover:text-accent"
                    >
                      Search YouTube
                    </a>
                  )}
                  {t.spotifyId ? (
                    <a
                      href={`https://open.spotify.com/track/${t.spotifyId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-parchment/60 hover:text-accent"
                    >
                      Spotify ↗
                    </a>
                  ) : null}
                </div>
                {isOpen && t.youtubeId ? (
                  <div
                    id={`${key}-player`}
                    className="mt-3 aspect-video w-full overflow-hidden rounded-sm bg-black"
                  >
                    <iframe
                      width="560"
                      height="315"
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0`}
                      title={`${t.title} — ${t.artist}`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
