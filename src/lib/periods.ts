// Year axis + decade buckets for the bottom timeline. AXIS_MIN..AXIS_PRESENT
// is the scrubbable range; DECADES are the quick-jump points along it.

export interface Period {
  id: string;
  label: string;
  range: [number, number];
}

export const AXIS_MIN = 1945;
export const AXIS_MAX = new Date().getFullYear() + 1;
export const AXIS_PRESENT = new Date().getFullYear();

export const DECADES: Period[] = [
  { id: "d50", label: "'50s", range: [1950, 1960] },
  { id: "d60", label: "'60s", range: [1960, 1970] },
  { id: "d70", label: "'70s", range: [1970, 1980] },
  { id: "d80", label: "'80s", range: [1980, 1990] },
  { id: "d90", label: "'90s", range: [1990, 2000] },
  { id: "d00", label: "'00s", range: [2000, 2010] },
  { id: "d10", label: "'10s", range: [2010, 2020] },
  { id: "d20", label: "'20s", range: [2020, AXIS_MAX] },
];
