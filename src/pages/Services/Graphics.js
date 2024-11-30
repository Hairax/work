import React from 'react';
import { Chart } from "react-google-charts";

function NewOptions(BeforeOptions, nameTable, nameX, nameY) {
  return {
    ...BeforeOptions,
    title: nameTable,
    titleTextStyle: {
      fontSize: 20,
      bold: true,
      color: "#000",
    },
   
    hAxis: {
      ...BeforeOptions.hAxis,
      title: nameX,
      titleTextStyle: {
        fontSize: 16,
        bold: true,
      },
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
      minValue: 6, maxValue: 8 ,
    },
    vAxis: {
      ...BeforeOptions.vAxis,
      title: nameY,
      titleTextStyle: {
        fontSize: 16,
        bold: true,
      },
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
    },
    legend: { position: "right" },
  };
}

export default function Graphics({ tb1, tb2, tb3, tb1all, tb2all, pol1, pol2, options }) {
  return (
    <div className="flex flex-col items-center w-full px-6">
      {[
        { table: tb1, chartData: tb1, title: "Isolíneas de Porcentaje de Vacíos de Aire (%Va)" },
        { table: tb2, chartData: tb2, title: "Isolíneas de Porcentaje de Vacíos en el Agregado Mineral (%VAM)" },
        { table: tb3, chartData: tb3, title: "Isolíneas de Porcentaje de Vacíos Llenos de Asfalto (%VFA)" }
      ].map((item, index) => (
        <div key={index} className="w-full flex flex-col">
          <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
            {item.title}
          </h1>
        <div key={index} className="w-full flex flex-col lg:flex-row gap-6 py-30 graph-container">
          <div className="w-full p-4">
            <table className="table-auto w-full bg-white bg-opacity-90 shadow rounded-lg overflow-hidden">
              <tbody>
                {item.table.map((row, i) => (
                  <tr key={i} className={`border-2 border-gray-200 ${i === 0 ? "font-bold" : ""}`}>
                    {row.map((column, j) => (
                      <td key={j} className="border border-gray-300 p-3 text-center">{column}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full p-4 ">
            <Chart 
              chartType="LineChart" 
              width="100%" 
              height="500px" 
              data={item.chartData} 
              options={{...NewOptions(options,"", "Contenido de Asfalto (%)", "Gₘᵦ(g/cm³)") ,
                chartArea:{left:70,top:60,width:'70%',height:'70%'},
              }}
            />
          </div>
        </div>
        </div>
      ))}

      <div className="w-full py-10 graph-container justify-center items-center">
      <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
              Intersección de las isolíneas de Va, VAM y VFA
            </h1>
        <table className="table-auto w-full bg-white bg-opacity-90 shadow rounded-lg overflow-hidden mb-10">
          <thead>
            <tr>
              <th colSpan={2} className="border border-gray-400 p-3 text-center font-semibold">PARÁMETROS VOLUMÉTRICOS</th>
              <th colSpan={10} className="border border-gray-400 p-3 text-center font-semibold">ESPECIFICACIONES VOLUMÉTRICAS PARA T.M.N. DE 1/2” (12.5mm)</th>
            </tr>
          </thead>
          <tbody>
            {tb2all.map((row, i) => (
              <tr key={i} className="border border-gray-200">
                {row.map((column, j) => (
                  <td key={j} className="border border-gray-300 p-3 text-center">{column}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Chart 
          chartType="LineChart" 
          width="100%" 
          height="600px" 
          data={tb1all} 
          options={{...NewOptions(options, "", "Contenido de Asfalto (%)", "Gₘᵦ(g/cm³)"),
            chartArea:{top:'30', width:'80%',height:'80%'},
          }}
        />
      </div>

      <div className="w-full py-0 graph-container">
        <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
              Polígono de Intersección de las isolíneas de Va, VAM y VFA
        </h1>
        <Chart 
          chartType="ComboChart" 
          width="100%" 
          height="600px" 
          data={pol1} 
          options={{
            ...NewOptions(options, "", "Contenido de Asfalto (%)", "Gₘᵦ(g/cm³)"),
            seriesType: "line",
            series: { 9: { type: "area" } },
            chartArea:{top:'10', width:'80%',height:'80%'},
          }} 
        />
      </div>
      <div className="w-full py-0 graph-container">
        <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
              Área del Polígono de Intersección
        </h1>
        <Chart 
          chartType="ComboChart" 
          width="100%" 
          height="600px" 
          data={pol2} 
          options={{
            ...NewOptions(options,"", "Contenido de Asfalto (%)", "Gₘᵦ(g/cm³)"),
            seriesType: "scatter",
            series: { 1: { type: "area", } },
            legend: { position: 'none' },
            chartArea:{ top:'10', width:'80%',height:'80%'},
          }} 
        />
      </div>
     
      <div>
        <h1 className="text-[30px] font-bold text-green-600 text-center my-6">
          Resultados por el Método Ramcodes
        </h1>
        <div className="grid grid-cols-2 gap-4 place-content-evenly bg-green-100 rounded-md w-[600px] p-4">
          <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2 text-green-800 shadow-sm">
            Gₘᵦ
          </div>
          <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2 border-green-500 text-green-800 shadow-sm">
            {pol2.at(-1)[1].toFixed(3)}
          </div>
          <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2  text-green-800 shadow-sm">
            Contenido de Asfalto Óptimo
          </div>
          <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2 border-green-500 text-green-800 shadow-sm">
          {pol2.at(-1)[0].toFixed(3)}
          </div>
        </div>
      </div>

    </div>
  );
}
