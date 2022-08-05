import React, { useState } from "react";

import TodoForm from "./todoForm";

export const TodoItem = ({ id, text, removeTodo, updateTodo, todos }) => {
  const [edit, setEdit] = useState(false);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    // weekday: 'long',
  };
  const NewDate = new Intl.DateTimeFormat("en-GB", options).format(todos.date);

  return (
    <React.Fragment>
      {!edit && (
        <div className="todo-item">
          <span className="date">{NewDate}</span>
          <p className="paragraph">{text}</p>
          <div className="icons">
            <span className="icon icon-delete" onClick={handleRemove}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span className="icon icon-edit" onClick={handleEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
          </div>
        </div>
      )}
      {edit && (
        <TodoForm
          id={id}
          text={text}
          setEdit={setEdit}
          updateTodo={updateTodo}
        />
      )}
    </React.Fragment>
  );
};
