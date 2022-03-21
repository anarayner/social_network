import React, {useContext} from 'react';
import Post from './Post';
import {observer} from 'mobx-react';
import {Context} from '../../index';

const PostsList = observer( () => {
    const {posts} = useContext(Context);

    return (
        <>
            {posts.posts.map( post =>
                <Post key={post._id} post={post} />
            )}
        </>
    );
});

export default PostsList;
