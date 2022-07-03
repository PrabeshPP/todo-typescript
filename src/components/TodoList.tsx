import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
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
                
                return <SingleTodo todo={todo} setTodos={setTodos} todos={todos} key={todo.id}/>
            })
        }
   </div>
  )
}

export default TodoList