import {useState, useEffect} from "react";
import Card from "./components/Card";
import Themebutton from "./components/Themebutton";
import {ThemeProvider} from "./contexts/Theme";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <Themebutton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
