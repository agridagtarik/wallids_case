import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
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
                  85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
                ],
                labels: {
                  show: false,
                },
              },
              yaxis: {
                show: false,
              },
              dataLabels: {
                enabled: false,
              },
              grid: {
                show: false,
              },
              colors: ["#ff0000"],
              stroke: {
                width: 2,
                curve: "smooth",
              },
            }}
            series={[
              {
                name: "series-1",
                data: [
                  30, 40, 35, 50, 45, 55, 60, 45, 52, 49, 60, 55, 68, 70, 91,
                ],
              },
            ]}
            type="line"
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
