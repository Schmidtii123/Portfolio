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
import { projects } from "./data/projects";

export default function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const project = projects.find(
      (item) => pathname === `/projekter/${item.slug}`,
    );
    document.title = project
      ? `${project.title} — Emil Schmidt`
      : pathname === "/projekter"
        ? "Projekter — Emil Schmidt"
        : "Emil Schmidt — Webudvikler";
    const frame = requestAnimationFrame(() => {
      if (hash)
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return (
    <>
      <a className="skip-link" href="#main">
        Spring til indhold
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
                <span className="eyebrow">404 / En lille omvej</span>
                <h1>Her er vist tomt.</h1>
                <p>Men der er masser at udforske på forsiden.</p>
                <Link className="button button-dark" to="/">
                  Tilbage til forsiden <ArrowUpRight />
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
