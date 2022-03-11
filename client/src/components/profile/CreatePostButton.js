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
import theme from '../../theme';
import {styled} from '@mui/system';
import {grey} from '@mui/material/colors';
import {Card, FormControl, Input, TextField} from '@mui/material';
import PostInput from '../UI/PostInput';

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
const ColorButton = styled(Button, {})({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
        backgroundColor: grey[300],
        boxShadow: 'none'

    },
});
export default function CreatePostButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [file, setFile] = useState(null)
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    console.log(file)
    const {id} = useParams()
    const addImage = ()=>{
        const formData = new FormData()
        formData.append('profilePicture', file)
        uploadProfilePicture(id, formData).then((data) => setOpen(false))
    }

    return (
        <Card sx={{
            backgroundColor: '#fff',
            mt: 2,
            borderRadius: 2,
            height: 70,
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
        }}>

            <ColorButton
                onClick={handleOpen}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    borderRadius: 10,
                    backgroundColor: theme.palette.grey['200'],
                    ml: 2,
                    boxShadow: 'none'
                }}
                style={{ height: 40}}
            >
                hello
            </ColorButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="img-upload"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form>
                        <FormControl sx={{height: 300, width: 300}}>
                            <TextField sx={{height: 200}}/>
                        </FormControl>

                <input type='file' onChange={selectFile} style={{fontSize: 'medium'}}/>
                        <Button variant='contained' disabled={!file} onClick={addImage}> Upload</Button>
                    </form>
                </Box>
            </Modal>
        </Card>
    );
}