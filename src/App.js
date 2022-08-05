import React, { useState, useEffect } from "react";
import TodoForm from "./componets/todoForm";
import { TodoList } from "./componets/todoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const OldData = JSON.parse(localStorage.getItem("todo"));
    if (OldData) setTodos([...OldData, ...todos].reverse());
  }, []);

  // create todo
  const AddTodo = (todo) => {
    if (todo.text.trim().length > 0) {
      const newTodos = [...todos, todo];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      setTodos(newTodos.reverse());
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
    localStorage.removeItem("todo");
    localStorage.setItem("todo", JSON.stringify(NewTodo));
    setTodos(NewTodo.reverse());
  };
  // remove todo
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.removeItem("todo");
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setTodos(newTodos.reverse());
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
