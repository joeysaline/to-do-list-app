import React from "react";
import RemoveTask from "./RemoveTask";
import EditTask from "./EditTask";
import CompleteTask from "./CompleteTask";

const Task = ({ props }) => {
  // TODO: possibly have each task hold its own state of description, so that upon editing, the entire list wont rerender

  // editor component replaced editing logic
  return (
    <div className="row pt-3" data-testid={`task${props.id}`}>
      <div className="col-1 align-self-center px-0 px-sm-1 px-md-2 px-lg-3">
        <CompleteTask props={props} />
      </div>
      <div
        className="col-9 align-self-center px-1 px-sm-2"
        id="taskDescription"
      >
        {props.description}
      </div>
      <div className="col-1 align-self-center px-0 px-sm-1 px-md-2 px-lg-3">
        <EditTask props={props} />
      </div>
      <div className="col-1 align-self-center px-0 px-sm-1 px-md-2 px-lg-3">
        <RemoveTask props={props} />
      </div>
    </div>
  );
};

export default Task;
