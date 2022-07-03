import React from "react";
import "./todo.css";
import { BsCheckLg } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos:Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo }: Props) => {
  return (
    <form className="box">
      <div className="textBox">
        <h1 contentEditable="true">{todo.todo}</h1>
      </div>
      <div className="iconBox">
        <AiFillEdit />
        <AiFillDelete />
        <BsCheckLg />
      </div>
    </form>
  );
};

export default SingleTodo;
