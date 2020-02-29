import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import merchantReducer from './store/reducers/merchantReducer';
import rewardReducer from './store/reducers/rewardReducer';
import monsterReducer from './store/reducers/monsterReducer';
import characterReducer from './store/reducers/characterReducer';
import generalReducer from './store/reducers/generalReducer';



const rootReducer = combineReducers({
    merchantReducer: merchantReducer,
    rewardReducer: rewardReducer,
    monsterReducer: monsterReducer,
    characterReducer: characterReducer,
    generalReducer: generalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
