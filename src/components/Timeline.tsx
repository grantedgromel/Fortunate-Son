import type { Conflict } from "../lib/types";

interface Props {
  conflicts: Conflict[];
  selectedId?: string;
  onSelect?: (c: Conflict) => void;
}

/**
 * Stub: future horizontal timeline (1945 → present) that scrubs through
 * conflicts. Not yet wired into App.tsx.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Timeline(_props: Props) {
  return (
    <div className="w-full border-t border-parchment/10 px-4 py-2 text-xs text-parchment/50">
      Timeline — coming soon.
    </div>
  );
}
