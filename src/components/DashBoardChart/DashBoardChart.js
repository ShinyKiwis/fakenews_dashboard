import React, { useState } from "react";
import Text from "react-svg-text";
import "./DashBoardChart.css";
import Pill from "../Common/Pill";
import { PieChart } from "react-minimal-pie-chart";

function DashBoardChart(props) {
  const [hovered, setHovered] = useState(undefined);
  let sum = 0;
  let isAnythingHovered = false;

  const data = props.data.map((entry, i) => {
    sum += entry.value;
    if (hovered === i) {
      isAnythingHovered = true;
      return {
        ...entry,
        hovered: true,
      };
    }
    return {
      ...entry,
      hovered: false,
    };
  });

  return (
    <div>
      <PieChart
        data={data}
        style={{ height: "300px" }}
        lineWidth={40}
        startAngle={-90}
        label={({ dataEntry }) => {
          if (!isAnythingHovered) {
            return (
              <svg fill="#414755">
                <Text
                  className="commonCenterLabel"
                  x={50}
                  y={50}
                  textAnchor="middle"
                  verticalAnchor="middle"
                >
                  {sum}
                </Text>
              </svg>
            );
          } else if (dataEntry.hovered) {
            return (
              <svg fill={dataEntry.color}>
                <Text
                  className="specificCenterLabel"
                  x={50}
                  y={40}
                  textAnchor="middle"
                  verticalAnchor="middle"
                >
                  {Math.round((dataEntry.value / sum) * 10000) / 100 + "%"}
                </Text>
                <line
                  x1="30"
                  y1="50"
                  x2="70"
                  y2="50"
                  stroke={dataEntry.color}
                  stroke-width="0.3"
                />
                <Text
                  className="specificCenterLabel"
                  x={50}
                  y={60}
                  textAnchor="middle"
                  verticalAnchor="middle"
                  fontSize="1em"
                  style={{ fontColor: "#1f5fe0" }}
                >
                  {dataEntry.value}
                </Text>
              </svg>
            );
          }
        }}
        
        segmentsStyle={{ transition: "stroke 0.3s", cursor: "pointer" }}
        segmentsShift={(index) => (index === hovered ? 0 : 0)}
        onMouseOver={(_, index) => {
          setHovered(index);
        }}
        onMouseOut={() => {
          setHovered(undefined);
        }}
      />

      <div className="labels">
        <div className="column">
          <Pill type={data[2].title} color={data[2].color}/>
        </div>
        <div className="column">
          <Pill type={data[1].title} color={data[1].color} mid={true} />
        </div>
        <div className="column">
          <Pill type={data[0].title} color={data[0].color}/>
        </div>
      </div>
    </div>
  );
}

export default DashBoardChart;
