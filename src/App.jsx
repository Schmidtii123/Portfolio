import { ArrowUpRight } from "./components/Icons";
import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetail from "./pages/ProjectDetail";
import { useLanguage } from "./i18n";

export default function App() {
  const { pathname, hash } = useLocation();
  const { language, projects, t } = useLanguage();
  useEffect(() => {
    const project = projects.find(
      (item) => pathname === `/projekter/${item.slug}`,
    );
    document.title = project
      ? `${project.title} — Emil Schmidt`
      : pathname === "/projekter"
        ? t("pageTitleProjects")
        : t("pageTitleHome");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("metaDescription"));
    const frame = requestAnimationFrame(() => {
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, language, projects, t]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t("skip")}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projekter" element={<ProjectPage />} />
          <Route path="/projekter/:slug" element={<ProjectDetail />} />
          <Route
            path="*"
            element={
              <section className="container not-found">
                <span className="eyebrow">{t("notFoundEyebrow")}</span>
                <h1>{t("notFoundTitle")}</h1>
                <p>{t("notFoundText")}</p>
                <Link className="button button-dark" to="/">
                  {t("backHome")} <ArrowUpRight />
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
