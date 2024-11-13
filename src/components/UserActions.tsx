import { Check, Save } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import { green } from "@mui/material/colors";
import { GridRenderCellParams, GridRowId, GridRowParams, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { useState } from "react";
import { InventoryRow } from "./InventoryDataGrid";

interface UserActionsProps {
    params: GridRowParams<InventoryRow>,
    rowId: GridRowId | undefined;
    setRowId: React.Dispatch<React.SetStateAction<GridRowId | undefined>>
}

export const UserActions: React.FC<UserActionsProps> = ({ params, rowId, setRowId }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {};

    return (
        <Box
            sx={{
                m: 1,
                position: "relative",
            }}
        >
            {success ? (
                <Fab
                    color="primary"
                    size="small"
                    sx={{
                        bgcolor: green[500],
                        "&:hover": { bgcolor: green[700] },
                    }}
                >
                    <Check />
                </Fab>
            ) : (
                <Fab
                    color="primary"
                    size="small"
                    sx={{
                        bgcolor: green[500],
                        "&:hover": { bgcolor: green[700] },
                    }}
                    disabled={params.id !== rowId || loading}
                    onClick={handleSubmit}
                >
                    <Save />
                </Fab>
            )}
            {loading && (
                <CircularProgress
                    size={52}
                    sx={{
                        color: green[500],
                        position: "absolute",
                        top: -6,
                        left: -6,
                        zIndex: 1,
                    }}
                />
            )}
        </Box>
    );
};
