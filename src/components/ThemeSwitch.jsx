import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useTheme } from '../context/ThemeContext';

function ThemeSwitch({ isDark, toggleTheme }) {
    const { theme, setTheme } = useTheme();
    
    // Use props if provided (for LandingPage), otherwise use context
    const currentIsDark = isDark !== undefined ? isDark : theme === "dark";
    const onToggle = toggleTheme !== undefined ? toggleTheme : () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <button 
            id="themeToggle"
            onClick={onToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Toggle Dark Mode"
        >
            {currentIsDark ? <LuMoon size="1.5rem" /> : <LuSun size="1.5rem" />}
        </button>
    );
}

export default ThemeSwitch;

