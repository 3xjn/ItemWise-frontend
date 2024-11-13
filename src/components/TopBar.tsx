import { Box, AppBar, Stack } from "@mui/material";
import { BaseIconButton } from "./BaseIconButton";
import { AppThemeContext } from "@root/context/ThemeContext";
import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

export const TopBar: React.FC = () => {
    const { mode, toggleTheme } = useContext(AppThemeContext)!;

    return (
        <Box>
            <AppBar position="sticky">
                <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <BaseIconButton edge="start">
                        <MenuIcon></MenuIcon>
                    </BaseIconButton>
                    <Stack direction="row" spacing={1}>
                        <BaseIconButton onClick={toggleTheme}>
                            {mode === "light" ? (
                                <LightModeIcon />
                            ) : (
                                <DarkModeIcon />
                            )}
                        </BaseIconButton>
                        <BaseIconButton>
                            <SettingsIcon></SettingsIcon>
                        </BaseIconButton>
                    </Stack>
                </Stack>
            </AppBar>
        </Box>
    );
};
