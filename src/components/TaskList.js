import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const deactive = props.tasks.filter(task => !task.active);

  if (deactive.length >= 2) {
    deactive.sort((a, b) => b.finishDate - a.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a.text < b.text) {
        return -1;
      } else if (a.text > b.text) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      status={props.status}
      delete={props.delete}
    />
  ));
  const deactiveTasks = deactive.map(task => (
    <Task
      key={task.id}
      task={task}
      status={props.status}
      delete={props.delete}
    />
  ));
  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>Well done, time for break</p>
        )}
      </div>

      <div className="deactive">
        <h3>Done {deactiveTasks.length}</h3>
        {deactiveTasks.length > 5 && <span>Last 5 tasks</span>}
        {deactiveTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
