import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import merchantReducer from './store/reducers/merchantReducer';
import characterReducer from './store/reducers/characterReducer';
import generalReducer from './store/reducers/generalReducer';
import areaReducer from './store/reducers/areaReducer';



const rootReducer = combineReducers({
    merchantReducer: merchantReducer,
    characterReducer: characterReducer,
    generalReducer: generalReducer,
    areaReducer: areaReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
