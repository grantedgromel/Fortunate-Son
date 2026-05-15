// Deterministic record-label colour per conflict — a small editorial palette,
// hashed from the conflict id so a conflict always gets the same disc colour.

const VINYL_PALETTE = [
  "#b8332f", "#2a4d6e", "#c9a35a", "#3f6a3a",
  "#7a3a6e", "#d97a3a", "#1f5e6b", "#8a2a2a",
];

export function vinylLabelColor(id: string): string {
  let h = 0;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return VINYL_PALETTE[h % VINYL_PALETTE.length];
}
