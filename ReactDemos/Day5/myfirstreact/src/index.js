import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {App1} from './App';

import reportWebVitals from './reportWebVitals';
 import Comp1 from './Comp1';
import Parent from './Parent';
import Comments from './Comment';
import StateDemo from './StateDemo';

import App2 from './App2';
import List from './List';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');
const MyElement = <h1>React is {5 + 5} times better with JSX</h1>;
var rElmLi1 = React.createElement('li', {id:'li1'}, 'one');
var rElmLi2 = React.createElement('li', {id:'li2'}, 'two');
var rElmLi3 = React.createElement('li', {id:'li3'}, 'three');

//create <ul> React element and add child React <li> elements to it
var reactElementUl = React.createElement('ul', {}, rElmLi1,rElmLi2,rElmLi3);


//create <ul> React element and add child React <li> elements to it
// var reactElementUl = React.createElement('ul', {className:'myList'}, rElmLi1,rElmLi2,rElmLi3);

const MyList = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

var author={"name":"Deepak Kumar" , "avatarUrl":"/images/logo512.png"}
var numbers = [1,2,3,4,5] 

// const Elem = '<h1>I Love JSX!</h1>';
root.render(
  
 <React.StrictMode>
 <>
 {/* <Comments text="I am coming from Comments" date="12/12/2022" author={author}/> */}
 {/* <StateDemo address="Calcutta"/> */}
  {/* <Comp1/>
  <Parent name='Ajay'/> */}
 {/* <App/>
 <App1 numbers={numbers}/> */}
 <List/>
 {/* <First/>
 <Second/>
 <Third/>
 <Second1/> */}
 
 {/* {reactElementUl}
 {MyList}
  {MyElement}
  {myElement1} */}
    {/* <App /> */}
    </>
</React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
