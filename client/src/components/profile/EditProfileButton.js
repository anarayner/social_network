import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {TextField} from '@mui/material';
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

export default function EditProfileButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [work, setWork] = useState('')
    const [description, setDescription] = useState('')


    const {posts, currentUser} = useContext(Context);

    const {id} = useParams()
    const addPost = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', name)
        formData.append('city', city)
        formData.append('work', work)
        formData.append('description', description)
        currentUser.updateUser(id, formData).then(() => setOpen(false))
    }


    return (
        <>

            <Button
                onClick={handleOpen}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{mt: 3}}
                size='small'
            >
                Edit Profile
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form>

                        <TextField fullWidth
                                   label="Name"
                                   onChange={(e) => setName(values => e.target.value )}
                                   sx={{mb:2}}/>
                        <TextField fullWidth
                                   label="City"
                                   onChange={(e) => setCity(values => e.target.value )}
                                   sx={{mb:2}}/>
                        <TextField fullWidth
                                   label="Work"
                                   onChange={(e) => setWork(values => e.target.value )}
                                   sx={{mb:2}}/>
                        <TextField fullWidth
                                   multiline
                                   label="BIO"
                                   onChange={(e) => setDescription(values => e.target.value )}
                                   sx={{mb:2}}/>

                        <Button variant='contained' disabled={ !(name || city || work || description)} onClick={addPost}> Update</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}