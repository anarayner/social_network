import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from './util/consts';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';



export const authRoutes =[
    {path: HOME_ROUTE, element: <HomePage/>},
    {path: "*", element: <LoginPage/>}
]

export const publicRoutes =[
    {path: LOGIN_ROUTE, element: <LoginPage/>},
    {path: REGISTRATION_ROUTE, element: <RegistrationPage/>},
    {path: "*", element: <LoginPage/>}
]