import React from "react";
import { useTask } from "../TaskContext";
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function CompleteTask({ props }) {
    const { editor, completeTask } = useTask();
    function handleClick() {
        props.complete ?
            completeTask({ ...props, complete: false }) :
            completeTask({ ...props, complete: true });

    }
    // Disable button for task editing
    if (editor.isEditing) {
        return (
            <IconButton
                disabled
                size="small"
            >
                {props.complete ?
                    <CheckBoxIcon /> :
                    <CheckBoxOutlineBlankIcon />
                }
            </IconButton>
        );
    }
    return (
        <IconButton
            size="small"
            color="primary"
            onClick={handleClick}
        >
            {props.complete ?
                <CheckBoxIcon /> :
                <CheckBoxOutlineBlankIcon />
            }
        </IconButton>
    );
}