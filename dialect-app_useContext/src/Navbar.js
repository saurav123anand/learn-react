import { useContext } from "react";
import { langContext } from "./languageContext";
import { themeContext } from "./themeContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {language} =useContext(langContext);
  const {theme,setTheme}=useContext(themeContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={(e)=>setTheme(theme==="light" ? "dark" : "light")}>{theme==="light" ? "Dark Theme" : "Light Theme"}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
