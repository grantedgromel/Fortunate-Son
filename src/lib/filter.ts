import type { Conflict, Region } from "./types";

export interface Filter {
  minYear: number;
  maxYear: number;
  regions: Region[];
  query: string;
}

export const ALL_REGIONS: Region[] = [
  "Europe",
  "MENA",
  "SubSaharanAfrica",
  "SouthAsia",
  "SoutheastAsia",
  "EastAsia",
  "LatinAmerica",
  "NorthAmerica",
  "Oceania",
];

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

/** Whether a conflict's active years overlap the [minYear, maxYear] range. */
export function inYearRange(
  c: Conflict,
  minYear: number,
  maxYear: number,
): boolean {
  const end = c.endYear ?? new Date().getFullYear();
  return c.startYear <= maxYear && end >= minYear;
}

export function matchesQuery(c: Conflict, query: string): boolean {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (c.name.toLowerCase().includes(q)) return true;
  if (c.country.toLowerCase().includes(q)) return true;
  if (c.aka?.some((a) => a.toLowerCase().includes(q))) return true;
  return false;
}

export function applyFilter(conflicts: Conflict[], filter: Filter): Conflict[] {
  return conflicts.filter(
    (c) =>
      filter.regions.includes(c.region) &&
      inYearRange(c, filter.minYear, filter.maxYear) &&
      matchesQuery(c, filter.query),
  );
}
