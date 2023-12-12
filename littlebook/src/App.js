import "./App.scss";
import { createContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/homepage/HomePage";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HomePage theme={theme} />
    </ThemeContext.Provider>
  );
}

export default App;
