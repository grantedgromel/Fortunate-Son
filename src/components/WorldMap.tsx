import { ComposableMap, Geographies, Geography, Sphere } from "react-simple-maps";
import type { Conflict } from "../lib/types";
import ConflictMarker from "./ConflictMarker";
import { inYearRange } from "../lib/filter";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface Props {
  conflicts: Conflict[];
  selectedId?: string | null;
  hoveredId?: string | null;
  onSelect: (c: Conflict) => void;
  onHover: (id: string | null) => void;
  minYear: number;
  maxYear: number;
}

export default function WorldMap({
  conflicts,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  minYear,
  maxYear,
}: Props) {
  return (
    <div className="app-map relative h-full w-full bg-ink">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 175 }}
        width={980}
        height={520}
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere
          id="rsm-sphere"
          stroke="#2a2c31"
          strokeWidth={0.6}
          fill="#0e0f12"
        />
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#1e1f23",
                    stroke: "#2a2c31",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#24262b",
                    stroke: "#3a3d44",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#24262b",
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
            hovered={c.id === hoveredId}
            dimmed={!inYearRange(c, minYear, maxYear)}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}
      </ComposableMap>
    </div>
  );
}
