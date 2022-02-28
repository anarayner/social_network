import React, {useContext} from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/icons/Logo.svg'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../util/consts';
import {useLocation, useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';


const HomeTopBar = () => {
    const {store} = useContext(Context)

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
                <Typography variant='h4' noWrap sx={{flexGrow: 1}}>UNION</Typography>
                    <nav>
                        <Button  variant='outlined' sx={{ my: 1, mx: 1.5 }}
                                onClick={()=> store.logout()}
                        >
                            Log out
                        </Button>
                    </nav>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default observer(HomeTopBar);
