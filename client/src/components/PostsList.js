import React, {useContext, useEffect, useState} from 'react';
import Post from './Post';
import {observer} from 'mobx-react';
import {fetchOneUser} from '../services/UsersService';
import {useParams} from 'react-router-dom';
import {fetchProfilePosts} from '../services/PostService';
import {Context} from '../index';

const PostsList = observer( () => {
    let {id} = useParams()
    const {posts} = useContext(Context);

    return (
        <>
            {posts.posts.map( post =>
                <Post key={post._id} post={post} id={id} />
            )}
        </>
    );
});

export default PostsList;
