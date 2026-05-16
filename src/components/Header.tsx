interface Props {
  onSearch: () => void;
  onAbout: () => void;
}

// Editorial masthead — Wojak helmet logo, wordmark, subhead, search + about.
export default function Header({ onSearch, onAbout }: Props) {
  return (
    <header className="masthead">
      <div className="mast-left">
        <img src="/wojak-logo.png" alt="" className="mast-logo" />
        <div>
          <h1 className="serif title">Fortunate Sons</h1>
          <div className="serif subhead">
            Music from around the globe, for those born to feel.
          </div>
        </div>
      </div>
      <div className="mast-right">
        <button className="about-btn" onClick={onAbout}>
          <span>About</span>
        </button>
        <button className="search-btn" onClick={onSearch}>
          <span>Search</span>
          <span className="kbd mono micro">⌘K</span>
        </button>
      </div>
    </header>
  );
}
