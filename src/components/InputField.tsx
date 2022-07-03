import React from 'react';
import "./input.css";

interface props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleTodo:(event:React.FormEvent)=>void
}


const InputField = ({todo,setTodo,handleTodo}:props) => {
  return (
   <form className='input' onSubmit={handleTodo}>
        <input className='input_box' placeholder='Enter the task' value={todo} onChange={
          (e)=>{
            setTodo(e.target.value);
          }
        }/>
        <button className='input_button'>Go</button>
   </form>
  )
}

export default InputField