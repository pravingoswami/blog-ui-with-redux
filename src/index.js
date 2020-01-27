import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {startGetUSers} from './actions/users'
import {startGetPosts} from './actions/posts'
import {startGetImages} from './actions/images'
import {startGetComments} from './actions/comments'
import configureStore from './store/consfigureStore'

const store = configureStore()

store.subscribe( () => {
    console.log(store.getState())
})


store.dispatch(startGetUSers())
store.dispatch(startGetPosts())
store.dispatch(startGetImages())
store.dispatch(startGetComments())

console.log(store.getState())

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
