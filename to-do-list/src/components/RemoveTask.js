import React from "react";
import { useTask } from "../TaskContext";
import { Button, IconButton } from "@mui/material";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import DeleteForever from '@mui/icons-material/DeleteForever';
// import CloseIcon from '@mui/icons-material/Close';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RemoveTask({ id }) {
  const { editor, removeTask } = useTask();
  function handleClick() {
    removeTask(id);
  }

  if (editor.isEditing) {
    return (
        <IconButton
          disabled
          size="small"
        >
          <DeleteIcon />
        </IconButton>
    );
  }
  return (
    <>
      <Button
        className="d-none"
        fullWidth
        variant="contained"
        type="submit"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleClick}
      >
        Remove
      </Button>
      <IconButton
        className=""
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
