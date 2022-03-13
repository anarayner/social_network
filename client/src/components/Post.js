import React, {useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostComments from './PostComments';
import {fetchOneUser} from '../services/UsersService';
import {useParams} from 'react-router-dom';
import { toJS } from 'mobx'

const Post = ({post}) => {
    let {id} = useParams()
    const [postUser, setPostUser] = useState([])

    useEffect(()=>{
        fetchOneUser(post.userId).then(data => {
            setPostUser(data[0])})
    },[id])
    console.log(toJS(post.userId))

    return (
        <Card sx={{borderRadius: 2, mt: 2}}>
            <CardHeader
                avatar={
                    <Avatar src={'http://localhost:7000/' + postUser.profilePicture}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={postUser.username}
                subheader="March 3, 2022"
            />

            <CardMedia
                component="img"
                height="400"
                image={'http://localhost:7000/' + post.img}
                alt="img"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>
            </CardContent>
            <PostComments/>

        </Card>
    );
};

export default Post;
