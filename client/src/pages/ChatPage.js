import React, {useContext, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import ChatAppBar from '../components/sidebar/ChatAppBar';
import {
    Box,
    Divider,
    Grid,
    List, OutlinedInput, Paper, TextField, Typography,
} from '@mui/material';
import theme from '../theme';
import {Context} from '../index';
import ChatUserList from '../components/chat/ChatUserList';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import UserMessage from '../components/chat/UserMessage';
import FriendMessage from '../components/chat/FriendMessage';





const ChatPage = observer(() => {
    const {user, posts, usersData} = useContext(Context);

    useEffect(()=>{
        posts.fetchPosts()
        usersData.fetchUsers()
    },[ posts, usersData])

    return (
        <div>
        <ChatAppBar/>
                <Grid container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="stretch"
                      sx={{pt: 8}}
                >
                    <Grid item xs={0} sm={4} md={3} lg={3}
                          position='sticky'
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                                {/* UserList */}
                        <Box>
                            <List component='nav' sx={{md: {minHeight: '80vh'}}}>
                               <ChatUserList/>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={8} md={9} lg={9}
                          sx={{backgroundColor: theme.palette.background.default}}
                    >
                                {/* xgat */}
                        <Grid container
                              direction="column"
                              sx={{p:5}}
                        >
                            <Grid item xs={11} sm={11} md={11} lg={11} sx={{minHeight: '80vh'}} >
                                <List component='nav'  >


                                 <FriendMessage props={'Hello'}/>
                                 <UserMessage props={'How r you'}/>
                               </List>
                            </Grid>

                            <Grid item xs={1} sm={1} md={1} lg={1}

                            >
                                <Divider sx={{mb:2}}/>

                                <OutlinedInput
                                    sx={{backgroundColor: theme.palette.common.white}}
                                    fullWidth
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end">
                                                <SendIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
        </div>
    );
});

export default ChatPage;
