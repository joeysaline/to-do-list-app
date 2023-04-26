import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="container text-center mt-5">
        <h1>To-Do</h1>
        <div className="border py-3">
          <AddTask></AddTask>
          <TaskList></TaskList>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
