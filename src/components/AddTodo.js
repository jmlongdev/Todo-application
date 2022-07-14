import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./styles/AddTodo.module.css";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [error, setError] = useState();

  const enteredTodoHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      setError({
        title: "Please enter a todo",
        message: "Writing your todos encourages you to complete them!",
      });
      return;
    }

    props.onAddTodo(enteredTodo);

    setEnteredTodo("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="new-todo">What needs to be done? </label>
          <input
            id="new-todo"
            onChange={enteredTodoHandler}
            type="text"
            value={enteredTodo}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTodo;
