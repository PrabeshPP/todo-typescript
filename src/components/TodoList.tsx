import React from 'react'
import { Todo } from '../model'
import "./todo.css";

interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
    console.log(todos.length);
  return (
   <div className='todoLists'>
        {
            todos.map((todo)=>{
                console.log(todo.todo)
                return <li key={todo.id} className="todo_list">
                    {todo.todo}
                </li>
            })
        }
   </div>
  )
}

export default TodoList