import { Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import type { Conflict } from "../lib/types";
import { decadeBand, DECADE_COLORS } from "../lib/decade";
import { parseCasualtyMagnitude, radiusForMagnitude } from "../lib/casualties";

interface Props {
  conflict: Conflict;
  selected: boolean;
  hovered: boolean;
  dimmed: boolean;
  onSelect: (c: Conflict) => void;
  onHover: (id: string | null) => void;
}

export default function ConflictMarker({
  conflict,
  selected,
  hovered,
  dimmed,
  onSelect,
  onHover,
}: Props) {
  const band = decadeBand(conflict.startYear);
  const color = DECADE_COLORS[band];
  const r = radiusForMagnitude(parseCasualtyMagnitude(conflict.casualties));
  const ongoing = conflict.endYear === null;
  const years = `${conflict.startYear}–${conflict.endYear ?? "present"}`;
  const label = `${conflict.name} (${years})`;

  const baseOpacity = dimmed ? 0.15 : 1;

  return (
    <Marker
      coordinates={conflict.coords}
      onClick={() => onSelect(conflict)}
      onMouseEnter={() => onHover(conflict.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        default: { cursor: "pointer", outline: "none" },
        hover: { cursor: "pointer", outline: "none" },
        pressed: { cursor: "pointer", outline: "none" },
      }}
    >
      {/* invisible focusable hit target for keyboard users */}
      <circle
        r={Math.max(r + 4, 10)}
        fill="transparent"
        tabIndex={0}
        role="button"
        aria-label={label}
        aria-pressed={selected}
        onFocus={() => onHover(conflict.id)}
        onBlur={() => onHover(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(conflict);
          }
        }}
      />
      <motion.circle
        r={r}
        fill={color}
        stroke={selected || hovered ? "#ece7d9" : "rgba(236,231,217,0.35)"}
        strokeWidth={selected ? 2 : 1}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          ongoing
            ? { scale: 1, opacity: [baseOpacity * 0.6, baseOpacity, baseOpacity * 0.6] }
            : { scale: 1, opacity: baseOpacity }
        }
        transition={
          ongoing
            ? {
                scale: { type: "spring", stiffness: 260, damping: 18 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }
            : { type: "spring", stiffness: 260, damping: 18 }
        }
        style={{ pointerEvents: "none" }}
      />
      {(hovered || selected) && !dimmed ? (
        <text
          x={r + 6}
          y={3}
          fontSize={11}
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight={500}
          fill="#ece7d9"
          stroke="#0a0a0b"
          strokeWidth={3.5}
          strokeLinejoin="round"
          paintOrder="stroke"
          style={{ pointerEvents: "none" }}
        >
          {label}
        </text>
      ) : null}
    </Marker>
  );
}
