export type DecadeBand =
  | "40s-50s"
  | "60s-70s"
  | "80s-90s"
  | "00s"
  | "10s-present";

export function decadeBand(year: number): DecadeBand {
  if (year < 1960) return "40s-50s";
  if (year < 1980) return "60s-70s";
  if (year < 2000) return "80s-90s";
  if (year < 2010) return "00s";
  return "10s-present";
}

export const DECADE_COLORS: Record<DecadeBand, string> = {
  "40s-50s": "#A65D57",
  "60s-70s": "#D4843A",
  "80s-90s": "#A8B054",
  "00s": "#4EA4A8",
  "10s-present": "#7E5A9B",
};

export const DECADE_LABELS: Record<DecadeBand, string> = {
  "40s-50s": "1945–1959",
  "60s-70s": "1960–1979",
  "80s-90s": "1980–1999",
  "00s": "2000–2009",
  "10s-present": "2010–present",
};

export const DECADE_ORDER: DecadeBand[] = [
  "40s-50s",
  "60s-70s",
  "80s-90s",
  "00s",
  "10s-present",
];
