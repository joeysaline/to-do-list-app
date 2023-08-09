import React from "react";
import RemoveTask from "./RemoveTask";

export default function Task({ props }) {
  return (
    <div className="border p-3 m-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-xl-10">{props.description}</div>
          <div className="col-12 col-md-4 col-xl-2 mt-3 mt-md-0">
            <RemoveTask id={props.id}></RemoveTask>
          </div>
        </div>
      </div>
    </div>
  );
}
