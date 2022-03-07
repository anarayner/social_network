import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import userStore from './store/userStore';
import postStore from './store/postStore'
import usersStore from './store/usersStore'


const user = new userStore()
const post = new postStore()
const users = new usersStore()


export const Context = createContext({user, post, users})

ReactDOM.render(
    <Context.Provider value={{user, post, users}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
