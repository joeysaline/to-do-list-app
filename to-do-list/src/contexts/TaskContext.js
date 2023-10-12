import React, { useContext, useReducer, useEffect } from "react";
import taskReducer, { ACTIONS, INITIAL_STATE } from "../taskReducer";
import { useAuth } from "./AuthContext";

const TaskContext = React.createContext();

export function useTask() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);
  const { user } = useAuth();

  // get tasks from database
  async function getTasks() {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_ADDRESS}:5000/tasks/${user.email}`
      );
      const data = await response.json();
      console.log(response);
      // update state
      dispatch({
        type: ACTIONS.SET,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  // add task to database
  async function addTask(task) {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_ADDRESS}:5000/tasks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      );
      console.log(response);
      // update state
      dispatch({
        type: ACTIONS.ADD,
        payload: task,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  // remove task from database
  async function removeTask(task) {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_ADDRESS}:5000/tasks/${task.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      // update state
      dispatch({
        type: ACTIONS.DELETE,
        payload: task,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  // edit a task in database
  async function editTask(task) {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_ADDRESS}:5000/tasks/description`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      );
      console.log(response);
      // update state
      dispatch({
        type: ACTIONS.EDIT,
        payload: task,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  // mark a task as complete in database
  async function completeTask(task) {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_ADDRESS}:5000/tasks/complete/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        }
      );
      console.log(response);
      // update state
      dispatch({
        type: ACTIONS.COMPLETE,
        payload: task,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  const value = {
    dispatch,
    tasks: state.tasks,
    editor: state.editor,
    addTask,
    removeTask,
    editTask,
    completeTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
