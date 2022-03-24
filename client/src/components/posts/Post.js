import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import PostComments from './PostComments';
import {Box} from '@mui/material';
import ItemMenu from './ItemMenu';

const Post = ({post}) => {

    return (
        <Card sx={{borderRadius: 2, mt: 2}}>
            <CardHeader
                avatar={
                    <Avatar src={'http://localhost:7000/' + post.userId.profilePicture}/>
                }
                action={
                        <ItemMenu props={post}/>
                }
                title={post.userId.username}
                subheader={<Moment fromNow>{post.createdAt}</Moment>}
            />
            {post.img?
                <CardMedia
                    component="img"
                    height="400"
                    image={'http://localhost:7000/' + post.img}
                    alt="img"
                />
                :
                <></>
            }

            <Box sx={{ml:3, mr:3, mt: 2}}>
                <Typography variant="body2" color="text.secondary" >
                    {post.content}
                </Typography>
            </Box>

            <PostComments post={post}/>
        </Card>
    );
};

export default observer(Post);
