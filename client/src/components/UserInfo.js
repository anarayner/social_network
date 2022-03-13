import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid} from '@mui/material';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {useParams} from 'react-router-dom';
import {Context} from '../index';
import {observer} from 'mobx-react';
import ImgUploadModal from './profile/imgUploadModal';

const UserInfo =observer (({userInfo}) => {
        const {id} = useParams()
        const {user} = useContext(Context);

        return (
        <div>
                <div key={userInfo.id}>
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
                            src={'http://localhost:7000/' + userInfo.profilePicture}
                            sx={{height: 135, width: 135}}

                        />

                    </Box>
                    <ImgUploadModal/>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ml:3}}>

                            <Typography variant="body1"  >
                                {userInfo.username}
                            </Typography>
                        <Divider sx={{pt:1, mb: 1}} />

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
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{mt: 3}}
                                    size='small'
                                >
                                    Follow
                                </Button>
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

        </div>

    )

}
)

export default UserInfo;
