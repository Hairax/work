import React from 'react';

import FNIL from './imgs/FNI.png';
import SISL from './imgs/SIS.png';
import INFL from './imgs/INF.png';
import SoceL from './imgs/Soce.png';
import Oscecfrom from './imgs/OSCElogoB.jpg';
import Uto from './imgs/UTOlogo.jpg';
import USPlogo from './imgs/USPlogo.jpg';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Polígono de Vacíos</h1>
        <p className="text-lg text-gray-500 mt-2">F. J. Sánchez Leal</p>
      </div>

      {/* Main Description */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl text-center text-gray-700 leading-relaxed">
          <p className="text-lg">
            Esta metodología de diseño de mezcla asfáltica denominada <b>Polígono de Vacíos</b><b> </b> 
            se basa en experimentos factoriales, en conceptos de la Mecánica de Suelos No Saturados, 
            y en la experiencia práctica de diseño y control para análisis de densificación y resistencia 
            de geomateriales (F. J. Sánchez Leal, 2002).
          </p>
          <p className="text-lg mt-4">
            Este método acelera el diseño de mezclas asfálticas, faciliitando su uso con
            esta plataforma, permitiendo a los usuarios realizar cálculos de manera rápida y eficiente, 
            introduciendo solo 3 datos y obteniendo resultados con un solo clic.
          </p>
        </div>
      </div>

      {/* ABA Section */}
      <div className="mt-16 bg-blue-100 rounded-xl shadow-lg p-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">ABA</h2>
        <img src="/logoAba.jpg" alt="Logo ABA" className="mx-auto w-48 h-48 rounded-lg mb-6 shadow-md" />
        <p className="text-gray-700 leading-relaxed text-lg">
          La Asociación Boliviana de Asfalto es una entidad que promueve la capacitación de profesionales en ingeniería civil, en ingeniería vial; así mismo, promueve la investigación, asegurando el cumplimiento de normas y estándares de calidad.
        </p>
      </div>

      {/* Links Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Enlaces de Interés</h2>
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        {[
          { src: Uto, alt: 'UTO', link: 'https://www.uto.edu.bo/' },
          { src: FNIL, alt: 'FNI', link: 'https://www.fni.uto.edu.bo/' },
          { src: SISL, alt: 'SIS', link: 'https://portal2.sistemas.edu.bo/sistemas/' },
          { src: INFL, alt: 'INF', link: 'https://portal2.sistemas.edu.bo/informatica/' },
          { src: Oscecfrom, alt: 'OSCE', link: 'https://www.facebook.com/share/1Wza4PM4t2/' },
          { src: SoceL, alt: 'Soce', link: 'https://www.facebook.com/profile.php?id=61558661454001&mibextid=ZbWKwL' },
        ].map((item, index) => (
          <div
            key={index}
            className="mt-2 mt-[10px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-32 h-32" 
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
            </a>
          </div>
        ))}
      </div>

      {/* Links externos */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enlaces externos</h2>
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        {[
          { src: USPlogo, alt: 'USP', link: 'https://eesc.usp.br/ppgs/stt/' },
        ].map((item, index) => (
          <div
            key={index}
            className="mt-2 mt-[10px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-28" 
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
