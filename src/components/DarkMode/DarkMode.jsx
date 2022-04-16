
import './DarkMode.scss'


// GENERAL :: when dark mode, is one background color would be better? (darker one)
// PROJECTS :: when dark mode, I want my projects a bit darker so maybe toggle func or something?
// PROJECTS :: when dark mode, the filters bg color should be same as card bg color?
// CONTACT :: icons bg color? or border? 

// DARKMODE :: should it be in nav? every page? wrapper? top left or top right with wrapper? 
// DARKMODE-ICON :: just one and change with toggle? or slide like now?

// index.css sort out dark theme colors.



const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

const toggleTheme = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const DarkMode = ()  => {
    return (
        <div className="toggle-theme-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={toggleTheme} defaultChecked={defaultDark}/>
                <div className="slider round"></div>
            </label>
            <span>🌒</span>
        </div>
    );
}

export default DarkMode;