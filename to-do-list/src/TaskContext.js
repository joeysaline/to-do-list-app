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

  // task editor state
  const [editor, setEditor] = useState({
    id: "",
    description: "",
    isEditing: false
  });

  // task list state
  const [tasks, setTasks] = useState([]);

  // update needed state
  const [update, setUpdate] = useState(false);

  // get tasks from database
  const getTasks = async () => {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_ADDRESS}:5000/tasks`);
      const data = await response.json();
      console.log(response);
      setTasks(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // keep client task list up to date with database
  useEffect(() => {
    getTasks();
  }, [update]);

  // add task to database
  async function addTask(task) {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_ADDRESS}:5000/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      console.log(response);
      // setTasks([task, ...tasks]);
      setUpdate(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  }

  // remove task from database
  async function removeTask(id) {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_ADDRESS}:5000/tasks/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      // setTasks(tasks.filter((task) => task.id !== id));
      setUpdate(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  }

  // edit a task in database
  async function editTask(task) {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_ADDRESS}:5000/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      console.log(response);
      // setTasks(tasks.filter((task) => task.id !== id));
      setUpdate(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  }

  // mark a task as complete in database
  async function completeTask(task) {
    try {
      const response = await fetch(`http://${process.env.REACT_APP_ADDRESS}:5000/tasks/complete/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      console.log(response);
      setUpdate(prev => !prev);
    } catch (error) {
      console.error(error.message);
    }
  }

  const value = {
    task,
    setTask,
    editor,
    setEditor,
    tasks,
    addTask,
    removeTask,
    editTask,
    completeTask
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
