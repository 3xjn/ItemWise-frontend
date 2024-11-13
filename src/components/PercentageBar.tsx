import { Box, Stack, SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface PercentageBarProps  {
    children?: React.ReactNode;
    progress: number;
    width?: string | number;
    height?: string | number;
    showPercentage?: boolean;
    color?: string | (() => string);
    percentageFormat?: (progress: number) => string;
    percentageComponent?: React.ReactNode | ((value: number) => React.ReactNode);
    precision?: number;
    typographyProps?: Partial<TypographyProps>
    sx?: SxProps;
}

export const PercentageBar: React.FC<PercentageBarProps> = ({
    children,
    progress,
    width,
    height,
    showPercentage,
    color,
    percentageFormat = (progress) => {
        return `${Math.trunc(progress * 1000) / 10}%`
    },
    percentageComponent,
    typographyProps,
    sx
}) => {
    return (
        <Stack
            direction="row"
            width={width || "100%"}
            height={height || "100%"}
            alignItems="center"
        >
            <Box
                width={"100%"}
                height={"50%"}
                sx={{
                    margin: "6px",
                    position: "relative",
                    overflow: "hidden",
                    ...sx
                }}
                border={"1px solid grey"}
            >
                <Box
                    width={`${progress * 100}%`}
                    height={"100%"}
                    sx={{
                        bgcolor: typeof color == "function" ? color() : color,
                        position: "absolute",
                        left: 0,
                        top: 0,
                    }}
                ></Box>
                <Typography
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 1,
                        color: "white",
                        zIndex: 1,
                    }}
                    align="center"
                    {...typographyProps}
                >
                    {showPercentage && percentageFormat(progress)}
                    {children}
                </Typography>
            </Box>
        </Stack>
    );
};
