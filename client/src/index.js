import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Store from './store/Store';

const store = new Store()

export const Context = createContext({store})

ReactDOM.render(
    <Context.Provider value={{store}}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
);
