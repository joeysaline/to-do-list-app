import React from "react";
import { useTask } from "../TaskContext";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditTask({ props }) {
  const { editor, setEditor } = useTask();
  
  function handleClick() {
    setEditor({
      id: props.id,
      description: props.description,
      isEditing: true,
    });
  }

  return (
    <>
      <IconButton
        data-testid={'edit-button'}
        disabled={editor.isEditing ? true : false}
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
