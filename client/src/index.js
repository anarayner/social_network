import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import userStore from './store/userStore';
import postStore from './store/postStore'
import usersStore from './store/usersStore'
import currentUserStore from './store/currentUserStore';
import commentStore from './store/commentStore';



const user = new userStore()
const posts = new postStore()
const comments = new commentStore()
const usersData = new usersStore()
const currentUser = new currentUserStore()



export const Context = createContext({user, posts, comments, usersData, currentUser})

ReactDOM.render(
    <Context.Provider value={{user, posts, comments, usersData, currentUser}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
