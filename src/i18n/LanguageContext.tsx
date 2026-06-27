"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { Language, translations } from "./translations";

interface LanguageContextValue {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "salon-profit-language";

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("pl");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored === "pl" || stored === "en") {
            setLanguageState(stored);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        window.localStorage.setItem(STORAGE_KEY, lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextValue => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
