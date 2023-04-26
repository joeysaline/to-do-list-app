import React, { useContext, useState } from "react";

const TaskContext = React.createContext();

export function useTask() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [task, setTask] = useState({
    id: "",
    desc: "",
  });
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
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
