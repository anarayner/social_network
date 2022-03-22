import React, {useContext, useEffect} from 'react';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import {styled} from '@mui/material/styles';
import theme from '../../theme';
import LikeButton from './LikeButton';
import {Divider, TextField, Typography} from '@mui/material';
import Post from './Post';
import {Context} from '../../index';
import Comment from './Comment';


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
console.log(post)

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
                  sx={{pb:2, pl:2, pr:2}}
                  timeout="auto" unmountOnExit>
                <Divider sx={{mb:2}}/>
                {post.comments.map(comment =>
                    <Comment key={comment._id} comment={comment} />
                )}

                {/*<Divider sx={{mb:2, mt:2}}/>*/}
                <TextField
                    size='small'
                    fullWidth
                    multiline
                    />
        </Collapse>
        </>
    );
};

export default PostComments;
