import React, { useRef } from 'react';
import "./input.css";

interface props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleTodo:(event:React.FormEvent)=>void
}


const InputField = ({todo,setTodo,handleTodo}:props) => {
  const inputRef=useRef<HTMLInputElement>(null);

  return (
   <form className='input' onSubmit={
    (e)=>{
      handleTodo(e);
      inputRef.current?.blur();
    }
   }>
        <input ref={inputRef} className='input_box' placeholder='Enter the task' value={todo} onChange={
          (e)=>{
            setTodo(e.target.value);
            
          }
        }/>
        <button className='input_button'>Go</button>
   </form>
  )
}

export default InputField