/**
 * Very rough parser that extracts the largest order-of-magnitude number from
 * a casualties prose string like "1.3 to 3 million" or "~400,000".
 * Returns 0 when no numeric signal can be recovered.
 */
export function parseCasualtyMagnitude(prose?: string): number {
  if (!prose) return 0;
  const lower = prose.toLowerCase().replace(/,/g, "");
  const matches = lower.match(/\d+(?:\.\d+)?/g);
  if (!matches || matches.length === 0) return 0;
  const nums = matches.map(Number).filter((n) => Number.isFinite(n));
  if (nums.length === 0) return 0;
  const maxN = Math.max(...nums);
  let multiplier = 1;
  if (/\bbillion\b/.test(lower)) multiplier = 1e9;
  else if (/\bmillion\b/.test(lower)) multiplier = 1e6;
  else if (/\bthousand\b/.test(lower)) multiplier = 1e3;
  return maxN * multiplier;
}

/** Log-scaled radius, clamped 4..14 px. */
export function radiusForMagnitude(n: number): number {
  if (n <= 100) return 4;
  const r = 4 + Math.log10(n / 100) * 1.6;
  return Math.max(4, Math.min(14, r));
}
