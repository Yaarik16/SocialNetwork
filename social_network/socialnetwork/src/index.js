import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    
    root.render(
        <React.StrictMode>
            <BrowserRouter>
            <Provider store={store}>
            <App state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} />
            </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);