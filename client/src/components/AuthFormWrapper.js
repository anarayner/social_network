import React from 'react';
import {Grid} from '@mui/material';

const AuthFormWrapper = ({children, ...other}) => {
    return (
        <Grid item xs={6}  display='flex' >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '90vh' }}
                {...other}
            >
                <Grid item xs={8} md={3}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AuthFormWrapper;
