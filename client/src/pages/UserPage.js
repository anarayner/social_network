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
import PostsList from '../components/PostsList';
import {fetchOneUser, fetchUsers} from '../services/UsersService';
import UserList from '../components/UserList';
import {useParams} from 'react-router-dom';
import theme from '../theme';


const UserPage = observer(() => {
    const {user, usersData} = useContext(Context);
    const {id} = useParams()
        console.log(id)
        useEffect(()=>{
            // fetchOneUser(user.user._id).then(data => {
            //     console.log(data)
            //     user.setUser(data)})
        fetchUsers().then(data =>{
            usersData.setUsers(data)})
    },[])


    console.log(user)

    return (
        <Box sx={{display: 'flex', minHeight: '100vh'}}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                   <SideBar/>
                </Grid>

                <Grid item xs={6} sm={8} md={9} lg={10}
                      sx={{ ml:30}}
                >
                      <Container  sx={{ mt: 10, mb: 4, backgroundColor: theme.palette.background.default}}>
                          <Grid container spacing={3}>
                       {/* Posts */}
                       <Grid item xs={12} md={10} lg={9} >
                           <UserInfo />
                           <CreatePost/>
                           <PostsList/>
                       </Grid>
                       {/* message */}
                       <Grid item xs={12} md={2} lg={3}>
                           <Paper
                               sx={{
                                   p: 2,
                                   display: 'flex',
                                   flexDirection: 'column',
                               }}
                           >
                               <UserList/>
                           </Paper>
                       </Grid>
                       </Grid>
               </Container>
                </Grid>
            </Grid>
        </Box>
    );
});

export default UserPage;
