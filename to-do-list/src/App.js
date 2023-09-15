import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1 className="text-center pt-3">To Do</h1>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </div>
    </TaskProvider>
  );
}

export default App;
