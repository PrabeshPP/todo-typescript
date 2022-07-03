import './App.css';
import InputField from './components/InputField';
import React, { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleTodo=(event:React.FormEvent):void=>{
    event.preventDefault();

    if(todo){
      setTodos([...todos,{id:Math.floor(Math.random()*100+1),todo:todo,isDone:false}]); 
      setTodo("");
    }
   
  }


  return <div className='App'>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleTodo={handleTodo}/>
      <TodoList setTodos={setTodos} todos={todos}/>
  </div>
}

export default App;
