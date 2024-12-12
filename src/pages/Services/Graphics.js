import React from 'react';
import { Chart } from "react-google-charts";
import Latex from "react-latex-next";

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
        scaleType: 'log',
      },
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
     // minValue: 6, maxValue: 8 ,
    },
    vAxis: {
      ...BeforeOptions.vAxis,
      title: nameY,
      titleTextStyle: {
        fontSize: 16,
        bold: true,
        scaleType: 'log',
      },
      textStyle: {
        fontSize: 14,
        color: "#000",
      },
    },
    legend: { position: "right" },
    
  };
}

const serieslist = [
  {
      
          1: { type: "scatter" , color: "#00FA23" },
          2: { type: "scatter" , color: "#5100FA"},
          3: { type: "scatter" , color: "#00F3FA"},
          4: { type: "scatter" , color: "#FA261D"},
          5: { type: "line" , color: "#00FA23"},
          6: { type: "line" , color: "#5100FA"},
          7: { type: "line" , color: "#00F3FA"},
          8: { type: "line" , color: "#FA261D"},
          
          
      
  },
  {
    0: { type: "scatter" , color: "#00FA23" },
    1: { type: "scatter" , color: "#5100FA"},
    2: { type: "line" , color: "#00FA23"},
    3: { type: "line" , color: "#5100FA"},
    
  },
  {
    0: { type: "scatter" , color: "#00FA23" },
    1: { type: "scatter" , color: "#5100FA"},
    2: { type: "scatter" , color: "#00F3FA"},
    3: { type: "line" , color: "#00FA23"},
    4: { type: "line" , color: "#5100FA"},
    5: { type: "line" , color: "#00F3FA"},
    6: { type: "line" , color: "#FA261D"},
   
  }
];


export default function Graphics({ date1,date2, date3,tb1, tb2, tb3, tb1all, tb2all, pol1, pol2,esal,nominalSize, options }) {
  return (
    <div className="flex flex-col items-center w-full px-6 ">

      {[
        { table: tb1[0], chartData: tb1[1], title: "Isolíneas de Porcentaje de Vacíos de Aire (%Va)" },
        { table: tb2[0], chartData: tb2[1], title: "Isolíneas de Porcentaje de Vacíos en el Agregado Mineral (%VMA)" },
        { table: tb3[0], chartData: tb3[1], title: "Isolíneas de Porcentaje de Vacíos Llenos de Asfalto (%VFA)" }
      ].map((item, index) => (
        <div key={index} className="w-full flex flex-col items-center gap-6 py-30 graph-container">
          {index === 0 &&
            <div className="w-full py-10">
            <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
              Datos Trabajados
            </h1>
            <table className="table-auto w-full bg-white bg-opacity-90 shadow rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-violet-100 text-gray-600  text-sm ">
                  <th className="px-6 py-4 border border-gray-300"><Latex>${`G_{sb}`}$</Latex></th>
                  <th className="px-6 py-4 border border-gray-300"><Latex>${`G_{se}`}$</Latex></th>
                  <th className="px-6 py-4 border border-gray-300"><Latex>${`G_{b}`}$</Latex></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-violet-200 hover:bg-violet-400">
                  <td className="px-6 py-4 text-center border border-violet-300">{date1}</td>
                  <td className="px-6 py-4 text-center border border-violet-300">{date2}</td>
                  <td className="px-6 py-4 text-center border border-violet-300">{date3}</td>
                </tr>
              </tbody>
            </table>
          </div>
          }

          <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
            {item.title}
          </h1>
          <div className="flex flex-col lg:flex-row w-full gap-6">
            <div className="w-full lg:w-1/2 p-4">
              <table className="table-auto w-full bg-white bg-opacity-90 shadow rounded-lg overflow-hidden ">
                <tbody>
                  {item.table.map((row, i) => (
                    <tr key={i} className={`hover:bg-sky-100 border-2 border-gray-200 ${i === 0 ? "font-bold" : ""}`}>
                      {row.map((column, j) => (
                        <td key={j} className="border border-gray-300 p-3 text-center hover:bg-sky-300">{column}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <Chart
                chartType="ComboChart" 
                width="100%" 
                height="500px" 
                data={item.chartData} 
                options={{...NewOptions(options,"", "Pb", "Gmb") ,
                  series: serieslist[index] ,
                  chartArea:{left:75,top:60,width:'70%',height:'70%'},
                }}
              />
            </div>
          </div>
        </div>
    ))}

      <div className="w-full py-10 graph-container justify-center items-center">
        <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
          Intersección de las isolíneas de Va, VMA y VFA
        </h1>
        <table className="table-auto w-full bg-white bg-opacity-90 shadow rounded-lg overflow-hidden mb-10">
          <thead>
            <tr>
              <th colSpan={2} className="border border-gray-400 p-3 text-center font-semibold">PARÁMETROS VOLUMÉTRICOS</th>
              <th colSpan={10} className="border border-gray-400 p-3 text-center font-semibold">ESPECIFICACIONES VOLUMÉTRICAS</th>
            </tr>
          </thead>
          <tbody>
            {tb1all.map((row, i) => (
              <tr key={i} className="border border-gray-200">
                {row.map((column, j) => (
                  <td key={j} className="hover:bg-sky-300 border border-gray-300 p-3 text-center">{column}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

      <div className="w-full py-0 graph-container flex flex-col items-center">
        
        <div className="w-full py-0">
          <h1 className="text-[30px] font-bold text-blue-600 text-center my-6">
                Polígono de Vacíos
          </h1>
          <Chart 
            chartType="ComboChart" 
            width="100%" 
            height="600px" 
            data={pol2} 
            options={{
              ...NewOptions(options,"", "Pb", "Gmb"),
              seriesType: "scatter",
              series: { 0: { color: "#00FA32"},
                1: { type: "area", color: "#70FA07"} },
              legend: { position: 'none' },
              chartArea:{ top:'10', width:'80%',height:'80%'},
              
              
            }} 
          />
        </div>

        <div>
          <h1 className="text-[30px] font-bold text-green-600 text-center my-6">
            Resultados
          </h1>
          <div className="grid grid-cols-2 gap-4 place-content-evenly bg-green-100 rounded-md w-[700px] p-4">
            <div className="bg-green-200 rounded-md h-auto p-4 text-center font-semibold border-2 text-green-800 shadow-sm">
            <Latex>${`G_{mb}`}$</Latex> =
            </div>
            <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2 border-green-500 text-green-800 shadow-sm">
              {pol2.at(-1)[1].toFixed(3)}
            </div>
            <div className="bg-green-200 rounded-md h-auto p-4 text-center font-semibold border-2  text-green-800 shadow-sm">
            <Latex>${`P_{bo}`}$</Latex> = 
            </div>
            <div className="bg-green-200 rounded-md h-14 p-4 text-center font-semibold border-2 border-green-500 text-green-800 shadow-sm">
            {pol2.at(-1)[0].toFixed(3)}
            </div>
            <div className="bg-green-200 rounded-md h-auto p-4 text-center font-semibold border-2  text-green-800 shadow-sm">
              <p>
              <Latex>${`G_{mb}`}$</Latex> = Gravedad específica bulk de la mezcla compactada "densidad bruta"
              </p>
            </div>
            <div className="bg-green-200 rounded-md h-auto p-4 text-center font-semibold border-2  text-green-800 shadow-sm">
              <p>
              <Latex>${`P_{bo}`}$</Latex> = Porcentaje de cemento asfáltico óptimo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
