import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [inputTitleNote, setInputTitleNote] = useState("");
  const [inputContentNote, setInputContentNote] = useState("");

  function handleTitleChange(event) {
    const newTitleNote = event.target.value;
    setInputTitleNote(newTitleNote);
  }

  function handleContentChange(event) {
    const newContentNote = event.target.value;
    setInputContentNote(newContentNote);
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input 
          onChange={handleTitleChange} 
          name="title" 
          placeholder="Title"
          value={inputTitleNote} 
        />
        <textarea 
          onChange={handleContentChange}
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={inputContentNote}
        />
        <button 
          onClick={() => {
            props.onAdd(inputTitleNote, inputContentNote);
            setInputTitleNote("");
            setInputContentNote("");
          }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
