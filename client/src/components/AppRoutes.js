import React, {useContext, useEffect} from 'react';
import { Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import socket from '../socket';


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    // useEffect (() => {
    //     socket.auth = {user}
    //     socket.connect()
    //     // console.log(socket)
    // }, [user]);


    return (
            <Routes>
                {user.isAuth?
                    authRoutes.map(({path, element}) =>
                            <Route key={'1'} path={path} element={element} />
                        )
                 :
                    publicRoutes.map(({path, element}) =>
                            <Route key={'2'} path={path} element={element} />
                        )
                }
            </Routes>

    );
};

export default observer(AppRouter);