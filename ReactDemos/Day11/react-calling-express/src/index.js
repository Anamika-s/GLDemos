import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { countReducers } from './redux-components/reducers';
import { applyMiddleware, legacy_createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import App1 from './redux-components/App';
import { act } from 'react-dom/test-utils';
import postReducers from './redux-components/reducers1';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux-components/rootSagas';
import Post from './redux-components/Posts';

const rootReducer = combineReducers({postReducers});


// const myLogger =(store)=>
// {
//   return next =>
//   {
//     return action=>
//     {
//       console.log("Logger called");
//       return next(action);
//     }
//   }
// }
// const store =   legacy_createStore(countReducers, applyMiddleware(myLogger));
// const store =   legacy_createStore(postReducers,  composeWithDevTools(applyMiddleware(thunk)));
const sagaMiddleware =  createSagaMiddleware();
const store =   legacy_createStore(rootReducer, {},  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
    <Provider store ={store}>   <Post/>
    </Provider>
 
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
