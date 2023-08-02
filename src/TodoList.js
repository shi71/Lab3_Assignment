import React from "react";

const TodoList = ({ tasks }) => {
  const tasksEl = [];

  // Don't change the state in the same scope as the return!!!
  //setTasks([...tasks, 'Task 4']);

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const taskEl = <li>{task}</li>;

    tasksEl.push(taskEl);
  }

  return (
    <ul>
      {tasksEl}
    </ul>
  );
};

export default TodoList;
