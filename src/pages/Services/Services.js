import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import './Services.css';
import { Chart } from "react-google-charts";
import { ALLresult, LGmb, LGmm, VFA } from './Calculate';

function Services() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [resultado, setResultado] = useState(0);
  // matriz
  /*
  const ejemplo = [
    ["pb","Gmm","Va 0%","Va 3%" ,"Va 4%","Va 5%"],
    [6.5,	2.452,	2.452,	2.378,	2.354,	2.329],
    [6.6,	2.448,	2.448,	2.375,	2.350,	2.326],
    [6.7,	2.445,	2.445,	2.371,	2.347,	2.322],
    [6.8,	2.441, 2.441,	2.368,	2.343,	2.319],
    [6.9,	2.437,	2.437,	2.364,	2.340,	2.315],
    [7,	2.434,	2.434,	2.361,	2.336,	2.312],
    [7.1,	2.430,	2.430,	2.357,	2.333,	2.309],
    [7.2,	2.427,	2.427,	2.354,	2.330,	2.305],
    [7.3,	2.423,	2.423,	2.350,	2.326,	2.302],
    [7.4,	2.420,	2.420,	2.347,	2.323,	2.299],
    [7.5,	2.416,	2.416,	2.344,	2.319,	2.295],
    [7.6,	2.413,	2.413,	2.340,	2.316,	2.292],
    [7.7,	2.409,	2.409,	2.337,	2.313,	2.289],
    [7.8,	2.406,	2.406,	2.333,	2.309,	2.285],
    [7.9,	2.402,	2.402,	2.330,	2.306,	2.282],
    [8,	2.399,	2.399,	2.327,	2.303,	2.279]
  ];*/

  let tb1 = LGmm(2.525,2.712,1.03);
  let tb2 = LGmb(2.525,2.712,1.03);
  let tb3 = VFA(2.525,2.712,1.03);
  let tball = ALLresult();
  
  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const sumarValores = () => {
    setResultado(Number(input1) + Number(input2) + Number(input3));
  };

  return (
    <div className="items-cente0r">
      <Header />
      <div className="text-2xl font-bold text-center flex flex-row items-center justify-center gap-4 pt-10 pb-10">
        <div className=' flex flex-col pr-4 pl-4'>
          <label className="text-black font-normal">GMB</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            placeholder=""
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className='flex flex-col pr-4 pl-4'>
          <label className="text-black font-normal">GMB</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            placeholder=""
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div className='flex flex-col pr-4 pl-4'>
          <label className="text-black font-normal">GMB</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            placeholder=""
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>
        <div className=' flex flex-col pr-4 pl-4'>
          <div className='grid justify-items-start pt-6'>
            <button
              className="bg-green-500 text-black font-normal py-2 px-4 rounded-full"
              onClick={sumarValores}
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xl">Resultado: {resultado}</div>
      <div className='flex flex-row justify-center gap-4 pt-10 pb-10'>
        <table className='table-auto '>
            {/* tabla automatica con la matriz tabla 1*/}
            {tb1.map((row, i) => (
              <tr key={i} className=' border-2 border-gray-300 bg-gray opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                {row.map((column, j) => (
                  <td key={j} className='border-2 border-gray-300 bg-gray opacity-50 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                    {column}
                  </td>
                ))}
              </tr>
            ))}
        </table>
            {/* react google chart 
            Line chart
            columna 1 x
            columna 2 y
            columna 3, 4, 5 y  6 son las lineas a graficar
            */}

        <Chart
          chartType='LineChart'
          width='100%'
          height='400px'
          data={tb1}
          options={options}
        />
      </div>
      <div className='flex flex-row justify-center gap-4 pt-10 pb-10'>
      <table className='table-auto '>
            {/* tabla automatica con la matriz Tabla2*/}
            {tb2.map((row, i) => (
              <tr key={i} className=' border-2 border-gray-300 bg-gray opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                {row.map((column, j) => (
                  <td key={j} className='border-2 border-gray-300 bg-gray opacity-50 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                    {column}
                  </td>
                ))}
              </tr>
            ))}
        </table>


        <Chart
          chartType='LineChart'
          width='100%'
          height='400px'
          data={tb2}
          options={options}
        />
      </div>

      <div className='flex flex-row justify-center gap-4 pt-10 pb-10'>
      <table className='table-auto '>
            {/* tabla automatica con la matriz Tabla2*/}
            {tb3.map((row, i) => (
              <tr key={i} className=' border-2 border-gray-300 bg-gray opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                {row.map((column, j) => (
                  <td key={j} className='border-2 border-gray-300 bg-gray opacity-50 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                    {column}
                  </td>
                ))}
              </tr>
            ))}
        </table>


        <Chart
          chartType='LineChart'
          width='100%'
          height='400px'
          data={tb3}
          options={options}
        />
      </div>

      <div className='flex flex-row justify-center gap-4 pt-10 pb-10'>
      <table className='table-auto '>
            {/* tabla automatica con la matriz Tabla2*/}
            <tr>
              <th rowSpan={2} className='border border-gray-400 px-4 py-2 text-center' colSpan={2}>PARÁMETROS VOLUMETRIVOS</th>
              <th rowSpan={2} className='border border-gray-400 px-4 py-2 text-center' colSpan={10}>ESPECIFICACIONES VOLUMÉTRICAS PARA T.M.N. DE 1/2” (12.5mm)</th>
            </tr><td></td>
            <tr>
              <th rowSpan={3} className='border border-gray-400 px-4 py-2 text-center' colSpan={1}>Pb</th>
              <th rowSpan={3} className='border border-gray-400 px-4 py-2 text-center' colSpan={1}>Gmm</th>
              <th rowSpan={1} className='border border-gray-400 px-4 py-2 text-center' colSpan={10}>Gmm</th>
            </tr>
            <tr>
              <th rowSpan={1} className='border border-gray-400 px-4 py-2 text-center' colSpan={4}>VA %</th>
              <th rowSpan={1} className='border border-gray-400 px-4 py-2 text-center' colSpan={2}>vam %</th>
              <th rowSpan={1} className='border border-gray-400 px-4 py-2 text-center' colSpan={2}>VFA %</th>
            </tr>
            <tr>
              <th className='border border-gray-400 px-4 py-2 text-center'>0%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>3%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>4%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>5%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>14%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>16%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>65%</th>
              <th className='border border-gray-400 px-4 py-2 text-center'>75%</th>
            </tr>
            {tball.map((row, i) => (
              <tr key={i} className=' border-2 border-gray-300 bg-gray opacity-75 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                {row.map((column, j) => (
                  <td key={j} className='border-2 border-gray-300 bg-gray opacity-50 h-10 px-5 pr-1 rounded-lg text-sm focus:outline-none'>
                    {column}
                  </td>
                ))}
              </tr>
            ))}
        </table>


        <Chart
          chartType='LineChart'
          width='100%'
          height='400px'
          data={tball}
          options={options}
        />
      </div>

    </div>
  );
}

export default Services;
