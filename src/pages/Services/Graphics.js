import React from 'react';
import { Chart } from "react-google-charts";

function NewOptions(BeforeOptions,nameTable,nameX,nameY){
  let noptions ={
    ...BeforeOptions,
    title: nameTable,
      hAxis: {
        ...BeforeOptions.hAxis,
        title: nameX,
      },
      vAxis: {
        ...BeforeOptions.hAxis,
        title: nameY
      }
      
  }
  return noptions;
}
export default function Graphics({ tb1, tb2, tb3, tb1all, tb2all, pol1, pol2, options }) {
  return (
    <div className="flex flex-col items-center">
      
      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10 text-center">
        <div className="p-4 pr-4 ">
          <table className="table-auto w-full border-separate bg-white bg-opacity-80">
            {tb1.map((row, i) => (
                <tr
                  key={i}
                  className={`border-2 border-gray-300 ${i === 0 ? "font-bold" : ""}`} // Aplica negrita si es la primera fila
                >
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-slate-950 p-2 border-opacity-50">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb1} options={NewOptions(options,
            "Figura 1: Isolíneas de % de Va","CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)")}/>
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className="p-4 pr-4">
          <table className="table-auto w-full border-separate bg-white bg-opacity-80">
            {tb2.map((row, i) => (
              <tr
                key={i}
                className={`border-2 border-gray-300 ${i === 0 ? "font-bold" : ""}`} // Aplica negrita si es la primera fila
              >
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 border-slate-950 p-2 border-opacity-50">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb2} options={NewOptions(options,
            "Figura 2: Isolíneas de % de VAM de diseño para la construcción del polígono",
            "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)")}/>
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col lg:flex-row gap-4 pt-10 pb-10">
        <div className=" p-4 pr-4">
          <table className="table-auto w-full border-separate bg-white bg-opacity-80">
            {tb3.map((row, i) => (
              <tr
                key={i}
                className={`border-2 border-gray-300 ${i === 0 ? "font-bold" : ""}`} // Aplica negrita si es la primera fila
              >
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 border-slate-950 p-2 border-opacity-50">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" width="100%" height="400px" data={tb3} options={NewOptions(options,
            "Figura 3: Isolíneas de % de VFA de diseño para la construcción del polígono",
            "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)")}/>
        </div>
      </div>

      <div className="w-full lg:w-4/4 flex flex-col gap-4 pt-10 pb-10 text-center">
        <div className="w-full p-4 pr-4">
          <table className="table-auto w-full border-separate bg-white bg-opacity-80">
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
            {tb2all.map((row, i) => (
              <tr key={i} className="border-2 border-gray-300">
                
                {row.map((column, j) => (
                  <td key={j} className="border-2 border-gray-300 border-slate-950 p-2 border-opacity-50">{column}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
        <div className="w-full p-4 pr-4">
          <Chart chartType="LineChart" 
          width="100%" height="600px" data={tb1all} options={NewOptions(options,
            "Figura 4: Intersección de las isolíneas de Va, VAM y VFA",
            "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)")} />
            
        </div>

        <div className="w-full p-4 pr-4">
        <Chart chartType="ComboChart" 
       width="100%" height="600px" 
       data={pol1} 
       options={{
        ...NewOptions(options,
        "Figura 5: Intersección de las isolíneas de Va, VAM y VFA",
        "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)"),
          seriesType: "line", // El tipo por defecto es line
          series: {
            9: { type: "area" }, // Especifica que la segunda serie sea de tipo área
          },
        }} 
        />
        </div>

        <div className="w-full p-4 pr-4">
          <Chart chartType="AreaChart" 
          width="100%" height="600px" data={pol2} options={NewOptions(options,
            "Figura 6: Polígono..",
            "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)")} />
            
        </div>

      </div>
    </div>
  );
}
