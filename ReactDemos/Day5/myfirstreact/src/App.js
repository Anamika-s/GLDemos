import logo from './logo.svg';
import './App.css';

function App() {
  const arr = [10,20,30];
 const newArray = arr.map((item)=>
 {
   return <li> {item *12 }</li>
 })
  return (
    <div className="App">
      {/* <ul>
        <li> {arr[0] * 2}</li>
        <li> {arr[1] * 2}</li>
        <li> {arr[2] * 2}</li>
      </ul> */}
      <ul> {newArray} </ul>
    </div>
  );
}
function App1(props) {
  const arr = props.numbers;
 const newArray = arr.map((item)=>
 {
   return <li> {item *12 }</li>
 })
  return (
    <div className="App">
      {/* <ul>
        <li> {arr[0] * 2}</li>
        <li> {arr[1] * 2}</li>
        <li> {arr[2] * 2}</li>
      </ul> */}
      <ul> {newArray} </ul>
    </div>
  );
}

export default App;
export {App1};
// components 
// function  ., easier to write, we have to use hooks
// class , its a class which inehrits from Component class
// class comp gives you so many features  , managing state, com life cycle methods 


