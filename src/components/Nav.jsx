import { ArrowUpRight } from "./Icons";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n";

function DanishFlag() {
  return (
    <svg viewBox="0 0 37 28" aria-hidden="true">
      <rect width="37" height="28" fill="#c60c30" />
      <path d="M12 0h4v28h-4zM0 12h37v4H0z" fill="#fff" />
    </svg>
  );
}

function BritishFlag() {
  return (
    <svg viewBox="0 0 40 24" aria-hidden="true">
      <rect width="40" height="24" fill="#012169" />
      <path d="M0 0l40 24M40 0L0 24" stroke="#fff" strokeWidth="5" />
      <path d="M0 0l40 24M40 0L0 24" stroke="#c8102e" strokeWidth="2" />
      <path d="M20 0v24M0 12h40" stroke="#fff" strokeWidth="8" />
      <path d="M20 0v24M0 12h40" stroke="#c8102e" strokeWidth="4" />
    </svg>
  );
}

export default function Nav() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <header className="site-header">
      <nav className="container navigation" aria-label={t("mainNav")}>
        <Link className="wordmark" to="/" aria-label={t("homeLabel")}>
          Emil Schmidt<span>.</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/projekter">{t("projects")}</NavLink>
          <Link to="/#about">{t("about")}</Link>
          <Link className="nav-contact" to="/#contact">
            {t("contact")} <span aria-hidden="true"><ArrowUpRight /></span>
          </Link>
          <div className="language-switcher" role="group" aria-label={t("languageLabel")}>
            <button
              type="button"
              className={language === "da" ? "active" : ""}
              aria-pressed={language === "da"}
              aria-label={t("danish")}
              title={t("danish")}
              onClick={() => setLanguage("da")}
            >
              <DanishFlag />
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              aria-pressed={language === "en"}
              aria-label={t("english")}
              title={t("english")}
              onClick={() => setLanguage("en")}
            >
              <BritishFlag />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
