import React from "react";
import Task from "./Task";
import { useTask } from "../TaskContext";

export default function TaskList() {
  const { tasks } = useTask();
  return (
    <>
      <div data-testid="task-list" className="pb-5">
        {tasks.map((task) => (
          <Task key={task.id} props={task} />
        ))}
      </div>
    </>
  );
}
