import React from "react";

import classes from "./Header.module.css";
// import user from "../../assets/user1.jpg";

const Header = (props) => {
  let content = <p>Todos remaining: {props.list.length}</p>;

  if (props.list.length === 0) {
    content = "";
  }
  return (
    <header className={classes.header}>
      <h1>Add Todo</h1>
      <div className={classes.numTodo}>{content}</div>
    </header>
  );
};

export default Header;
