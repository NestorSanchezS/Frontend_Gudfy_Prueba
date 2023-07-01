import { useState } from "react";
import { Button, Grid, Box } from "@mui/material";
import { StyledTextField } from "../utils/Styles";

export const FormTask = ({ createTaskHandler }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    createTaskHandler(taskTitle, taskDescription);
    setTaskTitle("");
    setTaskDescription("");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "newTaskTitle") {
      setTaskTitle(value);
    } else if (name === "newTaskDescription") {
      setTaskDescription(value);
    }
  };

  return (
    <form onSubmit={submitHandler} style={{ marginTop: "40px" }}>
      <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <StyledTextField
              name="newTaskTitle"
              label="Title"
              variant="outlined"
              fullWidth
              value={taskTitle}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              name="newTaskDescription"
              label="Description"
              variant="outlined"
              fullWidth
              value={taskDescription}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                disabled={!taskTitle.trim()}
                sx={{ minWidth: 100 }}
              >
                Create Task
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
