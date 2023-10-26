import React from "react";
import { useTask } from "../contexts/TaskContext";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ACTIONS } from "../taskReducer";

export default function EditTask({ props }) {
  const { editor, dispatch } = useTask();

  function handleClick() {
    dispatch({
      type: ACTIONS.SET_EDITOR,
      payload: {
        id: props.id,
        isEditing: true,
      },
    });
  }

  return (
    <>
      <IconButton
        data-testid={"edit-button"}
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
