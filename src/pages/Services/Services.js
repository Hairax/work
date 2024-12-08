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
  const [exporting, setExporting] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false); // Mostrar opciones de exportación
  const [includeHeader, setIncludeHeader] = useState(false);
  const [includeFooter, setIncludeFooter] = useState(false);
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [rangeMin, setRangeMin] = useState(6);
  const [rangeMax, setRangeMax] = useState(8);
  const [enableRange, setEnableRange] = useState(false);

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
    setExporting(true);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageHeight = 297;
    const pageWidth = 210;
    const marginTop = includeHeader ? 30 : 10;

    // Agregar encabezado
    if (includeHeader && headerText) {
      pdf.setFontSize(6);
      pdf.text(headerText, 2, 6);
    }

    // Capturar gráficos
    if (graphicsRef.current) {
      const elements = graphicsRef.current.querySelectorAll('.graph-container');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pageWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let y = marginTop;
        if (imgHeight < pageHeight - marginTop) {
          pdf.addImage(imgData, 'PNG', 10, y, imgWidth, imgHeight);
        } else {
          let heightLeft = imgHeight;

          while (heightLeft > 0) {
            pdf.addImage(imgData, 'PNG', 10, y, imgWidth, imgHeight);
            heightLeft -= pageHeight - marginTop;
            y = marginTop;
            if (heightLeft > 0) pdf.addPage();
          }
        }

        if (i < elements.length - 1) pdf.addPage();
      }
    }

    // Agregar pie de página y numeración
    const pageCount = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(10);
      const pageText = `Página ${i} de ${pageCount}`;
      pdf.text(pageText, pageWidth - 50, pageHeight - 10);

      if (includeFooter && footerText) {
        pdf.text(footerText, 10, pageHeight - 10);
      }
    }

    pdf.save('resultados.pdf');
    setExporting(false);
    setShowExportOptions(false);
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

        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={enableRange}
              onChange={() => setEnableRange(!enableRange)}
            />
            ¿Desea ingresar valores de rango en el eje x? (por defecto 6-8)
          </label>

          {enableRange && (
            <div className="flex gap-4 mt-4">
              <input
                type="number"
                placeholder="Mínimo"
                className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400"
                value={rangeMin}
                min={0} // Restringir el valor mínimo
                onChange={(e) => {
                  const newValue = Math.max(0, Number(e.target.value)); // Evitar valores negativos
                  setRangeMin(newValue);
                  if (newValue > rangeMax ) setRangeMax(newValue + 2); // Ajustar automáticamente el máximo
                }}
              />
              <input
                type="number"
                placeholder="Máximo"
                className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400"
                value={rangeMax}
                min={rangeMin} // Restringir el mínimo del máximo al valor de rangeMin
                onChange={(e) => {
                  const newValue = Math.max(rangeMin, Number(e.target.value)); // Evitar que sea menor que rangeMin
                  setRangeMax(newValue);
                }}
              />
            </div>
          )}
        </div>

        <div className="flex justify-center">
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
              date1={confirmedInput1}
              date2={confirmedInput2}
              date3={confirmedInput3}

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
              x1= {rangeMin}
              x2= {rangeMax}
            />
          </div>
        )}

        {showGraphics && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-green-500 text-white text-[20px] font-semibold py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none mb-6"
              onClick={() => setShowExportOptions(true)}
            >
              Exportar a PDF
            </button>
          </div>
        )}

        {showExportOptions && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Opciones de Exportación</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <input
                    type="checkbox"
                    id="header"
                    checked={includeHeader}
                    onChange={() => setIncludeHeader(!includeHeader)}
                  />
                  <label htmlFor="header" className="ml-2">Incluir Encabezado</label>
                  {includeHeader && (
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg w-full mt-2 px-3 py-2"
                      placeholder="Texto del encabezado"
                      value={headerText}
                      onChange={(e) => setHeaderText(e.target.value)}
                    />
                  )}
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="footer"
                    checked={includeFooter}
                    onChange={() => setIncludeFooter(!includeFooter)}
                  />
                  <label htmlFor="footer" className="ml-2">Incluir Pie de Página</label>
                  {includeFooter && (
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg w-full mt-2 px-3 py-2"
                      placeholder="Texto del pie de página"
                      value={footerText}
                      onChange={(e) => setFooterText(e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-4 gap-2">
                <button
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                  onClick={() => setShowExportOptions(false)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                  onClick={exportToPDF}
                  disabled={exporting}
                >
                  {exporting ? 'Exportando...' : 'Exportar'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
