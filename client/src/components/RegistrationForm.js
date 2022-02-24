import {
    Box, Button, Card,
    CssBaseline, Divider,
    Grid, Link,
    TextField,
    Typography
} from '@mui/material';
import {useContext, useState} from 'react';
import {Context} from '../index';

export default function RegistrationForm(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);
    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    return (
        <Card sx={{
            maxWidth: { xs: 400, lg: 550 },
            margin: { xs: 2.5, md: 10 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            },
            backgroundColor: 'white',
            borderRadius: 4,
        }}>
            <CssBaseline />
            <Box
                sx={{
                    margin: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'}}>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{mt: 3}} >
                    Create new account
                </Typography>
                <Box component="form"
                     onSubmit={handleSubmit}
                     noValidate
                     sx={{ mt: 2 }}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        autoComplete="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2}}
                        style={{ height: 50}}
                        onClick={()=>
                            store.registration(email, password)}
                    >
                        Sign up
                    </Button>

                    <Grid item xs={12} sx={{ mt: 2, mb: 1}}
                    >
                        <Divider />
                    </Grid>
                    <Grid item xs={12} >
                        <Grid item container direction="column" alignItems="center" xs={12}>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.info("I'm a button.");
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    Don&apos;t have an account?
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Card>
    );
};

