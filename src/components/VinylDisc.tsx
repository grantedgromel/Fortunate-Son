interface Props {
  r: number;
  labelColor: string;
  spinning: boolean;
}

// SVG vinyl-record marker. The grooves + label spin as one inner group so the
// rotation reads cleanly; the outer black disc stays static.
export default function VinylDisc({ r, labelColor, spinning }: Props) {
  const groove = Math.max(0.3, r * 0.012);
  return (
    <g>
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
