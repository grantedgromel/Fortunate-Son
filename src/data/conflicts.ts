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
        youtubeId: "xImsdvr9Mx4",
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
        youtubeId: "dtkeaeVAPIs",
      },
    ],
  },

  // ───────────────────────────── Cold War proxies ─────────────────────────────

  {
    id: "korean-war",
    name: "Korean War",
    aka: ["6·25 War", "Fatherland Liberation War"],
    region: "EastAsia",
    country: "Korea",
    coords: [127.8, 38.0],
    startYear: 1950,
    endYear: 1953,
    belligerents: [
      {
        side: "UN Command",
        parties: [
          "Republic of Korea (South Korea)",
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
          "Turkey",
          "Philippines",
          "Thailand",
          "and other UN contingents",
        ],
      },
      {
        side: "Communist bloc",
        parties: [
          "Democratic People's Republic of Korea (North Korea)",
          "Chinese People's Volunteer Army",
          "Soviet Union (air cover and advisors)",
        ],
      },
    ],
    casualties:
      "Roughly 3 million dead across combatants and civilians, with the Korean peninsula devastated by aerial bombing and mass displacement.",
    summary:
      "Fighting began when North Korean forces crossed the 38th parallel in June 1950 and a US-led United Nations coalition intervened on behalf of South Korea. Chinese People's Volunteer Army units entered the war that autumn, and the front eventually stabilized near the prewar border. A 1953 armistice halted combat but no formal peace treaty was ever signed, leaving the peninsula divided along the DMZ.",
    musicTracks: [
      {
        title: "Suicide Is Painless",
        artist: "Johnny Mandel",
        year: 1970,
        note: "Written for Robert Altman's M*A*S*H and retained as the long-running television series' theme, it became the default cinematic cue for the Korean War for a generation of American audiences.",
        youtubeId: "TVz21XEnLWQ",
      },
      {
        title: "Arirang",
        artist: "Traditional (Korean folk)",
        note: "The peninsula's most recognizable folk song, sung by soldiers and civilians on both sides of the line and recurring throughout Korean-language war films such as Taegukgi: Brotherhood of War.",
      },
      {
        title: "Goodnight, Irene",
        artist: "The Weavers",
        year: 1950,
        note: "The number-one American single when war broke out in June 1950, it dominated Armed Forces Radio broadcasts to troops during the conflict's opening months.",
        youtubeId: "saykpHOm5fc",
      },
    ],
  },

  {
    id: "laotian-civil-war",
    name: "Laotian Civil War",
    aka: ["Secret War in Laos"],
    region: "SoutheastAsia",
    country: "Laos",
    coords: [102.6, 19.9],
    startYear: 1959,
    endYear: 1975,
    belligerents: [
      {
        side: "Royalist / anti-communist",
        parties: [
          "Kingdom of Laos / Royal Lao Government",
          "United States (CIA)",
          "Hmong irregulars under Vang Pao",
          "Thailand",
        ],
      },
      {
        side: "Communist",
        parties: ["Pathet Lao", "North Vietnam"],
      },
    ],
    casualties:
      "Estimated 200 thousand to 400 thousand dead, with Laos subjected to one of the heaviest per-capita bombing campaigns in history through the CIA's covert air war.",
    summary:
      "A parallel conflict to the Vietnam War in which forces aligned with the Pathet Lao and North Vietnam fought the Royal Lao Government and a CIA-directed Hmong guerrilla army. Much of the fighting centered on the Ho Chi Minh Trail running through eastern Laos, and the country was bombed continuously between 1964 and 1973. The Pathet Lao took power in 1975 following the communist victories in neighboring Vietnam and Cambodia.",
    musicTracks: [
      {
        title: "Champa Muang Lao",
        artist: "Traditional (Lao folk)",
        note: "An unofficial royalist anthem of pre-revolutionary Laos that recurs across Lao-language documentaries about the lost monarchy and the war that ended it.",
      },
    ],
  },

  {
    id: "cambodian-civil-war",
    name: "Cambodian Civil War",
    aka: ["Khmer Republic War"],
    region: "SoutheastAsia",
    country: "Cambodia",
    coords: [104.9, 12.5],
    startYear: 1967,
    endYear: 1975,
    belligerents: [
      {
        side: "Khmer Republic",
        parties: [
          "Kingdom of Cambodia (until 1970)",
          "Khmer Republic",
          "United States (air support)",
          "Republic of Vietnam (South Vietnam)",
        ],
      },
      {
        side: "Communist",
        parties: [
          "Communist Party of Kampuchea (Khmer Rouge)",
          "GRUNK (Sihanouk-aligned exile government)",
          "North Vietnam",
          "Viet Cong",
        ],
      },
    ],
    casualties:
      "Several hundred thousand dead during the war itself, a toll dwarfed by the roughly 1.5 to 2 million who died in the Khmer Rouge regime that followed.",
    summary:
      "A war between forces of the US-aligned Khmer Republic and a communist coalition led by the Khmer Rouge, fought in parallel with the Vietnam War. American B-52 bombing of suspected Vietnamese sanctuaries and the 1970 Lon Nol coup against Sihanouk radicalized the countryside. Khmer Rouge forces captured Phnom Penh in April 1975, ushering in the Democratic Kampuchea regime.",
    musicTracks: [
      {
        title: "Champa Battambang",
        artist: "Sinn Sisamouth",
        note: "The signature ballad of Cambodia's prewar 'king of pop,' later murdered by the Khmer Rouge; it stands at the center of John Pirozzi's 2014 documentary Don't Think I've Forgotten about the era's vanished music scene.",
        youtubeId: "lcTkJg4YZdM",
      },
      {
        title: "Chnam Oun 16",
        artist: "Ros Serey Sothea",
        note: "An emblem of the Phnom Penh rock-and-roll scene of the late 1960s and early 1970s whose performers were almost entirely killed under the Khmer Rouge; it has become the standard sonic shorthand for the lost Cambodian golden age.",
        youtubeId: "y04fy9GywSo",
      },
      {
        title: "Imagine",
        artist: "John Lennon",
        year: 1971,
        note: "John Lennon's song closes Roland Joffé's The Killing Fields (1984), the canonical Western film about the war's collapse, playing over the final reunion of Dith Pran and Sydney Schanberg.",
        youtubeId: "Ts0XSyWpMnU",
      },
    ],
  },

  {
    id: "malayan-emergency",
    name: "Malayan Emergency",
    aka: ["Anti-British National Liberation War"],
    region: "SoutheastAsia",
    country: "Malaysia",
    coords: [101.7, 3.1],
    startYear: 1948,
    endYear: 1960,
    belligerents: [
      {
        side: "Commonwealth",
        parties: [
          "United Kingdom",
          "Federation of Malaya",
          "Australia",
          "New Zealand",
          "Southern Rhodesia",
          "Fiji",
        ],
      },
      {
        side: "Communist insurgency",
        parties: [
          "Malayan Communist Party",
          "Malayan National Liberation Army",
        ],
      },
    ],
    casualties:
      "Roughly 10 thousand killed in combat, with hundreds of thousands of rural civilians forcibly resettled into 'New Villages' under the Briggs Plan.",
    summary:
      "A guerrilla war fought between Commonwealth forces and the predominantly ethnic-Chinese Malayan National Liberation Army, which sought to expel the British and establish a communist state. Counter-insurgency relied on mass resettlement of Chinese villagers, food control, and an extensive intelligence apparatus that became a template for later anti-guerrilla campaigns. The Federation of Malaya gained independence in 1957 and the emergency was formally declared over in 1960.",
    musicTracks: [
      {
        title: "Getaran Jiwa",
        artist: "P. Ramlee",
        year: 1959,
        note: "The signature ballad of Malay cinema's golden-age polymath, whose late-1950s films defined the urban soundscape of the Federation through the Emergency years.",
        youtubeId: "KBMXkZ35v5w",
      },
      {
        title: "Rasa Sayang",
        artist: "Traditional (Malay folk)",
        note: "Recorded and broadcast widely by colonial-era radio as a 'Malayan' identity tune, it appears across British and Australian newsreels of the Emergency as ambient cultural cover.",
      },
    ],
  },

  {
    id: "indonesian-killings-1965",
    name: "Indonesian Mass Killings",
    aka: ["1965–66 anti-communist purge", "Peristiwa 1965"],
    region: "SoutheastAsia",
    country: "Indonesia",
    coords: [110.0, -7.5],
    startYear: 1965,
    endYear: 1966,
    belligerents: [
      {
        side: "Anti-communist forces",
        parties: [
          "Indonesian Army (under Suharto)",
          "Pemuda Pancasila and other paramilitaries",
          "Religious militias (NU, Muhammadiyah-aligned)",
        ],
      },
      {
        side: "Targeted",
        parties: [
          "Communist Party of Indonesia (PKI)",
          "Affiliated trade unions and civil organizations",
          "Ethnic Chinese Indonesians",
        ],
      },
    ],
    casualties:
      "Estimates range from roughly half a million to over 1 million killed, with hundreds of thousands more imprisoned without trial for decades.",
    summary:
      "Following the 30 September Movement of 1965, in which several army generals were killed, forces aligned with Major General Suharto blamed the Communist Party of Indonesia and oversaw a nationwide purge. Soldiers, paramilitaries, and religious militias killed members of the PKI, leftist organizations, and ethnic Chinese communities, with some of the worst violence in Java, Bali, and North Sumatra. The killings were sponsored or tolerated by Western governments and remain officially unaddressed inside Indonesia.",
    musicTracks: [
      {
        title: "Born Free",
        artist: "Matt Monro",
        year: 1966,
        note: "Joshua Oppenheimer's The Act of Killing (2012) stages a perpetrator's surreal musical reverie around this song, fixing it as the hallucinatory sonic emblem of the killings.",
        youtubeId: "ISWOrI0WaLs",
      },
      {
        title: "Genjer-Genjer",
        artist: "Lilis Suryani / Bing Slamet",
        note: "A Banyuwangi peasant song popularized by women's wing Gerwani in the early 1960s; after 1965 it was banned for decades as a 'communist' tune and its very performance became a marker of suspect loyalty.",
        youtubeId: "85_1o0-Gv7c",
      },
      {
        title: "Bengawan Solo",
        artist: "Gesang",
        year: 1940,
        note: "The signature keroncong ballad of midcentury Indonesia, used across documentaries about the New Order and its origins as a tonal symbol of the Java the killings reshaped.",
        youtubeId: "-J4yNa2w_I0",
      },
    ],
  },

  {
    id: "angolan-civil-war",
    name: "Angolan Civil War",
    region: "SubSaharanAfrica",
    country: "Angola",
    coords: [17.6, -12.0],
    startYear: 1975,
    endYear: 2002,
    belligerents: [
      {
        side: "MPLA-aligned",
        parties: [
          "People's Movement for the Liberation of Angola (MPLA)",
          "Cuba",
          "Soviet Union (support)",
          "SWAPO (Namibian liberation movement)",
        ],
      },
      {
        side: "UNITA / FNLA-aligned",
        parties: [
          "National Union for the Total Independence of Angola (UNITA)",
          "National Liberation Front of Angola (FNLA)",
          "South Africa",
          "Zaire",
          "United States (support)",
        ],
      },
    ],
    casualties:
      "Roughly 500 thousand dead and over 4 million displaced across nearly three decades of fighting that left vast tracts of the country mined.",
    summary:
      "A conflict that began at independence in 1975 between forces aligned with the MPLA, UNITA, and the FNLA, drawing in Cuban, South African, Soviet, and American support as a major Cold War proxy theater. Fighting continued after the Cold War as a contest over diamond and oil revenues. The MPLA government effectively won the war following UNITA leader Jonas Savimbi's death in 2002.",
    musicTracks: [
      {
        title: "Mona Ki Ngi Xica",
        artist: "Bonga",
        year: 1972,
        note: "Recorded in exile shortly before independence, Bonga's semba lament became a touchstone of Angolan diasporic memory across the long war that followed.",
        youtubeId: "GjR7H-IytJQ",
      },
      {
        title: "Velha Chica",
        artist: "Waldemar Bastos",
        note: "A lament by the Angolan singer who spent much of the war in exile; it became a touchstone for documentary treatments of the country's displaced generation.",
        youtubeId: "Kl8mLhXyGis",
      },
      {
        title: "Irmão Ama Teu Irmão",
        artist: "Teta Lando",
        note: "Teta Lando's plea against fratricide — its title means 'Brother, Love Your Brother' — became one of the most resonant Angolan songs of the long civil war.",
        youtubeId: "5gHrtDR5r_s",
      },
    ],
  },

  {
    id: "mozambican-civil-war",
    name: "Mozambican Civil War",
    region: "SubSaharanAfrica",
    country: "Mozambique",
    coords: [35.5, -17.8],
    startYear: 1977,
    endYear: 1992,
    belligerents: [
      {
        side: "FRELIMO government",
        parties: [
          "People's Republic of Mozambique (FRELIMO)",
          "Tanzania",
          "Zimbabwe",
          "Soviet Union and Cuba (support)",
        ],
      },
      {
        side: "RENAMO",
        parties: [
          "Mozambican National Resistance (RENAMO)",
          "Rhodesia (until 1980)",
          "South Africa",
        ],
      },
    ],
    casualties:
      "Around 1 million dead, mostly from war-induced famine and the destruction of rural infrastructure, with roughly 5 million displaced.",
    summary:
      "A war fought between the FRELIMO government, which had taken power at independence from Portugal in 1975, and the RENAMO insurgency, initially organized by Rhodesian and later South African intelligence services. The conflict devastated rural Mozambique through massacres, scorched-earth tactics, and one of the most heavily mined landscapes of the late twentieth century. A negotiated peace was signed in Rome in 1992.",
    musicTracks: [
      {
        title: "Nwahulwana",
        artist: "Wazimbo",
        note: "The marrabenta classic by Mozambique's foremost wartime singer, whose Maputo recordings circulated widely as the soundtrack of urban life under the FRELIMO government.",
        youtubeId: "FOskk0xlUG0",
      },
      {
        title: "Majurugenta",
        artist: "Ghorwane",
        note: "Title track of the band whose late-1980s songs about poverty and corruption became unofficial anthems of war-weary Mozambique and recur in documentaries about the conflict.",
        youtubeId: "cHcjBsUECks",
      },
    ],
  },

  {
    id: "eritrean-war-of-independence",
    name: "Eritrean War of Independence",
    aka: ["Ethiopian–Eritrean War"],
    region: "SubSaharanAfrica",
    country: "Eritrea",
    coords: [38.9, 15.3],
    startYear: 1961,
    endYear: 1991,
    belligerents: [
      {
        side: "Ethiopia",
        parties: [
          "Ethiopian Empire (until 1974)",
          "Derg / People's Democratic Republic of Ethiopia",
          "Soviet Union and Cuba (support, post-1977)",
        ],
      },
      {
        side: "Eritrean independence movements",
        parties: [
          "Eritrean Liberation Front (ELF)",
          "Eritrean People's Liberation Front (EPLF)",
        ],
      },
    ],
    casualties:
      "Estimated 150 thousand to 250 thousand combat deaths and several hundred thousand additional civilian deaths from war-induced famine.",
    summary:
      "A thirty-year insurgency fought by Eritrean nationalist movements against successive Ethiopian governments after Eritrea's federation with Ethiopia was dissolved in 1962. The Derg's Soviet-backed counter-offensives in the late 1970s drove the EPLF back to mountain redoubts before the rebels reversed the war in the late 1980s. Eritrean forces took Asmara in May 1991, and a 1993 referendum confirmed independence.",
    musicTracks: [
      {
        title: "Lula",
        artist: "Yemane Barya",
        note: "Yemane Barya's Tigrinya-language repertoire became central to Eritrean nationalist consciousness during the long war for independence.",
        youtubeId: "N7pTA-I1TQ4",
      },
      {
        title: "Tmnitey",
        artist: "Abraham Afewerki",
        note: "Abraham Afewerki, who left Eritrea as a teenager and joined a children's cultural group in exile, became one of the defining musical voices of the independence generation.",
        youtubeId: "8sHU4HQtZo8",
      },
    ],
  },

  {
    id: "soviet-afghan-war",
    name: "Soviet–Afghan War",
    aka: ["Soviet war in Afghanistan"],
    region: "SouthAsia",
    country: "Afghanistan",
    coords: [67.7, 33.9],
    startYear: 1979,
    endYear: 1989,
    belligerents: [
      {
        side: "DRA / Soviet bloc",
        parties: [
          "Democratic Republic of Afghanistan",
          "Soviet Union (40th Army)",
        ],
      },
      {
        side: "Mujahideen",
        parties: [
          "Afghan mujahideen factions (Peshawar Seven)",
          "Pakistan (ISI)",
          "United States (CIA)",
          "Saudi Arabia",
          "China",
          "United Kingdom",
          "Foreign volunteers",
        ],
      },
    ],
    casualties:
      "Roughly 1 to 2 million Afghan dead, around 15 thousand Soviet military deaths, and over 5 million Afghans displaced abroad.",
    summary:
      "Soviet forces intervened in December 1979 to support the embattled communist government in Kabul, and quickly found themselves fighting a countrywide insurgency by Afghan mujahideen factions backed by Pakistan, the United States, Saudi Arabia, and others. The war became a defining late-Cold War proxy conflict and a generational trauma for Soviet society. Soviet troops withdrew under the 1988 Geneva Accords and the communist government in Kabul fell three years later.",
    musicTracks: [
      {
        title: "Gruppa krovi",
        artist: "Kino",
        year: 1988,
        note: "Viktor Tsoi's anthem was widely adopted by Soviet soldiers in Afghanistan and now recurs across post-Soviet films about the war, including Fyodor Bondarchuk's 9th Company.",
        youtubeId: "6i7zxpbOcaI",
      },
      {
        title: "Ne strelyay",
        artist: "DDT",
        year: 1980,
        note: "Yuri Shevchuk wrote this 'don't shoot' refrain explicitly in response to the Afghan intervention; the song became a coded anti-war anthem on samizdat tapes through the 1980s.",
        youtubeId: "G5bRZSptLrQ",
      },
      {
        title: "Batyanya kombat",
        artist: "Lyube",
        year: 1996,
        note: "A post-war ballad about a battalion commander that became the canonical veterans' tribute song, sung at Afgantsy reunions and incorporated into countless Russian war documentaries.",
        youtubeId: "GQ6zTI-YLwk",
      },
      {
        title: "Teach Your Children",
        artist: "Crosby, Stills, Nash & Young",
        year: 1970,
        note: "Mike Nichols closes Charlie Wilson's War (2007) with this track over the warning that the United States 'fucked up the endgame,' fixing it as the wistful coda for the American side of the war.",
        youtubeId: "dQOaUnSmJr8",
      },
    ],
  },

  {
    id: "nicaraguan-revolution-contra-war",
    name: "Nicaraguan Contra War",
    aka: ["Contra War"],
    region: "LatinAmerica",
    country: "Nicaragua",
    coords: [-85.2, 12.9],
    startYear: 1979,
    endYear: 1990,
    belligerents: [
      {
        side: "Sandinista government",
        parties: [
          "Sandinista National Liberation Front (FSLN)",
          "Cuba and Soviet bloc (support)",
        ],
      },
      {
        side: "Contras",
        parties: [
          "Nicaraguan Democratic Force (FDN)",
          "Democratic Revolutionary Alliance (ARDE)",
          "United States (CIA)",
          "Argentina (early training)",
          "Honduras (basing)",
        ],
      },
    ],
    casualties:
      "Around 30 thousand killed and several hundred thousand displaced through a decade of insurgency that flattened the rural economy.",
    summary:
      "After the Sandinista National Liberation Front overthrew the Somoza dynasty in 1979, the Reagan administration organized and funded the Contras, an insurgency drawn largely from former National Guardsmen and disaffected peasants. Fighting concentrated along the Honduran border and in the Atlantic coast regions, with the United States mining Nicaraguan harbors and ultimately diverting funds via the Iran–Contra affair. Free elections in 1990 brought the opposition to power and ended the war.",
    musicTracks: [
      {
        title: "Nicaragua, Nicaragüita",
        artist: "Carlos Mejía Godoy",
        year: 1983,
        note: "Sung at Sandinista rallies and adopted as the FSLN's de facto national hymn, it remains the single most identifiable musical emblem of the revolution and the war that followed.",
        youtubeId: "yp7-nWslZe0",
      },
      {
        title: "Washington Bullets",
        artist: "The Clash",
        year: 1980,
        note: "Joe Strummer cheers 'for the very first time ever, when they had a revolution in Nicaragua' on the Sandinista! album, the most famous Anglophone pop reference to the FSLN.",
        youtubeId: "mkoWjhZOKWo",
      },
      {
        title: "If I Had a Rocket Launcher",
        artist: "Bruce Cockburn",
        year: 1984,
        note: "Written after Cockburn visited Guatemalan refugee camps in southern Mexico amid the wider Central American war, it became an anthem of North American solidarity activism around Nicaragua and El Salvador.",
        youtubeId: "vPqPOkK_gzU",
      },
      {
        title: "Comandante Carlos Fonseca",
        artist: "Carlos Mejía Godoy y los de Palacagüina",
        note: "A corrido for the FSLN's slain founder that circulated on cassette across rebel territories and remains a fixture of FSLN commemorations.",
        youtubeId: "YSl3qDuUey4",
      },
    ],
  },

  {
    id: "salvadoran-civil-war",
    name: "Salvadoran Civil War",
    region: "LatinAmerica",
    country: "El Salvador",
    coords: [-88.9, 13.7],
    startYear: 1979,
    endYear: 1992,
    belligerents: [
      {
        side: "Government",
        parties: [
          "Government of El Salvador",
          "Salvadoran Armed Forces",
          "Death squads (ORDEN, Mano Blanca)",
          "United States (advisors and aid)",
        ],
      },
      {
        side: "Insurgency",
        parties: [
          "Farabundo Martí National Liberation Front (FMLN)",
          "Cuba and Nicaragua (support)",
        ],
      },
    ],
    casualties:
      "Roughly 75 thousand dead and around 1 million displaced, with the United Nations later attributing the great majority of civilian killings to state forces and allied death squads.",
    summary:
      "A war fought between the US-backed Salvadoran government and the FMLN, a coalition of leftist guerrilla groups, in the wake of the 1979 reformist coup and the assassination of Archbishop Óscar Romero. The conflict was marked by death-squad killings, massacres such as El Mozote, and a militarized countryside. UN-brokered peace accords signed at Chapultepec in 1992 demobilized the FMLN and reformed the armed forces.",
    musicTracks: [
      {
        title: "Bullet the Blue Sky",
        artist: "U2",
        year: 1987,
        note: "Bono wrote the lyric after visiting Salvadoran villages with the human-rights group COMADRES; the song's 'fighter planes across the mud huts' image fixed the war in arena-rock memory.",
        youtubeId: "HqwovrZKTm8",
      },
      {
        title: "Desapariciones",
        artist: "Rubén Blades",
        year: 1984,
        note: "Blades's salsa-noir catalog of the disappeared explicitly invokes the Salvadoran death squads alongside Argentina and Chile, and became a staple of solidarity events through the 1980s.",
        youtubeId: "UMdZ_8N7BIw",
      },
      {
        title: "Casas de cartón",
        artist: "Los Guaraguao",
        note: "A nueva canción standard widely played at FMLN rallies and Salvadoran refugee gatherings; it surfaces in numerous documentary treatments of the war's displaced poor.",
        youtubeId: "bE1QAFNO_8o",
      },
    ],
  },

  {
    id: "guatemalan-civil-war",
    name: "Guatemalan Civil War",
    region: "LatinAmerica",
    country: "Guatemala",
    coords: [-90.5, 15.5],
    startYear: 1960,
    endYear: 1996,
    belligerents: [
      {
        side: "Government",
        parties: [
          "Government of Guatemala",
          "Guatemalan Army and Civil Defense Patrols (PAC)",
          "United States (training and aid)",
        ],
      },
      {
        side: "Insurgency",
        parties: [
          "Guatemalan National Revolutionary Unity (URNG)",
          "Guerrilla Army of the Poor (EGP)",
          "Revolutionary Organization of the People in Arms (ORPA)",
        ],
      },
    ],
    casualties:
      "Roughly 200 thousand killed or disappeared, with a UN truth commission later finding that state forces were responsible for the great majority and that acts of genocide were committed against Maya communities.",
    summary:
      "A thirty-six-year insurgency fought between successive Guatemalan governments and a leftist guerrilla coalition, rooted in the 1954 CIA-backed coup against Jacobo Árbenz. The early-1980s counter-insurgency under Generals Lucas García and Ríos Montt razed hundreds of Maya highland villages. UN-brokered peace accords in 1996 ended the war and established a truth commission.",
    musicTracks: [
      {
        title: "Desapariciones",
        artist: "Rubén Blades",
        year: 1984,
        note: "Blades names Guatemala among the Latin American states whose disappeared the song commemorates, and it remains a fixture of memorial ceremonies for the Maya highland massacres.",
        youtubeId: "UMdZ_8N7BIw",
      },
      {
        title: "Luna de Xelajú",
        artist: "Paco Pérez",
        note: "The unofficial Guatemalan national waltz, used across documentaries such as When the Mountains Tremble as the lyrical counterpoint to footage of highland violence.",
        youtubeId: "ppk1bEj4NJc",
      },
    ],
  },

  {
    id: "chilean-coup-1973",
    name: "Chilean Coup and Pinochet Dictatorship",
    aka: ["11 September 1973 coup", "Pinochet era"],
    region: "LatinAmerica",
    country: "Chile",
    coords: [-70.6, -33.4],
    startYear: 1973,
    endYear: 1990,
    belligerents: [
      {
        side: "Coup forces",
        parties: [
          "Chilean Armed Forces (Pinochet junta)",
          "Carabineros de Chile",
          "DINA / CNI secret police",
          "United States (CIA, prior destabilization)",
        ],
      },
      {
        side: "Government and resistance",
        parties: [
          "Popular Unity government of Salvador Allende",
          "MIR, FPMR and other resistance groups",
          "Trade unions and the Catholic Vicariate of Solidarity",
        ],
      },
    ],
    casualties:
      "Around 3 thousand killed or disappeared and tens of thousands tortured under the dictatorship, with hundreds of thousands forced into exile.",
    summary:
      "On 11 September 1973 the Chilean armed forces, led by General Augusto Pinochet, overthrew the elected Popular Unity government of Salvador Allende, who died in the presidential palace. The junta dissolved Congress, banned leftist parties, and established a network of detention and torture sites under DINA. A 1988 plebiscite rejected continued military rule and a transition to civilian government followed in 1990.",
    musicTracks: [
      {
        title: "Manifiesto",
        artist: "Víctor Jara",
        year: 1974,
        note: "Recorded shortly before Jara was tortured and killed in the Estadio Chile in the days after the coup, the song became the defining elegy of the Chilean Left and of the new-song movement worldwide.",
        youtubeId: "uj-3mpjDC8M",
      },
      {
        title: "Te recuerdo Amanda",
        artist: "Víctor Jara",
        year: 1969,
        note: "Jara's tender pre-coup ballad was reframed after his murder as a memorial to the disappeared and is sung at every September 11 commemoration in Chile.",
        youtubeId: "1q2_zOfuGcA",
      },
      {
        title: "El pueblo unido jamás será vencido",
        artist: "Quilapayún / Inti-Illimani",
        year: 1973,
        note: "Composed by Sergio Ortega for the Allende campaign and recorded weeks before the coup, it travelled with the Chilean exile community and became the global anthem of solidarity with the resistance.",
        youtubeId: "kTLrFjYt8tA",
      },
      {
        title: "They Dance Alone (Cueca Solo)",
        artist: "Sting",
        year: 1987,
        note: "Sting wrote the song after meeting members of the Agrupación de Familiares de Detenidos Desaparecidos who danced the cueca with photographs of their missing husbands; it brought the Chilean disappeared to global pop audiences.",
        youtubeId: "KORlks3EJdM",
      },
      {
        title: "Mothers of the Disappeared",
        artist: "U2",
        year: 1987,
        note: "Closing The Joshua Tree, the song was inspired by Bono's encounters with mothers of the disappeared in Argentina and Chile and is regularly performed alongside imagery of the Vicariate's protest archives.",
        youtubeId: "kjuIAuSzGbc",
      },
    ],
  },

  // ───────────────────────────── Decolonization ─────────────────────────────

  {
    id: "first-indochina-war",
    name: "First Indochina War",
    aka: ["French Indochina War"],
    region: "SoutheastAsia",
    country: "Vietnam",
    coords: [105.8, 21.0],
    startYear: 1946,
    endYear: 1954,
    belligerents: [
      {
        side: "French Union",
        parties: [
          "France (Far East Expeditionary Corps, Foreign Legion)",
          "State of Vietnam (from 1949)",
          "Kingdoms of Laos and Cambodia",
          "United States (matériel, from 1950)",
        ],
      },
      {
        side: "Viet Minh",
        parties: [
          "Democratic Republic of Vietnam",
          "Việt Minh",
          "People's Republic of China (matériel, from 1949)",
          "Soviet Union (matériel)",
        ],
      },
    ],
    casualties:
      "Around 400,000 to 500,000 dead across all sides, the majority Vietnamese; the war culminated in the French defeat at Dien Bien Phu.",
    summary:
      "A war of decolonisation fought between the returning French and the Viet Minh independence movement under Ho Chi Minh, escalating from urban skirmishes in late 1946 to set-piece battles in the northern highlands. The Viet Minh's siege victory at Dien Bien Phu in 1954 led to the Geneva Accords, partitioning Vietnam at the 17th parallel and setting the stage for the subsequent American war.",
    musicTracks: [
      {
        title: "Le Déserteur",
        artist: "Boris Vian",
        year: 1954,
        note: "Written and released in the final months of the Indochina war as a refusal letter to the French president, banned on French radio and quickly adopted as the era's pacifist anthem.",
        youtubeId: "gjndTXyk3mw",
      },
      {
        title: "La Complainte des infidèles",
        artist: "Bérurier Noir",
        note: "A latter-day French punk standard built on Foreign Legion and colonial-war marching motifs, repeatedly used in documentary treatments of the Indochina campaign.",
      },
    ],
  },

  {
    id: "algerian-war",
    name: "Algerian War of Independence",
    region: "MENA",
    country: "Algeria",
    coords: [3.0, 36.0],
    startYear: 1954,
    endYear: 1962,
    belligerents: [
      {
        side: "France",
        parties: [
          "Republic of France",
          "French Army (including paratroop and Foreign Legion units)",
          "Harkis (Algerian Muslim auxiliaries)",
          "OAS (settler paramilitary, late phase)",
        ],
      },
      {
        side: "Independence movement",
        parties: [
          "National Liberation Front (FLN)",
          "National Liberation Army (ALN)",
        ],
      },
    ],
    casualties:
      "Estimates range widely from several hundred thousand to over a million Algerian dead; tens of thousands of French military and pied-noir civilians were killed, and around a million pieds-noirs left for France in 1962.",
    summary:
      "An eight-year war for independence from France that combined rural guerrilla warfare with the urban Battle of Algiers, prompting French use of systematic torture and the relocation of millions of rural Algerians. A 1961 attempted putsch by Algiers-based generals against Charles de Gaulle hastened the political end of the war. Algeria gained independence in 1962 under the Évian Accords.",
    musicTracks: [
      {
        title: "Theme from The Battle of Algiers",
        artist: "Ennio Morricone & Gillo Pontecorvo",
        year: 1966,
        note: "Pontecorvo's film score, co-composed with Morricone, became the global cinematic signature for urban anti-colonial insurgency and is repeatedly cited in documentaries about the war.",
        youtubeId: "RkPyTK5GD00",
      },
      {
        title: "Non, je ne regrette rien",
        artist: "Édith Piaf",
        year: 1960,
        note: "Adopted by the 1st Foreign Parachute Regiment after the failed Algiers putsch of April 1961; the song was sung by paratroopers as the regiment was disbanded and has been inseparable from that moment in French memory.",
        youtubeId: "4r454dad7tc",
      },
      {
        title: "Le Déserteur",
        artist: "Boris Vian",
        year: 1954,
        note: "Already an Indochina-war refusal song, it gained fresh weight as French conscripts were sent to North Africa.",
        youtubeId: "gjndTXyk3mw",
      },
      {
        title: "Ya Rayah",
        artist: "Dahmane El Harrachi",
        year: 1973,
        note: "A post-war chaabi standard about Algerian emigration to France that became a diaspora elegy for the war and its million-strong displacement to the metropole.",
        youtubeId: "BhLm3f2gFCU",
      },
    ],
  },

  {
    id: "mau-mau-uprising",
    name: "Mau Mau Uprising",
    aka: ["Kenya Emergency"],
    region: "SubSaharanAfrica",
    country: "Kenya",
    coords: [37.0, -1.3],
    startYear: 1952,
    endYear: 1960,
    belligerents: [
      {
        side: "British colonial forces",
        parties: [
          "United Kingdom",
          "King's African Rifles",
          "Kenya Police and Home Guard (loyalist Kikuyu)",
        ],
      },
      {
        side: "Mau Mau",
        parties: [
          "Kenya Land and Freedom Army",
          "Kikuyu, Embu, and Meru insurgents",
        ],
      },
    ],
    casualties:
      "Official British figures put rebel deaths at around 11,000; later scholarship estimates tens of thousands more died in detention camps and forced 'villagisation', and a 2013 UK settlement compensated thousands of survivors of colonial-era abuses.",
    summary:
      "An armed uprising centred on the Kikuyu of central Kenya against British colonial rule, met with a sweeping counter-insurgency campaign of mass detention, forced relocation, and intelligence-driven killings in the forests around Mount Kenya. Although the rebellion was suppressed by the late 1950s, it accelerated the political path to Kenyan independence in 1963.",
    musicTracks: [],
  },

  {
    id: "congo-crisis",
    name: "Congo Crisis",
    region: "SubSaharanAfrica",
    country: "Democratic Republic of the Congo",
    coords: [22.0, -3.0],
    startYear: 1960,
    endYear: 1965,
    belligerents: [
      {
        side: "Central government & U.N.",
        parties: [
          "Government of the Republic of the Congo (Léopoldville)",
          "United Nations Operation in the Congo (ONUC)",
          "Belgium (initial military intervention)",
        ],
      },
      {
        side: "Secessionists & rebels",
        parties: [
          "State of Katanga (Moïse Tshombe, with Belgian and mercenary support)",
          "South Kasai",
          "Simba rebels (Eastern Congo, 1964)",
        ],
      },
    ],
    casualties:
      "Roughly 100,000 dead across the multiple conflicts; the U.N. mission lost 250 personnel including Secretary-General Dag Hammarskjöld in a 1961 plane crash.",
    summary:
      "Within days of independence from Belgium in 1960, the Congolese army mutinied and Katanga seceded under Moïse Tshombe with Belgian backing, drawing in a major United Nations military operation. Prime Minister Patrice Lumumba was deposed and assassinated in 1961, and a series of rebellions and interventions continued until Joseph-Désiré Mobutu's 1965 coup consolidated power.",
    musicTracks: [
      {
        title: "Indépendance Cha Cha",
        artist: "Le Grand Kallé et l'African Jazz",
        year: 1960,
        note: "Composed in Brussels during the Round Table negotiations and performed at the independence celebrations; the song became the pan-African anthem of the decolonisation moment that the crisis immediately followed.",
        youtubeId: "fZx32k6sRuQ",
      },
      {
        title: "Lumumba",
        artist: "Miriam Makeba",
        year: 1970,
        note: "Makeba's tribute fixed Lumumba's 1961 assassination as a defining episode of post-colonial African political memory.",
        youtubeId: "W0GPm1azbZI",
      },
    ],
  },

  {
    id: "portuguese-colonial-wars",
    name: "Portuguese Colonial Wars",
    aka: ["Overseas War"],
    region: "SubSaharanAfrica",
    country: "Angola, Mozambique & Guinea-Bissau",
    coords: [13.2, -8.8],
    startYear: 1961,
    endYear: 1974,
    belligerents: [
      {
        side: "Portugal",
        parties: [
          "Portuguese Armed Forces (Estado Novo regime)",
          "Local African auxiliaries (flechas, GEs)",
        ],
      },
      {
        side: "Liberation movements",
        parties: [
          "MPLA, FNLA, UNITA (Angola)",
          "FRELIMO (Mozambique)",
          "PAIGC (Guinea-Bissau and Cape Verde)",
        ],
      },
    ],
    casualties:
      "Roughly 100,000 dead across the three theatres, the majority African civilians and combatants; over 8,000 Portuguese soldiers killed and tens of thousands wounded.",
    summary:
      "Three simultaneous wars of independence fought against the Portuguese Estado Novo dictatorship in Angola, Mozambique, and Guinea-Bissau by liberation movements that received support from Algeria, the Soviet bloc, and Sweden. The war's unpopularity at home produced the April 1974 Carnation Revolution in Lisbon, after which Portugal granted independence to all three colonies.",
    musicTracks: [
      {
        title: "Grândola, Vila Morena",
        artist: "José \"Zeca\" Afonso",
        year: 1971,
        note: "Broadcast at 00:20 on April 25, 1974 on Rádio Renascença as the agreed signal for the army Movement of the Captains to launch the Carnation Revolution that ended the colonial wars.",
        youtubeId: "gaLWqy4e7ls",
      },
      {
        title: "E Depois do Adeus",
        artist: "Paulo de Carvalho",
        year: 1974,
        note: "Played earlier the same night on Emissores Associados as the first, preliminary signal that the coup was on; together with Grândola it bookends the wars' end.",
        youtubeId: "jthlDhHpblo",
      },
      {
        title: "Mona Ki Ngi Xica",
        artist: "Bonga",
        year: 1972,
        note: "Recorded in exile, it was the diaspora-Angolan articulation of the war's experience and circulated widely in liberation-movement networks.",
        youtubeId: "GjR7H-IytJQ",
      },
    ],
  },

  {
    id: "rhodesian-bush-war",
    name: "Rhodesian Bush War",
    aka: ["Zimbabwean War of Liberation", "Second Chimurenga"],
    region: "SubSaharanAfrica",
    country: "Rhodesia / Zimbabwe",
    coords: [29.0, -19.0],
    startYear: 1964,
    endYear: 1979,
    belligerents: [
      {
        side: "Rhodesian government",
        parties: [
          "Rhodesian Security Forces",
          "Selous Scouts and Rhodesian SAS",
          "South Africa (matériel and personnel)",
        ],
      },
      {
        side: "Liberation movements",
        parties: [
          "ZANU / ZANLA (Robert Mugabe, Josiah Tongogara)",
          "ZAPU / ZIPRA (Joshua Nkomo)",
          "Mozambique and Zambia (rear bases)",
          "China and Soviet Union (support)",
        ],
      },
    ],
    casualties:
      "Roughly 20,000 to 30,000 killed across the war, the majority African civilians; ended by the 1979 Lancaster House Agreement.",
    summary:
      "An armed struggle by Black-nationalist guerrilla armies operating from Mozambique and Zambia against the white-minority Rhodesian government that had unilaterally declared independence from Britain in 1965. The war combined cross-border raids and rural mobilisation with sanctions-era economic pressure. It ended at Lancaster House and led to the 1980 election of Robert Mugabe and the renaming of the country to Zimbabwe.",
    musicTracks: [
      {
        title: "Hokoyo!",
        artist: "Thomas Mapfumo",
        year: 1978,
        note: "Mapfumo's chimurenga music — Shona-language rock encoded with liberation-war messaging — was banned by the Rhodesian government and became the in-country soundtrack of the struggle.",
        youtubeId: "sFYpFglsatE",
      },
      {
        title: "Mothers of the Land",
        artist: "Thomas Mapfumo & The Acid Band",
        note: "A Mapfumo standard from the late-war and immediate post-independence period that became a touchstone of how the chimurenga generation remembered the bush war.",
      },
    ],
  },

  {
    id: "namibian-war-of-independence",
    name: "Namibian War of Independence",
    aka: ["South African Border War"],
    region: "SubSaharanAfrica",
    country: "Namibia",
    coords: [17.5, -22.0],
    startYear: 1966,
    endYear: 1990,
    belligerents: [
      {
        side: "South Africa",
        parties: [
          "South African Defence Force",
          "South West African Territorial Force",
          "UNITA (Angolan ally)",
        ],
      },
      {
        side: "SWAPO and allies",
        parties: [
          "South West Africa People's Organisation (SWAPO)",
          "People's Liberation Army of Namibia (PLAN)",
          "Angola (FAPLA) and Cuban expeditionary forces",
        ],
      },
    ],
    casualties:
      "Estimated 25,000 dead across the war, including the linked South African Border War in southern Angola.",
    summary:
      "A guerrilla war by SWAPO against South African rule over the former League-of-Nations mandate of South West Africa, fought largely from bases in Angola and entwined with the Angolan Civil War and the South African Border War. The 1988 Tripartite Accord linked Cuban withdrawal from Angola to Namibian independence, which followed in March 1990.",
    musicTracks: [],
  },

  // ───────────────────────────── Middle East ─────────────────────────────

  {
    id: "arab-israeli-1948",
    name: "1948 Arab–Israeli War",
    aka: ["War of Independence", "Nakba"],
    region: "MENA",
    country: "Israel / Palestine",
    coords: [35.0, 31.7],
    startYear: 1948,
    endYear: 1949,
    belligerents: [
      {
        side: "Israel",
        parties: ["State of Israel (Haganah, Irgun, Lehi → IDF)"],
      },
      {
        side: "Arab coalition & Palestinian Arab forces",
        parties: [
          "Egypt",
          "Transjordan (Arab Legion)",
          "Syria",
          "Iraq",
          "Lebanon",
          "Saudi expeditionary contingent",
          "Holy War Army and Arab Liberation Army",
        ],
      },
    ],
    casualties:
      "Roughly 20,000 killed across all sides; some 700,000 Palestinian Arabs were displaced — the event Palestinians remember as the Nakba.",
    summary:
      "Following the U.N. partition vote and the British withdrawal from Mandatory Palestine, civil war between Jewish and Arab communities escalated into an interstate war on May 15, 1948, when neighbouring Arab states intervened against the newly declared State of Israel. Armistice agreements in 1949 left Israel in control of about 78 percent of former Mandatory Palestine, with the West Bank under Jordanian and Gaza under Egyptian administration.",
    musicTracks: [
      {
        title: "Bab el Wad",
        artist: "Haim Gouri & Shmuel Fershko",
        year: 1949,
        note: "An Israeli memorial song for the convoys broken on the Tel Aviv–Jerusalem road during the war's siege of the city; sung at remembrance ceremonies ever since.",
        youtubeId: "LwB0ajvS-Us",
      },
      {
        title: "Mawtini",
        artist: "Ibrahim Tuqan / Mohammad Fleifel",
        note: "A Palestinian poem set to music in the 1930s that became the war-era and post-Nakba pan-Arab anthem of Palestinian aspiration.",
        youtubeId: "Ateet0xanmk",
      },
    ],
  },

  {
    id: "suez-crisis",
    name: "Suez Crisis",
    aka: ["Sinai War", "Tripartite Aggression"],
    region: "MENA",
    country: "Egypt",
    coords: [32.5, 30.0],
    startYear: 1956,
    endYear: 1957,
    belligerents: [
      {
        side: "Tripartite",
        parties: ["United Kingdom", "France", "Israel"],
      },
      {
        side: "Egypt",
        parties: ["Republic of Egypt under Gamal Abdel Nasser"],
      },
    ],
    casualties:
      "A few thousand Egyptian dead and several hundred among the invading forces; politically far more consequential than militarily.",
    summary:
      "After Egypt nationalised the Suez Canal, Britain, France, and Israel coordinated a military intervention to seize it back and topple Nasser. U.S. and Soviet pressure forced a humiliating Anglo-French withdrawal, accelerating the end of European primacy in the Middle East and elevating Nasser's pan-Arab standing. The crisis is often treated as the symbolic end of British great-power status.",
    musicTracks: [],
  },

  {
    id: "six-day-war",
    name: "Six-Day War",
    aka: ["June War", "Naksa"],
    region: "MENA",
    country: "Israel / Egypt / Syria / Jordan",
    coords: [35.2, 31.8],
    startYear: 1967,
    endYear: 1967,
    belligerents: [
      {
        side: "Israel",
        parties: ["State of Israel (IDF)"],
      },
      {
        side: "Arab coalition",
        parties: ["Egypt", "Syria", "Jordan", "Iraq (limited)"],
      },
    ],
    casualties:
      "Roughly 1,000 Israeli and 20,000 Arab military dead in six days; Israel ended the war in control of the Sinai, Gaza, the West Bank, East Jerusalem, and the Golan Heights.",
    summary:
      "After weeks of escalating mobilisation and the closure of the Straits of Tiran, Israel launched pre-emptive air strikes on June 5, 1967 and routed the Egyptian, Syrian, and Jordanian forces in six days. The war redrew the political map of the region and produced the territorial questions — the West Bank, Gaza, the Golan Heights, and East Jerusalem — that have shaped the conflict ever since.",
    musicTracks: [
      {
        title: "Yerushalayim Shel Zahav (Jerusalem of Gold)",
        artist: "Naomi Shemer / Shuli Natan",
        year: 1967,
        note: "Composed weeks before the war and sung by Israeli paratroopers at the Western Wall on June 7; became the war's instant Israeli anthem and a fixture of subsequent commemorations.",
        youtubeId: "jeA0ZEZiXJ0",
      },
    ],
  },

  {
    id: "yom-kippur-war",
    name: "Yom Kippur War",
    aka: ["October War", "Ramadan War"],
    region: "MENA",
    country: "Israel / Egypt / Syria",
    coords: [33.7, 30.5],
    startYear: 1973,
    endYear: 1973,
    belligerents: [
      {
        side: "Israel",
        parties: [
          "State of Israel (IDF)",
          "United States (massive emergency airlift)",
        ],
      },
      {
        side: "Arab coalition",
        parties: [
          "Egypt",
          "Syria",
          "Iraq, Jordan, Saudi Arabia, Algeria, Morocco, and Cuba (expeditionary contingents)",
          "Soviet Union (matériel)",
        ],
      },
    ],
    casualties:
      "Roughly 2,500 Israeli and over 15,000 Arab military dead in three weeks; the war's oil-embargo aftershock reshaped the global economy.",
    summary:
      "On Yom Kippur 1973, Egypt and Syria launched coordinated surprise attacks across the Suez Canal and into the Golan Heights, achieving early breakthroughs before Israel reversed both fronts under heavy U.S. resupply. The war ended with Israeli forces across the canal but at high cost; the OPEC oil embargo declared in solidarity with Egypt produced a global energy crisis. Egyptian–Israeli rapprochement followed within five years.",
    musicTracks: [
      {
        title: "Lu Yehi (Let It Be)",
        artist: "Naomi Shemer / Chava Alberstein",
        year: 1973,
        note: "Shemer rewrote the Beatles melody with Hebrew lyrics during the war's first week; the song was broadcast nightly and became the conflict's defining Israeli civilian anthem.",
        youtubeId: "xJoZ9R4i-N0",
      },
    ],
  },

  {
    id: "lebanese-civil-war",
    name: "Lebanese Civil War",
    region: "MENA",
    country: "Lebanon",
    coords: [35.5, 33.9],
    startYear: 1975,
    endYear: 1990,
    belligerents: [
      {
        side: "Christian / Lebanese-Front bloc",
        parties: [
          "Phalange and Lebanese Forces",
          "South Lebanon Army (with Israeli backing)",
          "Israel (multiple incursions, full invasion in 1982)",
        ],
      },
      {
        side: "Lebanese National Movement & allies",
        parties: [
          "Palestine Liberation Organisation",
          "Lebanese National Movement (Druze, Sunni, leftist parties)",
          "Amal Movement, then Hezbollah",
          "Syria (intermittent on multiple sides)",
        ],
      },
    ],
    casualties:
      "Around 150,000 dead and a million displaced from a country of roughly 3 million; central Beirut was largely destroyed.",
    summary:
      "A fifteen-year multi-sided war along sectarian and political lines that drew in Palestinian armed factions, Israeli invasions in 1978 and 1982, Syrian intervention, and a Western multinational force whose 1983 barracks bombings hastened its withdrawal. The war ended with the 1989 Taif Agreement and a reordered confessional power-sharing arrangement.",
    musicTracks: [
      {
        title: "Li Beirut",
        artist: "Fairuz",
        year: 1984,
        note: "Fairuz's mid-war elegy to a destroyed Beirut, set to a Joaquín Rodrigo guitar concerto melody, became the city's defining mourning song and is still played at every commemoration.",
        youtubeId: "OTejHfVWQUM",
      },
      {
        title: "Rita",
        artist: "Marcel Khalife (poem by Mahmoud Darwish)",
        note: "Khalife's setting of a Darwish love poem across the Israeli–Palestinian divide became one of the war years' most-circulated cassette recordings on both sides of the Green Line.",
        youtubeId: "vvcx7ZM580w",
      },
      {
        title: "Le Canon",
        artist: "Ziad Rahbani",
        note: "Rahbani's wartime stage musicals and jazz-inflected songs supplied the cynical Beirut soundtrack of the militia years; cited in nearly every memoir of the period.",
      },
    ],
  },

  {
    id: "iran-iraq-war",
    name: "Iran–Iraq War",
    region: "MENA",
    country: "Iran / Iraq",
    coords: [47.5, 33.0],
    startYear: 1980,
    endYear: 1988,
    belligerents: [
      {
        side: "Iraq",
        parties: [
          "Republic of Iraq under Saddam Hussein",
          "Mujahedin-e Khalq (anti-Tehran exile force)",
          "United States, France, and Soviet Union (matériel and intelligence support, in varying degrees)",
        ],
      },
      {
        side: "Iran",
        parties: [
          "Islamic Republic of Iran",
          "Iranian Army and Islamic Revolutionary Guard Corps (IRGC), with Basij volunteers",
        ],
      },
    ],
    casualties:
      "Estimates commonly cite around 500,000 to over a million dead across both sides, including extensive use of chemical weapons by Iraq and the deaths of tens of thousands of teenage Basij volunteers in human-wave assaults.",
    summary:
      "Iraq invaded Iran in September 1980, anticipating a quick victory against a revolutionary government still consolidating power, and was instead drawn into an eight-year war of attrition that featured trench warfare, missile exchanges against cities, and Iraq's repeated use of chemical weapons. The war ended in 1988 with U.N.-mediated ceasefire and essentially the pre-war borders.",
    musicTracks: [
      {
        title: "Zeytoun",
        artist: "Hayedeh",
        note: "Recorded in exile by one of pre-revolution Iran's most popular singers, the song became a diaspora touchstone for an Iranian generation cut off from home during the war years.",
      },
    ],
  },

  {
    id: "gulf-war",
    name: "Gulf War",
    aka: ["First Gulf War", "Operation Desert Storm"],
    region: "MENA",
    country: "Iraq / Kuwait",
    coords: [47.7, 29.5],
    startYear: 1990,
    endYear: 1991,
    belligerents: [
      {
        side: "Coalition",
        parties: [
          "United States",
          "United Kingdom, France, Saudi Arabia, Egypt, Syria",
          "35-nation U.N.-authorised coalition in total",
          "Kuwait (government in exile and resistance)",
        ],
      },
      {
        side: "Iraq",
        parties: ["Republic of Iraq under Saddam Hussein"],
      },
    ],
    casualties:
      "Roughly 25,000 to 50,000 Iraqi military dead and several thousand civilians; coalition military deaths under 400.",
    summary:
      "Following Iraq's August 1990 invasion of Kuwait, a U.S.-led, U.N.-authorised coalition built up in Saudi Arabia and launched a six-week air campaign and a 100-hour ground war that expelled Iraqi forces from Kuwait. The war introduced 24-hour cable-news coverage of combat and left Saddam Hussein in power under a sanctions and no-fly-zone regime that lasted until 2003.",
    musicTracks: [
      {
        title: "Don't Worry, Be Happy",
        artist: "Bobby McFerrin",
        year: 1988,
        note: "Famously soundtracks the desert-rotation sequences in Sam Mendes's Jarhead (2005), the song's rictus cheerfulness becoming the film's signature take on Marine boredom in Saudi Arabia.",
        youtubeId: "d-diB65scQU",
      },
      {
        title: "Fortunate Son",
        artist: "Creedence Clearwater Revival",
        year: 1969,
        note: "Used as the rotation-home cue in Jarhead — and across Gulf-era documentaries — to explicitly mark the inheritance of Vietnam-generation imagery in the post-Vietnam volunteer military.",
        youtubeId: "xImsdvr9Mx4",
      },
      {
        title: "God Bless the U.S.A.",
        artist: "Lee Greenwood",
        year: 1984,
        note: "Reissued and saturating U.S. airwaves during the yellow-ribbon Desert Storm period; became the de facto civilian anthem of the war.",
        youtubeId: "-KoXt9pZLGM",
      },
      {
        title: "The Star-Spangled Banner (Super Bowl XXV)",
        artist: "Whitney Houston",
        year: 1991,
        note: "Performed nine days into the air war, with American Forces Network broadcasting it back to troops; the recording charted as a single on the back of the war's news cycle.",
        youtubeId: "dtdhxqGmWKU",
      },
    ],
  },

  {
    id: "iraq-war",
    name: "Iraq War",
    aka: ["Second Gulf War", "Operation Iraqi Freedom"],
    region: "MENA",
    country: "Iraq",
    coords: [44.4, 33.3],
    startYear: 2003,
    endYear: 2011,
    belligerents: [
      {
        side: "Coalition & post-2003 Iraqi government",
        parties: [
          "United States",
          "United Kingdom",
          "Coalition of contributing states (Australia, Poland, others)",
          "Iraqi Security Forces (post-2004)",
        ],
      },
      {
        side: "Insurgency",
        parties: [
          "Ba'athist remnants",
          "Sunni nationalist and tribal factions",
          "Al-Qaeda in Iraq",
          "Mahdi Army and other Shi'a militias",
        ],
      },
    ],
    casualties:
      "Documented Iraqi civilian deaths above 200,000, with broader study estimates of total war-related deaths several times higher; over 4,500 U.S. military killed.",
    summary:
      "The 2003 U.S.-led invasion of Iraq, justified at the time by claims about weapons of mass destruction and ties to Al-Qaeda that did not hold up, toppled Saddam Hussein within weeks and produced an occupation that quickly faced multiple armed insurgencies and a sectarian civil war between 2006 and 2008. U.S. combat operations formally ended in 2011; the war's aftermath fed directly into the rise of the Islamic State.",
    musicTracks: [
      {
        title: "Bodies",
        artist: "Drowning Pool",
        year: 2001,
        note: "Adopted as a barracks and pre-mission anthem and reportedly used as a psychological-operations loudspeaker track during the 2004 Battle of Fallujah; later named in CIA black-site detainee testimony.",
        youtubeId: "04F4xlWSFh0",
      },
      {
        title: "B.Y.O.B.",
        artist: "System of a Down",
        year: 2005,
        note: "An explicit anti-Iraq War single — 'Why don't presidents fight the war?' — that became the most commercially visible protest track of the conflict.",
        youtubeId: "zUzd9KyIDrM",
      },
      {
        title: "Khyber Pass",
        artist: "Ministry",
        year: 2006,
        note: "Used over the opening of Kathryn Bigelow's The Hurt Locker (2008) to set the EOD-team mission tone; representative of the metal-leaning soldier listening cited across Generation Kill–era memoirs.",
        youtubeId: "BL9IWXqb-xw",
      },
      {
        title: "Mosh",
        artist: "Eminem",
        year: 2004,
        note: "Released in the run-up to the 2004 U.S. presidential election with a mobilisation video opposing Bush and the war; the most-discussed mainstream-rap protest of the period.",
        youtubeId: "BzuD-R5vGvQ",
      },
      {
        title: "Hadji Girl",
        artist: "Joshua Belile",
        year: 2006,
        note: "A Marine-authored barracks song that went viral and became a media flashpoint about U.S. troop attitudes; widely cited in scholarship on the war's grunt-culture music.",
      },
    ],
  },

  {
    id: "syrian-civil-war",
    name: "Syrian Civil War",
    region: "MENA",
    country: "Syria",
    coords: [38.0, 35.0],
    startYear: 2011,
    endYear: null,
    belligerents: [
      {
        side: "Government & allies",
        parties: [
          "Syrian Arab Republic (Assad government)",
          "Russia",
          "Iran",
          "Hezbollah",
        ],
      },
      {
        side: "Opposition factions",
        parties: [
          "Free Syrian Army and successor formations",
          "Hayat Tahrir al-Sham",
          "Various Islamist and nationalist rebel groups",
          "Turkey (in northern operations)",
          "United States (limited support to vetted groups)",
        ],
      },
      {
        side: "Kurdish-led & anti-IS coalition",
        parties: [
          "Syrian Democratic Forces (YPG/YPJ-led)",
          "U.S.-led Global Coalition Against Daesh",
        ],
      },
      {
        side: "Islamic State",
        parties: ["Islamic State of Iraq and the Levant"],
      },
    ],
    casualties:
      "U.N. and observatory estimates place direct deaths above 500,000 with millions internally displaced and over 6 million refugees abroad.",
    summary:
      "Beginning with 2011 protests in the regional uprisings then sweeping the Arab world, Syria's conflict fragmented into a multi-sided war involving the Assad government, an opposition coalition, Kurdish-led forces, the Islamic State, and a long roster of foreign militaries and proxies. Major-power intervention by Russia from 2015 helped stabilise the government's position; the Assad government fell in late 2024 to a rebel offensive led by Hayat Tahrir al-Sham.",
    musicTracks: [
      {
        title: "Yalla Erhal Ya Bashar",
        artist: "Ibrahim Qashoush",
        year: 2011,
        note: "The chant-anthem of the early Hama protests, sung by Qashoush and adopted across the country; he was found dead with his throat cut in July 2011 and the song became an emblem of the uprising.",
        youtubeId: "UIBVHv7uubg",
      },
      {
        title: "Warni Warni",
        artist: "Omar Souleyman",
        year: 2013,
        note: "Souleyman's diasporic dabke became the most internationally visible Syrian musical export of the war years and a recurring needle drop in war-era documentaries about the country.",
        youtubeId: "lVlgMEFu1PI",
      },
    ],
  },

  {
    id: "yemeni-civil-war",
    name: "Yemeni Civil War",
    region: "MENA",
    country: "Yemen",
    coords: [44.2, 15.4],
    startYear: 2014,
    endYear: null,
    belligerents: [
      {
        side: "Houthi-led bloc",
        parties: [
          "Ansar Allah (Houthi movement)",
          "Forces loyal to former president Ali Abdullah Saleh (until 2017)",
          "Iran (support)",
        ],
      },
      {
        side: "Hadi government & Saudi-led coalition",
        parties: [
          "Internationally recognised government of Yemen",
          "Saudi Arabia",
          "United Arab Emirates",
          "United States and United Kingdom (intelligence and matériel)",
          "Southern Transitional Council (intermittent ally and rival)",
        ],
      },
    ],
    casualties:
      "U.N. estimates of total deaths above 350,000, the great majority from war-induced famine and disease; the U.N. has called the situation one of the world's worst humanitarian crises.",
    summary:
      "The Houthi movement seized Sanaa in 2014 and pushed south, prompting a Saudi-led intervention from 2015 in support of the internationally recognised government. Years of air strikes, ground fighting, and a near-total blockade produced a humanitarian catastrophe; intermittent U.N.-brokered truces and Saudi–Houthi talks have not yet produced a comprehensive settlement.",
    musicTracks: [],
  },

  {
    id: "libyan-civil-war-2011",
    name: "Libyan Civil War (2011)",
    region: "MENA",
    country: "Libya",
    coords: [13.2, 32.9],
    startYear: 2011,
    endYear: 2011,
    belligerents: [
      {
        side: "Gaddafi government",
        parties: ["Libyan Arab Jamahiriya under Muammar Gaddafi"],
      },
      {
        side: "Anti-Gaddafi forces",
        parties: [
          "National Transitional Council and allied brigades",
          "NATO (Operation Unified Protector under U.N. Security Council Resolution 1973)",
          "Qatar and United Arab Emirates (matériel and air support)",
        ],
      },
    ],
    casualties:
      "Estimates around 25,000 dead in the eight-month war; instability and a second civil war followed from 2014.",
    summary:
      "Anti-government protests in February 2011 escalated within weeks into an armed uprising centred in Benghazi, met by a U.N.-authorised NATO air campaign that helped tip the balance. Tripoli fell in August and Muammar Gaddafi was killed near Sirte in October. Post-war militia fragmentation and a contested transition produced the second Libyan civil war beginning in 2014.",
    musicTracks: [
      {
        title: "Al-Soo'al",
        artist: "Ibn Thabit",
        year: 2011,
        note: "Libyan rapper whose anti-Gaddafi mixtapes — released anonymously since 2008 — became the in-country soundtrack of the uprising and circulated widely on YouTube during the war.",
      },
    ],
  },

  {
    id: "israel-hamas-war",
    name: "Israel–Hamas War",
    aka: ["Gaza war", "Iron Swords"],
    region: "MENA",
    country: "Israel / Gaza",
    coords: [34.4, 31.5],
    startYear: 2023,
    endYear: null,
    belligerents: [
      {
        side: "Israel",
        parties: ["State of Israel (IDF)"],
      },
      {
        side: "Palestinian factions",
        parties: [
          "Hamas (Izz ad-Din al-Qassam Brigades)",
          "Palestinian Islamic Jihad",
          "Other Gaza-based factions",
        ],
      },
      {
        side: "Regional involvement",
        parties: [
          "Hezbollah (northern front)",
          "Houthi movement (Red Sea operations)",
          "Iran (direct exchanges in 2024)",
        ],
      },
    ],
    casualties:
      "Roughly 1,200 killed in the October 7 attacks in Israel and 250 taken hostage; Gaza Health Ministry reports tens of thousands of Palestinian dead and overwhelming displacement, with figures contested and revised over the course of the war.",
    summary:
      "On October 7, 2023, Hamas-led militants launched a cross-border attack from Gaza into southern Israel that killed roughly 1,200 people and took some 250 hostages, prompting an Israeli military campaign in Gaza that has produced extensive civilian casualties and destruction. The war has spread to multiple fronts including Lebanon, Yemen, and direct Iran–Israel exchanges, and remains the subject of ongoing international legal proceedings.",
    musicTracks: [
      {
        title: "Charbel",
        artist: "Hanan Ben Ari",
        year: 2017,
        note: "An older Israeli ballad about a fallen comrade that resurged on Israeli airwaves and at memorials following October 7; cited across reporting on the war's home-front soundtrack.",
      },
      {
        title: "Dammi Falastini",
        artist: "Mohammed Assaf",
        year: 2015,
        note: "The Gaza-born Arab Idol winner's signature anthem, in heavy rotation again in Palestinian and diaspora circles during the war.",
        youtubeId: "8BoIPd8Odfs",
      },
    ],
  },

  // ───────────────────────── South / Southeast Asia ─────────────────────────

  {
    id: "indo-pak-1947",
    name: "First Kashmir War",
    aka: ["Indo-Pakistani War of 1947"],
    region: "SouthAsia",
    country: "India / Pakistan",
    coords: [74.0, 33.5],
    startYear: 1947,
    endYear: 1948,
    belligerents: [
      {
        side: "India",
        parties: [
          "Dominion of India",
          "Forces of the Princely State of Jammu and Kashmir (after accession)",
        ],
      },
      {
        side: "Pakistan",
        parties: [
          "Dominion of Pakistan",
          "Tribal lashkars from the North-West Frontier",
        ],
      },
    ],
    casualties:
      "Several thousand killed in the war itself; the Partition that produced it killed an estimated one to two million people and displaced 14 million.",
    summary:
      "Within weeks of the Partition of British India in August 1947, tribal raids backed by Pakistan into the Princely State of Jammu and Kashmir prompted its Hindu maharaja to accede to India, after which Indian troops were airlifted to Srinagar. A year of fighting ended with a U.N.-brokered ceasefire and a Line of Control that, redrawn but never resolved, has shaped every subsequent India–Pakistan conflict.",
    musicTracks: [
      {
        title: "Saare Jahan Se Achha",
        artist: "Allama Iqbal / various",
        note: "An early-twentieth-century Urdu poem by Iqbal, set to music and adopted by the Indian Army as a marching standard; it was already the soundscape of independence-era nationalism on both sides of the border.",
      },
    ],
  },

  {
    id: "indo-pak-1965",
    name: "Indo-Pakistani War of 1965",
    aka: ["Second Kashmir War"],
    region: "SouthAsia",
    country: "India / Pakistan",
    coords: [74.0, 32.5],
    startYear: 1965,
    endYear: 1965,
    belligerents: [
      {
        side: "India",
        parties: ["Republic of India (Indian Army and Air Force)"],
      },
      {
        side: "Pakistan",
        parties: [
          "Islamic Republic of Pakistan",
          "Pakistani-organised infiltrators in Operation Gibraltar",
        ],
      },
    ],
    casualties:
      "Several thousand military dead on each side over a five-week war; ended by the U.S.S.R.-mediated Tashkent Declaration of January 1966.",
    summary:
      "Pakistan's Operation Gibraltar — sending irregular fighters into Indian-administered Kashmir to spark a local uprising — escalated into conventional war along the border and across Punjab in September 1965. Both armies fought to a near-stalemate before a Soviet-brokered ceasefire returned them to pre-war positions.",
    musicTracks: [
      {
        title: "Aye Mere Watan Ke Logon",
        artist: "Lata Mangeshkar",
        year: 1963,
        note: "Written for the post-1962 Sino-Indian War and performed before Prime Minister Nehru, the song was already the patriotic-radio standard of the Indian rotation when 1965 came; it remains tied to the era's wars.",
        youtubeId: "DSJ1MMGi_IQ",
      },
    ],
  },

  {
    id: "bangladesh-liberation",
    name: "Bangladesh Liberation War",
    aka: ["Indo-Pakistani War of 1971"],
    region: "SouthAsia",
    country: "Bangladesh",
    coords: [90.4, 23.7],
    startYear: 1971,
    endYear: 1971,
    belligerents: [
      {
        side: "Bangladesh & India",
        parties: [
          "Provisional Government of Bangladesh",
          "Mukti Bahini",
          "Republic of India (from December 3, 1971)",
        ],
      },
      {
        side: "Pakistan",
        parties: [
          "Islamic Republic of Pakistan",
          "Pakistan Eastern Command",
          "Razakar and other paramilitary auxiliaries",
        ],
      },
    ],
    casualties:
      "Estimates of Bengali deaths range from several hundred thousand to three million during Operation Searchlight and the war that followed; an estimated 200,000 to 400,000 women were subjected to sexual violence and roughly 10 million refugees fled to India.",
    summary:
      "After the Pakistani military's March 1971 crackdown on Bengali-nationalist leadership in East Pakistan, the resulting refugee crisis and Mukti Bahini insurgency drew India into the conflict in December. A two-week war ended with the surrender of Pakistani forces in Dhaka and the establishment of the independent People's Republic of Bangladesh.",
    musicTracks: [
      {
        title: "Bangla Desh",
        artist: "George Harrison",
        year: 1971,
        note: "Written and rush-released in summer 1971 to publicise the refugee crisis; the title song of the cause that produced the Concert for Bangladesh.",
        youtubeId: "FIwCNpmZ10M",
      },
      {
        title: "Bangla Dhun",
        artist: "Ravi Shankar & Ali Akbar Khan",
        year: 1971,
        note: "Opened the August 1971 Concert for Bangladesh at Madison Square Garden, the prototype for every subsequent humanitarian-cause concert.",
        youtubeId: "DVe3OUfIwas",
      },
      {
        title: "Joy Bangla, Banglar Joy",
        artist: "Various",
        year: 1971,
        note: "The slogan-anthem of the liberation movement, recorded by Bangladeshi artists during the war and in heavy rotation on Swadhin Bangla Betar Kendra, the Mukti Bahini's clandestine radio station.",
      },
      {
        title: "Mora Ekti Phul Ke Bachabo Bole Juddho Kori",
        artist: "Apel Mahmud (Swadhin Bangla Betar Kendra)",
        year: 1971,
        note: "Among the most-played original songs broadcast nightly by the Free Bangladesh Radio Centre to fighters and refugees during the nine months of war.",
        youtubeId: "DPK7LRvhUrw",
      },
    ],
  },

  {
    id: "sri-lankan-civil-war",
    name: "Sri Lankan Civil War",
    region: "SouthAsia",
    country: "Sri Lanka",
    coords: [80.5, 8.5],
    startYear: 1983,
    endYear: 2009,
    belligerents: [
      {
        side: "Sri Lankan government",
        parties: [
          "Democratic Socialist Republic of Sri Lanka",
          "Sri Lanka Armed Forces",
          "Indian Peace Keeping Force (1987–1990)",
        ],
      },
      {
        side: "Tamil insurgency",
        parties: [
          "Liberation Tigers of Tamil Eelam (LTTE)",
          "Earlier and rival Tamil militant groups",
        ],
      },
    ],
    casualties:
      "Estimates of total dead range from 80,000 to over 100,000; a U.N. panel concluded that tens of thousands of civilians were killed in the war's final months in 2009.",
    summary:
      "A 26-year armed conflict between the Sri Lankan state and the LTTE, which fought to establish an independent Tamil Eelam in the north and east. The war featured pioneering use of suicide bombing as a tactic, multiple failed ceasefires, an Indian intervention, and a final military offensive in 2009 that ended with the LTTE's destruction. Post-war accountability for civilian deaths remains contested.",
    musicTracks: [
      {
        title: "Paper Planes",
        artist: "M.I.A.",
        year: 2007,
        note: "M.I.A.'s Tamil-British perspective on the war infused her late-2000s work; Paper Planes' breakthrough placed Sri Lanka's conflict in front of an audience that had largely ignored it.",
        youtubeId: "ewRjZoRtu0Y",
      },
      {
        title: "Born Free",
        artist: "M.I.A.",
        year: 2010,
        note: "Released in the immediate aftermath of the war's end, the song and Romain Gavras's video were widely read as a response to the killings of Tamil civilians during the 2009 final offensive.",
        youtubeId: "kEdk8YhieSQ",
      },
    ],
  },

  {
    id: "kashmir-insurgency",
    name: "Kashmir Insurgency",
    region: "SouthAsia",
    country: "India / Pakistan",
    coords: [74.8, 34.1],
    startYear: 1989,
    endYear: null,
    belligerents: [
      {
        side: "Indian state",
        parties: [
          "Republic of India",
          "Indian Army, paramilitary, and Jammu & Kashmir Police",
        ],
      },
      {
        side: "Insurgents",
        parties: [
          "Hizbul Mujahideen",
          "Jaish-e-Mohammed",
          "Lashkar-e-Taiba",
          "Earlier groups: JKLF and others",
        ],
      },
    ],
    casualties:
      "Estimates of total dead since 1989 range from roughly 45,000 to over 100,000, with the broader displacement including the near-total exodus of Kashmiri Pandits from the Valley in 1989–90.",
    summary:
      "Building on disputed elections and longstanding political grievance, an armed insurgency erupted in Indian-administered Jammu and Kashmir from 1989, drawing in Pakistan-backed militant groups and producing decades of counter-insurgency, mass detention, and civilian casualties. The 2019 revocation of Article 370 ended the region's special constitutional status; intermittent violence continues.",
    musicTracks: [
      {
        title: "Bella Ciao (Kashmiri rendition)",
        artist: "Various Kashmiri artists",
        note: "The Italian partisan song has been adapted in Kashmiri and Urdu by local musicians and circulated through diaspora protest channels during the post-2019 period.",
        youtubeId: "ABe4V1DR0jM",
      },
    ],
  },

  {
    id: "huk-rebellion",
    name: "Hukbalahap Rebellion",
    aka: ["Huk Rebellion"],
    region: "SoutheastAsia",
    country: "Philippines",
    coords: [120.6, 15.5],
    startYear: 1946,
    endYear: 1955,
    belligerents: [
      {
        side: "Philippine government",
        parties: [
          "Republic of the Philippines",
          "Philippine Constabulary and Armed Forces",
          "United States (advisors and matériel)",
        ],
      },
      {
        side: "Insurgents",
        parties: [
          "Hukbo ng Bayan Laban sa Hapon (former wartime anti-Japanese guerrillas) reorganised as the Hukbong Mapagpalaya ng Bayan",
          "Communist Party of the Philippines (PKP-1930)",
        ],
      },
    ],
    casualties:
      "Roughly 25,000 to 30,000 killed across the campaign; remembered as one of the early Cold War counter-insurgencies studied by U.S. doctrine writers.",
    summary:
      "Former anti-Japanese guerrillas in central Luzon, denied recognition and grievance redress after liberation, took up arms against the new Philippine Republic in a peasant-led communist insurgency. A counter-insurgency campaign under Defence Secretary Ramon Magsaysay, advised by U.S. officer Edward Lansdale, broke the rebellion by 1954–55 through a mix of military pressure and resettlement programs.",
    musicTracks: [],
  },

  {
    id: "moro-conflict",
    name: "Moro Conflict",
    region: "SoutheastAsia",
    country: "Philippines (Mindanao)",
    coords: [124.0, 7.5],
    startYear: 1969,
    endYear: 2014,
    belligerents: [
      {
        side: "Philippine government",
        parties: [
          "Republic of the Philippines",
          "Armed Forces of the Philippines",
        ],
      },
      {
        side: "Moro insurgent groups",
        parties: [
          "Moro National Liberation Front (MNLF)",
          "Moro Islamic Liberation Front (MILF)",
          "Abu Sayyaf Group",
          "Bangsamoro Islamic Freedom Fighters",
        ],
      },
    ],
    casualties:
      "Roughly 120,000 dead across decades of fighting in Mindanao, Sulu, and Basilan, with several million displaced.",
    summary:
      "A long-running armed struggle in the Muslim-majority south of the Philippines for greater autonomy, sovereignty, or independence under various Moro insurgent groups, beginning in earnest in 1969 with the founding of the MNLF. Successive autonomy arrangements culminated in the 2014 Comprehensive Agreement on the Bangsamoro between the government and the MILF, after which low-level violence continued.",
    musicTracks: [],
  },

  {
    id: "npa-insurgency",
    name: "New People's Army Insurgency",
    aka: ["CPP–NPA–NDF rebellion"],
    region: "SoutheastAsia",
    country: "Philippines",
    coords: [122.5, 12.5],
    startYear: 1969,
    endYear: null,
    belligerents: [
      {
        side: "Philippine government",
        parties: [
          "Republic of the Philippines",
          "Armed Forces of the Philippines and Philippine National Police",
        ],
      },
      {
        side: "Communist movement",
        parties: [
          "Communist Party of the Philippines",
          "New People's Army",
          "National Democratic Front",
        ],
      },
    ],
    casualties:
      "Roughly 40,000 dead over more than five decades of low-intensity rural insurgency, peaking in the late Marcos period.",
    summary:
      "A Maoist rural insurgency launched in 1969 by the re-founded Communist Party of the Philippines and its armed wing, the New People's Army, sustained through the Marcos dictatorship and surviving into the present at a much-diminished scale. Decades of intermittent peace talks between the government and the National Democratic Front have not produced a settlement.",
    musicTracks: [
      {
        title: "Bayan Ko",
        artist: "Freddie Aguilar",
        year: 1978,
        note: "Aguilar's recording of the 1928 patriotic song became the anthem of the anti-Marcos movement and the 1986 People Power Revolution; carried into both insurgent and democratic-opposition spheres.",
        youtubeId: "7sIJUdrp9vs",
      },
    ],
  },

  {
    id: "east-timor-occupation",
    name: "East Timorese Independence War",
    aka: ["Indonesian occupation of East Timor"],
    region: "SoutheastAsia",
    country: "East Timor",
    coords: [125.6, -8.6],
    startYear: 1975,
    endYear: 1999,
    belligerents: [
      {
        side: "Indonesia",
        parties: [
          "Republic of Indonesia (under Suharto's New Order)",
          "Indonesian Armed Forces and integrationist militias",
        ],
      },
      {
        side: "East Timorese resistance",
        parties: [
          "FRETILIN",
          "Falintil (armed wing)",
          "Diplomatic front led in part by José Ramos-Horta",
        ],
      },
    ],
    casualties:
      "A U.N.-backed Commission for Reception, Truth and Reconciliation estimated above 100,000 conflict-related deaths in a pre-war population of roughly 700,000.",
    summary:
      "Indonesia invaded the former Portuguese colony of East Timor in December 1975, launching a 24-year occupation marked by famine, massacres, and a sustained guerrilla resistance under Falintil. International pressure built after the 1991 Santa Cruz massacre; a 1999 U.N.-supervised referendum produced a vote for independence and a final wave of pro-Indonesian militia violence before INTERFET intervention.",
    musicTracks: [
      {
        title: "Foho Ramelau",
        artist: "Various Timorese artists",
        note: "The hymn to Mount Ramelau, the highest peak in Timor, was the de facto anthem of the resistance years and is often cited in documentaries about the occupation.",
        youtubeId: "b-j3D4LDV9k",
      },
    ],
  },

  // ───────────────────────── Sub-Saharan Africa (II) ─────────────────────────

  {
    id: "biafra-war",
    name: "Nigerian Civil War",
    aka: ["Biafran War"],
    region: "SubSaharanAfrica",
    country: "Nigeria",
    coords: [7.5, 6.5],
    startYear: 1967,
    endYear: 1970,
    belligerents: [
      {
        side: "Federal Nigeria",
        parties: [
          "Federal Military Government of Nigeria",
          "Soviet Union and United Kingdom (matériel)",
          "Egypt (pilots)",
        ],
      },
      {
        side: "Biafra",
        parties: [
          "Republic of Biafra",
          "France, Israel, Portugal, and others (limited covert support)",
          "Joint Church Aid (humanitarian airlift)",
        ],
      },
    ],
    casualties:
      "Estimates commonly cite 1 to 3 million dead, the great majority Igbo civilians killed by famine during the federal blockade of Biafra.",
    summary:
      "The secession of the Eastern Region as the Republic of Biafra in May 1967 led to a thirty-month war ended by the federal government's blockade-and-encircle strategy, which produced one of the twentieth century's first televised famines. Biafran surrender in January 1970 reincorporated the region under a 'no victor, no vanquished' policy. The war catalysed the modern humanitarian-NGO movement, including the founding of Médecins Sans Frontières.",
    musicTracks: [
      {
        title: "Zombie",
        artist: "Fela Kuti & Africa '70",
        year: 1976,
        note: "Released after the war but emerging directly from the political milieu it created; Fela's takedown of the Nigerian military became the canonical critique of the post-Biafra military state.",
        youtubeId: "-3j0nugz1Pw",
      },
      {
        title: "Bach: Jesu, Joy of Man's Desiring (BBC Biafra reports)",
        artist: "Various",
        note: "The BBC's 1968–69 Biafra famine reports — Frederick Forsyth's broadcasts and the Don McCullin photographs that ran alongside them — fixed sound and image for a generation of Western viewers.",
      },
    ],
  },

  {
    id: "rwandan-genocide",
    name: "Rwandan Genocide",
    region: "SubSaharanAfrica",
    country: "Rwanda",
    coords: [30.0, -1.95],
    startYear: 1994,
    endYear: 1994,
    belligerents: [
      {
        side: "Hutu Power apparatus",
        parties: [
          "Rwandan government and Forces armées rwandaises",
          "Interahamwe and Impuzamugambi militias",
          "Radio Télévision Libre des Mille Collines",
        ],
      },
      {
        side: "RPF and targeted",
        parties: [
          "Rwandan Patriotic Front (Tutsi-led)",
          "Tutsi civilians and moderate Hutu",
        ],
      },
    ],
    casualties:
      "Roughly 800,000 people — predominantly Tutsi, alongside moderate Hutu — killed in approximately 100 days; the U.N. force in the country was unable or unauthorised to halt it.",
    summary:
      "After the April 6, 1994 shoot-down of President Habyarimana's plane, Hutu Power forces and militias launched a planned campaign of extermination against the Tutsi minority and political moderates, killing some 800,000 people in roughly three months. The Rwandan Patriotic Front's military advance halted the genocide in July; its aftermath — including the mass exodus to Zaire — directly precipitated the First Congo War.",
    musicTracks: [
      {
        title: "Million Voices",
        artist: "Wyclef Jean",
        year: 2004,
        note: "Written for Terry George's Hotel Rwanda; Wyclef's chorus became the most-cited piece of music attached to the post-genocide international memory of Rwanda.",
        youtubeId: "GwMoU1cYYYI",
      },
      {
        title: "Mama Ararira",
        artist: "Cécile Kayirebwa",
        note: "The Rwandan singer's elegiac standards from her 1990s recordings have been used across documentaries about the genocide and its aftermath.",
      },
      {
        title: "Parce qu'on vient de loin",
        artist: "Corneille",
        year: 2002,
        note: "The Rwandan-Canadian singer survived the killings of his family in 1994; his debut album made the genocide and its aftermath a personal Francophone-pop subject.",
        youtubeId: "9KmZinR1rdg",
      },
    ],
  },

  {
    id: "first-congo-war",
    name: "First Congo War",
    region: "SubSaharanAfrica",
    country: "Zaire / DRC",
    coords: [25.0, -4.0],
    startYear: 1996,
    endYear: 1997,
    belligerents: [
      {
        side: "AFDL coalition",
        parties: [
          "Alliance of Democratic Forces for the Liberation of Congo–Zaire (Laurent-Désiré Kabila)",
          "Rwanda",
          "Uganda",
          "Angola",
          "Burundi",
        ],
      },
      {
        side: "Mobutu government",
        parties: [
          "Republic of Zaire under Mobutu Sese Seko",
          "Forces armées zaïroises",
          "Ex-FAR and Interahamwe (Rwandan Hutu Power forces in exile)",
        ],
      },
    ],
    casualties:
      "Tens of thousands of military and civilian deaths; the war produced extensive massacres of Hutu refugees in eastern Zaire and ended the 32-year Mobutu regime.",
    summary:
      "Triggered by Rwandan and Ugandan intervention in eastern Zaire to dismantle the Hutu Power forces sheltering in refugee camps, the war became a march on Kinshasa by Laurent-Désiré Kabila's AFDL. Mobutu Sese Seko fled in May 1997 and Kabila renamed the country the Democratic Republic of the Congo. The unresolved tensions between Kabila and his Rwandan and Ugandan backers seeded the Second Congo War the next year.",
    musicTracks: [],
  },

  {
    id: "second-congo-war",
    name: "Second Congo War",
    aka: ["Africa's World War", "Great War of Africa"],
    region: "SubSaharanAfrica",
    country: "DRC",
    coords: [27.5, -1.5],
    startYear: 1998,
    endYear: 2003,
    belligerents: [
      {
        side: "DRC government coalition",
        parties: [
          "Democratic Republic of the Congo (Kabila government)",
          "Angola",
          "Zimbabwe",
          "Namibia",
          "Chad and Sudan (intermittent)",
        ],
      },
      {
        side: "Rebellion & backers",
        parties: [
          "Rally for Congolese Democracy (RCD) factions",
          "Movement for the Liberation of the Congo (MLC)",
          "Rwanda",
          "Uganda",
          "Burundi",
        ],
      },
    ],
    casualties:
      "Widely cited estimates of total excess deaths reach into the millions, the great majority from war-induced disease and malnutrition; conflict in eastern DRC has continued in lower-intensity form ever since.",
    summary:
      "The largest interstate war in modern African history, drawing in nine African states and producing a humanitarian catastrophe centred on the eastern Congo. Triggered when Rwanda and Uganda turned against Laurent-Désiré Kabila and backed proxy rebellions, the war was formally ended by the 2002 Pretoria Accord and 2003 transitional government, though fighting in the Kivus continues.",
    musicTracks: [
      {
        title: "Indépendance Cha Cha",
        artist: "Le Grand Kallé et l'African Jazz",
        year: 1960,
        note: "Repeatedly used in documentary treatments of the wars to bookend the arc from the independence-era promise to the chaos of the late-90s collapse.",
        youtubeId: "fZx32k6sRuQ",
      },
    ],
  },

  {
    id: "somali-civil-war",
    name: "Somali Civil War",
    region: "SubSaharanAfrica",
    country: "Somalia",
    coords: [45.3, 4.5],
    startYear: 1991,
    endYear: null,
    belligerents: [
      {
        side: "Successive transitional governments",
        parties: [
          "Transitional and Federal Government of Somalia",
          "African Union Mission in Somalia (AMISOM/ATMIS)",
          "United States (UNITAF/UNOSOM, later strikes)",
          "Ethiopia and Kenya (interventions)",
        ],
      },
      {
        side: "Armed factions and Islamist groups",
        parties: [
          "Clan-based faction militias (Aidid, Mahdi, others)",
          "Islamic Courts Union",
          "Al-Shabaab",
        ],
      },
    ],
    casualties:
      "Estimates of total war-related deaths range above 500,000, including the early-1990s famine and the 2011 famine in al-Shabaab-held areas.",
    summary:
      "The 1991 collapse of the Siad Barre regime began a long civil war in Somalia featuring clan-faction fighting, U.N. and U.S. interventions in the early 1990s, the rise and fall of the Islamic Courts Union, and a sustained insurgency by al-Shabaab against an A.U.-backed federal government. State authority outside Mogadishu remains contested; the autonomous Somaliland operates as a de facto independent state.",
    musicTracks: [
      {
        title: "Gortoz a Ran (J'Attends)",
        artist: "Denez Prigent & Lisa Gerrard",
        year: 2000,
        note: "Used in the closing of Ridley Scott's Black Hawk Down (2001), the Breton-language lament became inseparable from the cinematic treatment of the 1993 Battle of Mogadishu.",
        youtubeId: "d9Rc0-vida4",
      },
      {
        title: "Of the Birds Falls",
        artist: "Hans Zimmer (Black Hawk Down OST)",
        year: 2001,
        note: "Zimmer's score for Black Hawk Down set the late-90s grunt-cinema sound for U.N. operations in collapsed states; widely sampled in documentaries on Somalia.",
      },
      {
        title: "Soobax",
        artist: "K'naan",
        year: 2005,
        note: "The Somali-Canadian rapper's breakout single — addressed to the warlords of the early-90s collapse — translated the war's experience into diaspora hip-hop.",
        youtubeId: "eYuoYQuzSko",
      },
    ],
  },

  {
    id: "second-sudanese-civil-war",
    name: "Second Sudanese Civil War",
    region: "SubSaharanAfrica",
    country: "Sudan",
    coords: [30.0, 8.0],
    startYear: 1983,
    endYear: 2005,
    belligerents: [
      {
        side: "Government of Sudan",
        parties: [
          "Republic of Sudan (Khartoum)",
          "Sudanese Armed Forces and Popular Defence Forces",
          "Allied southern militias including the Murahaleen",
        ],
      },
      {
        side: "Southern movement",
        parties: [
          "Sudan People's Liberation Army (SPLA)",
          "Sudan People's Liberation Movement (SPLM)",
        ],
      },
    ],
    casualties:
      "Roughly 2 million dead and 4 million displaced over twenty-two years, the majority from war-induced famine and disease in the south.",
    summary:
      "A twenty-two-year war between the Khartoum government and the SPLM/A in southern Sudan, fought along the country's religious, ethnic, and resource fault lines and produced repeated famines. The 2005 Comprehensive Peace Agreement established a six-year interim period and a referendum that led to South Sudan's independence in 2011.",
    musicTracks: [
      {
        title: "War Child",
        artist: "Emmanuel Jal",
        year: 2008,
        note: "The Sudanese rapper's autobiographical track — Jal was conscripted as a child by the SPLA — became the international face of the war's lost-children generation.",
        youtubeId: "VT-0NG5_fhw",
      },
    ],
  },

  {
    id: "war-in-darfur",
    name: "War in Darfur",
    region: "SubSaharanAfrica",
    country: "Sudan",
    coords: [24.0, 13.0],
    startYear: 2003,
    endYear: null,
    belligerents: [
      {
        side: "Government & allied militias",
        parties: [
          "Government of Sudan",
          "Janjaweed (later formalised as the Rapid Support Forces)",
        ],
      },
      {
        side: "Darfur rebel movements",
        parties: [
          "Sudan Liberation Movement/Army (SLM/A)",
          "Justice and Equality Movement (JEM)",
        ],
      },
    ],
    casualties:
      "Estimates of total deaths range from roughly 200,000 to over 400,000, with millions displaced; the International Criminal Court issued an arrest warrant for President Omar al-Bashir on charges including genocide.",
    summary:
      "An armed rebellion by Darfuri groups against Khartoum's neglect of the western region, met by a counter-insurgency strategy that armed Arab militias known as the Janjaweed and produced years of mass killing and displacement of non-Arab Darfuris. The conflict's central role in the rise of the Rapid Support Forces fed directly into the 2023 Sudanese civil war between the army and the RSF.",
    musicTracks: [
      {
        title: "Living Darfur",
        artist: "Mattafix",
        year: 2007,
        note: "Written explicitly about the genocide and promoted alongside footage from the region, the single became the signature anthem of the Save Darfur and Crisis in Darfur awareness campaigns.",
        youtubeId: "r1NkElUVLRg",
      },
      {
        title: "Mursal",
        artist: "Mohammed Wardi",
        note: "Wardi, the most revered voice of twentieth-century Sudanese music and a repeated political exile, is the diaspora's enduring reference point for a country shaped by successive wars, recurring across Sudanese memorial and documentary culture.",
        youtubeId: "0Rgb_6wgRLw",
      },
    ],
  },

  {
    id: "south-sudan-civil-war",
    name: "South Sudanese Civil War",
    region: "SubSaharanAfrica",
    country: "South Sudan",
    coords: [31.6, 4.8],
    startYear: 2013,
    endYear: 2020,
    belligerents: [
      {
        side: "Government (SPLM-IG)",
        parties: [
          "Republic of South Sudan under President Salva Kiir",
          "Sudan People's Liberation Army (SPLA / SSPDF)",
          "Uganda People's Defence Force (intermittent)",
        ],
      },
      {
        side: "Opposition (SPLM-IO and others)",
        parties: [
          "SPLM-In Opposition under Riek Machar",
          "Various breakaway factions and ethnic militias",
        ],
      },
    ],
    casualties:
      "An academic study published in 2018 estimated nearly 400,000 excess deaths over the war's first five years; some 4 million displaced.",
    summary:
      "Two years after independence from Sudan, a political dispute between President Salva Kiir and Vice President Riek Machar escalated into a civil war along largely Dinka–Nuer ethnic lines, marked by mass civilian killings and famine. A 2018 revitalised peace agreement and 2020 unity government formally ended the war, though localised violence continues.",
    musicTracks: [
      {
        title: "We Want Peace",
        artist: "Emmanuel Jal",
        year: 2010,
        note: "The all-star campaign single by Jal, a South Sudanese former child soldier, was written around the independence referendum and carried forward as the diaspora's recurring plea once the new state collapsed into civil war.",
        youtubeId: "H_sV07DbJ9U",
      },
      {
        title: "Ti-Chuong",
        artist: "Emmanuel Jal & Nyaruach",
        year: 2018,
        note: "The South Sudanese siblings, separated as child refugees, reunited for the album Naath, whose songs confront the ethnic violence and displacement of the 2013–2020 war.",
        youtubeId: "1S59p_bcSoE",
      },
    ],
  },

  {
    id: "boko-haram-insurgency",
    name: "Boko Haram Insurgency",
    region: "SubSaharanAfrica",
    country: "Nigeria",
    coords: [13.2, 11.8],
    startYear: 2009,
    endYear: null,
    belligerents: [
      {
        side: "Multinational government coalition",
        parties: [
          "Federal Republic of Nigeria",
          "Multinational Joint Task Force (Cameroon, Chad, Niger, Benin)",
          "Civilian Joint Task Force",
        ],
      },
      {
        side: "Jihadist insurgency",
        parties: [
          "Boko Haram (Jama'atu Ahlis Sunna Lidda'awati Wal-Jihad)",
          "Islamic State West Africa Province (ISWAP, post-2016 splinter)",
        ],
      },
    ],
    casualties:
      "Estimates of total dead since 2009 exceed 35,000, with over two million displaced across the Lake Chad basin.",
    summary:
      "An Islamist insurgency that grew out of a Borno State preaching movement and turned fully armed after the 2009 killing of its founder Mohammed Yusuf. The 2014 abduction of nearly 300 schoolgirls from Chibok generated the global #BringBackOurGirls campaign. A 2016 split produced the Islamic State West Africa Province; both groups remain active.",
    musicTracks: [],
  },

  {
    id: "tigray-war",
    name: "Tigray War",
    region: "SubSaharanAfrica",
    country: "Ethiopia",
    coords: [38.6, 14.0],
    startYear: 2020,
    endYear: 2022,
    belligerents: [
      {
        side: "Federal coalition",
        parties: [
          "Federal Democratic Republic of Ethiopia",
          "Ethiopian National Defence Force",
          "Eritrea (Eritrean Defence Forces)",
          "Amhara Regional Forces and Fano militias",
        ],
      },
      {
        side: "Tigray",
        parties: [
          "Tigray People's Liberation Front (TPLF)",
          "Tigray Defence Forces",
        ],
      },
    ],
    casualties:
      "Independent estimates place total dead in the hundreds of thousands, including from war-induced famine; millions displaced and a near-total communications blockade for most of the war.",
    summary:
      "A two-year war between Ethiopia's federal government, allied with Eritrean forces and Amhara militias, and the Tigray People's Liberation Front, fought across northern Ethiopia and producing mass civilian casualties, sexual violence, and famine conditions in Tigray under blockade. The November 2022 Pretoria Agreement ended large-scale combat.",
    musicTracks: [
      {
        title: "Tigray Hawey",
        artist: "Solomon Bayre",
        note: "The Tigrayan singer's wartime ballads circulated through diaspora YouTube channels during the communications blackout and became markers of Tigrayan identity during the conflict.",
      },
    ],
  },

  {
    id: "sahel-insurgency",
    name: "Sahel Insurgencies",
    aka: ["Mali War", "War in the Sahel"],
    region: "SubSaharanAfrica",
    country: "Mali / Burkina Faso / Niger",
    coords: [-3.0, 16.0],
    startYear: 2012,
    endYear: null,
    belligerents: [
      {
        side: "Sahel states & external partners",
        parties: [
          "Republic of Mali, Burkina Faso, Niger (post-coup juntas in each)",
          "Group of Five Sahel (G5 Sahel)",
          "France (Operation Serval, then Barkhane, ended 2022)",
          "MINUSMA U.N. mission (until 2023)",
          "Russian-aligned Wagner Group / Africa Corps (in Mali and Burkina Faso)",
        ],
      },
      {
        side: "Insurgent groups",
        parties: [
          "Jama'at Nasr al-Islam wal Muslimin (JNIM, al-Qaeda affiliate)",
          "Islamic State Sahel Province",
          "Tuareg movements (MNLA, HCUA — earlier phase)",
        ],
      },
    ],
    casualties:
      "Tens of thousands killed across the three countries since 2012, with millions displaced and recurring food crises across the region.",
    summary:
      "A regional jihadist insurgency that grew out of the 2012 Tuareg rebellion in northern Mali and the collapse of Libya, expanding through Mali, Burkina Faso, and Niger and surviving successive French, U.N., and now Russian-aligned interventions. A wave of military coups in all three states between 2020 and 2023 has reordered external partnerships without ending the insurgency.",
    musicTracks: [
      {
        title: "Tenere Taqhim Tossam",
        artist: "Tinariwen",
        year: 2011,
        note: "The Tuareg desert-blues group, themselves former rebels, recorded across the period of the rebellion and jihadist takeover; their catalogue is the cinematic shorthand for the Sahel war zone.",
        youtubeId: "BOV5jEa-vwc",
      },
      {
        title: "Soubour",
        artist: "Songhoy Blues",
        year: 2015,
        note: "The band formed in Bamako after its members were displaced by the jihadist ban on music in Timbuktu; the documentary They Will Have to Kill Us First (2015) made them the international face of musical resistance to the Sahel insurgents.",
        youtubeId: "r42A67TqBu0",
      },
      {
        title: "Goumou",
        artist: "Khaira Arby",
        note: "Timbuktu's most prominent vocalist before the 2012 takeover, forced into exile in Bamako; her wartime recordings became symbols of the music the jihadists tried to silence.",
        youtubeId: "Tup9pZ1s8zQ",
      },
    ],
  },

  // ───────────────────────── Latin America (II) ─────────────────────────

  {
    id: "colombian-conflict",
    name: "Colombian Armed Conflict",
    aka: ["FARC conflict"],
    region: "LatinAmerica",
    country: "Colombia",
    coords: [-74.0, 4.5],
    startYear: 1964,
    endYear: 2016,
    belligerents: [
      {
        side: "Colombian government",
        parties: [
          "Republic of Colombia",
          "Colombian Armed Forces",
          "United States (Plan Colombia)",
          "Right-wing paramilitaries (AUC, in tacit alignment for parts of the period)",
        ],
      },
      {
        side: "Guerrilla movements",
        parties: [
          "Revolutionary Armed Forces of Colombia (FARC-EP)",
          "National Liberation Army (ELN)",
          "M-19 (1970s–80s)",
          "EPL and others",
        ],
      },
    ],
    casualties:
      "Colombia's Truth Commission documented around 450,000 conflict deaths and over 8 million victims, including millions displaced; the great majority of victims were civilians.",
    summary:
      "A six-decade conflict involving Marxist guerrilla movements (principally the FARC and ELN), right-wing paramilitaries, the Colombian state, and a parallel narcotics economy that funded all sides at different points. The 2016 Havana Accord between the government and the FARC formally demobilised that group; the ELN and various dissident factions remain active.",
    musicTracks: [
      {
        title: "La Tierra del Olvido",
        artist: "Carlos Vives",
        year: 1995,
        note: "The Colombian singer's mid-90s vallenato-rock album made the costeño countryside a symbol of the country's threatened civilian heartland during the war's worst years.",
      },
      {
        title: "A Dios le Pido",
        artist: "Juanes",
        year: 2002,
        note: "Released at the peak of paramilitary and guerrilla violence under the Uribe government and widely read as a national-mood prayer; Juanes's later Paz sin Fronteras concerts grew from the same impulse.",
      },
      {
        title: "Pa' Despertar",
        artist: "ChocQuibTown",
        note: "The Pacific-coast Afro-Colombian collective have repeatedly addressed the displacement of their region by the war in their lyrics and visual work.",
      },
    ],
  },

  {
    id: "peru-shining-path",
    name: "Peruvian Internal Conflict",
    aka: ["Shining Path insurgency"],
    region: "LatinAmerica",
    country: "Peru",
    coords: [-74.5, -13.2],
    startYear: 1980,
    endYear: 2000,
    belligerents: [
      {
        side: "Peruvian state",
        parties: [
          "Republic of Peru",
          "Peruvian Armed Forces and National Police",
          "Civilian self-defence patrols (rondas campesinas)",
        ],
      },
      {
        side: "Insurgents",
        parties: [
          "Shining Path (Sendero Luminoso)",
          "Túpac Amaru Revolutionary Movement (MRTA)",
        ],
      },
    ],
    casualties:
      "Peru's Truth and Reconciliation Commission estimated around 70,000 dead, with the responsibility split between Shining Path and state forces and the great majority of victims rural Quechua-speaking civilians.",
    summary:
      "A two-decade conflict centred in the Peruvian Andes, in which the Maoist Shining Path waged an unusually doctrinaire and brutal war against the Peruvian state, met by counter-insurgency campaigns that themselves produced extensive civilian casualties. The 1992 capture of Shining Path leader Abimael Guzmán effectively broke the movement; Alberto Fujimori's authoritarian methods later led to his own prosecution.",
    musicTracks: [
      {
        title: "Adiós Pueblo de Ayacucho",
        artist: "Traditional / various Peruvian artists",
        note: "The Quechua-Spanish huayno from the Ayacucho region — the war's epicentre — became a memorial standard at testimonial events organised around the Truth Commission.",
      },
    ],
  },

  {
    id: "argentina-dirty-war",
    name: "Argentina Dirty War",
    aka: ["Proceso de Reorganización Nacional"],
    region: "LatinAmerica",
    country: "Argentina",
    coords: [-58.4, -34.6],
    startYear: 1976,
    endYear: 1983,
    belligerents: [
      {
        side: "Military junta",
        parties: [
          "Argentine Armed Forces under successive juntas",
          "Federal Police and intelligence services (SIDE, Triple A precursor)",
          "United States (Condor-era coordination)",
        ],
      },
      {
        side: "Targeted",
        parties: [
          "Montoneros and ERP guerrillas (early phase)",
          "Trade unionists, students, journalists, lawyers, and clergy",
          "Mothers and Grandmothers of the Plaza de Mayo (organised response)",
        ],
      },
    ],
    casualties:
      "Around 30,000 disappeared by official human-rights accounting; an estimated 500 children of detained women were taken from their mothers and adopted by regime families.",
    summary:
      "A military dictatorship that took power in March 1976 and conducted a systematic campaign of abduction, torture, and disappearance against suspected leftists and a wider universe of perceived dissidents. The regime's collapse after the 1982 Falklands defeat opened the path to civilian rule and to landmark human-rights trials in the decades since.",
    musicTracks: [
      {
        title: "Sólo le Pido a Dios",
        artist: "León Gieco",
        year: 1978,
        note: "Written by Gieco and quickly adopted by the Mothers of the Plaza de Mayo and the human-rights movement; later re-recorded by Mercedes Sosa and used at every commemoration of the disappeared.",
      },
      {
        title: "Los Dinosaurios",
        artist: "Charly García",
        year: 1983,
        note: "Released in the dictatorship's final months, the song's lyric — 'los amigos del barrio pueden desaparecer' — made disappearance directly singable; an anthem of the immediate post-junta moment.",
      },
      {
        title: "They Dance Alone",
        artist: "Sting",
        year: 1987,
        note: "Although written specifically about Pinochet's Chile, Sting's song was widely embraced by the Argentine human-rights movement and the Madres de Plaza de Mayo as their international cousin.",
      },
      {
        title: "Inconsciente colectivo",
        artist: "Charly García",
        year: 1982,
        note: "Released in the dictatorship's twilight; its line 'mama la libertad' became a chant at the post-junta political openings and is associated with the era's reconstruction.",
      },
    ],
  },

  {
    id: "falklands-war",
    name: "Falklands War",
    aka: ["Guerra de las Malvinas"],
    region: "LatinAmerica",
    country: "Falkland Islands / Malvinas",
    coords: [-59.5, -51.7],
    startYear: 1982,
    endYear: 1982,
    belligerents: [
      {
        side: "United Kingdom",
        parties: [
          "United Kingdom (Royal Navy, Royal Marines, Army)",
          "Government of the Falkland Islands",
        ],
      },
      {
        side: "Argentina",
        parties: ["Republic of Argentina under the military junta"],
      },
    ],
    casualties:
      "Roughly 650 Argentine and 255 British military dead in a 74-day war; three Falklands civilians killed.",
    summary:
      "Argentina's military junta seized the Falkland Islands in April 1982, prompting a British naval task force to retake them in a ten-week campaign that included the contested sinking of the cruiser ARA General Belgrano. The defeat hastened the junta's collapse in Buenos Aires and produced a domestic political surge for Margaret Thatcher in London.",
    musicTracks: [
      {
        title: "Shipbuilding",
        artist: "Robert Wyatt (composed by Elvis Costello & Clive Langer)",
        year: 1982,
        note: "Released in the war's immediate aftermath, Wyatt's recording became the defining British anti-war response — the workers building the warships are also the ones losing their sons on them.",
      },
      {
        title: "The Final Cut",
        artist: "Pink Floyd",
        year: 1983,
        note: "Roger Waters wrote the album as a direct response to the war and dedicated it to his father, killed in WWII; The Final Cut is the keystone Falklands record on the British side.",
      },
      {
        title: "How Does It Feel to Be the Mother of 1,000 Dead?",
        artist: "Crass",
        year: 1982,
        note: "An anarchist-punk broadside against Thatcher released during the war's casualty count; banned from BBC airplay and the subject of parliamentary attempts at obscenity prosecution.",
      },
      {
        title: "No Bombardeen Buenos Aires",
        artist: "Charly García",
        year: 1982,
        note: "García's wartime track imagined a British air raid on Buenos Aires; performed in Argentina during the war and read as a coded critique of the junta as much as of the British.",
      },
    ],
  },

  {
    id: "mexican-drug-war",
    name: "Mexican Drug War",
    region: "LatinAmerica",
    country: "Mexico",
    coords: [-102.5, 23.5],
    startYear: 2006,
    endYear: null,
    belligerents: [
      {
        side: "Mexican state",
        parties: [
          "United Mexican States",
          "Mexican Armed Forces, Marina, and National Guard",
          "United States (Mérida Initiative cooperation)",
        ],
      },
      {
        side: "Cartels",
        parties: [
          "Sinaloa Cartel",
          "Cartel Jalisco Nueva Generación",
          "Los Zetas (decline)",
          "Gulf, Juárez, La Familia, Caballeros Templarios, others",
        ],
      },
    ],
    casualties:
      "Mexican government and academic estimates place total homicides since 2006 above 400,000, with over 100,000 disappeared; the figures continue to climb.",
    summary:
      "Beginning with President Felipe Calderón's December 2006 deployment of the army against drug-trafficking organisations, Mexico's so-called drug war has been a state-versus-cartels and cartels-versus-cartels conflict that has saturated entire regions. It has produced both the world's largest disappeared-persons crisis outside an active war zone and the global narcocorrido pop genre.",
    musicTracks: [
      {
        title: "La Granja",
        artist: "Los Tigres del Norte",
        year: 2009,
        note: "An allegorical norteño-corrido about the war's ravages on Mexican society; its video was effectively banned from broadcast in Mexico, marking the band's confrontation with the conflict.",
      },
      {
        title: "El Niño Sicario",
        artist: "El Komander",
        note: "A representative narcocorrido from the Movimiento Alterado wave that emerged with the war and turned the conflict's iconography into a global Spanish-language pop subculture.",
      },
      {
        title: "Cartel Land (theme)",
        artist: "H. Scott Salinas",
        year: 2015,
        note: "Salinas's score for Matthew Heineman's documentary Cartel Land became the cinematic shorthand for the autodefensas era of the war.",
      },
    ],
  },

  // ─────────────────────── Europe / post-Soviet ───────────────────────

  {
    id: "greek-civil-war",
    name: "Greek Civil War",
    region: "Europe",
    country: "Greece",
    coords: [22.0, 39.5],
    startYear: 1946,
    endYear: 1949,
    belligerents: [
      {
        side: "Government",
        parties: [
          "Kingdom of Greece",
          "Hellenic Army and Gendarmerie",
          "United Kingdom (early)",
          "United States (from 1947, under the Truman Doctrine)",
        ],
      },
      {
        side: "Communist movement",
        parties: [
          "Democratic Army of Greece (DSE)",
          "Communist Party of Greece (KKE)",
          "Yugoslavia, Albania, Bulgaria (rear support, until the Tito–Stalin split)",
        ],
      },
    ],
    casualties:
      "Roughly 50,000 to 100,000 dead and over half a million displaced; tens of thousands of children were evacuated from communist-held areas in the contested paidomazoma program.",
    summary:
      "A three-year civil war between the U.S.- and U.K.-backed Greek government and the communist-led Democratic Army, fought largely in the mountains of northern Greece. The conflict prompted the Truman Doctrine and is often treated as the first hot war of the Cold War. The 1949 Tito–Stalin split closed the rebels' rear bases and forced their defeat.",
    musicTracks: [
      {
        title: "Tou Mikrou Vorria",
        artist: "Mikis Theodorakis",
        note: "Theodorakis was interned during and after the war for his political activity; his subsequent songs became the standard musical memory of the period and of the long political aftershock that followed.",
      },
      {
        title: "Z (theme)",
        artist: "Mikis Theodorakis",
        year: 1969,
        note: "Composed for Costa-Gavras's Z, a film about the post–civil war assassination of leftist deputy Lambrakis; the score has functioned ever since as the global signifier of the war's political aftermath.",
      },
    ],
  },

  {
    id: "chinese-civil-war-tail",
    name: "Chinese Civil War (post-1945 phase)",
    region: "EastAsia",
    country: "China",
    coords: [113.0, 35.0],
    startYear: 1945,
    endYear: 1949,
    belligerents: [
      {
        side: "Republic of China",
        parties: [
          "Nationalist government (Kuomintang)",
          "National Revolutionary Army",
          "United States (matériel)",
        ],
      },
      {
        side: "Chinese Communist Party",
        parties: [
          "Communist Party of China",
          "People's Liberation Army",
          "Soviet Union (matériel and Manchurian transfers)",
        ],
      },
    ],
    casualties:
      "Estimates of total deaths in the post-1945 phase commonly run between 2 and 6 million; the war ended with the Communist proclamation of the People's Republic on October 1, 1949 and the Nationalist retreat to Taiwan.",
    summary:
      "Resumed full-scale civil war between the Nationalists and Communists from 1946 ended with a decisive Communist victory in 1949 and the establishment of the People's Republic of China on the mainland and the Republic of China on Taiwan. The unresolved cross-Strait status remains the principal legacy.",
    musicTracks: [
      {
        title: "March of the Volunteers",
        artist: "Nie Er & Tian Han",
        year: 1935,
        note: "Originally a song of anti-Japanese resistance, adopted as the national anthem of the People's Republic at its founding in 1949 — the bookend of the Communist victory.",
      },
    ],
  },

  {
    id: "taiwan-strait-crises",
    name: "Taiwan Strait Crises",
    region: "EastAsia",
    country: "Taiwan / China",
    coords: [120.5, 23.7],
    startYear: 1954,
    endYear: 1996,
    belligerents: [
      {
        side: "Republic of China & U.S.",
        parties: [
          "Republic of China (Taiwan)",
          "United States (Mutual Defence Treaty 1954–1979; Taiwan Relations Act thereafter)",
        ],
      },
      {
        side: "People's Republic of China",
        parties: ["People's Republic of China"],
      },
    ],
    casualties:
      "Limited direct combat casualties across the three crises (1954–55, 1958, 1995–96); the ongoing political stalemate has shaped East Asian security ever since.",
    summary:
      "Three Cold War–era and one post–Cold War standoff between the People's Republic and the Republic of China over the Taiwan Strait and offshore islands, each drawing in U.S. carrier deployments and shaping the texture of the cross-Strait relationship. The 1995–96 crisis followed President Lee Teng-hui's visit to the United States and PRC missile tests near Taiwanese ports.",
    musicTracks: [],
  },

  {
    id: "hungarian-revolution-1956",
    name: "Hungarian Revolution of 1956",
    region: "Europe",
    country: "Hungary",
    coords: [19.05, 47.5],
    startYear: 1956,
    endYear: 1956,
    belligerents: [
      {
        side: "Soviet bloc",
        parties: [
          "Soviet Union (Soviet Army)",
          "Hungarian State Security (ÁVH) loyalists",
        ],
      },
      {
        side: "Hungarian revolutionaries",
        parties: [
          "Hungarian revolutionary councils and student groups",
          "Imre Nagy government",
          "Defecting Hungarian People's Army units",
        ],
      },
    ],
    casualties:
      "Roughly 2,500 Hungarians and 700 Soviet soldiers killed in the fighting; some 200,000 Hungarians fled to the West in the months that followed.",
    summary:
      "A nationwide uprising against the Hungarian People's Republic and Soviet domination, beginning with student-led protests in Budapest in October 1956 and crushed by a major Soviet military intervention in early November. Imre Nagy was secretly tried and executed in 1958. The revolution shattered the Western communist movement's illusions about Soviet rule and became a defining episode of Cold War memory.",
    musicTracks: [
      {
        title: "Magyarország",
        artist: "Cseh Tamás",
        note: "Cseh Tamás's late-Kádár-era ballads became the standard musical articulation of the long memory of 1956 in Hungarian popular culture.",
      },
    ],
  },

  {
    id: "prague-spring",
    name: "Warsaw Pact Invasion of Czechoslovakia",
    aka: ["Prague Spring"],
    region: "Europe",
    country: "Czechoslovakia",
    coords: [14.4, 50.1],
    startYear: 1968,
    endYear: 1968,
    belligerents: [
      {
        side: "Warsaw Pact intervention",
        parties: [
          "Soviet Union",
          "Polish People's Republic",
          "Hungarian People's Republic",
          "People's Republic of Bulgaria",
          "(German Democratic Republic stood down at the border but supported politically)",
        ],
      },
      {
        side: "Czechoslovakia",
        parties: [
          "Czechoslovak Socialist Republic under Alexander Dubček",
          "Civil society of the reform period",
        ],
      },
    ],
    casualties:
      "Roughly 100 Czechoslovaks killed in the August 1968 invasion and its immediate aftermath; the political crackdown that followed (\"Normalisation\") lasted two decades.",
    summary:
      "The Czechoslovak Communist Party's reform program under Alexander Dubček — 'socialism with a human face' — was ended by a Warsaw Pact military invasion on August 20–21, 1968. The post-invasion 'Normalisation' purged hundreds of thousands of party members and reformers; the Brezhnev Doctrine articulated to justify the invasion would govern Soviet bloc relations until 1989.",
    musicTracks: [
      {
        title: "Modlitba pro Martu (A Prayer for Marta)",
        artist: "Marta Kubišová",
        year: 1968,
        note: "Recorded immediately after the invasion and broadcast on Czechoslovak television; banned during Normalisation, it became the country's underground anthem and was sung again in Wenceslas Square in 1989.",
      },
      {
        title: "Bratříčku, zavírej vrátka (Little Brother, Close the Gate)",
        artist: "Karel Kryl",
        year: 1969,
        note: "Kryl's debut album, recorded in the months after the invasion before he went into Munich exile, was the in-country and in-exile musical document of the crushed reform.",
      },
    ],
  },

  {
    id: "northern-ireland-troubles",
    name: "The Troubles",
    aka: ["Northern Ireland conflict"],
    region: "Europe",
    country: "Northern Ireland",
    coords: [-6.0, 54.6],
    startYear: 1968,
    endYear: 1998,
    belligerents: [
      {
        side: "British state & Loyalists",
        parties: [
          "United Kingdom (British Army, RUC)",
          "Ulster Defence Association",
          "Ulster Volunteer Force",
          "Other loyalist paramilitaries",
        ],
      },
      {
        side: "Irish Republicans",
        parties: [
          "Provisional Irish Republican Army (PIRA)",
          "Official IRA, INLA, and successor groups",
          "Sinn Féin (political wing)",
        ],
      },
    ],
    casualties:
      "Around 3,500 killed and tens of thousands injured across thirty years; the 1998 Good Friday Agreement formally ended the conflict, with intermittent dissident-republican activity since.",
    summary:
      "A thirty-year conflict over the constitutional status of Northern Ireland, fought between Irish Republican paramilitaries seeking unification with the Republic, Loyalist paramilitaries committed to maintaining the union, and British state forces. The 1998 Good Friday Agreement established power-sharing institutions that have endured, with periodic crises, ever since.",
    musicTracks: [
      {
        title: "Sunday Bloody Sunday",
        artist: "U2",
        year: 1983,
        note: "Bono's lyric explicitly grappled with Bloody Sunday 1972 from a non-aligned position; the song became the global cultural touchstone of the conflict's memory.",
      },
      {
        title: "Zombie",
        artist: "The Cranberries",
        year: 1994,
        note: "Written by Dolores O'Riordan after the IRA's Warrington bombings killed two children; the song became one of the most-played international songs about the Troubles.",
      },
      {
        title: "Alternative Ulster",
        artist: "Stiff Little Fingers",
        year: 1978,
        note: "Belfast punk's defining track: a teenage refusal of both the Troubles and the cultures producing it, written from inside the city's curfews and checkpoints.",
      },
      {
        title: "Streets of Sorrow / Birmingham Six",
        artist: "The Pogues",
        year: 1988,
        note: "A medley about wrongful convictions of Irish defendants in Britain that was banned by the BBC under the broadcasting restrictions on Sinn Féin and IRA-related voices.",
      },
      {
        title: "The Town I Loved So Well",
        artist: "Phil Coulter",
        year: 1973,
        note: "A Derry songwriter's elegy for the city before the Troubles; covered by The Dubliners and used in countless retrospectives of the conflict.",
      },
    ],
  },

  {
    id: "croatian-war",
    name: "Croatian War of Independence",
    aka: ["Homeland War"],
    region: "Europe",
    country: "Croatia",
    coords: [16.0, 45.5],
    startYear: 1991,
    endYear: 1995,
    belligerents: [
      {
        side: "Croatia",
        parties: [
          "Republic of Croatia",
          "Croatian Army (HV) and Croatian Defence Forces (HOS)",
        ],
      },
      {
        side: "Serb forces",
        parties: [
          "Serbian Krajina (Republika Srpska Krajina)",
          "Yugoslav People's Army (JNA, until 1992)",
          "Federal Republic of Yugoslavia (Serbia and Montenegro) support",
        ],
      },
    ],
    casualties:
      "Roughly 20,000 dead across the war; the 1995 Croatian operations Flash and Storm displaced an estimated 200,000 Serbs from the Krajina region.",
    summary:
      "Following Croatia's 1991 declaration of independence from Yugoslavia, the Yugoslav People's Army and Serb forces seized roughly a third of Croatian territory, including the four-month siege of Vukovar. Croatian counter-offensives in 1995 reclaimed most of the territory; remaining Eastern Slavonia was peacefully reintegrated under U.N. supervision in 1998.",
    musicTracks: [
      {
        title: "Moja domovina",
        artist: "Hrvatski Band Aid",
        year: 1991,
        note: "The Croatian charity-supergroup single recorded in autumn 1991 — Croatia's analogue to Band Aid — became the country's wartime civilian anthem.",
      },
      {
        title: "Dalmatinac sam",
        artist: "Tomislav Ivčić",
        note: "Ivčić's wartime patriotic songs were nightly radio fixtures during the war; his 1991 'Stop the War in Croatia' targeted the international audience as Vukovar fell.",
      },
    ],
  },

  {
    id: "bosnian-war",
    name: "Bosnian War",
    region: "Europe",
    country: "Bosnia and Herzegovina",
    coords: [18.4, 43.85],
    startYear: 1992,
    endYear: 1995,
    belligerents: [
      {
        side: "Republic of Bosnia & Herzegovina",
        parties: [
          "Army of the Republic of Bosnia and Herzegovina (ARBiH)",
          "Croatian Defence Council (HVO, intermittent ally)",
          "Mujahideen volunteers (limited)",
        ],
      },
      {
        side: "Republika Srpska",
        parties: [
          "Army of Republika Srpska",
          "Federal Republic of Yugoslavia (matériel and personnel)",
        ],
      },
      {
        side: "Croat forces",
        parties: [
          "Croatian Republic of Herzeg-Bosnia",
          "Republic of Croatia (support)",
        ],
      },
      {
        side: "International",
        parties: [
          "U.N. Protection Force (UNPROFOR)",
          "NATO (1995 air campaign)",
          "IFOR (post-Dayton)",
        ],
      },
    ],
    casualties:
      "Roughly 100,000 dead, the majority Bosniak civilians; the 1995 massacre at Srebrenica was ruled an act of genocide by both the ICJ and ICTY.",
    summary:
      "A three-and-a-half-year multi-sided war in newly independent Bosnia and Herzegovina, marked by the 1,425-day siege of Sarajevo, ethnic-cleansing campaigns by all sides (most extensively by Bosnian Serb forces), and the Srebrenica genocide of 1995. NATO air strikes and a Croatian-Bosniak ground offensive forced the negotiations that produced the November 1995 Dayton Peace Agreement.",
    musicTracks: [
      {
        title: "Miss Sarajevo",
        artist: "Passengers feat. Luciano Pavarotti",
        year: 1995,
        note: "Bono, Brian Eno, and the Edge wrote it for Bill Carter's documentary about a wartime beauty pageant held in besieged Sarajevo; Pavarotti's vocal made it the war's signature international single.",
      },
      {
        title: "Sarajevo (Welcome to Sarajevo OST)",
        artist: "Various / Adrian Johnston",
        year: 1997,
        note: "Michael Winterbottom's film built its soundtrack from period needle drops and Bosnian sevdah recordings; the assembly became a template for siege-era cinematic memory.",
      },
      {
        title: "Kad ja pođoh na Bembašu",
        artist: "Traditional / Sarajevo sevdah",
        note: "The de facto song of Sarajevo, sung throughout the siege at memorials and concerts (including under shellfire) and used in nearly every documentary about the city's wartime cultural life.",
      },
    ],
  },

  {
    id: "kosovo-war",
    name: "Kosovo War",
    region: "Europe",
    country: "Kosovo",
    coords: [21.0, 42.6],
    startYear: 1998,
    endYear: 1999,
    belligerents: [
      {
        side: "Federal Republic of Yugoslavia",
        parties: [
          "Federal Republic of Yugoslavia (Serbia and Montenegro)",
          "Yugoslav Army and Serbian police",
        ],
      },
      {
        side: "KLA & NATO",
        parties: [
          "Kosovo Liberation Army (KLA)",
          "NATO (Operation Allied Force, March–June 1999)",
        ],
      },
    ],
    casualties:
      "Roughly 13,000 dead, the majority Kosovo Albanian; nearly a million Albanians displaced during the war and approximately 200,000 Serbs and Roma displaced in its aftermath.",
    summary:
      "An armed conflict between Yugoslav security forces and the Kosovo Liberation Army that escalated through 1998 and triggered a 78-day NATO air campaign in 1999. Yugoslav forces withdrew under the Kumanovo Agreement and Kosovo passed to U.N. administration. Kosovo declared independence in 2008; recognition is partial.",
    musicTracks: [
      {
        title: "Kthehu Dashuria Ime",
        artist: "Adelina Ismaili",
        note: "Ismaili was among the Kosovo-Albanian pop singers who performed for displaced communities during and after the war; her recordings of the period became diaspora touchstones.",
      },
    ],
  },

  {
    id: "first-chechen-war",
    name: "First Chechen War",
    region: "Europe",
    country: "Russia (Chechnya)",
    coords: [45.7, 43.3],
    startYear: 1994,
    endYear: 1996,
    belligerents: [
      {
        side: "Russia",
        parties: ["Russian Federation (Armed Forces and Interior Troops)"],
      },
      {
        side: "Chechen separatists",
        parties: [
          "Chechen Republic of Ichkeria",
          "Foreign mujahideen volunteers",
        ],
      },
    ],
    casualties:
      "Estimates of total dead range from 50,000 to 100,000, the great majority Chechen civilians; Grozny was reduced to ruins.",
    summary:
      "Russia's first attempt to suppress Chechen independence ended in a military stalemate, with the city of Grozny destroyed and casualties on both sides far higher than Moscow had anticipated. The Khasavyurt Accord of August 1996 produced an effective ceasefire and de facto Chechen autonomy until the second war began three years later.",
    musicTracks: [
      {
        title: "Крылья (Wings)",
        artist: "Nautilus Pompilius",
        year: 1995,
        note: "Used iconically in Aleksei Balabanov's Brat (1997), set against the immediate aftermath of the war; the song became inseparable from the post-war Russian cinematic generation.",
      },
      {
        title: "Прогулки по воде (Walks on Water)",
        artist: "Nautilus Pompilius",
        year: 1993,
        note: "Re-recorded for Brat 2 (2000) and tied across both films to the Chechen-veteran milieu and post-Soviet disorientation that the wars produced.",
      },
    ],
  },

  {
    id: "second-chechen-war",
    name: "Second Chechen War",
    region: "Europe",
    country: "Russia (Chechnya)",
    coords: [45.7, 43.3],
    startYear: 1999,
    endYear: 2009,
    belligerents: [
      {
        side: "Russia & Pro-Moscow Chechens",
        parties: [
          "Russian Federation",
          "Kadyrov-led pro-Moscow Chechen forces (later Kadyrovtsy)",
        ],
      },
      {
        side: "Chechen separatists & jihadists",
        parties: [
          "Chechen Republic of Ichkeria",
          "Caucasus Emirate (post-2007 splinter)",
        ],
      },
    ],
    casualties:
      "Estimates of total dead in the tens of thousands; the war produced a long tail of insurgency across the North Caucasus, the Beslan school siege, and the Moscow theatre hostage crisis.",
    summary:
      "Following apartment bombings in Russian cities and the Chechen incursion into Dagestan, Vladimir Putin launched a second war in 1999 that ended with the destruction of separatist conventional forces, the installation of the Kadyrov family in Grozny, and a long insurgency that bled across the North Caucasus into the Caucasus Emirate. The federal counter-terror operation was officially ended in 2009.",
    musicTracks: [
      {
        title: "Любэ — Комбат (already documented in the Soviet–Afghan entry)",
        artist: "Lyube",
        note: "The Russian-army standard's continued centrality through the second war is documented in veteran-association recordings of the period.",
      },
    ],
  },

  {
    id: "russo-georgian-war",
    name: "Russo-Georgian War",
    region: "Europe",
    country: "Georgia",
    coords: [43.5, 42.3],
    startYear: 2008,
    endYear: 2008,
    belligerents: [
      {
        side: "Russia & breakaway regions",
        parties: [
          "Russian Federation",
          "South Ossetia",
          "Abkhazia",
        ],
      },
      {
        side: "Georgia",
        parties: ["Republic of Georgia"],
      },
    ],
    casualties:
      "Roughly 850 dead across all sides in five days of fighting; tens of thousands displaced, principally ethnic Georgians from South Ossetia.",
    summary:
      "A five-day war in August 2008 between Russia and Georgia over the status of South Ossetia, after Georgian forces shelled Tskhinvali and Russian troops crossed the border in response. Russia recognised the independence of South Ossetia and Abkhazia immediately afterward. The war is often cited as the precedent for subsequent Russian operations in Crimea and eastern Ukraine.",
    musicTracks: [],
  },

  {
    id: "war-in-donbas",
    name: "War in Donbas",
    region: "Europe",
    country: "Ukraine",
    coords: [38.0, 48.0],
    startYear: 2014,
    endYear: 2022,
    belligerents: [
      {
        side: "Ukraine",
        parties: [
          "Ukraine (Armed Forces, National Guard, volunteer battalions)",
        ],
      },
      {
        side: "Russia & separatists",
        parties: [
          "Russian Federation (covertly, then overtly)",
          "Donetsk People's Republic",
          "Luhansk People's Republic",
        ],
      },
    ],
    casualties:
      "Roughly 14,000 killed across the eight-year low-intensity phase; the conflict became fully overt with the February 2022 Russian invasion.",
    summary:
      "Following the 2014 Maidan revolution and Russia's annexation of Crimea, armed conflict erupted in eastern Ukraine between Ukrainian forces and Russian-backed separatist authorities in Donetsk and Luhansk. The Minsk agreements produced an unstable ceasefire line that held in attritional form until the February 2022 full-scale Russian invasion absorbed the front.",
    musicTracks: [
      {
        title: "Не твоя війна (Not Your War)",
        artist: "Okean Elzy",
        year: 2014,
        note: "Released as the Donbas war began, Slava Vakarchuk's song addressed Russian soldiers directly and became a defining Ukrainian anthem of the post-Maidan period.",
      },
      {
        title: "Воїни Світла (Warriors of Light)",
        artist: "Lyapis Trubetskoy",
        year: 2014,
        note: "Originally released in 2014 by the Belarusian band, the song became an unofficial anthem of the Ukrainian volunteer battalions during the early Donbas fighting.",
      },
    ],
  },

  {
    id: "russian-invasion-of-ukraine",
    name: "Russian Invasion of Ukraine",
    region: "Europe",
    country: "Ukraine",
    coords: [31.0, 49.0],
    startYear: 2022,
    endYear: null,
    belligerents: [
      {
        side: "Ukraine & partners",
        parties: [
          "Ukraine (Armed Forces, Territorial Defence, foreign volunteers)",
          "NATO and partner states (matériel, intelligence, training)",
        ],
      },
      {
        side: "Russia & allies",
        parties: [
          "Russian Federation",
          "Belarus (territory and matériel)",
          "Wagner Group / Africa Corps",
          "Democratic People's Republic of Korea (matériel and personnel)",
          "Iran (matériel)",
        ],
      },
    ],
    casualties:
      "Western intelligence and independent estimates as of the most recent reporting place military and civilian deaths in the hundreds of thousands across both sides; over 6 million Ukrainians have fled abroad.",
    summary:
      "On February 24, 2022, Russia launched a full-scale invasion of Ukraine, opening multiple fronts and aiming for a rapid change of government in Kyiv that did not materialise. The war has settled into attritional fighting along a long front in the south and east, marked by extensive use of artillery, drones, and long-range strikes against Ukrainian infrastructure. Hostilities continue.",
    musicTracks: [
      {
        title: "Ой у лузі червона калина (Oh, the Red Viburnum in the Meadow)",
        artist: "Andriy Khlyvnyuk / BoomBox",
        year: 2022,
        note: "Khlyvnyuk's a cappella recording of the Sich Riflemen anthem on a Kyiv street days into the invasion went viral and became the war's most recognisable Ukrainian song.",
      },
      {
        title: "Hey Hey, Rise Up",
        artist: "Pink Floyd feat. Andriy Khlyvnyuk",
        year: 2022,
        note: "David Gilmour and Pink Floyd built a single around Khlyvnyuk's recording — their first new music as Pink Floyd in nearly thirty years — released as a benefit for Ukrainian humanitarian relief.",
      },
      {
        title: "Stefania",
        artist: "Kalush Orchestra",
        year: 2022,
        note: "Ukraine's Eurovision-winning entry in May 2022, a hip-hop-folk tribute to the lead singer's mother that became the war's unexpected international pop emblem.",
      },
      {
        title: "Bayraktar",
        artist: "Taras Borovok",
        year: 2022,
        note: "A viral wartime ditty celebrating the Turkish drone that defined the war's opening weeks; Ukrainian soldiers' uploads turned a barracks song into a global meme.",
      },
    ],
  },

  {
    id: "nagorno-karabakh-conflict",
    name: "Nagorno-Karabakh Conflict",
    region: "Europe",
    country: "Azerbaijan / Armenia",
    coords: [46.7, 39.8],
    startYear: 1988,
    endYear: 2023,
    belligerents: [
      {
        side: "Armenia & Karabakh Armenians",
        parties: [
          "Republic of Armenia",
          "Republic of Artsakh / Nagorno-Karabakh Republic",
        ],
      },
      {
        side: "Azerbaijan",
        parties: [
          "Republic of Azerbaijan",
          "Turkey (matériel and political support)",
        ],
      },
    ],
    casualties:
      "Tens of thousands killed across the late-Soviet conflict, the 1992–94 war, the 2020 war, and the 2023 Azerbaijani offensive; the entire Armenian population of Nagorno-Karabakh — over 100,000 people — fled to Armenia in September 2023.",
    summary:
      "A three-decade conflict over the predominantly Armenian-populated Nagorno-Karabakh region, formally Azerbaijani but de facto Armenian-controlled after the 1992–94 war. Azerbaijan's 2020 war recovered much of the surrounding territory; a September 2023 offensive ended the unrecognised Republic of Artsakh and emptied the region of its Armenian population.",
    musicTracks: [
      {
        title: "Dle Yaman (Duduk)",
        artist: "Djivan Gasparyan",
        note: "Gasparyan's duduk recordings — globally familiar from Hollywood placements — became the standard sonic identifier for Armenia in documentaries about the war.",
      },
      {
        title: "Sari Gelin",
        artist: "Traditional (Armenian and Azerbaijani versions)",
        note: "A folk song claimed by both peoples, sung in different languages on either side of the line of contact — itself a small archive of the conflict's contested cultural inheritance.",
      },
    ],
  },

  // ───────────────────────────── Other ─────────────────────────────

  {
    id: "cuban-missile-crisis",
    name: "Cuban Missile Crisis",
    region: "LatinAmerica",
    country: "Cuba",
    coords: [-77.8, 21.5],
    startYear: 1962,
    endYear: 1962,
    belligerents: [
      {
        side: "United States and allies",
        parties: [
          "United States",
          "Organisation of American States",
        ],
      },
      {
        side: "Soviet Union and Cuba",
        parties: ["Soviet Union", "Republic of Cuba"],
      },
    ],
    casualties:
      "No direct combat between the principals; one U.S. U-2 pilot was killed when his plane was shot down over Cuba on October 27, 1962.",
    summary:
      "A thirteen-day standoff in October 1962 after U.S. reconnaissance discovered Soviet medium-range nuclear missile sites in Cuba, leading to a U.S. naval quarantine and intensive secret diplomacy. The crisis was resolved by Soviet withdrawal of the missiles in exchange for a U.S. pledge not to invade Cuba and the quiet later removal of U.S. Jupiter missiles from Turkey.",
    musicTracks: [
      {
        title: "A Hard Rain's a-Gonna Fall",
        artist: "Bob Dylan",
        year: 1962,
        note: "Written and first performed in the weeks around the crisis; Dylan repeatedly cited the imminence of nuclear war as the song's emotional engine and it became the era's prophetic standard.",
      },
      {
        title: "We Will All Go Together When We Go",
        artist: "Tom Lehrer",
        year: 1959,
        note: "Pre-dates the crisis but was in heavy circulation through the early-60s nuclear-anxiety years and is still the canonical comedic articulation of the moment's prevailing emotion.",
      },
    ],
  },
];
