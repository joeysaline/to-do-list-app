import React from "react";
import RemoveTask from "./RemoveTask";

export default function Task({ props }) {
  return (
    <div className="border p-3 m-3">
      <div className="container">
        <div className="row">
          <div className="col-10">{props.desc}</div>
          <div className="col-2">
            <RemoveTask id={props.id}></RemoveTask>
          </div>
        </div>
      </div>
    </div>
  );
}
