import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Hovednavigation">
        <Link className="wordmark" to="/" aria-label="Emil Schmidt — forside">
          Emil Schmidt<span>.</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/projekter">Projekter</NavLink>
          <Link to="/#about">Om mig</Link>
          <Link className="nav-contact" to="/#contact">
            Lad os tale <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
