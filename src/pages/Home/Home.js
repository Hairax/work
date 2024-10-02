import React from 'react';
import Header from '../../componentes/Header/Header';

import FNIL from './imgs/FNI.png';
import SISL from './imgs/SIS.png';
import INFL from './imgs/INF.png';
import SoceL from './imgs/Soce.png';

function Home() {
    return (
      <div className=' items-center'>
        <Header />
        <div className='text-2xl text-center gap-4 flex flex-row justify-center'>
        <div className="flex flex-col w-full">
            <div className="flex flex-col mt-2 text-2xl w-full">
              <div className='text-35px text-left justify-right font-inter bg-orangeabout opacity-75 py-20px pl-[80px] rounded-r-full w-2/6'>
                Método Ramcodes
              </div>
            </div>
            <div className='flex flex-col items-left justify-center mt-[30px] text-xl'>
              <div className='text-35px text-left justify-left font-inter bg-celeste opacity-75 py-20px pl-[40px] pr-[10px] rounded-r-3xl w-1/2'>
                  En el crecimiento de la tecnología es necesario la simplificación de tareas y optimizar cálculos manuales que permitan acelerar el tiempo de producción o trabajo en distintas áreas.
                  Con la guía del Ing. Richard Jhosepia y el trabajo conjunto del equipo de desarrollo [  ] se logró realizar este proyecto.
                </div>
              </div>
          </div>

          <div className='flex flex-col w-1/2'>
            <div className='mt-2 w-1/3'>
              <img class  Name="w-full h-full object-cover" src={FNIL} alt="FNI"/>
            </div>
            <div className='mt-2 w-1/3 mt-[10px]'>
              <img class  Name="w-full h-full object-cover" src={SISL} alt="SIS"/>
            </div>
            <div className='mt-2 w-1/3 mt-[10px]'>
              <img class  Name="w-full h-full object-cover" src={INFL} alt="INF"/>
            </div>
            <div className='mt-2 w-1/3 mt-[10px]'>
              <img class  Name="w-full h-full object-cover" src={SoceL} alt="Soce"/>
            </div>
          </div>
        
        </div>
        
      </div>
    );
  }
  <img class  Name="w-full h-full object-cover" src={FNIL} alt="FNI"/>
  export default Home;