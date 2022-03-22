import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import {Divider, ListItem, ListItemAvatar, ListItemText, Paper} from '@mui/material';

const Comment = ({comment}) => {
    console.log(comment)

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


        </ListItem>


    <Divider variant="inset"  sx={{mb:2}} />
        </>
    );
};

export default observer(Comment);
