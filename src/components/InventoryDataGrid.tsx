import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useMemo } from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { PercentageBar } from "./PercentageBar";
import { useItemReducer } from "@context/useInventoryReducer";
import { green, red, yellow } from "@mui/material/colors";
import { getObjectDiff } from "@utils/deepComparison";

export interface InventoryRow {
    id: number;
    name: string;
    price: string;
    current: number;
    target: number;
}

export interface InventoryGridRow extends InventoryRow {
    percentFull: number;
    isFull: boolean;
}

export const InventoryDataGrid: React.FC = () => {
    // const [rowId, setRowId] = useState<GridRowId>();
    const { items, updateItem } = useItemReducer();

    const columns: GridColDef<InventoryGridRow>[] = [
        { field: "name", headerName: "Name", width: 150, editable: true },
        {
            field: "price",
            headerName: "Price",
            width: 150,
            editable: true,
            preProcessEditCellProps: (params) => {
                console.log(params.props.value);
                const match = /^\$?\d+(\.\d{2})?$/.exec(params.props.value);
                const cleaned = match ? match[0] : params.props.value;

                console.log("error is null", match)

                return {
                    ...params.props,
                    value: cleaned,
                    error: !match
                }
            },
            valueFormatter: (value) => {
                return `${value}`
            }
        },
        {
            field: "current",
            headerName: "Current",
            width: 150,
            editable: true,
            valueParser: (value: string) => {
                const parsed = Number(value);
                return isNaN(parsed) ? 0 : parsed;
            },
            valueFormatter: (value) => (value ? `${value}` : "0"),
        },
        {
            field: "target",
            headerName: "Target",
            width: 150,
            editable: true,
        },
        {
            field: "percentFull",
            headerName: "%",
            width: 150,
            editable: false,
            renderCell: (params) => {
                return (
                    <PercentageBar
                        progress={params.value}
                        showPercentage={true}
                        color={() => {
                            if (params.value > 0.66) {
                                return green[500];
                            } else if (params.value > 0.33) {
                                return yellow[700];
                            } else {
                                return red[500];
                            }
                        }}
                        sx={{
                            borderRadius: "6px"
                        }}
                    ></PercentageBar>
                );
            },
        },
        {
            field: "isFull",
            headerName: "Full",
            width: 150,
            editable: true,
            type: "boolean",
            renderCell: (params) => {
                return params.value ? (
                    <CheckIcon color={"success"}></CheckIcon>
                ) : (
                    <CloseIcon color={"error"}></CloseIcon>
                );
            },
        },
    ];

    const rows = useMemo(
        () =>
            items.map((value) => ({
                ...value,
                isFull: value.current / value.target == 1,
                percentFull: value.current / value.target,
            })),
        [items]
    );

    console.log("updating");

    return (
        <Paper sx={{
            borderRadius: 0
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableMultipleRowSelection={false}
                // onCellEditStart={(params) => {
                //     console.log("start", params);
                // }}
                // onCellEditStop={(params) => {
                //     console.log("end", params);
                // }}

                processRowUpdate={(
                    updatedRow: InventoryGridRow,
                    originalRow: InventoryGridRow
                ) => {
                    const diff = getObjectDiff(originalRow, updatedRow);

                    if (Object.values(diff).length === 0) return originalRow;

                    let returnedRow = { ...updatedRow };

                    if (diff.isFull) {
                        const newCurrent = diff.isFull.new
                            ? updatedRow.target
                            : 0;
                        returnedRow = {
                            ...returnedRow,
                            current: newCurrent,
                            percentFull: newCurrent / updatedRow.target,
                            isFull: newCurrent / updatedRow.target === 1,
                        };
                    }

                    if (diff.current) {
                        const newCurrent =
                            Number(diff.current.new) ||
                            (diff.current.old as number);
                        returnedRow = {
                            ...returnedRow,
                            current: newCurrent,
                            percentFull: newCurrent / returnedRow.target,
                            isFull: newCurrent / returnedRow.target === 1,
                        };
                    }

                    if (diff.target) {
                        const newTarget =
                            Number(diff.target.new) ||
                            (diff.target.old as number);
                        returnedRow = {
                            ...returnedRow,
                            target: newTarget,
                            percentFull: returnedRow.current / newTarget,
                            isFull: returnedRow.current / newTarget === 1,
                        };
                    }

                    updateItem(returnedRow.id, {
                        ...returnedRow,
                    });

                    return returnedRow;
                }}
            ></DataGrid>
        </Paper>
    );
};
