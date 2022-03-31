import React, {useContext, useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import ChatAppBar from '../components/sidebar/ChatAppBar';
import {
    Box,
    Grid,
    List, OutlinedInput, Typography,
} from '@mui/material';
import theme from '../theme';
import {Context} from '../index';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import UserMessage from '../components/chat/UserMessage';
import FriendMessage from '../components/chat/FriendMessage';
import {fetchConversavions, fetchMessages, sendMessage} from '../services/ChatService';
import Conversation from '../components/chat/Conversation';
import ListItemButton from '@mui/material/ListItemButton';
import {io} from 'socket.io-client'
const socket = io.connect('http://localhost:7000')



const ChatPage = observer(() => {
    const {user} = useContext(Context);
    const [conversations, setConversations] = useState([])
    const [currentConversation, setCurrentConversation] = useState(null)
    const [messages, setMessages] = useState(null)
    const [newMessage, setNewMessages] = useState('')
    const scrollToMessage = useRef(null)

    console.log(currentConversation)

    useEffect(()=>{
        fetchConversavions(user.user.id).then(data => setConversations(data))
    },[ user])


    useEffect(()=>{
        socket.emit('addUser', user.user.id)
        socket.on('getUsers', data=>{
            // console.log(data)
        })
    },[])
    useEffect(()=>{
        socket.on('message', data=>{
            console.log(data)
            // setMessages((messages) => [...messages, data]);

        })
       },[socket])

    const handleClick = (id) => {
        fetchMessages(id).then(data => setMessages(data))
    }

    const handleSendMessage = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('conversationId', currentConversation._id)
        formData.append('sender', user.user.id)
        formData.append('content', newMessage)

        sendMessage(formData).then(data => setMessages(data))
        setNewMessages('')
        socket.emit('sendMessage', ({
            sender: user.user.id,
            content: newMessage,
            conversation: currentConversation._id,
            createdAt: Date.now()
        }))
    }

    useEffect(()=>{
        scrollToMessage?.current?.scrollIntoView({behavior: 'smooth'})
    },[messages])


    return (
        <div>
        <ChatAppBar/>
                <Grid container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="stretch"
                      sx={{pt: 8}}
                >
                    <Grid item xs={0} sm={4} md={4} lg={2.5}
                          position='sticky'
                    sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                                {/* UserList */}
                        <Box position={'fixed'}  >
                                <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}>

                                    {conversations.map(conversation =>
                                        <ListItemButton key={conversation._id}
                                                        onClick={()=> {
                                                            setCurrentConversation (conversation);
                                                            handleClick(conversation._id)
                                                            socket.emit('joinConversation', conversation._id)
                                                        }}
                                        >
                                        <Conversation conversation={conversation}
                                                      setMessages={setMessages}
                                                      currentConversation={currentConversation}

                                        />
                                        </ListItemButton>
                                    )}
                                </List>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={9.5}
                          sx={{backgroundColor: theme.palette.background.default, minHeight: '80vh' }}
                    >
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
                    </Grid>
                    <Box position={'fixed'}
                         bottom={'0'}
                         boxSizing={'border-box'}
                         sx={{backgroundColor: theme.palette.background.default,
                             p:3, pb:3, width: '100%'
                         }} >
                        {/*<Divider sx={{mb:2}}/>*/}
                        <OutlinedInput
                            sx={{backgroundColor: theme.palette.common.white,}}
                            fullWidth
                            onChange={e => setNewMessages(e.target.value)}
                            value={newMessage}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end"
                                                onClick={handleSendMessage}
                                    >
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            }/>
                    </Box>
                </Grid>
        </div>
    );
});

export default ChatPage;
