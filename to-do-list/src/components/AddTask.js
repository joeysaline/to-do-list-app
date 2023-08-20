import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTask } from "../TaskContext";
import { Button, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask() {
  const { task, setTask, addTask } = useTask();
  // const [description, setDescription] = useState("");

  function handleTaskStateChange(e) {
    setTask({ ...task, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // addTask(description);
    // setDescription("");
    if (task.description.trim()) {
      addTask({ ...task, id: uuidv4() });
      setTask({ ...task, description: "" });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-9 col-md-10 col-xl-9">
            <TextField
              fullWidth
              variant="standard"
              type="text"
              label="enter task"
              value={task.description}
              // value={description}
              onChange={handleTaskStateChange}
              // onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="align-self-end col-2 col-md-1 col-xl-2">
            <Button
            className="d-none"
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              startIcon={<AddIcon />}
            >
              Add
            </Button>
            <IconButton
              className=""
              size="small"
              variant="contained"
              type="submit"
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </>
  );
}
