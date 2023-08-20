import React from "react";
import RemoveTask from "./RemoveTask";
import EditTask from "./EditTask";
import { Checkbox } from "@mui/material";

export default function Task({ props }) {
  return (
    <div className="row pt-3">
      <div className="col-1 align-self-center text-center">
        <Checkbox size="small"/>
      </div>
      <div className="col-8 col-md-9 align-self-center">
        {props.description}
      </div>
      <div className="col-1 align-self-center">
        <EditTask id={props.id}></EditTask>
      </div>
      <div className="col-2 col-md-1 align-self-center">
        <RemoveTask id={props.id}></RemoveTask>
      </div>
    </div>
  );
}
