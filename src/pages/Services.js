import React, { useState } from 'react';
import Header from '../componentes/Header/Header';

function Services() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumarValores = () => {
    setResultado(Number(input1) + Number(input2) + Number(input3));
  };

  return (
    <div className="items-center">
      <Header />
      <div className="text-2xl font-bold text-center">
        <input
          type="number"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder=""
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="number"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder=""
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          type="number"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder=""
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={sumarValores}
        >
          Sumar
        </button>
        <div className="mt-4 text-xl">Resultado: {resultado}</div>
      </div>
    </div>
  );
}

export default Services;
