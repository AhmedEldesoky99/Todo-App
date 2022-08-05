import React, { useState } from "react";
import TodoForm from "./componets/todoForm";
import { TodoList } from "./componets/todoList";
import "./sass/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // create todo
  const AddTodo = (todo) => {
    if (todo.text.trim().length > 0) {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
    }
  };
  // update todo
  const updateTodo = (id, newText) => {
    const NewTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });
    setTodos(NewTodo);
  };

  // remove todo
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <h1 className="primary-heading">Todo App</h1>
      <TodoForm AddTodo={AddTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
