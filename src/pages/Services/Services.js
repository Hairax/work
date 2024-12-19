import React, { useState, useRef } from 'react';
import './Services.css';
import Graphics from './Graphics';
import { ALLresult, LGmb, LGmm, poligono, VFA , xinitial , crt} from './Calculate';
import { FaSpinner } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Latex from "react-latex-next";

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
  const [ConfirmedRangeMin, setConfirmedRangeMin] = useState(6);
  const [ConfirmedRangeMax, setConfirmedRangeMax] = useState(8);
  const [enableRange, setEnableRange] = useState(false);
  const [esal, setEsal] = useState(0);
  const [nominalSize, setNominalSize] = useState(12.5);
  const [metodoEsal, setMetodoEsal] = useState("esal");
  const [vfaMin, setVfaMin] = useState(0); // Para VFA mínimo
  const [vfaMax, setVfaMax] = useState(0); // Para VFA máximo
  const [metodoVMA, setMetodoVMA] = useState("vma");
  const [vmaMin, setVmaMin] = useState(0); // Para VMA mínimo
  const [vmaMax, setVmaMax] = useState(0); // Para VMA máximo

  const graphicsRef = useRef(); // Referencia para capturar el contenido de Graphics

  const iniciarProceso = () => {
    setLoading(true);
    setShowGraphics(false);

    setTimeout(() => {
      setConfirmedInput1(Number(input1));
      setConfirmedInput2(Number(input2));
      setConfirmedInput3(Number(input3));
      setConfirmedRangeMin(Number(rangeMin));
      setConfirmedRangeMax(Number(rangeMax));
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
    <div className="items-center ">
      <div className="w-full bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 pt-6">
          Parámetros de Entrada
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 p-4 text-[24px]">
          {[
            [<Latex>${`G_{sb} `}$</Latex>, input1, setInput1, "Gravedad Específica Bulk del Agregado"],
            [<Latex>${`G_{se} `}$</Latex>, input2, setInput2, "Gravedad Específica Efectiva del Agregado"],
            [<Latex>${`G_{b} `}$</Latex>, input3, setInput3, "Gravedad Específica del Cemento Asfáltico"]
          ].map(([label, value, setter, description], idx) => (
            <div key={idx} className="flex flex-col items-center bg-indigo-100 p-4 shadow rounded-lg">
              <p className="text-sm text-gray-500 mb-1">{description}</p> {/* Descripción antes del label */}
              <label className="text-gray-600 font-medium mb-2">
                {label} (g/cm³)
              </label>
              <input
                type="number"
                className="border border-gray-300 rounded-lg w-full h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 text-[20px]"
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
              />
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <select className="border border-gray-300 rounded-lg w-50 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              value={metodoEsal}
              onChange={(e) => setMetodoEsal(e.target.value)}
            >
              <option value="esal">ESALs</option>
              <option value="VFA">VFA</option>
            </select>
            Seleccione el parámetro (ESALs - VFA)
          </label>
        </div>

      {/* ESAL de diseño depende del metodo */}
      {metodoEsal === "esal" ? (
        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <input
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              
              type="number"
              min="0"
              max="50"
              value={esal}
              onChange={(e) => {
                const value = Math.min(50, Math.max(0, Number(e.target.value)));
                setEsal(value);
              }}
            />
            ESALs de Diseño en Millones (min 0, max 50)
          </label>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <input
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              type="number"
              min="0"
              max="50"
              value={vfaMin}
              onChange={(e) => {
                const value = Number(e.target.value);
                setVfaMin(value);
              }}
            />
            VFA minimo
            <input 
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2 ml-2"
              type="number"
              min="0"
              max="50"
              value={vfaMax}
              onChange={(e) => {
                const value = Number(e.target.value);
                setVfaMax(value);
              }}
            />
            VFA maximo
          </label>
        </div>
      )}
        
        {/* Metodo VMA */}
        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <select className="border border-gray-300 rounded-lg w-50 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              value={metodoVMA}
              onChange={(e) => setMetodoVMA(e.target.value)}
            >
              <option value="vma">T.M.N.A.</option>
              <option value="VMAm">VMA</option>
            </select>
            Seleccione el parámetro (Tamaño Máximo Nominal del Agregado - VMA)
          </label>
        </div>
        {metodoVMA === "vma" ? (
          <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <select
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              value={nominalSize}
              onChange={(e) => setNominalSize(Number(e.target.value))}
            >
              <option value="9.5">9,5</option>
              <option value="12.5">12,5</option>
              <option value="19">19</option>
              <option value="25">25</option>
              <option value="37.5">37,5</option>
            </select>
            Tamaño Máximo Nominal del Agregado (mm)
          </label>
        </div>
        ) : (
          <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <input
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2"
              type="number"
              value={vmaMin}
              onChange={(e) => {
                const value = Number(e.target.value);
                setVmaMin(value);
              }}
            />
            VMA minimo
            <input
              className="border border-gray-300 rounded-lg w-24 h-10 px-3 text-center focus:ring-2 focus:ring-indigo-400 mr-2 ml-2"
              type="number"
              value={vmaMax}
              onChange={(e) => {
                const value = Number(e.target.value);
                setVmaMax(value);
              }}
            />
            VMA maximo
          </label>
        </div>
        )}


        {/* Rango de valores en el eje x */}
        <div className="flex flex-col items-center mb-6">
          <label className="flex items-center text-lg text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={enableRange}
              onChange={() => {setEnableRange(!enableRange);
                  // Reiniciar valores al deseleccionar
                  if (enableRange) {
                    setRangeMin(6); // Valor inicial para rango mínimo
                    setRangeMax(8); // Valor inicial para rango máximo
                  }
              }}
            />
            ¿Desea ingresar el rango del contenido de asfalto? (eje x = Pb, por defecto 6-8)
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
              xinitial={xinitial(ConfirmedRangeMin, ConfirmedRangeMax, esal, nominalSize, metodoEsal, vfaMin, vfaMax, metodoVMA, vmaMin, vmaMax)}
              tb1={LGmm(confirmedInput1, confirmedInput2, confirmedInput3, ConfirmedRangeMin, ConfirmedRangeMax)}
              tb2={LGmb(confirmedInput1, confirmedInput2, confirmedInput3, ConfirmedRangeMin, ConfirmedRangeMax)}
              tb3={VFA(confirmedInput1, confirmedInput2, confirmedInput3, ConfirmedRangeMin, ConfirmedRangeMax)}
              tb1all={ALLresult().tb1all}
              tb2all={ALLresult().tb2all}
              pol1={poligono().rt}
              pol2={poligono().mp}
              CalArea={poligono().CalArea}
              lx={crt().pb}
              gmm={crt().gmm}
              va3={crt().Va3}
              va4={crt().Va4}
              va5={crt().Va5}
              vma14={crt().Vam14}
              vma16={crt().Vam16}
              vfa65={crt().VFA65}
              vfa75={crt().VFA75}
              vmaMin={crt().minVMA}
              vmaMax={crt().maxVMA}
              vfaMin={crt().minVFA}
              vfaMax={crt().maxVFA}
              puntosJSx={crt().puntosJSx}
              puntosJSy={crt().puntosJSy}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      padding: 5, // Este padding puede no afectar como esperas en algunos casos
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Formato del tooltip
                      },
                    },
                  },
                },
                layout: {
                  padding: {
                    left: 10, // Puedes ajustar este valor para dar más espacio entre la leyenda y el gráfico
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,  // Mostrar el título del eje X
                      text: 'Pb',  // Título para el eje X
                      font: {
                        size: 20,
                        weight: 'bold',  // Hacer el texto en negrita
                      },
                      color: 'black',
                    },
                  },
                  y: {
                    title: {
                      display: true,  // Mostrar el título del eje Y
                      text: 'Gmb',  // Título para el eje Y
                      font: {
                        
                        size: 20,
                        weight: 'bold',  // Hacer el texto en negrita
                      },
                      color: 'black',
                    },
                    beginAtZero: false, // El eje Y comienza desde el valor mínimo de los datos
                  },
                },
              }}              

            />
          </div>
        )}

        {/*{showGraphics && (
          <div className="flex justify-center mt-6">
            <button
              className="bg-green-500 text-white text-[20px] font-semibold py-2 px-6 rounded-full hover:bg-green-600 focus:outline-none mb-6"
              onClick={() => setShowExportOptions(true)}
            >
              Exportar a PDF
            </button>
          </div>
        )}

        {/*{showExportOptions && (
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
        )}*/}
      </div>
    </div>
  );
}

export default Services;
