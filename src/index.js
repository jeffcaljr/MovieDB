import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter} from 'react-router-dom'

import reducer from './reducers/index'
import asyncMiddleware from './middleware/AsyncMiddleware'
import './index.css';
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer,  applyMiddleware(asyncMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
