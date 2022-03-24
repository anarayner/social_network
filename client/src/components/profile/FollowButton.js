import React, {useContext, useEffect} from 'react';
import {Button} from '@mui/material';
import {useParams} from 'react-router-dom';
import {Context} from '../../index';
import {observer} from 'mobx-react';




const FollowButton = () => {
    const {user, currentUser} = useContext(Context)
    const {id} = useParams()
    useEffect(()=>{
            currentUser.checkFollow(id)
    },[id])

    const handleFollow= ()=>{
        const formData = new FormData()
        formData.append('id', user.user.id)
        currentUser.follow(id, formData)
    }
    const handleUnfollow = () => {
        const formData = new FormData()
        formData.append('id', user.user.id)
        currentUser.unfollow(id, formData)
    }

    return (
        <>
            {currentUser.followed?
                <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{mt: 3}}
                    size='small'
                    onClick={handleUnfollow}
                >
                    Unfollow
                </Button>
                :
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{mt: 3}}
                    size='small'
                    onClick={handleFollow}
                >
                    Follow
                </Button>
            }
        </>

    );
};

export default observer(FollowButton);
