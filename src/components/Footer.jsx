import { ArrowUp } from "./Icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" to="/">
          Emil Schmidt<span>.</span>
        </Link>
        <p>© {new Date().getFullYear()} Emil Schmidt</p>
        <a href="#main">
          Til toppen <span aria-hidden="true"><ArrowUp /></span>
        </a>
      </div>
    </footer>
  );
}
