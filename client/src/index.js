import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import userStore from './store/userStore';
import postStore from './store/postStore'
import usersStore from './store/usersStore'
import currentUserStore from './store/currentUserStore';


const user = new userStore()
const posts = new postStore()
const usersData = new usersStore()
const currentUser = new currentUserStore()



export const Context = createContext({user, posts, usersData, currentUser})

ReactDOM.render(
    <Context.Provider value={{user, posts, usersData,currentUser}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
