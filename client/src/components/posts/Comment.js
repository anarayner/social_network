import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import {Divider, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import ItemMenuComment from './ItemMenuComment';

const Comment = ({comment, postComments}) => {

    return (
        <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={'http://localhost:7000/' + comment.userId.profilePicture}/>
            </ListItemAvatar>
            <ListItemText
                primary={comment.userId.username}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        > {<Moment fromNow>{comment.createdAt}</Moment>}
                        </Typography>
                        <br/>
                        {comment.content}
                    </React.Fragment>
                }
            />
            <ItemMenuComment comment={comment} postComments={postComments}/>

        </ListItem>
    <Divider variant="inset"  />
        </>
    );
};

export default observer(Comment);
