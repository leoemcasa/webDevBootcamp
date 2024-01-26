import React from "react";
import { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello!");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [inText, setInText] = useState("");

  function handleClick() {
    setHeadingText("Hello! " + inText);
  }

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleText(e) {
    setInText(e.target.value);
  }
  
  return (
    <div className="container">
      <h1>{inText + " " + headingText}</h1>
      <input 
        onChange={handleText}
        type="text" 
        placeholder="What's your name?" 
        value={inText}
      />
      <button 
        style = {{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit
      </button>
    </div>
  );
}

export default App;
