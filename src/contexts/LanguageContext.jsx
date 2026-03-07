import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getLocaleData } from "../data/siteData";

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "es";
  return localStorage.getItem("lafinca_lang") || "es";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lafinca_lang", language);
    }
  }, [language]);

  const data = useMemo(() => getLocaleData(language), [language]);

  const value = useMemo(
    () => ({ language, setLanguage, data }),
    [language, data]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
