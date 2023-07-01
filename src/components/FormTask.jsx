import { useState } from "react";

export const FormTask = ({ createTaskHandler }) => {
  const [taskTitle, setTaskTitle] = useState < string > "";

  const submitHandler = (e) => {
    e.preventDefault();
    if (taskTitle === "") return;
    createTaskHandler(taskTitle);
    e.currentTarget.reset();
    setTaskTitle("");
  };

  const changeHandler = (e) => {
    setTaskTitle(e.currentTarget.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="newTaskTitle" onChange={changeHandler} />
      <input type="text" name="newTaskDescription" onChange={changeHandler} />
      <button type="submit" disabled={!taskTitle}>
        Create Task
      </button>
    </form>
  );
};
