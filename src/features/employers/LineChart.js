import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(188, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 44,
      },
      {
        x: "helicopter",
        y: 188,
      },
      {
        x: "boat",
        y: 65,
      },
      {
        x: "train",
        y: 217,
      },
      {
        x: "subway",
        y: 273,
      },
      {
        x: "bus",
        y: 114,
      },
      {
        x: "car",
        y: 70,
      },
      {
        x: "moto",
        y: 215,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 177,
      },
      {
        x: "skateboard",
        y: 23,
      },
      {
        x: "others",
        y: 116,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(128, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 13,
      },
      {
        x: "helicopter",
        y: 105,
      },
      {
        x: "boat",
        y: 263,
      },
      {
        x: "train",
        y: 127,
      },
      {
        x: "subway",
        y: 295,
      },
      {
        x: "bus",
        y: 107,
      },
      {
        x: "car",
        y: 261,
      },
      {
        x: "moto",
        y: 132,
      },
      {
        x: "bicycle",
        y: 91,
      },
      {
        x: "horse",
        y: 219,
      },
      {
        x: "skateboard",
        y: 263,
      },
      {
        x: "others",
        y: 189,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(228, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 240,
      },
      {
        x: "helicopter",
        y: 270,
      },
      {
        x: "boat",
        y: 164,
      },
      {
        x: "train",
        y: 117,
      },
      {
        x: "subway",
        y: 219,
      },
      {
        x: "bus",
        y: 3,
      },
      {
        x: "car",
        y: 66,
      },
      {
        x: "moto",
        y: 273,
      },
      {
        x: "bicycle",
        y: 276,
      },
      {
        x: "horse",
        y: 5,
      },
      {
        x: "skateboard",
        y: 265,
      },
      {
        x: "others",
        y: 204,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(0, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 112,
      },
      {
        x: "helicopter",
        y: 215,
      },
      {
        x: "boat",
        y: 10,
      },
      {
        x: "train",
        y: 258,
      },
      {
        x: "subway",
        y: 193,
      },
      {
        x: "bus",
        y: 296,
      },
      {
        x: "car",
        y: 267,
      },
      {
        x: "moto",
        y: 213,
      },
      {
        x: "bicycle",
        y: 198,
      },
      {
        x: "horse",
        y: 238,
      },
      {
        x: "skateboard",
        y: 209,
      },
      {
        x: "others",
        y: 132,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(91, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 269,
      },
      {
        x: "helicopter",
        y: 244,
      },
      {
        x: "boat",
        y: 155,
      },
      {
        x: "train",
        y: 138,
      },
      {
        x: "subway",
        y: 257,
      },
      {
        x: "bus",
        y: 151,
      },
      {
        x: "car",
        y: 273,
      },
      {
        x: "moto",
        y: 219,
      },
      {
        x: "bicycle",
        y: 80,
      },
      {
        x: "horse",
        y: 20,
      },
      {
        x: "skateboard",
        y: 161,
      },
      {
        x: "others",
        y: 236,
      },
    ],
  },
];

const LineChart = () => {
  return (
    <ResponsiveLine
      data={data}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "nivo" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    ></ResponsiveLine>
  );
};

export default LineChart;
