import React from "react";
import { useTask } from "../TaskContext";
import { Button, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import DeleteForever from '@mui/icons-material/DeleteForever';

export default function RemoveTask({ id }) {
  const { removeTask } = useTask();
  function handleClick() {
    removeTask(id);
  }
  return (
    <>
      <Button
        className="d-none"
        fullWidth
        variant="contained"
        type="submit"
        color="error"
        startIcon={<HighlightOffIcon />}
        // startIcon={<DeleteForever />}
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
        <HighlightOffIcon />
      </IconButton>
    </>
  );
}
