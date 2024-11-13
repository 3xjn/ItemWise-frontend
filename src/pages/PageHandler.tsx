import React, { useContext } from "react";
import { App } from "@pages/app/App";
import { ThemeProvider } from "@mui/material";
import { AppThemeContext } from "@root/context/ThemeContext";

export const PageHandler: React.FC = () => {
    const { theme } = useContext(AppThemeContext)!;

    return (
        <ThemeProvider theme={theme}>
            <App></App>
        </ThemeProvider>
    );
};
