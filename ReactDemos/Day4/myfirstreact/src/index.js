import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First ,{Second, Third} from './First';
import Second1 from './Second';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');
const MyElement = <h1>React is {5 + 5} times better with JSX</h1>;
const MyList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// const Elem = '<h1>I Love JSX!</h1>';
root.render(
  
 <React.StrictMode>
 <>
 <First/>
 <Second/>
 <Third/>
 <Second1/>
 {MyList}
  {MyElement}
  {myElement1}
    <App />
    </>
</React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
