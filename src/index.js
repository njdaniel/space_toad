import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducers from './reducers';

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);
console.log(store.getState());


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
