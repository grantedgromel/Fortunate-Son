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

## south-sudanese-civil-war
- **Flag:** C
- **Where:** `musicTracks: []`
- **Concern:** Same as above — sparse canon left fully empty rather than seeded with 2–3 regional artists.
- **Suggested action:** Emmanuel Jal (South Sudanese rapper / former child soldier) is the obvious diaspora touchstone; consider 2–3 of his tracks plus any local liberation-era music.

## war-in-darfur
- **Flag:** C
- **Where:** `musicTracks: []`
- **Concern:** Same as above — sparse canon left fully empty.
- **Suggested action:** Mattafix's "Living Darfur" (2007) is the single best-known anglophone track explicitly about the genocide; pair with 1–2 Sudanese diaspora artists.

---

**FLAGGED: 3 of 60 entries; CLEAN: 57 of 60.**

## Companion: T1 structural audit (informational)

T1 (schema / region enum / coords on-continent / date ordering / casualty magnitude word / belligerent shape / track shape / youtubeId format) reported 9 entries with summaries exceeding the 2–4 sentence cap. On manual recount, all 9 were **false positives**: T1's sentence counter split on the periods inside abbreviations like `U.S.`, `U.N.`, `U.K.`, `A.U.`, and `Al-Qaeda`. Actual sentence counts for those 9 entries are 2–3 each, all within spec. **No structural fixes were applied; the dataset is structurally clean across all 60 non-Cold-War entries.**

The 14 Cold War proxy entries (Vietnam + the 13 from `claude/conflict-map-music-app-BaaQ9`) were curated in this session and are not covered by either audit.
