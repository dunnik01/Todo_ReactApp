import React, { useState } from "react";
import List from "./ListItem";
function App() {
  var todoItems = [];
  const [newItem, setNewItem] = useState("");
  const [toDoList, setToDoList] = useState(todoItems);

  function newItemSaved(event) {
    setNewItem(event.target.value);
  }

  function addToList() {
    setToDoList((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newItemSaved} type="text" value={newItem} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((listItem) => (
            <List item={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
