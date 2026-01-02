import { useEffect } from 'react'
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useTheme } from '../context/ThemeContext';

function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button id="themeToggle"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }
            }
        >
            <>
                {
                    theme === "dark" ?
                        <LuMoon size="1.5rem"/>
                    :
                        <LuSun size="1.5rem"/>
                }
            </>
        </button>
    );
}

export default ThemeSwitch;

