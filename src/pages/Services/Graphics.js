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
        { table: tb1, chartData: tb1, title: "Figura 1: Isolíneas de Porcentaje de Vacíos de Aire (%Va)" },
        { table: tb2, chartData: tb2, title: "Figura 2: Isolíneas de Porcentaje de Vacíos en el Agregado Mineral (%VAM)" },
        { table: tb3, chartData: tb3, title: "Figura 3: Isolíneas de Porcentaje de Vacíos Llenos de Asfalto (%VFA)" }
      ].map((item, index) => (
        <div key={index} className="w-full flex flex-col lg:flex-row gap-6 py-10 graph-container">
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
          <div className="w-full p-4">
            <Chart 
              chartType="LineChart" 
              width="100%" 
              height="500px" 
              data={item.chartData} 
              options={{...NewOptions(options, item.title, "Contenido de Asfalto (%)", "Gmb (g/cm³)") ,
                chartArea:{left:70,top:60,width:'70%',height:'70%'},
              }}
            />
          </div>
        </div>
      ))}

      <div className="w-full py-10 graph-container justify-center items-center">
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
          options={{...NewOptions(options, "Figura 4: Intersección de las isolíneas de Va, VAM y VFA", "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)"),
            chartArea:{width:'80%',height:'60%'},
          }}
        />
      </div>

      <div className="w-full py-0 graph-container">
        <Chart 
          chartType="ComboChart" 
          width="100%" 
          height="600px" 
          data={pol1} 
          options={{
            ...NewOptions(options, "Figura 5: Polígono de Intersección de las isolíneas de Va, VAM y VFA", "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)"),
            seriesType: "line",
            series: { 9: { type: "area" } },
            chartArea:{width:'80%',height:'60%'},
          }} 
        />
        <Chart 
          chartType="ComboChart" 
          width="100%" 
          height="600px" 
          data={pol2} 
          options={{
            ...NewOptions(options, "Figura 6: Área del Polígono de Intersección", "CONTENIDO DE ASFALTO (%)", "Gmb (g/cm³)"),
            seriesType: "scatter",
            series: { 1: { type: "area", } },
            legend: { position: 'none' },
            hAxis: { minValue: 6, maxValue: 8 },
            chartArea:{width:'80%',height:'60%'},

          }} 
        />
      </div>
    </div>
  );
}
