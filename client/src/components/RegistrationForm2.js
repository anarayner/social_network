import {
    Box, Button, Card,
    CssBaseline, Divider,
    Grid, Link,
    TextField,
    Typography
} from '@mui/material';
import {useContext, useState} from 'react';
import {Context} from '../index';
import useForm from '../hooks/useForm';
import validate from '../hooks/formInputValidator';

export default function RegistrationForm(){


    const {store} = useContext(Context);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(register, validate);

    function register (){ store.registration(values.email, values.password)
    console.log(values.email, values.password)
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
                        value={values.email || ''}
                        onChange={handleChange}
                        error={Boolean(errors?.email)}
                        helperText={(errors?.email)}

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
                        value={values.password || ''}
                        onChange={handleChange}
                        error={Boolean(errors?.password)}
                        helperText={(errors?.password)}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2}}
                        style={{ height: 50}}
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

