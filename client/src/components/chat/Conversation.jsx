import React, {useContext, useEffect, useState} from 'react';
import {
    Avatar, CircularProgress,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import {Context} from '../../index';

const Conversation = ({conversation}) => {
    const {user} = useContext(Context);

    const [member, setMember] = useState(null)

    useEffect(()=>{
        const member = conversation.members.filter(m => m._id !== user.user.id)
        setMember(member)
    },[ user])

    return (
                <ListItem alignItems="flex-start">
                        {!member ?
                            <CircularProgress/>
                            :
                            <>
                            <ListItemAvatar>

                                <Avatar
                                    alt={`Avatar`}
                                    src={'http://localhost:7000/' + member[0].profilePicture}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={member[0].username}
                                          sx={{mt:2}}
                            />
                            </>
                        }
                  </ListItem>
    );
};

export default Conversation;
