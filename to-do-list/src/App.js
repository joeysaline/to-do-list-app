import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useAuth } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import Logout from "./auth/Logout";
import { useNavigate } from "react-router-dom";
import LogIn from "./auth/LogIn";

function App() {
  const { user, loading } = useAuth();
  // const navigate = useNavigate();
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && user === null && <LogIn />}
      {!loading && user !== null && (
        <TaskProvider>
          {JSON.stringify(user)}
          <Logout />
          <main className="container">
            <h1 className="text-center pt-3">To Do</h1>
            <AddTask></AddTask>
            <TaskList></TaskList>
          </main>
        </TaskProvider>
      )}
    </>
  );
}

export default App;
