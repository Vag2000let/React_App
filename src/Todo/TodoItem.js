import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alineItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
    cursor: 'pointer'
  },
  index: {
    marginRight: ".5rem",
  },
};

function TodoItem({ todo, index, onChange }) {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join("")}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.index}>{index + 1}</strong>
        {todo.title}
      </span>
      {/*Способ 1*/}
      {/*<button className={"remove"} onClick={() => removeTodo(todo.id)}>&times;</button>*/}
      {/*Способ 2 Через bind( пустой контекс, айди тудушки )*/}
      <button className={"remove"} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
