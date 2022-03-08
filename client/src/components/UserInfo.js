import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid} from '@mui/material';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {fetchOneUser} from '../services/UsersService';
import {useParams} from 'react-router-dom';
import {Context} from '../index';

const UserInfo = () => {
    const {id} = useParams()
    const {user} = useContext(Context);



    return (
        <Box sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            mt:5, p: 2,
        }}>
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
                            src="/static/images/avatar/3.jpg"
                            sx={{height: 135, width: 135}}

                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >
                        <Typography variant="h5"  >
                            name
                        </Typography>
                        <Divider sx={{pt:1, mb: 1}} />
                        <Typography variant="body2" sx={{mt:1}}>
                            City
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt:3}}
                            style={{ height: 40}}
                        >
                            Follow
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3}}
                            style={{ height: 40,}}
                        >
                            Send message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserInfo;
