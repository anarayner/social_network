import {
    USER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    FEED_ROUTE,
    USERS_ROUTE,
    CHAT_ROUTE
} from './util/consts';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import FeedPage from './pages/FeedPage';
import UsersPage from './pages/UsersPage';
import ChatPage from './pages/ChatPage';

export const authRoutes =[
    {path: USERS_ROUTE, element: <UsersPage/>},
    {path: FEED_ROUTE, element: <FeedPage/>},
    {path: USER_ROUTE +'/:id', element: <UserPage/>},
    {path: CHAT_ROUTE , element: <ChatPage/>},
    {path: REGISTRATION_ROUTE, element: <RegistrationPage/>},
    {path: LOGIN_ROUTE, element: <LoginPage/>},
    {path: "*", element: <FeedPage/>}
]

export const publicRoutes =[
    {path: LOGIN_ROUTE, element: <LoginPage/>},
     {path: REGISTRATION_ROUTE, element: <RegistrationPage/>},
    {path: "*", element: <LoginPage/>}
]