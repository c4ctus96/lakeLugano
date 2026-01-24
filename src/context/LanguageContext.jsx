import React, { useState, useContext, useEffect } from "react";
import i18n from "../components/i18next.jsx";

const LanguageContext = React.createContext();

export function LanguageProvider({ children }) {
    const getSystemLanguage = () => {
        const saved = localStorage.getItem("language");
        if (saved) return saved;
        return navigator.languages?.[0] || navigator.language || "en";
    }
    const [language, setLanguage] = useState(getSystemLanguage);

    useEffect(() => {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
        document.documentElement.setAttribute("lang", language);
        console.log("system language:", navigator.languages);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}