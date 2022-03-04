import React, {useContext} from 'react';
import { Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user.isAuth)

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