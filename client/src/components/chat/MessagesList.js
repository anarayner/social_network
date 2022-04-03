import React, {useContext, useEffect, useRef} from 'react';
import {Box, Typography} from '@mui/material';
import UserMessage from './UserMessage';
import FriendMessage from './FriendMessage';
import {Context} from '../../index';

const MessagesList = ({messages}) => {
    const {user} = useContext(Context);
    const scrollToMessage = useRef(null)

    useEffect(()=>{
        scrollToMessage?.current?.scrollIntoView({behavior: 'smooth'})
    },[messages])
    return (
        <Box sx={{pr:5, pl:5, mb:12}}>
            {!messages?
                <Typography variant={'h1'} color="text.secondary">No conversation opened</Typography>
                :
                messages.map(message => {
                    if(message.sender._id == user.user.id){
                        return <div ref={scrollToMessage} key={message._id}>
                            <UserMessage message={message} />
                        </div>
                    } else return  <div ref={scrollToMessage} key={message._id}>
                        <FriendMessage message={message} />
                    </div>
                })}
        </Box>
    );
};

export default MessagesList;
