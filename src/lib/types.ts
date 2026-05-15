export type Region =
  | "Europe"
  | "MENA"
  | "SubSaharanAfrica"
  | "SouthAsia"
  | "SoutheastAsia"
  | "EastAsia"
  | "LatinAmerica"
  | "NorthAmerica"
  | "Oceania";

export interface Track {
  title: string;
  artist: string;
  year?: number;
  /** One sentence explaining the cultural association. */
  note: string;
  youtubeId?: string;
  spotifyId?: string;
}

export interface Belligerent {
  side: string;
  parties: string[];
}

export interface Conflict {
  id: string;
  name: string;
  aka?: string[];
  region: Region;
  country: string;
  /** ISO 3166-1 alpha-3 codes of the countries the conflict was fought in. */
  countries: string[];
  /** [longitude, latitude] */
  coords: [number, number];
  startYear: number;
  /** null = ongoing */
  endYear: number | null;
  belligerents: Belligerent[];
  /** Rough order of magnitude, prose. */
  casualties?: string;
  /** 2–4 sentences, neutral. */
  summary: string;
  /** 3–6 items. */
  musicTracks: Track[];
}
