import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function entry (emojipediawhatever) {
  return (<Entry 
    key = {emojipediawhatever.id}
    emoji = {emojipediawhatever.emoji}
    name = {emojipediawhatever.name}
    meaning = {emojipediawhatever.meaning}
  />);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(entry)}
      </dl>
    </div>
  );
}

export default App;
