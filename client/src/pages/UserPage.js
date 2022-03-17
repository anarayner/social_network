import React, {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
    Box,
    Container,
    Grid,
    Paper,
} from '@mui/material';
import UserInfo from '../components/UserInfo';
import {Context} from '../index';
import SideBar from '../components/sidebar/SideBar';
import PostsList from '../components/PostsList';
import {
    checkFollow,
    fetchOneUser,
    fetchUserFollowers,
    fetchUserFollowing,
    fetchUsers,
    follow
} from '../services/UsersService';
import UserList from '../components/UserList';
import {useParams} from 'react-router-dom';
import theme from '../theme';
import UserFollow from '../components/UserFollow';
import {Typography} from '@material-ui/core';
import CreatePostButton from '../components/profile/CreatePostButton';


const UserPage = observer(() => {
    const {posts, usersData, currentUser} = useContext(Context);
    const {id} = useParams()

    const [userFollowing, setUserFollowing] = useState([])
    const [userFollowers, setUserFollowers] = useState([])
    const [bool, setBool] = useState([])



    useEffect(()=>{
        usersData.fetchUsers()
        currentUser.fetchOneUser(id)
        posts.fetchProfilePosts(id)
        fetchUserFollowing(id).then(data =>{
            setUserFollowing(data)})
        fetchUserFollowers(id).then(data =>{
            setUserFollowers(data)})
        checkFollow(id).then(data =>{
            setBool(data)})
    },[id])




    return (
        <Box sx={{display: 'flex', minHeight: '100vh'}}>
            <Grid container spacing={3} sx={{backgroundColor: theme.palette.background.default}}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                   <SideBar />
                </Grid>

                <Grid item xs={6} sm={8} md={9} lg={10}
                      sx={{ ml:30}}
                >
                      <Container  sx={{ mt: 10, mb: 4}}>
                          <Grid container spacing={3}>
                       {/* Posts */}
                       <Grid item xs={12} md={10} lg={9} >
                           <UserInfo  bool={bool} />
                           <CreatePostButton/>
                           <PostsList posts={posts} />
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
                           <Paper
                               sx={{
                                   p: 2, mt:2,
                                   display: 'flex',
                                   flexDirection: 'column',
                               }}
                           >
                               <Typography variant="body1"  >
                                   You follow
                               </Typography>
                               <UserFollow props={userFollowing}/>
                           </Paper>
                           <Paper
                               sx={{
                                   p: 2, mt:2,
                                   display: 'flex',
                                   flexDirection: 'column',
                               }}
                           >
                               <Typography variant="body1"  >
                                   Your followers
                               </Typography>
                               <UserFollow props={userFollowers}/>
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
