import { Task } from "../components/Task";
import { FormTask } from "../components/FormTask";
import { useTaskHook } from "../hooks/useTaksHook";
import { Container, Grid } from "@material-ui/core";

function Tasks() {
  const [tasks, addTask, deleteTask, updateTask] = useTaskHook();

  const createTaskHandler = (newTaskTitle, newDescription) => {
    const newTask = {
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

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <FormTask createTaskHandler={createTaskHandler} />
            </Grid>
            {pendingTasks.map((task) => (
              <Grid item key={task.id}>
                <Task
                  task={task}
                  updateOrDeleteTodoHandler={updateOrDeleteTodoHandler}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {completedTasks.length > 0 && (
          <Grid item xs={12} sm={6}>
            <h2>COMPLETED TASK</h2>
            <Grid container spacing={2} direction="column">
              {completedTasks.map((task) => (
                <Grid item key={task.id}>
                  <Task
                    task={task}
                    updateOrDeleteTodoHandler={updateOrDeleteTodoHandler}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Tasks;
