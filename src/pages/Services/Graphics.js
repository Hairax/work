import React from 'react';
import { Chart } from "react-google-charts";

export default function Graphics({ tb1, tb2, tb3, tball, options }) {
  return (
    <div className="flex flex-col items-center">
      
      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="p-4 pr-4">
          <table className="table-auto w-full border-separate">
            {tb1.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb1} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="p-4 pr-4">
          <table className="table-auto w-full border-separate">
            {tb2.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb2} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className=" p-4 pr-4">
          <table className="table-auto w-full border-separate">
            {tb3.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb3} options={options} />
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col gap-4 pt-10 pb-10">
        <div className="w-full p-4 pr-4">
          <table className="table-auto w-full border-separate ">
            {/* tabla automatica con la matriz Tabla2*/}
            <tr>
              <th rowSpan={2} className='border border-gray-400 text-center' colSpan={2}>PARÁMETROS VOLUMETRIVOS</th>
              <th rowSpan={2} className='border border-gray-400 text-center' colSpan={10}>ESPECIFICACIONES VOLUMÉTRICAS PARA T.M.N. DE 1/2” (12.5mm)</th>
            </tr><td></td>
            <tr>
              <th rowSpan={3} className='border border-gray-400 text-center' colSpan={1}>Pb</th>
              <th rowSpan={3} className='border border-gray-400 text-center' colSpan={1}>Gmm</th>
              <th rowSpan={1} className='border border-gray-400 text-center' colSpan={10}>Gmm</th>
            </tr>
            <tr>
              <th rowSpan={1} className='border border-gray-400 text-center' colSpan={4}>VA %</th>
              <th rowSpan={1} className='border border-gray-400 text-center' colSpan={2}>VAM %</th>
              <th rowSpan={1} className='border border-gray-400 text-center' colSpan={2}>VFA %</th>
            </tr>
            <tr>
              <th className='border border-gray-400 text-center'>0%</th>
              <th className='border border-gray-400 text-center'>3%</th>
              <th className='border border-gray-400 text-center'>4%</th>
              <th className='border border-gray-400 text-center'>5%</th>
              <th className='border border-gray-400 text-center'>14%</th>
              <th className='border border-gray-400 text-center'>16%</th>
              <th className='border border-gray-400 text-center'>65%</th>
              <th className='border border-gray-400 text-center'>75%</th>
            </tr>
            {tball.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 p-2">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tball} options={options} />
        </div>
      </div>
    </div>
  );
}
