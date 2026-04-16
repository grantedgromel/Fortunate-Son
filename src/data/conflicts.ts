import type { Conflict } from "../lib/types";

export const conflicts: Conflict[] = [
  {
    id: "vietnam-war",
    name: "Vietnam War",
    aka: ["Second Indochina War", "American War", "Resistance War Against America"],
    region: "SoutheastAsia",
    country: "Vietnam",
    coords: [106.0, 16.0],
    startYear: 1955,
    endYear: 1975,
    belligerents: [
      {
        side: "North",
        parties: [
          "Democratic Republic of Vietnam (North Vietnam)",
          "Viet Cong / National Liberation Front",
          "Khmer Rouge",
          "Pathet Lao",
          "Soviet Union (support)",
          "People's Republic of China (support)",
        ],
      },
      {
        side: "South",
        parties: [
          "Republic of Vietnam (South Vietnam)",
          "United States",
          "South Korea",
          "Australia",
          "Thailand",
          "New Zealand",
          "Philippines",
        ],
      },
    ],
    casualties:
      "Estimates range from roughly 1.3 million to over 3 million dead, combatants and civilians, spanning Vietnam, Laos, and Cambodia.",
    summary:
      "A Cold War–era conflict fought primarily in South Vietnam, Laos, and Cambodia between communist forces led by North Vietnam and anti-communist forces led by South Vietnam and the United States. U.S. involvement escalated through the 1960s and drew heavy domestic opposition before the 1973 Paris Peace Accords led to American withdrawal. North Vietnamese forces captured Saigon in April 1975, reunifying the country under communist rule.",
    musicTracks: [
      {
        title: "Fortunate Son",
        artist: "Creedence Clearwater Revival",
        year: 1969,
        note: "John Fogerty's class-conscious anti-draft anthem became shorthand for the Vietnam era, powering scenes in Forrest Gump, Die Hard: With a Vengeance, and countless documentaries.",
        youtubeId: "ec0XKhAHR5I",
      },
      {
        title: "Paint It, Black",
        artist: "The Rolling Stones",
        year: 1966,
        note: "Its sitar-driven dread opened and closed the CBS series Tour of Duty and has since become cinema's default tonal shorthand for the war, from Full Metal Jacket's end credits to a wave of Vietnam documentaries.",
        youtubeId: "O4irXQhgMqg",
      },
      {
        title: "All Along the Watchtower",
        artist: "Jimi Hendrix",
        year: 1968,
        note: "A veteran-adopted standard whose apocalyptic coil soundtracks Vietnam footage in Forrest Gump, Withnail and I's cultural cousins, and Watchmen, and was played on AFVN radio to the troops.",
        youtubeId: "TLV4_xaYynY",
      },
      {
        title: "Gimme Shelter",
        artist: "The Rolling Stones",
        year: 1969,
        note: "Merry Clayton's wailing 'war, children, it's just a shot away' became the era's existential-dread cue, later reused by Martin Scorsese to evoke American violence across that generation.",
        youtubeId: "RbmS3tQJ7Os",
      },
      {
        title: "Run Through the Jungle",
        artist: "Creedence Clearwater Revival",
        year: 1970,
        note: "Widely (and against Fogerty's stated intent) heard as a combat song; adopted by veterans and used in films like Tropic Thunder and Air America as sonic shorthand for jungle warfare.",
        youtubeId: "EiRsdNT5Vyg",
      },
    ],
  },
];
