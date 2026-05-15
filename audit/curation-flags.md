# Curation smell-test flags

Generated 2026-05-14 for the 60 non-Cold-War entries in `src/data/conflicts.ts` (HEAD `4cea1a3`).

Each flag is a SUGGESTION for human review, not a verified error. The audit cannot reach the live web, so claims like "this song was in film X" were checked only against training-data familiarity — verify before fixing.

## Flag codes

- **A** — Same Western rock track repeated across unrelated conflicts
- **B** — Anachronism: track year postdates the film/event the note claims
- **C** — Sparse-canon conflict padded with Western rock OR left empty when regional/diaspora curation was expected
- **D** — Implausible `youtubeId` (not 11 chars, all-same-char, etc.)
- **E** — Note overclaims a film/scene placement that's demonstrably wrong
- **F** — Politically loaded framing in `summary` or `belligerents[i].side`

---

## boko-haram-insurgency
- **Flag:** C
- **Where:** `musicTracks: []`
- **Concern:** Sparse-canon conflict with zero curation. The original prompt's guidance was to keep sparse canons sparse but use 2–3 regional/diaspora artists rather than padding with Western rock; an empty array is a defensible reading of "leave sparse canons sparse" but inconsistent with the rest of the dataset's sparse-canon entries (Tigray, Nagorno-Karabakh, Sahel) which do include 2–3 regional tracks.
- **Suggested action:** add 2–3 tracks from Hausa / Northern Nigerian artists or diaspora work on Boko Haram; consider documentary soundtracks focused on the insurgency.
- **RESOLUTION (2026-05-14):** Intentionally left empty. No confident song-to-insurgency linkage was available without web verification; per the "do not invent tracks" rule the entry stays sparse. Revisit in a web-verified pass.

## south-sudan-civil-war
- **Flag:** C
- **Where:** `musicTracks: []`
- **Concern:** Same as above — sparse canon left fully empty rather than seeded with 2–3 regional artists.
- **Suggested action:** Emmanuel Jal (South Sudanese rapper / former child soldier) is the obvious diaspora touchstone; consider 2–3 of his tracks plus any local liberation-era music.
- **RESOLUTION (2026-05-14):** Resolved — added Emmanuel Jal "We Want Peace" (2010) and Emmanuel Jal & Nyaruach "Ti-Chuong" (2018). YouTube IDs left blank pending web verification.

## war-in-darfur
- **Flag:** C
- **Where:** `musicTracks: []`
- **Concern:** Same as above — sparse canon left fully empty.
- **Suggested action:** Mattafix's "Living Darfur" (2007) is the single best-known anglophone track explicitly about the genocide; pair with 1–2 Sudanese diaspora artists.
- **RESOLUTION (2026-05-14):** Resolved — added Mattafix "Living Darfur" (2007) and Mohammed Wardi "Mursal". YouTube IDs left blank pending web verification.

---

**FLAGGED: 3 of 60 entries; CLEAN: 57 of 60.**
**RESOLVED: 2 of 3 populated (war-in-darfur, south-sudan-civil-war); 1 of 3 (boko-haram-insurgency) intentionally left empty.**

## Companion: T1 structural audit (informational)

T1 (schema / region enum / coords on-continent / date ordering / casualty magnitude word / belligerent shape / track shape / youtubeId format) reported 9 entries with summaries exceeding the 2–4 sentence cap. On manual recount, all 9 were **false positives**: T1's sentence counter split on the periods inside abbreviations like `U.S.`, `U.N.`, `U.K.`, `A.U.`, and `Al-Qaeda`. Actual sentence counts for those 9 entries are 2–3 each, all within spec. **No structural fixes were applied; the dataset is structurally clean across all 60 non-Cold-War entries.**

The 14 Cold War proxy entries (Vietnam + the 13 from `claude/conflict-map-music-app-BaaQ9`) were curated in this session and are not covered by either audit.

## Pilot YouTube-ID backfill — curation problems surfaced (2026-05-15)

A WebSearch-verified YouTube-ID pass over Vietnam + the 13 Cold War proxy entries
added 32 IDs (30 new, 2 Vietnam replacements). It also surfaced six tracks in the
Cold War batch whose titles or framing could not be verified and are likely errors
in that batch's own curation. IDs were left blank for these pending review.

