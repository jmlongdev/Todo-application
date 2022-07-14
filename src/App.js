import React, { useState } from "react";

import Header from "../src/Header/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "../src/Footer/Footer";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          text: todo,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteTodoHandler = (todoId) => {
    setTodoList((prevTodoList) => {
      const updatedTodos = prevTodoList.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let content = (
    <p style={{ textAlign: "center", color: "red" }}>
      No Todos. Try adding one!
    </p>
  );

  if (todoList.length > 0) {
    content = <TodoList items={todoList} onDeleteTodo={deleteTodoHandler} />;
  }

  return (
    <div>
      <Header list={todoList} />
      <AddTodo onAddTodo={addTodoHandler} />
      {content}
      <Footer />
    </div>
  );
};

export default App;
