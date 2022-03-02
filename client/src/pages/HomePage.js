import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import {observer} from 'mobx-react-lite';
import {Avatar, Box, Button, Grid} from '@mui/material';

import theme from '../theme/index'
import SideBar from '../components/SideBar';
import {Container, Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {HOME_ROUTE} from '../util/consts';





const HomePage = () => {
    return (
        <Grid container direction='row'
              sx={{
                  height: '100vh',
                  backgroundColor: theme.palette.background.default}} >
            <Grid item xs={2}>
                <SideBar/>
            </Grid>
            <Grid item xs={10}>
                <HomeTopBar/>
                <Grid container direction='row'>
                    <Grid item xs={9}>
                        <Box sx={{
                            backgroundColor: '#fff',
                            m: 3,
                            mt: 7,
                            borderRadius: 2,
                            height: 200,
                        }}>
                        <Grid container direction='row'>
                            <Grid item xs={3}>
                                <Box sx={{
                                    height: 200,
                                    width: 200,
                                    mt: -5, ml: 1,
                                    border: 1,
                                    borderColor: '#930505',
                                    borderRadius: 100,
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                     }}>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="/static/images/avatar/3.jpg"
                                    sx={{height: 170, width: 170}}
                                />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{pt:3, pr:2}}>
                               <Typography variant="h5"  >
                                   Name
                               </Typography>
                                <Divider sx={{pt:1, mb: 1}} />
                                <Typography variant="body2" sx={{
                                    mt:1
                                }}>
                                  City
                                </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{p:3}}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2}}
                                    style={{ height: 40}}
                                >
                                    Follow
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3, mb: 2}}
                                    style={{ height: 40,}}
                                >
                                    Send message
                                </Button>
                                </Box>
                            </Grid>

                        </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>

                    </Grid>

            </Grid>


        </Grid>
    );
};

export default observer(HomePage);
