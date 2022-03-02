import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import {observer} from 'mobx-react-lite';
import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/images/icons/Logo.svg';
import theme from '../theme/index'




const HomePage = () => {
    return (
        <Grid container direction='row'
              sx={{height: '100vh',
                  backgroundColor: theme.palette.background.default}} >
            <Grid item xs={2}>
                <Box
                    sx={{display: { xs: 'none', md: 'flex' },
                         alignItems: 'center',
                         backgroundColor: theme.palette.secondary.main,
                        justifyContent: 'center',
                        pt: 1

                }}>
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
                </Box>
                <Box
                    sx={{backgroundColor: theme.palette.secondary.main,
                    height: '100vh',
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
                </Box>
            </Grid>
            <Grid item xs={10}>
                <HomeTopBar/>
                <Grid container direction='row'>
                    <Grid item xs={9}>
                        hello
                    </Grid>
                    <Grid item xs={3}>
                        hello
                    </Grid>

                    </Grid>

            </Grid>


        </Grid>
    );
};

export default observer(HomePage);
