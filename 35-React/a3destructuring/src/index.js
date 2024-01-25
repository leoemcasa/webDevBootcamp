import React from 'react';
import ReactDOM from 'react-dom/client';
import cars from './practice';

let [honda, tesla] = cars;
let {
  coloursByPopularity: [teslaTopColour],
  speedStats: {topSpeed: teslaTopSpeed}
} = tesla;
let {
  coloursByPopularity: [hondaTopColour],
  speedStats: {topSpeed: hondaTopSpeed}
} = honda;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);