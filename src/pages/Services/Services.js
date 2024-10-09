import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import './Services.css';
import Graphics from './Graphics'; // Importamos el nuevo componente gráfico
import { ALLresult, LGmb, LGmm, poligono, VFA } from './Calculate';
import { FaSpinner } from 'react-icons/fa'; // Importa el ícono de carga

function Services() {
  // Estados para los inputs editables
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);

  // Estados para los inputs confirmados, que no se actualizan hasta presionar "Iniciar"
  const [confirmedInput1, setConfirmedInput1] = useState(0);
  const [confirmedInput2, setConfirmedInput2] = useState(0);
  const [confirmedInput3, setConfirmedInput3] = useState(0);

  const [loading, setLoading] = useState(false); // Controla el estado de carga
  const [showGraphics, setShowGraphics] = useState(false); // Controla si se muestran los gráficos

  // Cálculos basados en los inputs confirmados
  let tb1 = LGmm(confirmedInput1, confirmedInput2, confirmedInput3);
  let tb2 = LGmb(confirmedInput1, confirmedInput2, confirmedInput3);
  let tb3 = VFA(confirmedInput1, confirmedInput2, confirmedInput3);
  let {tb1all, tb2all} = ALLresult();
  let pol = poligono();

  const options = {
    title: "Company Performance",
    titleTextStyle: {
      color: '#2C3E50', //color de titulo
      fontSize: 20
    },
    pointsVisible: true,
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: {
      //fill: '#ffe8d8', // Color de relleno
      stroke: '#000000', // Color del borde (contorno)
      strokeWidth: 2 // Opcional: ancho del borde
    }, // Fondo color durazno
    hAxis: {
      titleTextStyle :{
        bold : true
      },
      textStyle: { 
        color: '#111',
        bold: true
      }
    },
    vAxis: {
      titleTextStyle :{
        bold : true
      },
      textStyle: { 
        color: '#111',
        bold: true
      }
    }
  };
  
  // Función que se ejecuta al presionar el botón "Iniciar"
  const iniciarProceso = () => {
    setLoading(true); // Muestra la pantalla de carga
    setShowGraphics(false); // Oculta los gráficos mientras se carga

    setTimeout(() => {
      // Actualiza los valores confirmados y oculta la pantalla de carga
      setConfirmedInput1(Number(input1));
      setConfirmedInput2(Number(input2));
      setConfirmedInput3(Number(input3));

      setLoading(false); // Finaliza la carga
      setShowGraphics(true); // Muestra los gráficos
    }, 2000);
  };

  return (
    <div className="items-center">
      <Header />
      <div className="text-2xl font-bold text-center flex flex-row items-center justify-center gap-4 pt-10 pb-10">
        <div className=' flex flex-col pr-4 pl-4 items-center'>
          <label className=" text-black font-normal pb-3">Gsb<br></br>(g/cm³)</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-65 h-10 w-52 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            value={input1}
            onChange={(e) => setInput1(e.target.value)} // Actualiza los valores editables
          />
        </div>
        <div className='flex flex-col pr-4 pl-4 items-center'>
          <label className=" text-black font-normal pb-3">Gse<br></br>(g/cm³)</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-65 h-10 w-52 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            value={input2}
            onChange={(e) => setInput2(e.target.value)} // Actualiza los valores editables
          />
        </div>
        <div className='flex flex-col pr-4 pl-4 items-center'>
          <label className=" text-black font-normal pb-3">Gb<br></br>Gravedad específica de asfalto</label>
          <input
            type="number"
            className="border-2 border-gray-300 bg-orangeabout opacity-65 h-10 w-52 px-5 pr-1 rounded-lg text-sm focus:outline-none"
            value={input3}
            onChange={(e) => setInput3(e.target.value)} // Actualiza los valores editables
          />
        </div>
        <div className=' flex flex-col pr-4 pl-4'>
          <div className='grid justify-items-start pt-6'>
            <button
              className="bg-green-500 text-black font-normal py-2 px-4 rounded-full"
              onClick={iniciarProceso} // Invoca la función de iniciar
            >
              Iniciar
            </button>
          </div>
        </div>
      </div>

      {/* Pantalla de carga estilizada */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-64">
          <FaSpinner className="animate-spin text-4xl mb-4" /> {/* Ícono de carga */}
          <span className="text-xl font-bold text-gray-700 shadow-md">Cargando...</span>
        </div>
      )}

      {/* Muestra los gráficos basados en los valores confirmados */}
      {showGraphics && (
        <Graphics tb1={tb1} tb2={tb2} tb3={tb3} tb1all={tb1all} tb2all={tb2all} options={options} />
        
      )}
    </div>
  );
}

export default Services;
