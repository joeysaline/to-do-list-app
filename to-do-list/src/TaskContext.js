import React, { useContext, useEffect, useState } from "react";

const TaskContext = React.createContext();

export function useTask() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  // task state
  const [task, setTask] = useState({
    id: "",
    description: "",
  });

  // task list state
  const [tasks, setTasks] = useState([]);

  // get tasks from database
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // keep client task list up to date with database
  useEffect(() => {
    getTasks();
  }, []);

  // add task to database
  async function addTask(description) {
    try {
      console.log(description);
      console.log(JSON.stringify(description));

      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(description),
      });
      console.log(response);
      setTasks([task, ...tasks]);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function removeTask(id) {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  }

  const value = {
    task,
    setTask,
    tasks,
    addTask,
    removeTask,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
