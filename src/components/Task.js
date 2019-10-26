import React from "react";

const Task = props => {
  const { id, text, date, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong className={important ? "priority" : ""}>{text}</strong>
          do <span>{date}</span>
          <button onClick={() => props.status(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finishTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong>
          <em> do {date}</em>
          <span>Ukończono {finishTime}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
