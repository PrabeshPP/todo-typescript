import React, { FC, useRef, useState } from "react";
import "./todo.css";
import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo,setTodos,todos }: Props) => {
  const [editable,setIsEditable]=useState<boolean>(false);
  
  const handlerDone=(id:number)=>{
     setTodos(todos.map((item)=>item.id===id?{...item,isDone:!item.isDone}:item))
  }

  const onClickHandler=()=>{
      setIsEditable(!editable);
     
  }


  return (
    <form className="box">
      <div className="textBox">
        {
          todo.isDone?
          <s   contentEditable={editable}>{todo.todo}</s>
          :<span   contentEditable={editable}>{todo.todo}</span>
        }
      </div>
      <div className="iconBox">
        <AiFillEdit onClick={onClickHandler} />
        <AiFillDelete />
        <BsCheckLg onClick={
          ()=>{
            handlerDone(todo.id); 
          }
        }/>
      </div>
    </form>
  );
};

export default SingleTodo;
