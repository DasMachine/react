import React from "react";
import CircleArcs from "./CircleArcs";

// RoundDashboard is a dashboard where all the cahrts are round
// We use fake data because Kiran didn't provide a dataset :)

class RoundDashboard extends React.Component {
  render() {
    const { x, y, data } = this.props;

    return (
      <g transform={`translate(${x}, ${y})`}>
        <CircleArcs data={data} maxR={150} />
      </g>
    );
  }
}

export default RoundDashboard;
