import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AboutModal({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={ref}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            className="w-full max-w-lg rounded-sm border border-slate2 bg-surface p-6 text-parchment shadow-2xl outline-none"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="about-title"
                className="font-display text-2xl text-parchment"
              >
                About Fortunate Son
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-sm border border-slate2 bg-ink px-2 py-1 text-sm text-parchment/80 hover:border-accent hover:text-accent"
              >
                Close ✕
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-parchment/85">
              <p>
                This is a map of post-1945 armed conflicts paired with the
                songs that have, in the years since, become culturally
                attached to them — through films and documentaries, veteran
                adoption, contemporaneous protest, or the accidents of radio.
              </p>
              <p>
                The songs are not endorsements. Many were commercial recordings
                that had nothing to do with war until a director or a soldier
                or a historian put them there. That retrofit is the point: this
                is a project about cultural memory, not about who was right.
              </p>
              <p>
                <span className="uppercase tracking-widest text-accent">
                  Methodology ·{" "}
                </span>
                Conflict summaries aim for neutral framing ("forces aligned
                with" rather than propagandistic labels). Track picks are
                weighted toward canonical film placements, documentary scores,
                and veteran-adopted standards. We omit a track when its link
                to a conflict is thin or speculative.
              </p>
              <p className="text-parchment/70">
                The curation is opinionated and incomplete. Several conflicts
                have no stable musical canon; their entries are intentionally
                sparse rather than padded.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
