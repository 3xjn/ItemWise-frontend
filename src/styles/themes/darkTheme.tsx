import { PaletteOptions } from "@mui/material"

// Modern Dark Theme with deeper blues
export const darkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
        main: "#3B82F6",  // Vibrant blue
        light: "#60A5FA",
        dark: "#2563EB",
        contrastText: "#FFFFFF"
    },
    background: {
        default: "#0F172A",  // Deeper background
        paper: "#1E293B"     // Slate surface
    },
    text: {
        primary: "#F1F5F9",
        secondary: "#94A3B8",
        disabled: "#475569"
    }
}

// GitHub Dark Theme inspired
export const githubDarkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
        main: "#58A6FF",     // GitHub blue
        light: "#79C0FF",
        dark: "#388BFD",
        contrastText: "#0D1117"
    },
    background: {
        default: "#0D1117",  // GitHub dark
        paper: "#161B22"     // GitHub surface
    },
    text: {
        primary: "#C9D1D9",
        secondary: "#8B949E",
        disabled: "#6E7681"
    }
}

// Modern Dark Theme with purple accents
export const modernDarkPalette: PaletteOptions = {
    mode: "dark",
    primary: {
        main: "#8B5CF6",     // Purple
        light: "#A78BFA",
        dark: "#7C3AED",
        contrastText: "#FFFFFF"
    },
    background: {
        default: "#09090B",  // Almost black
        paper: "#18181B"     // Zinc surface
    },
    text: {
        primary: "#FAFAFA",
        secondary: "#A1A1AA",
        disabled: "#52525B"
    }
}