import './App.css';
import InputField from './components/InputField';
import React, { useState } from 'react';
import { Todo } from './model';

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleTodo=(event:React.FormEvent):void=>{
    event.preventDefault();
   
  }
  return <div className='App'>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleTodo={handleTodo}/>
  </div>
}

export default App;
