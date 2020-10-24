import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { Bar } from "react-chartjs-2";

require("./RoundedBars.js");

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        labels: ["Week I", "Week II", "Week III", "Week IV"],
        datasets: [
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [20, 10, 30, 15],
            stack: 1,
            name: "AMR"
          },
          {
            label: "Invoice Created",
            backgroundColor: "rgb(51, 204, 51)",
            data: [60, 20, 20, 30],
            stack: 1
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [40, 50, 20, 45],
            stack: 1
          },
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [25, 5, 20, 10],
            stack: 2
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 2
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 2
          },
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [35, 5, 25, 10],
            stack: 3
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 3
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 3
          },
          {
            label: "Pending Approval",
            backgroundColor: "rgb(51, 153, 255)",
            data: [15, 5, 21, 17],
            stack: 4
          },
          {
            label: "Invoice Created!",
            backgroundColor: "rgb(51, 204, 51)",
            data: [51, 25, 10, 30],
            stack: 4
          },
          {
            label: "Approved!",
            backgroundColor: "green",
            data: [45, 40, 22, 55],
            stack: 4
          }
        ]
      },

      options: {
        cornerRadius: 10,
        legend: {
          labels: {
            generateLabels: function(chart) {
              return Chart.defaults.global.legend.labels.generateLabels
                .apply(this, [chart])
                .filter(function(item, i) {
                  return i <= 2;
                });
            }
          }
        },
        scales: {
          xAxes: [
            {
              id: "xAxis1",
              type: "category",
              ticks: {
                display: false
              }
            },
            {
              id: "xAxis2",
              type: "linear",
              ticks: {
                beginAtZero: true,
                max: 4,
                min: 0,
                stepSize: 0.25,
                labelOffset: 15,

                callback: function(value, index, values) {
                  var array = ["W1", "W2", "W3", "W4"];
                  // console.log("values:  ", index % array.length) ;
                  if (index == values.length - 1) return "";
                  return array[index % array.length];
                }
              }
            },
            {
              id: "xAxis3",
              type: "linear",
              ticks: {
                beginAtZero: true,
                max: 4,
                min: 0,
                stepSize: 1,
                labelOffset: 55,
                callback: function(value, index, values) {
                  var weeks = ["Week I", "Week II", "Week III", "Week IV"];
                  return weeks[index];
                }
              }
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        },
        tooltips: {
          mode: "nearest",
          callbacks: {
            title: function(tooltipItem, data) {
              const arr = [
                "W1",
                "W1",
                "W1",
                "W2",
                "W2",
                "W2",
                "W3",
                "W3",
                "W3",
                "W4",
                "W4",
                "W4"
              ];
              // console.log(tooltipItem);
              return arr[tooltipItem[0].datasetIndex];
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <Bar data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
