import React, {useContext} from 'react';
import {Context} from '../index';
import Post from './Post';
import {observer} from 'mobx-react';

const PostsList = observer( () => {
    const {post} = useContext(Context)

    return (
        <>
            {post.posts.map( post =>
                <Post key={post.id} post={post}/>
            )}
        </>
    );
});

export default PostsList;
