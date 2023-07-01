export const Task = ({ taskData, updateOrDeleteTodoHandler }) => {
  if (taskData.length === 0) {
    return <h2>Not Todo Found!</h2>;
  }

  return (
    <>
      {taskData.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button
            onClick={() => updateOrDeleteTodoHandler(task.id, task.completed)}
          >
            Mark as {task.completed ? "undone" : "done"}
          </button>
          {task.completed && (
            <button onClick={() => updateOrDeleteTodoHandler(task.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </>
  );
};
