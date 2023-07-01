import { Task } from "../components/Task";
import { FormTask } from "../components/FormTask";

function Tasks() {
  return (
    <>
      <h2>Todo List - TS</h2>
      <FormTask createTaskHandler={createTaskHandler} />
      <ul>
        <Task
          taskData={tasks}
          updateOrDeleteTodoHandler={updateOrDeleteTodoHandler}
        />
      </ul>
    </>
  );
}

export default Tasks;
