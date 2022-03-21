import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useContext} from 'react';
import {Context} from '../index';
import Typography from '@mui/material/Typography';
import {observer} from 'mobx-react';
import {USER_ROUTE} from '../util/consts';
import {useNavigate} from 'react-router-dom';
import {Divider} from '@mui/material';

const UserList = observer(()=> {
    const {usersData} = useContext(Context);
    const navigate = useNavigate()



    return (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {usersData.users.map((user) => {
                return (
                    <div key={user._id+1}>
                    <ListItem
                        key={user._id}
                        disablePadding
                        onClick={() => navigate(USER_ROUTE +'/' + user._id)}
                    >
                        <ListItemButton >
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
                        <Divider sx={{mt: 1, mb: 1}}/>
                    </div>
                );
            })}
        </List>
    );
})

export default UserList;
