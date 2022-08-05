import React from "react";
import { TodoItem } from "./todoItem";

export const TodoList = ({ todos, setTodos, removeTodo, updateTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todos={todos}
            key={index}
            id={todo.id}
            text={todo.text}
            setTodos={setTodos}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        );
      })}
    </div>
  );
};
