import React from 'react';
import { Chart } from "react-google-charts";

export default function Graphics({ tb1, tb2, tb3, tball, options }) {
  return (
    <div className="flex flex-col items-center">
      
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="w-full lg:w-1/2 p-4">
          <table className="table-auto w-full border-separate border-spacing-2">
            {tb1.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb1} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="w-full lg:w-1/2 p-4">
          <table className="table-auto w-full border-separate border-spacing-2">
            {tb2.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb2} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="w-full lg:w-1/2 p-4">
          <table className="table-auto w-full border-separate border-spacing-2">
            {tb3.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb3} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="w-full lg:w-1/2 p-4">
          <table className="table-auto w-full border-separate ">
            {tball.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tball} options={options} />
        </div>
      </div>
    </div>
  );
}
