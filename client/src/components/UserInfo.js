import React from 'react';
import {Avatar, Box, Button, Grid} from '@mui/material';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';

const UserInfo = () => {
    return (
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
