import React from "react";
import { useTask } from "../TaskContext";
import { IconButton } from "@mui/material";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import CloseIcon from '@mui/icons-material/Close';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from "@mui/icons-material/Delete";

export default function RemoveTask({ id }) {
  const { editor, removeTask } = useTask();

  function handleClick() {
    removeTask(id);
  }

  return (
    <>
      <IconButton
        data-testid='remove-button'
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
