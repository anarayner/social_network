import React, {useContext, useEffect} from 'react';
import {Fade, Snackbar} from '@mui/material';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';


function AlertDialog() {

    const {user} = useContext(Context)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            user.checkAuth()
        }
    },[])

    const [state, setState] = React.useState({
        open: true,
        Transition: Fade,
        vertical: 'top',
        horizontal: 'right',
    });
    const handleClose = () => {
        setState({ ...state, open: false });
    };
    return (
        <>
            {user.isAuth?
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="User is authorized"
                    key={state.Transition.name}
                />
                :
                <Snackbar
                    open={state.open}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message="User is not authorized"
                    key={state.Transition.name}
                />

            }
        </>

    );
}

export default observer(AlertDialog)