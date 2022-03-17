import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid, Paper} from '@mui/material';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {useParams} from 'react-router-dom';
import {Context} from '../index';
import {observer} from 'mobx-react';
import ImgUploadModal from './profile/imgUploadModal';
import FollowButton from './profile/FollowButton';


const UserInfo =observer (({bool}) => {
        const {id} = useParams()
        const {user} = useContext(Context);
        const {posts, currentUser} = useContext(Context);
        console.log(currentUser.currentUser.followers)
   // if(CurrentUser.followers){
   //     console.log(CurrentUser.following.length)
   // }


        return (
        <Paper>
                <div key={currentUser.currentUser.id}>
        <Box sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            mt:5, p: 2,
        }}
        >
            <Grid container spacing={3} direction='row'>
                <Grid item sm={12} md={3}>
                    <Box sx={{
                        height: 150,
                        width: 150,
                        mt: -5,
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
                            src={'http://localhost:7000/' + currentUser.currentUser.profilePicture}
                            sx={{height: 135, width: 135}}

                        />

                    </Box>
                    <ImgUploadModal/>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ml:3}}>

                            <Typography variant="body1"  >
                                {currentUser.currentUser.username}
                            </Typography>
                        <Divider sx={{pt:1, mb: 1}} />
                        <Grid container spacing={3}  sx={{mt: 1}}>
                            <Grid item sm={12} md={4}  >
                                <Box sx={{display: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                }}>
                                <Typography variant="h3" color='textSecondary'>
                                    2
                                </Typography>
                                <Typography variant="body2" color='textSecondary'>
                                    follower
                                </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <Box sx={{display: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}>
                                    <Typography variant="h3" color='textSecondary'>
                                        2
                                    </Typography>
                                    <Typography variant="body2" color='textSecondary' align='center'>
                                        following
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={12} md={4}>
                                <Box sx={{display: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}>
                                    <Typography variant="h3" color='textSecondary' >{posts.posts.length}</Typography>
                                    <Typography variant="body2" color='textSecondary' align='center'>
                                        posts
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box>
                        {user.user.id === id?
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{mt: 3}}
                                size='small'

                            >
                                Edit Profile
                            </Button>
                            :
                            <>
                                <FollowButton bool={bool}/>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{mt: 3}}
                                    size='small'

                                >
                                    Send message
                                </Button>
                            </>
                        }

                    </Box>
                </Grid>
            </Grid>



        </Box>
                </div>

        </Paper>

    )

}
)

export default UserInfo;
