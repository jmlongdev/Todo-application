import classes from "./styles/TodoItem.module.css";
import Button from "../UI/Button";
const TodoItem = (props) => {
  const deleteTodoHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes.todo}>
      {props.children}
      <button className={classes.button} onClick={deleteTodoHandler}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
