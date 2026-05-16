import type { Conflict, Region } from "./types";

export const REGION_LABELS: Record<Region, string> = {
  Europe: "Europe",
  MENA: "Middle East & N. Africa",
  SubSaharanAfrica: "Sub-Saharan Africa",
  SouthAsia: "South Asia",
  SoutheastAsia: "Southeast Asia",
  EastAsia: "East Asia",
  LatinAmerica: "Latin America",
  NorthAmerica: "North America",
  Oceania: "Oceania",
};

/** Whether a conflict is active during a given calendar year. */
export function isActiveInYear(c: Conflict, year: number): boolean {
  const end = c.endYear ?? new Date().getFullYear();
  return c.startYear <= year && end >= year;
}
