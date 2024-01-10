import React  from "react";
import "../assets/css/SwitchTheme.css";

function SwitchTheme({ className, theme, toggleTheme }) {
  // console.log("Inside switchtheme");
  // console.log(toggleTheme);
  const themeIcon = (theme === 'light' ? "⚪️" : "🌑"); 

  return (
    <div className={`${className} ThemeSwitcher`}>
      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        <span className="mode"> Mode: </span>
        {themeIcon}
      </button>
    </div>

  );
}

export default SwitchTheme;