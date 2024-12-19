import React, { useEffect } from 'react';
import Latex from "react-latex-next";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend } from "chart.js";
import { gmm, Vam16 } from './Calculate';

// Registro de los componentes necesarios para Chart.js, incluyendo Filler
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend);



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


export default function Graphics({ date1,date2, date3,tb1, tb2, tb3, tb1all, tb2all, pol1, pol2,esal,nominalSize,lx,ly,gmm,va3,va4,va5,
   vma14, vma16, vfa65, vfa75,vmaMin,vmaMax,vfaMin,vfaMax,puntosJSx, puntosJSy, options}) {
  
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"], // Etiquetas del eje X
    datasets: [
      {
        label: "Ventas (Línea)",
        data: [65, 59, 80, 81, 56], // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(75, 192, 192)", // Color de la línea
        tension: 0.1, // Curvatura de la línea
      },
      {
        label: "Gastos (Área)",
        data: [40, 45, 50, 55, 60], // Datos para el eje Y
        fill: true, // Rellenar el área debajo de la línea
        borderColor: "rgb(255, 99, 132)", // Color de la línea
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Color de fondo del área
        tension: 0.1, // Curvatura de la línea
      },
      {
        label: "Puntos (Ventas)",
        data: [50, 60, 75, 65, 45], // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(53, 162, 235)", // Color de los puntos
        backgroundColor: "rgb(53, 162, 235)", // Color de fondo de los puntos
        radius: 5, // Tamaño de los puntos
        pointStyle: "circle", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
    ],
  };

  const data1 = {
   
    labels: lx, // Etiquetas del eje X
    datasets: [
      {
        label: "Gmm",
        data: gmm, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(211, 20, 52)", // Color de los puntos
        backgroundColor: "rgb(211, 20, 52)", // Color de fondo de los puntos
        radius: 2, // Tamaño de los puntos
        pointStyle: "circle", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "Va = 0%",
        data: gmm, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(53, 162, 235)", // Color de los puntos
        backgroundColor: "rgb(53, 162, 235)", // Color de fondo de los puntos
        radius: 10, // Tamaño de los puntos
        pointStyle: "cross", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "Va = 3%",
        data: va3, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(19, 247, 76)", // Color de los puntos
        backgroundColor: "rgb(19, 247, 76)", // Color de fondo de los puntos
        radius: 5, // Tamaño de los puntos
        pointStyle: "rectRot", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "Va = 4%",
        data: va4, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(38, 209, 252)", // Color de los puntos
        backgroundColor: "rgb(38, 209, 252)", // Color de fondo de los puntos
        radius: 10, // Tamaño de los puntos
        pointStyle: "star", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "Va = 5%",
        data: va5, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(255, 157, 10)", // Color de los puntos
        backgroundColor: "rgb(255, 157, 10)", // Color de fondo de los puntos
        radius: 8, // Tamaño de los puntos
        pointStyle: "triangle", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
    ],
  };
  
  const data2 = {
   
    labels: lx, // Etiquetas del eje X
    datasets: [
      {
        label: "VMA = "+ vmaMin+ "%",
        data: vma14, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(53, 162, 235)", // Color de los puntos
        backgroundColor: "rgb(53, 162, 235)", // Color de fondo de los puntos
        radius: 10, // Tamaño de los puntos
        pointStyle: "cross", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "VMA = "+vmaMax+ "%",
        data: vma16, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(19, 247, 76)", // Color de los puntos
        backgroundColor: "rgb(19, 247, 76)", // Color de fondo de los puntos
        radius: 5, // Tamaño de los puntos
        pointStyle: "rectRot", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },

    ],
  };

  const data3 = {
   
    labels: lx, // Etiquetas del eje X
    datasets: [
      {
        label: "Gmm",
        data: gmm, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(211, 20, 52)", // Color de los puntos
        backgroundColor: "rgb(211, 20, 52)", // Color de fondo de los puntos
        radius: 2, // Tamaño de los puntos
        pointStyle: "circle", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "VFA = "+ vfaMin+ "%",
        data: vfa65, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(53, 162, 235)", // Color de los puntos
        backgroundColor: "rgb(53, 162, 235)", // Color de fondo de los puntos
        radius: 10, // Tamaño de los puntos
        pointStyle: "cross", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },
      {
        label: "VFA = "+vfaMax+ "%",
        data: vfa75, // Datos para el eje Y
        fill: false, // No llenar el área debajo de la línea
        borderColor: "rgb(19, 247, 76)", // Color de los puntos
        backgroundColor: "rgb(19, 247, 76)", // Color de fondo de los puntos
        radius: 5, // Tamaño de los puntos
        pointStyle: "rectRot", // Estilo de los puntos
        tension: 0, // Sin curvatura (puntos con líneas rectas)
        showLine: false, // No mostrar la línea entre los puntos
      },

    ],
  };


const puntosJSnames = ["A", "B", "C", "D","E",""]; // Nombres de los puntos

// Combina las coordenadas y nombres en una estructura de puntos
const puntosJS = puntosJSx.map((x, index) => ({
  x: x,
  y: puntosJSy[index],
  name: puntosJSnames[index],
}));

// Configuración de los datos para el gráfico
const pol = {
  labels: puntosJSnames, // Usamos los nombres para las etiquetas
  datasets: [
    {
      label: "Polígono",
      data: puntosJS, // Usamos los puntos con x, y, y name
      borderColor: "rgb(60, 255, 0)",
      backgroundColor: "rgba(40, 218, 5, 0.4)",
      fill: true, // Llenamos el área del polígono
      pointStyle: "rect", // Estilo de los puntos
      radius: 6, // Tamaño de los puntos
      showLine: true, // Mostrar la línea conectando los puntos
    },
    {
      label: "Centroide",
      data: [
        {
          x: pol2.at(-1)[0].toFixed(3),  // Coordenada X del último punto
          y: pol2.at(-1)[1].toFixed(3),  // Coordenada Y del último punto
          name: "Centroide",             // Nombre del punto
        },
      ],
      borderColor: "rgb(0, 78, 247)",
      backgroundColor: "rgba(3, 94, 214, 0.4)",
      pointStyle: "rectRot", // Estilo de los puntos
      radius: 6, // Tamaño de los puntos
    },
  ],
};

// Configuración de las opciones del gráfico
const opti = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: "linear",
      title: {
        display: true,  // Mostrar el título del eje X
        text: 'Pb',  // Título para el eje X
        font: {
          size: 20,
          weight: 'bold',  // Hacer el texto en negrita
        },
        color : "black"
      },
      min: lx[0], // Establecer min en el valor mínimo de X
      max: lx[lx.length], // Establecer max en el valor máximo de X
    },
    y: {
      title: {
        display: true,  // Mostrar el título del eje X
        text: 'Gmm',  // Título para el eje X
        font: {
          size: 20,
          weight: 'bold',  // Hacer el texto en negrita
        },
        color: "black"
      },
      
      min: Math.min(...puntosJSy) - 0.005, // Establecer min en el valor mínimo de Y
      max: Math.max(...puntosJSy) + 0.005, // Establecer max en el valor máximo de Y
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const { x, y, name } = context.raw;
          return `${name}: (${x}, ${y})`; // Mostrar el nombre y las coordenadas en el tooltip
        },
      },
    },
  },
};

  return (
    <div className="flex flex-col items-center w-full px-6 ">

      {[
        { table: tb1[0], chartData: data1, title: "Isolíneas de Porcentaje de Vacíos de Aire (%Va)" },
        { table: tb2[0], chartData: data2, title: "Isolíneas de Porcentaje de Vacíos en el Agregado Mineral (%VMA)" },
        { table: tb3[0], chartData: data3, title: "Isolíneas de Porcentaje de Vacíos Llenos de Asfalto (%VFA)" }
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
                <div style={{ height: "600px", width: "auto", margin: "auto" }}>
                <Line data={item.chartData} options={options} />
                </div>
             

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
          
          <div style={{ height: "400px", width: "600px", margin: "auto" }}>
             <Line data={pol} options={opti} />
         </div>
          

        </div>

        <div className='w-auto py-10'>
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
