import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/images/icons/Logo.svg'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../../util/consts';
import {useLocation, useNavigate} from 'react-router-dom';


const TopBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname ===REGISTRATION_ROUTE


    return (
        <>
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
                <Typography variant='h4' noWrap sx={{flexGrow: 1, display:{ xs: 'none', md: 'flex' }}}>UNION</Typography>
                    <nav>
                        <Button  variant={!isLogin?'contained':'outlined'} sx={{ my: 1, mx: 1.5 }}
                                onClick={()=> navigate(REGISTRATION_ROUTE)}
                        >
                            Sign Up
                        </Button>
                        <Button  variant={!isLogin?'outlined':'contained'} sx={{ my: 1, mx: 1.5 }}
                                onClick={()=> navigate(LOGIN_ROUTE)}
                        >
                            Sign In
                        </Button>
                    </nav>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default TopBar;
