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
                        height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
                        marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
                        minHeight: '100%',
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
                            height: '100%',
                            width: '100%',
                        },
                        (theme) => ({
                            [theme.breakpoints.down('md')]: {
                                flexDirection: 'column',
                            },
                        })
                    ]
                }
            >
                <Quotes />
                <SignInCard />
            </Stack>
        </Stack>
    )
}