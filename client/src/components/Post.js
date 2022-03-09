import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PostComments from './PostComments';
import {Image} from '@material-ui/icons';

const Post = ({post}) => {
console.log(post.img)
    return (
        <Card sx={{borderRadius: 2, mt: 2}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.createdBy}
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
