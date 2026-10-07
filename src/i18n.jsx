/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { projects as projectData } from "./data/projects";

const translations = {
  da: {
    skip: "Spring til indhold",
    mainNav: "Hovednavigation",
    homeLabel: "Emil Schmidt — forside",
    projects: "Projekter",
    about: "Om mig",
    contact: "Kontakt mig",
    technologies: "Teknologier",
    notFoundEyebrow: "404 / En lille omvej",
    notFoundTitle: "Her er vist tomt.",
    notFoundText: "Men der er masser at udforske på forsiden.",
    backHome: "Tilbage til forsiden",
    pageTitleProjects: "Projekter — Emil Schmidt",
    pageTitleHome: "Emil Schmidt — Webudvikler",
    metaDescription: "Emil Schmidts portfolio. Udforsk webprojekter, interaktive oplevelser og teknologierne bag.",
    languageLabel: "Vælg sprog",
    danish: "Dansk",
    english: "Engelsk",
  },
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    homeLabel: "Emil Schmidt — home",
    projects: "Projects",
    about: "About me",
    contact: "Contact me",
    technologies: "Technologies",
    notFoundEyebrow: "404 / A small detour",
    notFoundTitle: "Nothing to see here.",
    notFoundText: "There is plenty to explore on the home page.",
    backHome: "Back to the home page",
    pageTitleProjects: "Projects — Emil Schmidt",
    pageTitleHome: "Emil Schmidt — Web Developer",
    metaDescription: "Emil Schmidt's portfolio. Explore web projects, interactive experiences and the technologies behind them.",
    languageLabel: "Choose language",
    danish: "Danish",
    english: "English",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("portfolio-language");
    return saved === "en" ? "en" : "da";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const t = (key) => translations[language][key];
    const projects = projectData.map((project) =>
      language === "en" && project.en
        ? { ...project, ...project.en }
        : project,
    );
    return { language, setLanguage, t, projects };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
