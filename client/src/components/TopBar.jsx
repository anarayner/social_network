import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';

const TopBar = () => {
    return (
        <React.Fragment>

        <AppBar
            position='static'
            color='secondary'
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Typography variant='h4' noWrap sx={{flexGrow: 1}}>UNION</Typography>
                <nav>
                    <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                        Sign Up
                    </Button>
                    <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
                        Sign In
                    </Button>
                </nav>
            </Toolbar>
        </AppBar>
        </React.Fragment>
    );
};

export default TopBar;
