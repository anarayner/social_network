import React, {useState} from 'react';
import {alpha, Avatar, Badge, Box, Divider, InputBase, List, Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Search} from '@material-ui/icons';
import theme from '../theme';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {mainListItems} from './assets/listItems';
import {styled} from '@mui/system';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';


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
        width: 500,
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

const SideBar = () => {

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
            <Drawer variant="permanent"  open={open}>
                <Toolbar
                    position='sticky'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        color: theme.palette.background.default
                    }}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon sx={{color: theme.palette.background.default}}/>
                    </IconButton>

                </Toolbar>
                <Divider sx={{backgroundColor: theme.palette.background.default}}/>
                <List component='nav'>
                    {mainListItems }
                </List>
            </Drawer>
        </>
    );
};

export default SideBar;
