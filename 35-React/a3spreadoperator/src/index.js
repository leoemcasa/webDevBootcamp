import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// const fullName = {
//   fName: "James",
//   lName: "Bond"
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007"
// };

// console.log(user);