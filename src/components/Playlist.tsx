import type { Track } from "../lib/types";

interface Props {
  tracks: Track[];
}

export default function Playlist({ tracks }: Props) {
  return (
    <ol className="space-y-6">
      {tracks.map((t, i) => (
        <li
          key={`${t.title}-${t.artist}-${i}`}
          className="border-l-2 border-rust/60 pl-4"
        >
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <span className="text-lg font-semibold text-parchment">
                {t.title}
              </span>{" "}
              <span className="text-parchment/70">— {t.artist}</span>
            </div>
            {t.year ? (
              <span className="text-sm text-parchment/50 tabular-nums">
                {t.year}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-parchment/80 italic">{t.note}</p>
          {t.youtubeId ? (
            <div className="mt-3 aspect-video w-full max-w-xl overflow-hidden rounded-sm bg-black/40">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${t.youtubeId}`}
                title={`${t.title} — ${t.artist}`}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}
          {t.spotifyId ? (
            <a
              className="mt-2 inline-block text-sm text-olive hover:text-parchment"
              href={`https://open.spotify.com/track/${t.spotifyId}`}
              target="_blank"
              rel="noreferrer"
            >
              Listen on Spotify →
            </a>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
