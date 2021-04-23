import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
  form: {
    display: "flex",
    justifyContent: "space-between",
    alineItems: "center",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: ".5rem",
  },
};

/* Свой хук useInputValue() */
function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input style={styles.input} {...input.bind} />
      <button className={"button"} type={"submit"}>
        Add todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
