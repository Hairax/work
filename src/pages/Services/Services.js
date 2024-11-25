import React, { useState, useRef } from 'react';
import './Services.css';
import Graphics from './Graphics';
import { ALLresult, LGmb, LGmm, poligono, VFA } from './Calculate';
import { FaSpinner } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Services() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [confirmedInput1, setConfirmedInput1] = useState(0);
  const [confirmedInput2, setConfirmedInput2] = useState(0);
  const [confirmedInput3, setConfirmedInput3] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showGraphics, setShowGraphics] = useState(false);

  const graphicsRef = useRef(); // Referencia para capturar el contenido de Graphics

  const iniciarProceso = () => {
    setLoading(true);
    setShowGraphics(false);

    setTimeout(() => {
      setConfirmedInput1(Number(input1));
      setConfirmedInput2(Number(input2));
      setConfirmedInput3(Number(input3));
      setLoading(false);
      setShowGraphics(true);
    }, 2000);
  };

  const exportToPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4'); // PDF en formato A4
    if (graphicsRef.current) {
        const elements = graphicsRef.current.querySelectorAll('.graph-container'); // Captura todos los contenedores de gráficos

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const canvas = await html2canvas(element, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190; // Ancho de la imagen en mm
            const pageHeight = 297; // Altura de la página A4 en mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (imgHeight < pageHeight) {
                pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            } else {
                // Manejar múltiples páginas si el contenido es más alto que una página
                let heightLeft = imgHeight;
                let y = 10;

                while (heightLeft > 0) {
                    pdf.addImage(imgData, 'PNG', 10, y, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    y = -pageHeight + 10;
                    if (heightLeft > 0) pdf.addPage();
                }
            }
            if (i < elements.length - 1) {
                pdf.addPage(); // Añadir una nueva página después de cada gráfico excepto el último
            }
        }
        pdf.save('resultados.pdf'); // Guardar el PDF
    }
};

  return (
    <div className="items-center">
      <div className="w-full bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 pt-6">
          Parámetros de Entrada
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-4 text-[24px]">
          {[['Gsb', input1, setInput1], ['Gse', input2, setInput2], ['Gb', input3, setInput3]].map(([label, value, setter], idx) => (
            <div key={idx} className="flex flex-col items-center bg-indigo-100 p-4 shadow rounded-lg">
              <label className="text-gray-600 font-medium mb-2">{label} (g/cm³)</label>
              <input
                type="number"
                className="border border-gray-300 rounded-lg w-full h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 text-[20px]"
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <button
            className="bg-indigo-500 text-white text-[25px] font-semibold py-2 px-6 rounded-full hover:bg-indigo-600 focus:outline-none mb-6"
            onClick={iniciarProceso}
          >
            Iniciar
          </button>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-600">
            <FaSpinner className="animate-spin text-4xl mb-3" />
            <p className="text-lg font-semibold">Cargando...</p>
          </div>
        )}

        {showGraphics && (
          <div ref={graphicsRef}>
            <Graphics
              tb1={LGmm(confirmedInput1, confirmedInput2, confirmedInput3)}
              tb2={LGmb(confirmedInput1, confirmedInput2, confirmedInput3)}
              tb3={VFA(confirmedInput1, confirmedInput2, confirmedInput3)}
              tb1all={ALLresult().tb1all}
              tb2all={ALLresult().tb2all}
              pol1={poligono().rt}
              pol2={poligono().mp}
              CalArea={poligono().CalArea}
              options={{
                title: 'Company Performance',
                titleTextStyle: { color: '#2C3E50', fontSize: 20 },
                legend: { position: 'bottom' },
                hAxis: { titleTextStyle: { bold: true }, textStyle: { color: '#111', bold: true } },
                vAxis: { titleTextStyle: { bold: true }, textStyle: { color: '#111', bold: true } },
              }}
            />
          </div>
        )}

        {showGraphics && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-green-500 text-white text-[20px] font-semibold py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none mb-6"
              onClick={exportToPDF}
            >
              Exportar a PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
