import React from 'react';
import {alpha, AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/icons/Logo.svg'
import {observer} from 'mobx-react-lite';
import {Search} from '@material-ui/icons';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import theme from '../theme/index'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SearchComponent = styled('div',{})({
    display: 'flex',
    textAlign: 'center',
    color: 'white',
    height: 40,
    borderRadius: 10,
    marginLeft: theme.spacing(3),
    backgroundColor: alpha('#3e4457', 0.15),
    '&:hover': {
        backgroundColor: alpha('#3e4457', 0.25),
    },
});

const SearchIconWrapper = styled('div', {})({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});


const HomeTopBar = () => {

    return (
        <AppBar
            position='sticky'
            color='secondary'
        >
            <Toolbar sx={{flexWrap: 'wrap', backgroundColor: '#fff'}} >
                <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 1,}}
                >
                    <img src={Logo} alt="logo" width={40} height={40}  />
                </IconButton>
                <Typography variant='h4' sx={{color: theme.palette.background.default}}>UNION</Typography>
                <SearchComponent>
                    <SearchIconWrapper>
                <Search sx={{color: '#2a2727'}}/>
                    </SearchIconWrapper>
                <InputBase
                    placeholder="Search…"
                    sx={{color: '#2a2727'}}
                    />
                </SearchComponent>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                                aria-label="show 4 new mails"
                                sx={{backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.common.white,
                                    mr:2

                                }}>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                                aria-label="show 4 new mails"
                                sx={{backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.common.white,
                                   }}>
                        <Badge badgeContent={17} color="error" >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Avatar sx={{ backgroundColor: 'primary', ml: 2}}>N</Avatar>

                </Box>

            </Toolbar>
        </AppBar>
    );
};

export default observer(HomeTopBar);
