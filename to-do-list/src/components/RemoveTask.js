import React from "react";
import { useTask } from "../TaskContext";
import { Button } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function RemoveTask({ id }) {
  const { removeTask } = useTask();
  function handleClick() {
    removeTask(id);
  }
  return (
    <Button
      fullWidth
      variant="contained"
      type="submit"
      color="error"
      startIcon={<HighlightOffIcon />}
      onClick={handleClick}
    >
      Remove Task
    </Button> // <button className="btn btn-danger" onClick={handleClick}>
    //   Remove
    // </button>
  );
}
