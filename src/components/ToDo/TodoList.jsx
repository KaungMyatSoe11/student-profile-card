/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { memo } from "react";

const ToDoList = ({ todos }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {/* {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      <button >Add Todo</button>ß
      })} */}
    </>
  );
};

export default memo(ToDoList);
