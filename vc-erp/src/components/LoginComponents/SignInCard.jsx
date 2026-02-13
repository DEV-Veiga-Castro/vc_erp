import * as React from 'react';
import MuiCard from '@mui/material/Card';
import { Box, Button, CardContent, FormControl, styled, TextField, Typography } from '@mui/material';

const Card = styled(MuiCard)({
    maxWidth: 450,
    margin: 'auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
})

export default function SignInCard() {
    const [usernameError, setUsernameError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleSubmit = (event) => {
        if (usernameError || passwordError) {
            event.preventDefault();
            return;
        }
    }

    const data = new FormData(HTMLFormElement.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    console.log(username, password);

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
        }}>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    gap: '1rem',
                }}
            >
                <FormControl>
                    <TextField
                        required
                        id="username"
                        name="username"
                        label="Usuário"
                        autoComplete="username"
                        autoFocus
                        error={!!usernameError}
                        helperText={usernameErrorMessage}
                    />
                </FormControl>
                <FormControl>
                    <TextField
                        required
                        id="password"
                        name="password"
                        label="Senha"
                        autoComplete="password"
                        autoFocus
                        error={!!passwordError}
                        helperText={passwordErrorMessage}
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            border: 'none',
                            outline: 'none',
                            textDecorationColor: 'black'
                        }}
                    />
                </FormControl>
                <FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </FormControl>
            </Box>
        </Card>
        );
}
