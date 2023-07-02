import { useEffect, useState } from "react";
import axios from "axios";

export const useTaskHook = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tasks/");
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(tasks);

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tasks/",
        newTask
      );
      const createdTask = response.data;
      setTasks([...tasks, createdTask]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/tasks/${id}/`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id) => {
    try {
      await axios.put(`http://localhost:8000/api/v1/tasks/${id}/complete/`);
      setTasks(
        tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              completed: true,
            };
          }
          return task;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return [tasks, addTask, deleteTask, updateTask];
};
