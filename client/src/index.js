import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import userStore from './store/userStore';
import postStore from './store/postStore'
import usersStore from './store/usersStore'


const user = new userStore()
const post = new postStore()
const userData = new usersStore()


export const Context = createContext({user, post, userData})

ReactDOM.render(
    <Context.Provider value={{user, post, userData}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
