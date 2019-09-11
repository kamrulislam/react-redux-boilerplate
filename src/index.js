import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
// import { createStore } from 'redux';
// import store from './reducers';
// import rootReducer from './reducers';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from './middleware/logger';
// import monitorReducerEnhancer from './enhancers/monitorReducer';



import * as serviceWorker from './serviceWorker';

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
// const composedEnhancers = compose(
//   middlewareEnhancer,
//   monitorReducerEnhancer
// );

// const store = createStore(rootReducer, undefined, composedEnhancers);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
