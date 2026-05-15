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
          className="about-scrim no-print"
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
            className="about-panel"
            initial={{ y: 12, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="vp-close" onClick={onClose} aria-label="Close">
              ×
            </button>
            <h2 id="about-title" className="serif">
              About Fortunate Sons
            </h2>
            <p>
              A map of post-1945 armed conflicts paired with the songs that
              have, in the years since, become culturally attached to them —
              through films and documentaries, veteran adoption,
              contemporaneous protest, or the accidents of radio.
            </p>
            <p>
              The songs are not endorsements. Many were commercial recordings
              that had nothing to do with war until a director or a soldier or
              a historian put them there. That retrofit is the point: this is a
              project about cultural memory, not about who was right.
            </p>
            <h3>Methodology</h3>
            <p>
              Conflict summaries aim for neutral framing — "forces aligned
              with" rather than propagandistic labels. Track picks are weighted
              toward canonical film placements, documentary scores, and
              veteran-adopted standards. A track is omitted when its link to a
              conflict is thin or speculative.
            </p>
            <h3>Caveat</h3>
            <p className="dim">
              The curation is opinionated and incomplete. Several conflicts have
              no stable musical canon; their entries are intentionally sparse
              rather than padded.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
