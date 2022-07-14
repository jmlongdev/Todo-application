import Card from "../UI/Card";
import classes from "./styles/TodoList.module.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <Card className={classes.todos}>
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} id={item.id} onDelete={props.onDeleteTodo}>
            {item.text}
          </TodoItem>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
