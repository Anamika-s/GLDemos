import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Life from './Life';
import App5 from './App5';
import GridD from './GridD';
import GridDemo from './GridDemo';
import PureComp from './PureComp'
import UseMemoDemo from './UseMemoDemo';
import reportWebVitals from './reportWebVitals';
import App1 from './components/App1'
import App from './comps/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <Life name="OOOO"/>
    // <App5 />
    // <GridD/>
    // <GridDemo/>
    // <>    <PureComp/>
    // <UseMemoDemo/> 
<App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
