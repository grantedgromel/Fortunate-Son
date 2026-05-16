import type { CSSProperties } from "react";

interface Props {
  r: number;
  labelColor: string;
  spinning: boolean;
  /** Casualty magnitude 0..1 — drives shockwave urgency. */
  magnitude: number;
}

// A single flame lick, base at (0,0), tip at (0,-L).
function flamePath(w: number, L: number): string {
  return `M0,0 C ${-w},${-L * 0.34} ${-w * 0.5},${-L * 0.82} 0,${-L} C ${w * 0.5},${-L * 0.82} ${w},${-L * 0.34} 0,0 Z`;
}

// Flame placement around the disc — angle (0 = top, clockwise), length and
// width as fractions of the disc radius. Weighted toward the top, since
// fire rises.
const FLAMES = [
  { a: -10, len: 1.2, w: 0.36 },
  { a: 22, len: 0.95, w: 0.32 },
  { a: -36, len: 1.02, w: 0.34 },
  { a: 55, len: 0.66, w: 0.27 },
  { a: -64, len: 0.72, w: 0.28 },
  { a: 96, len: 0.5, w: 0.24 },
  { a: -108, len: 0.46, w: 0.23 },
  { a: 150, len: 0.36, w: 0.2 },
  { a: -156, len: 0.34, w: 0.2 },
];

// SVG vinyl-record marker. Concentric shockwave rings ripple outward; the
// focused disc spins and catches fire.
export default function VinylDisc({ r, labelColor, spinning, magnitude }: Props) {
  const groove = Math.max(0.3, r * 0.012);
  const dur = 4.7 - magnitude * 2.7;
  const ringWidth = 1 + magnitude * 1.4;
  const ring: CSSProperties = { "--shock-dur": `${dur}s` } as CSSProperties;
  const ring2: CSSProperties = {
    "--shock-dur": `${dur}s`,
    animationDelay: `${-dur / 2}s`,
  } as CSSProperties;
  return (
    <g>
      <circle
        className="shockwave"
        r={r}
        fill="none"
        stroke="#b8332f"
        strokeWidth={ringWidth}
        vectorEffect="non-scaling-stroke"
        style={ring}
      />
      <circle
        className="shockwave"
        r={r}
        fill="none"
        stroke="#b8332f"
        strokeWidth={ringWidth}
        vectorEffect="non-scaling-stroke"
        style={ring2}
      />

      {spinning ? (
        <g className="vinyl-fire">
          <circle r={r * 1.78} fill="url(#flameGlow)" className="vinyl-glow" />
          {FLAMES.map((f, i) => (
            <g key={i} transform={`rotate(${f.a}) translate(0,${-r * 0.9})`}>
              <g
                className="vinyl-flame"
                style={{
                  animationDelay: `${-i * 53}ms`,
                  animationDuration: `${250 + (i % 3) * 80}ms`,
                }}
              >
                <path d={flamePath(f.w * r, f.len * r)} fill="#cf4314" />
                <path
                  d={flamePath(f.w * r * 0.52, f.len * r * 0.6)}
                  fill="#f3a51d"
                />
              </g>
            </g>
          ))}
        </g>
      ) : null}

      <circle r={r} fill="#0a0a0a" />
      <g className={spinning ? "vinyl-spin" : undefined}>
        <circle r={r * 0.93} fill="none" stroke="#2a2a2a" strokeWidth={groove} />
        <circle r={r * 0.82} fill="none" stroke="#1f1f1f" strokeWidth={groove} />
        <circle r={r * 0.7} fill="none" stroke="#1f1f1f" strokeWidth={groove} />
        <circle r={r * 0.55} fill="none" stroke="#1f1f1f" strokeWidth={groove} />
        <circle r={r * 0.98} fill="url(#vinylSheen)" />
        <circle r={r * 0.4} fill={labelColor} />
        <circle r={r * 0.4} fill="none" stroke="#000" strokeOpacity={0.35} strokeWidth={0.5} />
        <circle r={r * 0.3} fill="none" stroke="#000" strokeOpacity={0.15} strokeWidth={0.4} />
        <circle r={Math.max(0.6, r * 0.06)} fill="#0a0a0a" />
        <line
          x1={0}
          y1={-r * 0.4}
          x2={0}
          y2={-r * 0.22}
          stroke="rgba(0,0,0,0.35)"
          strokeWidth={0.6}
        />
      </g>
    </g>
  );
}
