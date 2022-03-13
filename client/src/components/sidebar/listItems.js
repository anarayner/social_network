import React from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import theme from '../../theme';
import {FEED_ROUTE, USER_ROUTE} from '../../util/consts';
import {useNavigate} from 'react-router-dom';


const SidebarList = ({user}) => {
    const navigate = useNavigate()

    return (
        <div>
            <ListItemButton onClick={() => navigate(USER_ROUTE +'/' + user.user.id)}>
                <ListItemIcon>
                    <HomeIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>


            <ListItemButton>
                <ListItemIcon>
                    <PeopleAltIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <EmailIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Chatroom" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate(FEED_ROUTE)}>
                <ListItemIcon>
                    <FeedIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Feed" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon sx={{color: theme.palette.background.default}}/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </div>
    );
};

export default SidebarList;

