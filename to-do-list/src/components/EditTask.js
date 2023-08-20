import React from "react";
import { useTask } from "../TaskContext";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditTask({ id }) {
  const { editTask } = useTask();
  function handleClick() {
    editTask(id);
  }
  return (
    <>
      <Button
        className="d-none"
        fullWidth
        variant="contained"
        type="submit"
        color="warning"
        startIcon={<EditIcon />}
        onClick={handleClick}
      >
        Edit
      </Button>
      <IconButton
        className=""
        size="small"
        variant="contained"
        type="submit"
        color="secondary"
        onClick={handleClick}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}
