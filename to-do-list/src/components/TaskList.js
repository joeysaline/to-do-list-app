import React from "react";
import Task from "./Task";
import { useTask } from "../TaskContext";

export default function TaskList() {
  const { tasks } = useTask();
  return (
    <>
      <div className="text-center">
        {tasks.map((item) => (
          <Task key={item.id} props={item} />
        ))}
      </div>
    </>
  );
}
