import React from 'react';
import HomeTopBar from '../components/HomeTopBar';
import {observer} from 'mobx-react-lite';
import {Avatar, Box, Button, Grid} from '@mui/material';

import theme from '../theme/index'
import SideBar from '../components/SideBar';
import {Container, Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {HOME_ROUTE} from '../util/consts';
import UserInfo from '../components/UserInfo';





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
                        <UserInfo/>
                        <CreatePost/>
                        <Post/>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    );
};

export default observer(HomePage);
