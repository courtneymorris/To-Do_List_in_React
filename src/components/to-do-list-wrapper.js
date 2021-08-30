import React from "react";

import ToDoItem from "./to-do-item";

export default function toDoListWrapper() {
  return (
    <div className="to-do-list-wrapper">
      <h1>To Do Wrapper</h1>
      <ToDoItem />
    </div>
  );
}
