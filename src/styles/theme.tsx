import { createTheme, ThemeOptions } from "@mui/material/styles";
import { githubDarkPalette as darkPalette } from "@styles/themes/darkTheme";
import { lightPalette } from "@styles/themes/lightTheme";

const baseTheme: ThemeOptions = {
    typography: {
        fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
                contained: {
                    padding: "8px 16px",
                },
                outlined: {
                    padding: "8px 16px",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
                    border: "1px solid",
                    borderColor:
                        theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.12)"
                            : "rgba(255, 255, 255, 0.12)",
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor:
                                theme.palette.mode === "light"
                                    ? "rgba(0, 0, 0, 0.23)"
                                    : "rgba(255, 255, 255, 0.23)",
                        },
                        "&:hover fieldset": {
                            borderColor:
                                theme.palette.mode === "light"
                                    ? "rgba(0, 0, 0, 0.87)"
                                    : "rgba(255, 255, 255, 0.87)",
                        },
                    },
                }),
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.primary
                }),
            },
        },
    },
};

const lightTheme = createTheme({
    ...baseTheme,
    palette: lightPalette,
});

const darkTheme = createTheme({
    ...baseTheme,
    palette: darkPalette,
});

export { lightTheme, darkTheme };
