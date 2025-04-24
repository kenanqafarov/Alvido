import { createContext } from "react";

const LanguageContext = createContext({
  language: "EN",
  toggleLanguage: () => {},
});

export default LanguageContext;
