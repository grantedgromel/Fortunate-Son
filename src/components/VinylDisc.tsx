import type { CSSProperties } from "react";

interface Props {
  r: number;
  labelColor: string;
  spinning: boolean;
  /** Casualty magnitude 0..1 — drives shockwave urgency. */
  magnitude: number;
}

// SVG vinyl-record marker. Concentric shockwave rings ripple outward; the
// focused disc spins.
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
