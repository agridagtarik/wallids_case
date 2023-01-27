import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={{
              chart: {
                id: "basic-bar",
                toolbar: {
                  show: false,
                },
                animations: {
                  enabled: false,
                },
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
            }}
            series={[
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
              },
            ]}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
