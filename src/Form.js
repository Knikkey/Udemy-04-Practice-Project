import React, { useState } from "react";

import styles from "./Form.module.css";

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0) return;
    const data = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveData(data);
    setEnteredUsername("");
    setEnteredAge("");
    console.log(data);
  };

  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Username</label>
      <input
        type="text"
        value={enteredUsername}
        onChange={usernameHandler}
      ></input>
      <label>Age (Years)</label>
      <input
        type="number"
        required
        value={enteredAge}
        min="0"
        max="130"
        step="1"
        onChange={ageHandler}
      ></input>
      <button type="submit" className={styles.btn}>
        Add User
      </button>
    </form>
  );
};

export default Form;
