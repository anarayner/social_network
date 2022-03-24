import React, {useContext, useState} from 'react';
import Comment from './Comment';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import {styled} from '@mui/material/styles';
import theme from '../../theme';
import LikeButton from './LikeButton';
import {Box, Divider, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {Context} from '../../index';
import {observer} from 'mobx-react';
import {runInAction} from 'mobx';

;


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})({
    transform:  'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
});


const PostComments = ({post}) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [input, setInput] = useState('')
    const [postComments, setPostComments] = useState(post.comments)
    // console.log(postComments)
    const {user, posts} = useContext(Context);
    const addComment = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('content', input)
        formData.append('postId', post._id)
        formData.append('userId', user.user.id)
        posts.uploadComment(formData).then((comment)=> {
            setInput('')
            // console.log(comment)
            runInAction(()=> {
                postComments.push (comment)
            })
        })
    }

    return (
        <>
        <CardActions disableSpacing>
            <LikeButton post={post}/>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >

                <ExpandMoreIcon />
            </ExpandMore>
            <Typography sx={{pr:1, pl:1}}>{post.comments.length} comments </Typography>

        </CardActions>

            <Collapse in={expanded}
                  sx={{pb:1, pl:2, pr:2}}
                  timeout="auto" unmountOnExit>
                <Divider/>
                {postComments.map(comment =>
                    <Comment key={comment._id}
                             comment={comment}
                             postComments={postComments}
                    />
                )}

                <TextField
                    size='small'
                    fullWidth
                    multiline
                    value={input}
                    onChange={(e) => setInput(values => e.target.value )}
                />
                <Box sx={{
                    display: 'flex',
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}>
                    <Button variant='contained'
                            sx={{mt:1, display: 'flex-end'}}
                            disabled={ !(input)}
                            onClick={addComment}>
                        Comment
                    </Button>
                </Box>

            </Collapse>
        </>
    );
};

export default observer(PostComments);
