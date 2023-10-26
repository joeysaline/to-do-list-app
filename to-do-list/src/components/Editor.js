import React, { useState } from "react";
import { useTask } from "../contexts/TaskContext";
import { ACTIONS } from "../taskReducer";
import { IconButton, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

export default function Editor({ props }) {
  const { editTask, dispatch } = useTask();
  const [ description, setDescription ] = useState(props.description);

  function handleEditorStateChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask({ ...props, description: description });
    dispatch({
      type: ACTIONS.RESET_EDITOR,
    });
  }

  function handleCancel() {
    dispatch({
      type: ACTIONS.RESET_EDITOR,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row pt-3">
        <div className="col-1"></div>
        <div className="col-9 px-1 px-sm-2">
          <TextField
            data-testid="editor-textbox"
            autoFocus
            fullWidth
            variant="standard"
            type="text"
            color="success"
            value={description}
            onChange={handleEditorStateChange}
          />
        </div>
        <div className="col-1 px-0 px-sm-1 px-md-2 px-lg-3">
          <IconButton
            data-testid="editor-done-button"
            size="small"
            variant="contained"
            type="submit"
            color="success"
          >
            <DoneIcon />
          </IconButton>
        </div>
        <div className="col-1 px-0 px-sm-1 px-md-2 px-lg-3">
          <IconButton
            data-testid="editor-cancel-button"
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
