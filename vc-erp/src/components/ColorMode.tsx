import { ReactNode } from "react";
import { useColorScheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";

export default function ColorMode(props: SelectProps<string>) {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    return (
        <Select
            value={mode}
            onChange={(event: SelectChangeEvent<string>, _child: ReactNode) =>
                setMode(event.target.value as 'system' | 'light' | 'dark')
            }
            {...props}
        >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
        </Select>
    )
}
