import React, {useContext, useEffect, useState} from 'react';
import {Avatar, Box, Button, Grid} from '@mui/material';
import {Typography} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {useParams} from 'react-router-dom';
import {Context} from '../index';
import {observer} from 'mobx-react';
import {fetchOneUser} from '../services/UsersService';
import ImgUploadModal from './profile/imgUploadModal';

const UserInfo =observer (() => {
        const {id} = useParams()
        const {user} = useContext(Context);

        const [userInfo, setUserInfo] = useState([])
        useEffect(()=>{
                // if(id === undefined) {
                //     let id = user.user.id
                //     return id
                // }
                fetchOneUser(id).then(data => {
                    console.log(data)
                    setUserInfo(data)
                })
        },[id])
        console.log(user.user.id)
        console.log()


        return (
        <div>
            {userInfo.map((user)=>
                <div key={user._id}>
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
                            src={'http://localhost:7000/' + user.profilePicture}
                            sx={{height: 135, width: 135}}

                        />
                        </Box>
                    <ImgUploadModal/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >

                            <Typography variant="h5"  >
                                {user.username}
                            </Typography>
                        <Divider sx={{pt:1, mb: 1}} />

                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{mt: 3}}
                            style={{height: 40}}
                        >
                            Follow
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{mt: 3}}
                            style={{height: 40,}}
                        >
                            Send message
                        </Button>
                    </Box>
                </Grid>
            </Grid>



        </Box>
                </div>
            )}

        </div>

    )

}
)

export default UserInfo;
