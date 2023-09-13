import { useCallback, useState } from "react";
import ToDoList from "./TodoList";

export const ToDo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    console.log("todo");
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <ToDoList todos={todos}  />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
