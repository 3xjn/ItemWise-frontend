import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    PaperProps,
} from "@mui/material";

interface InventoryTable {
    rows: {
        name: string;
        price: string;
        current: number;
        stock: number;
    }[];
}

const PaperComponent = (props: PaperProps) => <Paper {...props} sx={{ borderRadius: 0 }} />;

export const InventoryTable: React.FC<InventoryTable> = ({ rows }) => {
    return (
        <TableContainer
            component={PaperComponent}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell align="center">Current</TableCell>
                        <TableCell align="center">Stock</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell align="center">{row.current}</TableCell>
                            <TableCell align="center">{row.stock}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
