import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand__mark" aria-hidden="true">
            n
          </span>
          <span>
            next<span className="brand__accent">bites</span>
          </span>
        </Link>
        <a className="nav-link" href="#recipes">
          Recipes <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
