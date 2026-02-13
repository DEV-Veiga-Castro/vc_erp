import { Box, Stack } from "@mui/material";
import OrgChartComponent from "./components/OrchartComponent";

export default function OrgChartPage() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                border: '1px solid white',
                boxShadow: '0 2px 4px rgba(181, 233, 170, 0.77)',
                borderRadius: '1rem',
                backgroundColor: 'white',
                padding: '1rem',
                maxWidth: '700px',
                maxHeight: '400px',
            }}>
                <Stack spacing={2} alignItems="center" justifyContent="center">
                    <OrgChartComponent />
                </Stack>
            </Box>
        </Box>
    )
}