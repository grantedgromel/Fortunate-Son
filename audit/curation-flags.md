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
