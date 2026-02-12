import translateQuote from "../../api/quotes";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const Quotes = () => {
    const [quote, setQuote] = useState({
        quote: "",
        author: "",
    });

    useEffect(() => {
        translateQuote().then((res) => {
            setQuote({
                quote: res.quote,
                author: res.author,
            });
        });
    }, [])

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
            <Stack spacing={2}>
                <Typography variant="h6">{quote.quote || "O melhor jeito de começar é parar de falar e começar a agir."}</Typography>
                <Typography variant="caption">{"- " + quote.author || "Walt Disney"}</Typography>
            </Stack>
        </Box>
    )
}

export default Quotes;