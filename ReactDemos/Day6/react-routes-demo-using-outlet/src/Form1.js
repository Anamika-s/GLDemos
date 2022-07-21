import { useState } from "react"
const Form1= ()=>
{
  const [name , setName] =useState("")
  const [fullName , setFullName] = useState();
  const inputHandler = (event)=>
  {
    console.log("Text is changed")
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    setName(event.target.value)
  }
  const updateValue= ()=>
  {
     console.log("Button is clicked")
     setFullName(name);
   
  }
return(
   <>
   <div>
    <h1> Form  Hello {fullName} </h1></div>
    <input type="text" placeholder="Enter your name" value={name}  onChange={inputHandler}/>
    <button onClick={updateValue}> Click </button>
    </>
)
}

export default Form1;