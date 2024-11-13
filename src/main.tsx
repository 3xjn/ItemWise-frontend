import React from "react";
import ReactDOM from "react-dom/client";
import { PageHandler } from "@pages/PageHandler";
import { AppThemeProvider } from "@context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppThemeProvider>
            <PageHandler></PageHandler>
        </AppThemeProvider>
    </React.StrictMode>
);
