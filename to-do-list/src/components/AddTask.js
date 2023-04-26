import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useTask } from "../TaskContext";

export default function AddTask() {
  const { task, setTask, addTask } = useTask();

  function handleTaskStateChange(e) {
    setTask({ ...task, desc: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.desc.trim()) {
      addTask({ ...task, id: uuidv4() });
      setTask({ ...task, desc: "" });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container p-3 m-3">
          <div className="row">
            <div className="col-10">
              <input
                className="form-control"
                type="text"
                value={task.desc}
                onChange={handleTaskStateChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-success" type="submit">
                Add task
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
