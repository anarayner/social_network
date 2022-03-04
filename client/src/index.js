import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import userStore from './store/userStore';
import postStore from './store/postStore'

const user = new userStore()
const post = new postStore()

export const Context = createContext({user, post})

ReactDOM.render(
    <Context.Provider value={{user, post}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
