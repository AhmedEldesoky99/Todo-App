import React, { useState } from "react";
import "../sass/todo-form.css";
export default function TodoForm(props) {
  const [input, setInput] = useState(props.text ? props.text : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.id && props.text) {
      props.updateTodo(props.id, input);
      props.setEdit(false);
    } else {
      props.AddTodo({
        id: Math.floor(Math.random() * 1000),
        text: input,
        date: new Date(),
      });
    }

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        type="text"
        placeholder="What do you Want to do !!"
        name="input"
        value={input}
        onChange={handleChange}
      />
      <button className="form-button">{props.text ? "Update" : "Add"}</button>
    </form>
  );
}
