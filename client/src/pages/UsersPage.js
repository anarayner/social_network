import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {
    Box,
    Container,
    Grid,
    Paper,
} from '@mui/material';
import {Context} from '../index';
import SideBar from '../components/sidebar/SideBar';
import UserList from '../components/UserList';
import theme from '../theme';


const UsersPage = observer(() => {
    const {posts, usersData} = useContext(Context);

        useEffect(()=>{
            posts.fetchPosts()
            usersData.fetchUsers()
        },[posts, usersData])


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
                       <Grid item xs={12} md={12} lg={12} >
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
                       {/* message */}
                       {/*<Grid item xs={12} md={2} lg={3}>*/}

                       {/*</Grid>*/}
                       </Grid>
               </Container>
                </Grid>
            </Grid>
        </Box>
    );
});

export default UsersPage;
