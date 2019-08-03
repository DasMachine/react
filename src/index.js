import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import Faker from "faker";

import "./styles.css";
import RoundDashboard from "./RoundDashboard";

// 5 percentages represent our dataset
const data = d3.range(5).map(_ => ({
  name: Faker.hacker.verb(),
  percentage: 75 * Math.random()
}));

function App() {
  return (
    <div className="App">
      <h1>Kiran's problem</h1>
      <h2>#ReactVizHoliday day ?? 13? 14?</h2>
      <svg width="600" height="600">
        <RoundDashboard x={300} y={300} data={data} />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
