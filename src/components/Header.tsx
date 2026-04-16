interface Props {
  onAbout: () => void;
}

export default function Header({ onAbout }: Props) {
  return (
    <header className="app-header no-print flex items-start justify-between border-b border-slate2 px-6 py-4">
      <div>
        <h1 className="font-display text-2xl font-medium leading-none tracking-tight text-parchment">
          Fortunate Son
        </h1>
        <p className="mt-1 text-xs text-parchment/60">
          Post-1945 conflicts and the songs attached to them.
        </p>
      </div>
      <nav>
        <button
          type="button"
          onClick={onAbout}
          className="rounded-sm border border-slate2 bg-surface px-3 py-1.5 text-xs uppercase tracking-widest text-parchment/80 hover:border-accent hover:text-accent"
        >
          About
        </button>
      </nav>
    </header>
  );
}
