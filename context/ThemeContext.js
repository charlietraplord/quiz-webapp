"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((previous) => (previous === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}> {children}      
            </div> 
        </ThemeContext.Provider>
    );
}