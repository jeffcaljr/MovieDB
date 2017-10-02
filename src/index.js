import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'


import reducer from './reducers/index'
import asyncMiddleware from './middleware/AsyncMiddleware'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer,  applyMiddleware(asyncMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
