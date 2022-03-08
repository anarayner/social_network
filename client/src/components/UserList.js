import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import {useContext} from 'react';
import {Context} from '../index';
import Typography from '@mui/material/Typography';
import {observer} from 'mobx-react';
import {USER_ROUTE} from '../util/consts';
import {useNavigate} from 'react-router-dom';

const UserList = observer(()=> {
    const {userData} = useContext(Context);
    const navigate = useNavigate()

    return (
        <List dense sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
            {userData.users.map((user) => {
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
                                    src={`/static/images/avatar/1.jpg`}
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

export default UserList;