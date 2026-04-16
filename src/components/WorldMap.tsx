import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import type { Conflict } from "../lib/types";
import ConflictMarker from "./ConflictMarker";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Props {
  conflicts: Conflict[];
  selectedId?: string;
  onSelect: (c: Conflict) => void;
}

export default function WorldMap({ conflicts, selectedId, onSelect }: Props) {
  return (
    <div className="w-full h-full bg-ink">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 175 }}
        width={980}
        height={520}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#1c1c1f",
                    stroke: "#2e2e33",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#26262b",
                    stroke: "#3a3a42",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#2a2a30",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {conflicts.map((c) => (
          <ConflictMarker
            key={c.id}
            conflict={c}
            selected={c.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </ComposableMap>
    </div>
  );
}
