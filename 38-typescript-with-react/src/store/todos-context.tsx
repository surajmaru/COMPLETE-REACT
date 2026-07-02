import { createContext, FC, PropsWithChildren, useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <>
      <TodosContext.Provider value={contextValue}>
        {props.children}
      </TodosContext.Provider>
    </>
  );
};

export default TodosContextProvider;
