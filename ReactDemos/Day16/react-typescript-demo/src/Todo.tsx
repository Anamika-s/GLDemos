import React, { useState } from 'react'

const Todo = () => {
  const[todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([])

  const addTodo = ()=>
  {
    setTodoList([...todoList, todo])
    console.log(todoList.length);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>
  {
     setTodo(e.target.value)

  }
  return (
    <div>Todo
<input type="text" placeholder="type todo" 
value={todo}
onChange={(e) => setTodo(e.target.value)}></input>

<input type="text" placeholder="type todo" 
value={todo}
onChange={handleChange}></input>

<button onClick={()=>addTodo()}> Add to Todo List </button>
       <ul>
        {
           todoList.map(item=>{
            return <li key={item}> {item} </li>
           })
        }
       </ul>
    </div>
  )
}

export default Todo