import Quotes from "../components/LoginComponents/Quotes";
import SignInCard from "../components/LoginComponents/SignInCard";
import { Box, Stack } from "@mui/material";

export default function Login(){
    return(
        <Stack
            direction={"column"}
            component={"main"}
            sx={
                [
                    {
                        justifyContent: 'center',
                        height: '100vh',
                        minHeight: '100vh',
                    },
                ]
            }
        >
            <Stack
                direction={"row"}
                component={"section"}
                sx={
                    [
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            width: '100vw',
                        },
                        (theme) => ({
                            [theme.breakpoints.down('md')]: {
                                flexDirection: 'column',
                            },
                        })
                    ]
                }
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '30vw',
                    marginLeft: '10vw',
                }}>
                    <Quotes />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                }}>
                    <SignInCard />
                </Box>
            </Stack>
        </Stack>
    )
}