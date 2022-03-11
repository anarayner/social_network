import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useEffect, useState} from 'react';
import {uploadProfilePicture} from '../../services/UsersService';
import {useParams} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import {PhotoCamera} from '@material-ui/icons';

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

export default function ImgUploadModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [file, setFile] = useState(null)
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    const {id} = useParams()
    const addImage = ()=>{
        const formData = new FormData()
        formData.append('profilePicture', file)
        uploadProfilePicture(id, formData).then((data) => setOpen(false))
    }

    return (
        <div>
            <IconButton onClick={handleOpen} color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="img-upload"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form>

                <input type='file' onChange={selectFile} style={{fontSize: 'medium'}}/>
                        <Button variant='contained' disabled={!file} onClick={addImage}> Upload</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}