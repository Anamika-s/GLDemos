import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './store';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import { counterReducer } from './seconddemo/counterReducer';
import App1 from './seconddemo/App1';
import App2 from './ApiCallsDemo/App';
import logger from "redux-logger"
import postReducers from './ApiCallsDemo/reducer';
import thunk from "redux-thunk";

import { composeWithDevTools } from 'redux-devtools-extension';


// Middleware // Its a function which wil have some logic that our request need to pass
// middleware it has access to store  , it has access to state , action 
// const myLogger = (store)=>
// {
//    return(next)=>
//    {
//      return (action)=>
//      {
//        console.log("middleware called")
//        return next(action);
//      }
//    }
// }

// const myLogger = store => next => action =>
// {
//    console.log("middleware called")
//    return next(action);

// }

// const mySLogger = store => next => action =>
// {
//    console.log("second middleware called")
//    return next(action);

// }

// const myLLogger = (store) => (next) => (action) =>
// {
//   // console.log(store)
//   if(store.getState()>=10)
//   {
//     // console.log("10 is ac")
//     return next({type:"DEC"})

//   }
//   return next(action);
// }

// const store = legacy_createStore(counterReducer, applyMiddleware(myLogger,myLLogger,logger));


const store = legacy_createStore(postReducers , composeWithDevTools(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
