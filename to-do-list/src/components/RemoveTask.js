import React from "react";
import { useTask } from "../contexts/TaskContext";
import { IconButton } from "@mui/material";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import CloseIcon from '@mui/icons-material/Close';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from "@mui/icons-material/Delete";
import { ACTIONS } from "../taskReducer";

export default function RemoveTask({ props, remove }) {
  const { editor, dispatch } = useTask();

  function handleClick(e) {
    e.preventDefault();
    removeTask(props);
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
  return (
    <>
      <IconButton
        data-testid="remove-button"
        disabled={editor.isEditing ? true : false}
        size="small"
        variant="contained"
        type="submit"
        color="error"
        onClick={handleClick}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}
