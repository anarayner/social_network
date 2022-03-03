import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {alpha, Box, Divider, Grid, InputBase, List, Toolbar, Typography} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {mainListItems} from '../components/listItems';
import {styled} from '@mui/system';
import theme from '../theme';
import MenuIcon from '@mui/icons-material/Menu';
import {Search} from '@material-ui/icons';
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

const HomePage = () => {
    const[open, setOpen] = useState(true)
    const toggleDrawer = () =>{
        setOpen(!open)
    }

    return (
        <Box sx={{display: 'flex'}}>
        <AppBar position='absolute' open={open} >
            <Toolbar sx={{flexWrap: 'wrap', backgroundColor: '#fff'}}>
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
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
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
        </Box>
    );
};

export default observer(HomePage);
