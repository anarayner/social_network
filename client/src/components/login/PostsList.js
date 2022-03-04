import React, {useContext} from 'react';
import {Context} from '../../index';
import Post from '../Post';
import {observer} from 'mobx-react';

const PostsList = observer( () => {
    const {post} = useContext(Context)
    return (
        <div>
            {post.posts.map( post =>
                <Post key={post.id} post={post}/>
            )}
        </div>
    );
});

export default PostsList;
