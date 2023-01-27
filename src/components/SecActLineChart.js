import React from "react";
import Chart from "react-apexcharts";

const SecActLineChart = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={{
              chart: {
                id: "basic-line",
                toolbar: {
                  show: false,
                },
                animations: {
                  enabled: false,
                },
              },
              xaxis: {
                categories: [
                  "6am",
                  "7am",
                  "8am",
                  "9am",
                  "10am",
                  "11am",
                  "12pm",
                  "1pm",
                  "2pm",
                  "3pm",
                  "4pm",
                  "5pm",
                  "6pm",
                ],
              },

              dataLabels: {
                enabled: false,
              },

              colors: ["#F50057", "#18FFFF", "#304FFE"],
              stroke: {
                width: 2,
                curve: "smooth",
              },
            }}
            series={[
              {
                name: "Insecure",
                data: [61, 20, 35, 24, 40, 66, 15, 32, 51, 40, 13, 48, 45],
              },
              {
                name: "Secure",
                data: [10, 63, 45, 75, 55, 35, 65, 50, 39, 39, 88, 45, 70],
              },
              {
                name: "Request",
                data: [71, 83, 80, 99, 95, 101, 80, 82, 90, 79, 101, 93, 115],
              },
            ]}
            type="line"
          />
        </div>
      </div>
    </div>
  );
};

export default SecActLineChart;
