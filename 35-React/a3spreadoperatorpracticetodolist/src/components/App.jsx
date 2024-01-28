import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);

  function handleText(event) {
    let text = event.target.value;
    setInputText(text);
  }

  function addTask() {
    setTask(previous => [...previous, inputText]);
    setInputText("");
  }                          

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleText} value={inputText} type="text" />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {task.map(e => <li>{e}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
