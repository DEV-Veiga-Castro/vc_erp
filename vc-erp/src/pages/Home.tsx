import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export default function Home() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const testElement = (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <Typography variant="h2">Hello, World!</Typography>
                <Typography variant="h6">São: {time}</Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={() => window.location.href = "/login"}>
                Login
            </Button>
        </Box>
    )
    return testElement
}

// setInterval(Home, 1000)