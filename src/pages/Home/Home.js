import React from 'react';

import FNIL from './imgs/FNI.png';
import SISL from './imgs/SIS.png';
import INFL from './imgs/INF.png';
import SoceL from './imgs/Soce.png';

function Home() {
    return (
      <div className=' items-center flex flex-col-2'>
        <div className='text-2xl text-center gap-4 flex flex-row justify-center'>
        <div className="flex flex-col w-full">
            <div className="flex flex-col mt-2 text-2xl w-full">
              <div className='text-35px text-left justify-right font-inter bg-orangeabout opacity-75 py-20px pl-[80px] rounded-r-full w-2/6'>
                Método Ramcodes
              </div>
            </div>
            <div className='flex flex-col items-left justify-center mt-[30px] text-xl'>
              <div className='text-35px text-left justify-left font-inter bg-celeste opacity-75 py-20px pl-[40px] pr-[10px] rounded-r-3xl w-1/2'>
              Ésta metodología de diseño de mezcla asfáltica denominada RAMCODES (RAtional Methodology for Compacted geomaterial’s Densification and Strenght análisis) 
              se basa en experimentos factoriales, en conceptos de la Mecánica de Suelos No Saturados, y en la experiencia práctica de diseño y control, para análisis de 
              densificación y resistencia de geomateriales (F. J. Sánchez Leal, 2002).<br></br><br></br>
              Este método tiene como caracter brindar una solución más precisa de cálculos para la mezcla asfáltica y sobre todo brindar la facilidad de realizarlos. Esta
              plataforma permite a sus usuarios dar un fácil acceso a los cálculos y mostrarlos en cuestión de unos segundos, aprovechando la interconectividad de los dispositivos
              que se encuentran en constante comunicación vía internet; todo esto con el alcance de poner solo 3 datos e iniciar los cálculos con un solo click
                </div>
              </div>
          </div>

          <div className='flex flex-col w-1/2 skew-y-6 w-2/6'>
            <div className='mt-2 w-1/3 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
              <a href='https://www.fni.uto.edu.bo/'>
              <img class  Name="w-full h-full object-cover" src={FNIL} alt="FNI"/>
              </a>
            </div>
            <div className='mt-2 w-1/3 mt-[10px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
              <a href='https://portal2.sistemas.edu.bo/sistemas/'>
              <img class  Name="w-full h-full object-cover" src={SISL} alt="SIS"/>
              </a>
            </div>
            <div className='mt-2 w-1/3 mt-[10px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
              <a href='https://portal2.sistemas.edu.bo/informatica/'>
                <img class  Name="w-full h-full object-cover" src={INFL} alt="INF"/>
              </a>
            </div>
            <div className='mt-2 w-1/3 mt-[10px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
              <a href='https://www.facebook.com/profile.php?id=61558661454001&mibextid=ZbWKwL'>
                <img class  Name="w-full h-full object-cover" src={SoceL} alt="Soce"/>
              </a>
            </div>
          </div>
        
        </div>
        
      </div>
    );
  }
  <img class  Name="w-full h-full object-cover" src={FNIL} alt="FNI"/>
  export default Home;