### cambodian-civil-war — "Pachelbel's Canon in D" / Johann Pachelbel (arr. Mike Oldfield)
- **Problem:** The Killing Fields' Mike Oldfield score does not use Pachelbel's Canon; the film's canonical needle-drop is John Lennon's "Imagine" over the final reunion. The linkage appears fabricated.
- **Suggested action:** replace with "Imagine" (John Lennon), or remove.

### angolan-civil-war — "Angola" / Teta Lando
- **Problem:** No Teta Lando song titled "Angola" found via search. Teta Lando is a real, relevant Angolan independence/civil-war-era artist, but this specific title looks invented.
- **Suggested action:** replace with a verified Teta Lando song (e.g. "Irmão ama teu irmão", "Eu vou voltar"), or remove.

### angolan-civil-war — "Velha Chica" / Waldemar Bastos (year 1990)
- **Problem:** The best-known recording of "Velha Chica" is the ~1999 Dulce Pontes collaboration (album "O Primeiro Canto"). A Waldemar Bastos solo recording exists (ID added), but the year 1990 and "signature track" framing are dubious.
- **Suggested action:** verify the recording year and adjust the note, or recredit.

### eritrean-war-of-independence — "Aytehazenley" / Yemane Barya
- **Problem:** Title not found via search; cannot confirm it is a real Yemane Barya song. The artist himself is real and relevant.
- **Suggested action:** replace with a verified Yemane Barya title, or remove.

### eritrean-war-of-independence — "Semaetat" / Abraham Afewerki
- **Problem:** Title not found via search; cannot confirm it is a real Abraham Afewerki song. The artist himself is real and relevant.
- **Suggested action:** replace with a verified Abraham Afewerki title, or remove.

### laotian-civil-war — "Rock Savannakhet" / Dao Bandon
- **Problem:** No such song found. Dao Bandon is a Thai (Isan) luk thung / mor lam singer, not a pre-1975 Lao artist, so the entry's framing ("pre-1975 Lao popular music nearly erased after the Pathet Lao takeover") is inaccurate.
- **Suggested action:** remove, or replace with a genuine pre-1975 Lao artist.

Three pure-traditional songs (Arirang, Champa Muang Lao, Rasa Sayang) were
intentionally left without IDs — they have no single canonical recording.

### Resolutions (2026-05-15)

All six were fixed:

- **cambodian-civil-war** — "Pachelbel's Canon in D" replaced with **"Imagine" / John Lennon**, the song that actually closes The Killing Fields (final reunion scene).
- **angolan-civil-war** — "Angola" / Teta Lando replaced with the verified **"Irmão Ama Teu Irmão" / Teta Lando** ("Brother, Love Your Brother" — apt for a civil war).
- **angolan-civil-war** — "Velha Chica" kept (the Bastos solo recording is real); the dubious 1990 year dropped and the note reworded.
- **eritrean-war-of-independence** — "Aytehazenley" / Yemane Barya replaced with verified **"Lula" / Yemane Barya**.
- **eritrean-war-of-independence** — "Semaetat" / Abraham Afewerki replaced with verified **"Tmnitey" / Abraham Afewerki**.
- **laotian-civil-war** — "Rock Savannakhet" / Dao Bandon removed (Dao Bandon is a Thai Isan artist, not pre-1975 Lao); the entry now carries one traditional track.

## Decolonization YouTube-ID pass — new curation problems (2026-05-15)

The ID backfill extended to the 7 Decolonization entries (11 IDs added). Two
more tracks could not be verified and were left without IDs for review:

### first-indochina-war — "La Complainte des infidèles" / Bérurier Noir
- **Problem:** Search surfaces this title only as a 1950s French chanson (Mouloudji, Danielle Darrieux), not a Bérurier Noir recording. The attribution is unverifiable.
- **Suggested action:** verify whether Bérurier Noir recorded it; otherwise recredit (e.g. Mouloudji) or remove.

### rhodesian-bush-war — "Mothers of the Land" / Thomas Mapfumo & The Acid Band
- **Problem:** No song by this title found. Mapfumo & The Acid Band's verified tracks include "Hokoyo", "Matiregerera Mambo", "Pamuromo Chete"; "Mothers of the Land" looks fabricated.
- **Suggested action:** replace with a verified Mapfumo chimurenga track, or remove.

## Middle East YouTube-ID pass — new findings (2026-05-15)

The ID backfill extended to the 12 Middle East entries (17 IDs added). Findings:

