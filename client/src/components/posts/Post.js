import React, {useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import {Context} from '../../index';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {red} from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import {CardActions} from '@mui/material';
import LongMenu from './longMenu';

const Post = ({post}) => {
    const {user, posts} = useContext(Context);
    const [postLikes, setPostLikes] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=>{
        setIsLiked(post.likes.includes(user.user.id))
    }, [user.user.id, post.likes])

    console.log(isLiked)
    const handleLike= ()=>{
        const formData = new FormData()
        formData.append('postId', post._id)
        formData.append('userId', user.user.id)
        posts.likePost(formData)
        if(!isLiked) {
            setPostLikes (posts.postLikes + 1)
            setIsLiked (true)
        } else {
            setPostLikes (posts.postLikes - 1)
            setIsLiked (false)
        }

    }

    return (
        <Card sx={{borderRadius: 2, mt: 2}}>
            <CardHeader
                avatar={
                    <Avatar src={'http://localhost:7000/' + post.userId.profilePicture}/>
                }
                action={
                        <LongMenu post={post}/>
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

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>

            <IconButton aria-label="like"
                        onClick={handleLike}
            >
                {postLikes.length > 0 ?
                    <FavoriteIcon sx={{color: red[700]}}/>
                    :
                    <FavoriteIcon/>
                }
            </IconButton>
            <Typography sx={{ml: 1}}>{postLikes.length}</Typography>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            </CardActions>
        </Card>
    );
};

export default observer(Post);
