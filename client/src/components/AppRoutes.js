import React, {useContext} from 'react';
import { Route, Routes} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';


const AppRouter = () => {
    const {store} = useContext(Context)
    console.log(store.isAuth)

    return (
            <Routes>
                {store.isAuth?
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