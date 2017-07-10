import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducers from './reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  return (action) => {
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);
console.log("STORE: ", store.getState());

store.dispatch = addLoggingToDispatch(store);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
  document.getElementById('root')
);
