import React from "react";
import RemoveTask from "./RemoveTask";
import EditTask from "./EditTask";
import { IconButton, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done"
import { useTask } from "../TaskContext";
import CompleteTask from "./CompleteTask";
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

export default function Task({ props }) {
  const { editor, setEditor, editTask } = useTask();
  function handleSubmit(e) {
    e.preventDefault();
    editTask(editor);
    setEditor({ description: "" });
  }
  function handleCancel(e) {
    e.preventDefault();
    setEditor({description: ""});
}
  function handleEditorStateChange(e) {
    setEditor({ ...editor, description: e.target.value });
  }
  if (editor.isEditing && editor.id === props.id) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="row pt-3">
          <div className="col-1"></div>
          <div className="col-8 col-md-9">
            <TextField
              autoFocus
              fullWidth
              variant="standard"
              type="text"
              color="success"
              value={editor.description}
              onChange={handleEditorStateChange}
            />
          </div>
          <div className="align-self-end col-1">
            <IconButton
              size="small"
              variant="contained"
              type="submit"
              color="success"
            >
              <DoneIcon />
            </IconButton>
          </div>
          <div className="align-self-end col-2 col-md-1">
            <IconButton
              size="small"
              variant="contained"
              color="error"
              onClick={handleCancel}
            >
              <DoDisturbIcon />
            </IconButton>
          </div>
        </div>
      </form>
    );
  }
  return (
    <div className="row pt-3">
      <div className="col-1 align-self-center text-center">
        <CompleteTask props={props}/>
      </div>
      <div className="col-8 col-md-9 align-self-center" id="taskDescription">
        {props.description}
      </div>
      <div className="col-1 align-self-center">
        <EditTask props={props}/>
      </div>
      <div className="col-2 col-md-1 align-self-center">
        <RemoveTask id={props.id}/>
      </div>
    </div>
  );
}
