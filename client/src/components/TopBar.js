import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/icons/Logo.svg'


const TopBar = () => {
    return (
        <React.Fragment>

        <AppBar
            position='static'
            color='secondary'
        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src={Logo} alt="logo" width={40} height={40}  />
                </IconButton>
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
