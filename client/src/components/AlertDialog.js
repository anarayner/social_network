import React, {useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogContentText} from '@mui/material';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';


function AlertDialog() {

    const {store} = useContext(Context)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    },[])
    const [open, setOpen] = React.useState (true);

    const handleClickOpen = () => {
        setOpen (true);
    };

    const handleClose = () => {
        setOpen (false);
    };
    return (
        <>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {store.isAuth?
                        <DialogContentText id="alert-dialog-description">
                            User is authorized
                        </DialogContentText>
                        :
                        <DialogContentText id="alert-dialog-description">
                            User is not authorized
                        </DialogContentText>
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}

export default observer(AlertDialog)