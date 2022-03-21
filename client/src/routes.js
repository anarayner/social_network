import {USER_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, FEED_ROUTE, USERS_ROUTE, TEST_ROUTE} from './util/consts';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import FeedPage from './pages/FeedPage';
import UsersPage from './pages/UsersPage';
import TestPage from './pages/Test';

export const authRoutes =[
    {path: USERS_ROUTE, element: <UsersPage/>},
    {path: FEED_ROUTE, element: <FeedPage/>},
    {path: USER_ROUTE +'/:id', element: <UserPage/>},
    {path: TEST_ROUTE , element: <TestPage/>},
    // {path: "*", element: <TestPage/>}
]

export const publicRoutes =[
    {path: LOGIN_ROUTE, element: <LoginPage/>},
     {path: REGISTRATION_ROUTE, element: <RegistrationPage/>},
    {path: "*", element: <LoginPage/>}
]