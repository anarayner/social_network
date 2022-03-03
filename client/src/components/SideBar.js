import React from 'react';
import {alpha, Box, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import theme from '../theme';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/icons/Logo.svg';
import MailIcon from '@mui/icons-material/Mail';
import {styled} from '@mui/system';
const SideBar = styled(Box,{})({
    position: 'unset'
});

const Wrapper = styled('div',{})({
});


const Sidebar = () => {
    return (
        <Wrapper>
        <SideBar
            sx={{display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                backgroundColor: theme.palette.secondary.main,
                justifyContent: 'center',
                pt: 1,

            }}>

        </SideBar>
    <SideBar
        sx={{backgroundColor: theme.palette.secondary.main, height: '92.05vh',    position: 'fixed'
        }}
        role="presentation"
    >
        <List sx={{ml: 1}}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>
                        <MailIcon sx={{color: theme.palette.background.default}}/>
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{color: '#fff'}} />
                </ListItem>
            ))}
        </List>
    </SideBar>
        </Wrapper>
    );
};

export default Sidebar;
