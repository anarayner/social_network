import React, {useEffect, useState} from 'react';
import Post from './Post';
import {observer} from 'mobx-react';
import {fetchOneUser} from '../services/UsersService';
import {useParams} from 'react-router-dom';
import {getProfilePosts} from '../services/PostService';

const PostsList = observer( () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getProfilePosts(id).then(data =>{
            setPosts(data)})

    },[id])

    return (
        <>
            {posts.map( post =>
                <Post key={post._id} post={post} id={id}/>
            )}
        </>
    );
});

export default PostsList;
