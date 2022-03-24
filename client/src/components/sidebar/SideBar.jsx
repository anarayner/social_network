import React, {useContext, useState} from 'react';
import {alpha, Avatar, Badge, Box, Button, Divider, List, Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SidebarList from './SidebarList';
import {styled} from '@mui/system';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import {Context} from '../../index';
import Logo from '../../assets/images/icons/Logo.svg'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({open}) => ({
    position: 's',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(({open})=>({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.background.default,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },

}))


const ButtonIcon = styled(IconButton,{})({
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
})

const SideBar = () => {
    const {user} = useContext(Context)
    const[open, setOpen] = useState(true)
    const toggleDrawer = () =>{
        setOpen(!open)
    }
    return (
        <>
            <AppBar position='fixed' open={open} >
                <Toolbar position='fixed' sx={{flexWrap: 'wrap', backgroundColor: '#fff'}}>
                    <IconButton
                        edge='start'
                        onClick={toggleDrawer}
                        sx={{mr: '40px', ...(open && {display: 'none'})}}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <ButtonIcon
                            aria-label="show 4 new mails"
                            sx={{backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white,
                                mr:2
                            }}>
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </ButtonIcon>
                        <ButtonIcon
                            aria-label="show 4 new mails"
                            sx={{backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white,

                            }}>
                            <Badge badgeContent={17} color="error" >
                                <NotificationsIcon />
                            </Badge>
                        </ButtonIcon>
                        <Avatar sx={{ ml: 2}}
                                src={'http://localhost:7000/' + user.user.profilePicture}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box position={'fixed'} >

            <Drawer variant="permanent"  open={open}  >
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        color: theme.palette.background.default,
                    }}>
                    <img src={Logo} alt="logo" width={40} height={40}  />

                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon sx={{color: theme.palette.background.default}}/>
                    </IconButton>

                </Toolbar>
                <Divider sx={{backgroundColor: theme.palette.background.default}}/>

                <List component='nav' sx={{minHeight: '100vh'}}>
                    <SidebarList user={user}/>
                </List>

            </Drawer>
        </Box>
        </>
    );
};

export default SideBar;
