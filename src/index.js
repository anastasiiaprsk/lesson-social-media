import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './components/state/redux-store'
import App from "./App";
import './index.css';
import reportWebVitals from './reportWebVitals';



let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state = {state}
                 dispatch = {store.dispatch.bind(store)} store = {store}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState()) // R

// мы прокидываем функц
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
