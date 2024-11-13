import { Stack } from "@mui/material";
import { TopBar } from "@components/TopBar";
import {
    InventoryDataGrid,
} from "@components/InventoryDataGrid";

export const App: React.FC = () => {
    return (
        <Stack direction="column" height="100vh" maxHeight={"100%"}>
            <TopBar />
            <InventoryDataGrid />
        </Stack>
    );
};
