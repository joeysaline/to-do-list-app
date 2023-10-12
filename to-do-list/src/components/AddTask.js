import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTask } from "../contexts/TaskContext";
import { IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAuth } from "../contexts/AuthContext";

export default function AddTask() {
  const { editor, addTask } = useTask();
  const { user } = useAuth();
  const [ task, setTask ] = useState({
    id: "",
    description: "",
    complete: false,
    user_id: user.email,
  });

  function handleTaskStateChange(e) {
    setTask({ ...task, description: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.description.trim()) {
      addTask({ ...task, id: uuidv4() });
      setTask({ ...task, description: "" });
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        disabled={editor.isEditing ? true : false}
        data-testid="add-task"
      >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-9 px-1 px-sm-2">
            <TextField
              disabled={editor.isEditing ? true : false}
              fullWidth
              variant="standard"
              type="text"
              label="enter task"
              value={task.description}
              onChange={handleTaskStateChange}
            />
          </div>
          <div className="align-self-end col-2 px-0 px-sm-1 px-md-2 px-lg-3">
            <IconButton
              disabled={editor.isEditing ? true : false}
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
