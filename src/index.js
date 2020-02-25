import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers} from 'redux';
import merchantReducer from './store/reducers/merchantReducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    merchantReducer: merchantReducer,
});

const store = createStore(rootReducer)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
