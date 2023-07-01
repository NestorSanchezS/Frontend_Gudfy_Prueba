import { useEffect, useState } from "react";
import axios from "axios";

export const useTaskHook = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Lo que sea mi paisano",
      description: "Esto es una descripción",
      completed: false,
    },
    {
      id: 2,
      title: "Pa las que sea",
      description: "Esto es una descripción",
      completed: false,
    },
    {
      id: 3,
      title: "Como fué como fué",
      description: "Esto es una descripción",
      completed: false,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tasks");
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(tasks);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return [tasks, addTask, deleteTask, updateTask];
};
