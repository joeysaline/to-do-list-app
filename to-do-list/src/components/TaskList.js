import React from "react";
import Task from "./Task";
import { useTask } from "../contexts/TaskContext";
import Editor from "./Editor";

const TaskList = () => {
  const { tasks, editor } = useTask();
  // console.log("task list rendered");
  return (
    <>
      <div data-testid="task-list" className="pb-5">
        {tasks.map((task) =>
          editor.isEditing && task.id === editor.id ? (
            <Editor key={task.id} props={task} />
          ) : (
            <Task key={task.id} props={task} />
          )
        )}
      </div>
    </>
  );
};

export default TaskList;
