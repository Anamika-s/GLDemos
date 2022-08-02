import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers ,legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducer';

// SAGA 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({postReducer});
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
