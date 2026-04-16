import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Conflict } from "../lib/types";
import { REGION_LABELS } from "../lib/filter";
import Playlist from "./Playlist";

interface Props {
  conflict: Conflict | null;
  onClose: () => void;
}

function focusableWithin(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export default function ConflictPanel({ conflict, onClose }: Props) {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!conflict) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    const el = drawerRef.current;
    if (el) {
      const focusables = focusableWithin(el);
      (focusables[0] ?? el).focus();
    }
    return () => {
      lastFocusRef.current?.focus?.();
    };
  }, [conflict?.id]);

  useEffect(() => {
    if (!conflict) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" && drawerRef.current) {
        const f = focusableWithin(drawerRef.current);
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [conflict?.id]);

  return (
    <AnimatePresence>
      {conflict ? (
        <>
          <motion.div
            key="scrim"
            className="no-print fixed inset-0 z-30 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            key={`panel-${conflict.id}`}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`conflict-${conflict.id}-title`}
            tabIndex={-1}
            className="app-drawer drawer-scroll fixed right-0 top-0 z-40 h-full w-full overflow-y-auto border-l border-slate2 bg-surface p-6 shadow-2xl outline-none md:w-[40%] md:min-w-[22rem] md:max-w-[46rem] md:p-8"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2
                  id={`conflict-${conflict.id}-title`}
                  className="font-display text-3xl font-semibold leading-tight text-parchment"
                >
                  {conflict.name}
                </h2>
                {conflict.aka && conflict.aka.length > 0 ? (
                  <p className="mt-1 text-sm italic text-parchment/60">
                    also known as {conflict.aka.join(", ")}
                  </p>
                ) : null}
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-parchment/60">
                  {conflict.startYear}–{conflict.endYear ?? "present"}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="drawer-close shrink-0 rounded-sm border border-slate2 bg-ink px-2 py-1 text-parchment/80 hover:border-accent hover:text-accent"
              >
                Close ✕
              </button>
            </div>

            <p className="mt-1 text-sm text-parchment/70">
              <span className="text-parchment/90">{conflict.country}</span>
              <span className="text-parchment/40"> · </span>
              <span>{REGION_LABELS[conflict.region]}</span>
            </p>

            <section className="mt-5 grid gap-4 md:grid-cols-2">
              {conflict.belligerents.map((b) => (
                <div key={b.side}>
                  <h3 className="text-xs uppercase tracking-widest text-accent">
                    {b.side}
                  </h3>
                  <ul className="mt-1 list-inside list-disc text-sm text-parchment/85">
                    {b.parties.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <p className="mt-6 leading-relaxed text-parchment/90">
              {conflict.summary}
            </p>

            {conflict.casualties ? (
              <p className="mt-4 text-sm text-parchment/75">
                <span className="text-xs uppercase tracking-widest text-accent">
                  Casualties ·{" "}
                </span>
                {conflict.casualties}
              </p>
            ) : null}

            <hr className="my-8 border-slate2" />

            <h3 className="mb-4 font-display text-xl text-parchment">
              Playlist
            </h3>
            <Playlist tracks={conflict.musicTracks} />
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
