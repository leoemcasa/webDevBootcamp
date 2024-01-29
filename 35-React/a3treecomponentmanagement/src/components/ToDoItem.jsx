import React from "react";
// import { useState } from "react";

function ToDoItem(props) {
    // const [done, setDone] = useState(false);

    // function handleClick() {
    //     setDone(previous => !previous);
    // }

    return (
      <div onClick={() => {
        props.onChecked(props.id);
      }}>
        {/* <li style={{textDecoration: done && "line-through"}}>{props.toDoItem}</li> */}
        <li>{props.toDoItem}</li>
      </div>
    );
}

export default ToDoItem;