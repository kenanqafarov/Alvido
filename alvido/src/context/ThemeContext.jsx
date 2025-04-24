import { createContext } from "react";

const ThemeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export default ThemeContext;
