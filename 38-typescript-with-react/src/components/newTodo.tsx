import React, { FC, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: FC = () => {
  const todoCtx = useContext(TodosContext);

  const formRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredText = formRef.current!.value;

    if (enteredText.trim().length === 0) {
      throw new Error("error bro");
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={formRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
