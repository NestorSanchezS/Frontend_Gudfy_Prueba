import { Task } from "../components/Task";
import { FormTask } from "../components/FormTask";
import { useTaskHook } from "../hooks/useTaksHook";
import { Container, Grid } from "@material-ui/core";

function Tasks() {
  const [tasks, addTask, deleteTask, updateTask] = useTaskHook();

  const createTaskHandler = (newTaskTitle, newDescription) => {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newDescription,
      completed: false,
    };
    addTask(newTask);
  };

  const updateOrDeleteTodoHandler = (id, completed) => {
    if (completed !== undefined) {
      updateTask(id);
    } else {
      deleteTask(id);
    }
  };
  return (
    <Container>
      <Grid alignItems="center">
        <FormTask createTaskHandler={createTaskHandler} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateOrDeleteTodoHandler={updateOrDeleteTodoHandler}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Tasks;
