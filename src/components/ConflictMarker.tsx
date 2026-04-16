import { Marker } from "react-simple-maps";
import { motion } from "framer-motion";
import type { Conflict } from "../lib/types";

interface Props {
  conflict: Conflict;
  selected: boolean;
  onSelect: (c: Conflict) => void;
}

export default function ConflictMarker({ conflict, selected, onSelect }: Props) {
  return (
    <Marker
      coordinates={conflict.coords}
      onClick={() => onSelect(conflict)}
      style={{
        default: { cursor: "pointer", outline: "none" },
        hover: { cursor: "pointer", outline: "none" },
        pressed: { cursor: "pointer", outline: "none" },
      }}
    >
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        r={selected ? 8 : 5}
        className={
          selected
            ? "fill-rust stroke-parchment"
            : "fill-rust/80 stroke-parchment/70 hover:fill-rust"
        }
        strokeWidth={1.5}
      />
      <title>{`${conflict.name} (${conflict.startYear}–${
        conflict.endYear ?? "present"
      })`}</title>
    </Marker>
  );
}
