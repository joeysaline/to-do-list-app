import React from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { useAuth } from "./contexts/AuthContext";
import { TaskProvider } from "./contexts/TaskContext";
import Logout from "./auth/Logout";
import LogIn from "./auth/LogIn";

function App() {
  const { user } = useAuth();
  return (
    <>
      {user === null && <LogIn />}
      {user !== null && (
        <TaskProvider>
          {/* {JSON.stringify(user)} */}
          <Logout />
          {" currently signed in as "}
          {user.email}
          <main className="container">
            <h1 className="text-center pt-3">To Do</h1>
            <AddTask />
            <TaskList />
          </main>
        </TaskProvider>
      )}
    </>
  );
}

export default App;
