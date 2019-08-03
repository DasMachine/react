import React from "react";
import styled from "styled-components";
import * as d3 from "d3";
import chroma from "chroma-js";

const Circle = styled.circle`
  fill: ${chroma("#0066cc").brighten(0.5)};
`;

const ArcPath = styled.path`
  fill: white;
`;

const Label = styled.text`
  fill: white;
  text-anchor: end;
`;

const Arc = ({ d, r, width }) => {
  const arc = d3
    .arc()
    .innerRadius(r)
    .outerRadius(r + width)
    .startAngle(0)
    .endAngle((d.percentage / 100) * (Math.PI * 2));

  return (
    <g>
      <Label y={-r} x={-10}>
        {d.name}
      </Label>
      <ArcPath d={arc()} />
    </g>
  );
};

const CircleArcs = ({ data, maxR }) => {
  const rScale = d3
    .scaleBand()
    .paddingInner(0.4)
    .paddingOuter(1)
    .domain(d3.range(data.length))
    .range([0, maxR]);

  return (
    <g>
      <Circle cx={0} cy={0} r={maxR} />
      {data.map((d, i) => (
        <Arc d={d} r={rScale(i)} width={rScale.bandwidth()} key={i} />
      ))}
    </g>
  );
};

export default CircleArcs;
