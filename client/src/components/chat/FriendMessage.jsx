import React from 'react';
import {Avatar, Box, Paper, Typography} from '@mui/material';
import theme from '../../theme';
import Moment from 'react-moment';

const UserMessage = ({message}) => {
    return (
        <Box display="flex" justifyContent="flex-start">
            <Avatar
                alt={`Avatar`}
                src={'http://localhost:7000/' + message.sender.profilePicture}
            />
            <Paper
                sx={{backgroundColor: theme.palette.background.default, boxShadow: 'none', mb:2}} >
                {/*<Typography variant={'body2'}*/}
                {/*            sx={{ml:2}}*/}
                {/*            color="text.secondary">*/}
                {/*    {message.sender.username}*/}
                {/*</Typography>*/}
                <Typography  sx={{backgroundColor: theme.palette.primary.main , color: theme.palette.common.white,
                    p:1,  borderRadius: 1, maxWidth: 350, ml:1

                }}>{message.content}
                </Typography>
                <Typography variant={'caption'}
                            sx={{ml:2}}
                            color="text.secondary">
                    {<Moment fromNow>{message.createdAt}</Moment>}
                </Typography>
            </Paper>
        </Box>
    );
};

export default UserMessage;
