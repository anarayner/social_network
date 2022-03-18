import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useContext, useEffect, useState} from 'react';
import {Context} from '../index';
import Typography from '@mui/material/Typography';
import {observer} from 'mobx-react';
import {USER_ROUTE} from '../util/consts';
import {useNavigate, useParams} from 'react-router-dom';

const UserFollow = observer(({props})=> {
    const {id} = useParams()
    const navigate = useNavigate()
    const { currentUser} = useContext(Context);



    return (
        <List dense sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            {props.map((user) => {
                return (
                    <ListItem
                        key={user._id}
                        disablePadding
                        onClick={() => navigate(USER_ROUTE +'/' + user._id)}
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar`}
                                    src={'http://localhost:7000/' + user.profilePicture}
                                />
                            </ListItemAvatar>
                            <Typography variant="body2" color="text.secondary">
                                {user.username}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
})

export default UserFollow;
