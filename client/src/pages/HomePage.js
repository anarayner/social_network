import React, {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
    Box,
    Container,
    Grid,
    Paper,
} from '@mui/material';

import UserInfo from '../components/UserInfo';
import CreatePost from '../components/CreatePost';
import {Context} from '../index';
import SideBar from '../components/SideBar';
import PostsList from '../components/login/PostsList';
import {getPostList} from '../http/PostAPI';


const HomePage = () => {
    const {user, post} = useContext(Context);
    useEffect(()=>{
        getPostList().then(data =>post.setPosts(data))
    },[])
    console.log(user.isAuth)

    return (
        <Box sx={{display: 'flex', minHeight: '100vh'}}>
         <SideBar/>

            <Container  sx={{ mt: 10, mb: 4,  }}>
                <Grid container spacing={3}>
                    {/* Posts */}
                    <Grid item xs={12} md={8} lg={9}>
                        <UserInfo />
                        <CreatePost/>
                        <PostsList/>
                    </Grid>
                    {/* message */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 300,
                            }}
                        >
                        </Paper>
                    </Grid>
                    </Grid>
            </Container>
        </Box>
    );
};

export default observer(HomePage);
