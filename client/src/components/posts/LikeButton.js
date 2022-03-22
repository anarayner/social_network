import React, {useContext, useEffect, useState} from 'react';
import {CardActions} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {red} from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import {Context} from '../../index';

const LikeButton = ({post}) => {
    const {user, posts} = useContext(Context);

    const [postLikes, setPostLikes] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=>{
        setIsLiked(post.likes.includes(user.user.id))
    }, [user.user.id, post.likes])

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

        </CardActions>
    );
};

export default LikeButton;
