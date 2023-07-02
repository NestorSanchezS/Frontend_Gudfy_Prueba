import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const useTaskHook = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(`${apiUrl}/`, newTask);
      const createdTask = response.data;
      setTasks((prevTasks) => [...prevTasks, createdTask]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}/`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id) => {
    try {
      await axios.put(`${apiUrl}/${id}/complete/`);
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
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
