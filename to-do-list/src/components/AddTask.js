import React from "react";
// import { v4 as uuidv4 } from "uuid";
import { useTask } from "../TaskContext";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask() {
  const { task, setTask, addTask } = useTask();

  function handleTaskStateChange(e) {
    setTask({ ...task, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.description.trim()) {
      addTask(task.description);
      setTask({ ...task, description: "" });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end p-3 m-3">
          <div className="col-12 col-md-8 col-xl-10">
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="enter task"
              value={task.description}
              onChange={handleTaskStateChange}
            />
          </div>
          <div className="col-12 col-md-4 col-xl-2 mt-3 m-md-0">
            <Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              startIcon={<AddIcon />}
            >
              Add Task
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
