import React, {useContext} from 'react';
import {AppBar, Avatar, Badge, Box, Button, Toolbar} from '@mui/material';
import theme from '../../theme';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/system';
import {USER_ROUTE} from '../../util/consts';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from 'react-router-dom';
import {Context} from '../../index';
import {observer} from 'mobx-react';

const ButtonIcon = styled(IconButton,{})({
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
})

const ChatAppBar = () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    return (
        <AppBar position='fixed' >
            <Toolbar position='fixed' sx={{flexWrap: 'wrap', backgroundColor: '#fff'}}>


                <Button variant="contained"
                        startIcon={<HomeIcon  />}
                        onClick={() => navigate(USER_ROUTE +'/' + user.user.id)}
                >
                    Home
                </Button>

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <ButtonIcon
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
                    <Avatar sx={{ backgroundColor: 'primary', ml: 2}}>N</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default observer( ChatAppBar);
