import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useContext, useState} from 'react';
import UserFollow from './UserFollow';
import {Typography} from '@material-ui/core';
import {Button} from '@mui/material';
import {Context} from '../../index';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 10,
    borderRadius:5,
    p: 4,
};

export default function FollowingModal({userFollowing}) {
    const {currentUser} = useContext(Context);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <Typography variant="h3" color='textSecondary'>
                    {currentUser.userFollowing.length}
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="img-upload"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <UserFollow props={userFollowing} setOpen={setOpen} />
                </Box>
            </Modal>
        </div>
    );
}