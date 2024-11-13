import {
    IconButton,
    IconButtonProps
} from "@mui/material";

export const BaseIconButton = (props: IconButtonProps) => {
    return (
        <IconButton
            color="inherit"
            size="large"
            sx={{
                mx: 1,
            }}
            {...props}
        />
    );
};
