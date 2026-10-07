import { ArrowUp } from "./Icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" to="/">
          Emil Schmidt<span>.</span>
        </Link>
        <p>© {new Date().getFullYear()} Emil Schmidt</p>
        <a href="#main">
          {language === "en" ? "Back to top" : "Til toppen"} <span aria-hidden="true"><ArrowUp /></span>
        </a>
      </div>
    </footer>
  );
}
