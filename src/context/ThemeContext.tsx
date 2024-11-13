import { PaletteMode, Theme, useMediaQuery } from "@mui/material";
import { darkTheme, lightTheme } from "@root/styles/theme";
import React, { createContext, useState } from "react";

interface AppThemeContextType {
    mode: PaletteMode;
    toggleTheme: () => void;
    theme: Theme;
}

const AppThemeContext = createContext<AppThemeContextType | undefined>(
    undefined
);

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const isLightMode = useMediaQuery("(prefers-color-scheme: light)");
    const [mode, setMode] = useState<PaletteMode>(isLightMode ? "light" : "dark");

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    const contextValue: AppThemeContextType = {
        mode: mode,
        toggleTheme: toggleTheme,
        theme: mode === 'light' ? lightTheme : darkTheme
    };

    return <AppThemeContext.Provider value={contextValue}>{children}</AppThemeContext.Provider>;
};

export { AppThemeContext, AppThemeProvider };
