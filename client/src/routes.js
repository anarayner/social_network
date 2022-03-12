import {USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, FEED_ROUTE} from './util/consts';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import FeedPage from './pages/FeedPage';

export const authRoutes =[
    {path: FEED_ROUTE, element: <FeedPage/>},
    {path: USER_ROUTE +'/:id', element: <UserPage/>},
    {path: "*", element: <UserPage/>}
]

export const publicRoutes =[
    {path: LOGIN_ROUTE, element: <LoginPage/>},
    {path: REGISTRATION_ROUTE, element: <RegistrationPage/>},
    {path: "*", element: <LoginPage/>}
]