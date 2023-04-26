import React from "react";
import { useTask } from "../TaskContext";

export default function RemoveTask({ id }) {
  const { removeTask } = useTask();
  function handleClick() {
    removeTask(id);
  }
  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Remove
    </button>
  );
}