### lebanese-civil-war — "Le Canon" / Ziad Rahbani
- **Problem:** No Ziad Rahbani track titled "Le Canon" found. His verified civil-war-era instrumental work centres on the album/piece "Abu Ali".
- **Suggested action:** replace with "Abu Ali" (or another verified Ziad Rahbani piece), or remove. ID left blank.

### iran-iraq-war — "Zeytoun" / Hayedeh
- **Problem:** No Hayedeh song titled "Zeytoun" found; her verified repertoire includes "Soghati", "Masti", "Sofreh Eshgh". This is the entry's only track, so removal would leave it empty.
- **Suggested action:** verify, replace with a confirmed Hayedeh song, or remove. ID left blank.

### israel-hamas-war — "Charbel" / Hanan Ben Ari
- **Problem:** No Hanan Ben Ari song titled "Charbel" found in search; attribution unverifiable.
- **Suggested action:** verify or replace with a confirmed Hanan Ben Ari track. ID left blank.

### syrian-civil-war — "Yalla Erhal Ya Bashar" / Ibrahim Qashoush (attribution)
- **Problem:** Not a fabricated track — the song is real and an ID was added. But after the fall of the Assad regime in 2024 it was confirmed that the singer was **Abdel Rahman Farhood**, not Ibrahim Qashoush; Qashoush was a Hama protest figure murdered in 2011 and long mistakenly credited. If the entry's note repeats the Qashoush-as-singer account it should be corrected.
- **Suggested action:** review and update the note's attribution.

### Tracks with no stable YouTube ID (not curation errors)
- **iraq-war — "Hadji Girl" / Joshua Belile:** the original 2006 video was removed by YouTube and re-uploads are taken down under its terms of use; left without an ID (the in-app YouTube-search fallback still applies).
- **libyan-civil-war-2011 — "Al-Soo'al" / Ibn Thabit:** the track is verified real (released on YouTube 27 Jan 2011) but a specific canonical video ID could not be confirmed via search; left blank.

## Sub-Saharan Africa YouTube-ID pass — new findings (2026-05-15)

The ID backfill extended to the Sub-Saharan Africa (II) entries (14 IDs added). Three findings:

### rwandan-genocide — "Mama Ararira" / Cécile Kayirebwa (attribution)
- **Problem:** The canonical "Mama Ararira" — the one on the Hotel Rwanda soundtrack — is performed by Afro Celt Sound System featuring Dorothee Munyaneza, not Cécile Kayirebwa. The dataset's attribution is likely wrong.
- **Suggested action:** recredit to "Afro Celt Sound System ft. Dorothee Munyaneza", or confirm a Kayirebwa recording. ID left blank.

### somali-civil-war — "Of the Birds Falls" / Hans Zimmer (Black Hawk Down OST)
- **Problem:** No track by this title found among the Black Hawk Down soundtrack listings (which include "Hunger", "Of the Earth", "Gortoz a Ran", "Leave No Man Behind"). The title looks garbled or fabricated.
- **Suggested action:** replace with a verified Black Hawk Down cue, or remove. ID left blank.

### tigray-war — "Tigray Hawey" / Solomon Bayre
- **Problem:** Solomon Bayre is a plausible Tigrigna artist, but no track titled "Tigray Hawey" could be verified via search. It is the entry's only track.
- **Suggested action:** verify the title, or replace with a confirmed Tigrayan-diaspora war song. ID left blank.

Also left ID-less, not an error: **biafra-war — "Bach: Jesu, Joy of Man's Desiring"** (classical piece, no single canonical recording).

## Latin America YouTube-ID pass — new findings (2026-05-15)

The ID backfill extended to the Latin America (II) entries (13 IDs added). Two findings:

### colombian-conflict — "Pa' Despertar" / ChocQuibTown
- **Problem:** No ChocQuibTown track titled "Pa' Despertar" found; their catalogue surfaces "Pa' Olvidarte", "De Donde Vengo Yo", etc. Possibly a confusion with "Pa' Olvidarte".
- **Suggested action:** verify the title or replace with a confirmed ChocQuibTown track. ID left blank.

### mexican-drug-war — "El Niño Sicario" / El Komander (attribution)
- **Problem:** "El Niño Sicario" is a Calibre 50 track (from their 2012 album "Corridos Progresivos"), not an El Komander song. Likely a misattribution.
- **Suggested action:** recredit to Calibre 50, or replace with a verified El Komander narcocorrido. ID left blank.
