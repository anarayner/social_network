import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from 'react';
import {uploadPost} from '../../services/UsersService';
import {useParams} from 'react-router-dom';
import theme from '../../theme';
import {styled} from '@mui/system';
import {grey} from '@mui/material/colors';
import {Card, TextField} from '@mui/material';

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

    const [input, setInput] = useState(null)
    const [file, setFile] = useState(null)
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }


    const {id} = useParams()
    const addPost = ()=>{
        const formData = new FormData()
        formData.append('content', input)
        formData.append('img', file)
        formData.append('userId', id)
        uploadPost(formData).then((data) => setOpen(false))
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
                ADD POST
            </ColorButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <form>
                       <TextField fullWidth
                                  multiline
                                  onChange={(e) => setInput(values => e.target.value )}
                                  sx={{mb:2}}/>

                <input type='file' onChange={selectFile} style={{fontSize: 'medium'}}/>
                        <Button variant='contained' disabled={ !(input || file)} onClick={addPost}> Post</Button>
                    </form>
                </Box>
            </Modal>
        </Card>
    );
}