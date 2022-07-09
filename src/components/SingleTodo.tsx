import React, { FC, useEffect, useRef, useState } from "react";
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
  const [editTodo,setTodo]=useState<String>(todo.todo);

  //
  const inputRef=useRef<HTMLInputElement>(null);
  
  const handlerDone=(id:number)=>{
     setTodos(todos.map((item)=>item.id===id?{...item,isDone:!item.isDone}:item))
  }

  const onClickHandler=()=>{
      if(!editable && !todo.isDone){
        setIsEditable(!editable);
      }
      
     
  }

  const handleDelete=(id:number)=>{
    setTodos(todos.filter((item)=>item.id!==id));
  }


  const onChangeHandler=(event:any)=>{
      setTodo(event.target.value);
  }

  const handleEdit=(e:React.FormEvent,id:number)=>{
      e.preventDefault();
        setTodos(todos.map((todo)=>todo.id===id?{...todo,todo:editTodo.toString()}:todo));
    setIsEditable(false);
  }

  useEffect(()=>{
    inputRef.current?.focus();
  },[editable])

  return (
    <form className="box" onSubmit={(e)=>{
      handleEdit(e,todo.id);
    }}>
      <div className="textBox">
        {
          editable?<input ref={inputRef}  value={editTodo.toString()} onChange={
            onChangeHandler
          } />:todo.isDone?
          <s   contentEditable={editable}>{todo.todo}</s>
          :<span   >{todo.todo}</span>
        }
      </div>
      <div className="iconBox">
        <AiFillEdit onClick={onClickHandler} />
        <AiFillDelete onClick={
          ()=>{
            handleDelete(todo.id)
          }
        } />
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
