import React from 'react';
import Header from '../../componentes/Header/Header';
import Logo from './imgs/logo192.png';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import RodrigoE from './imgs/RodrigoEsprella.png';
import JoseG from './imgs/JoseGarcia.jpg';

function About() {
    return (
      <div className=' items-center'>
        <Header />
        <div className='text-2xl text-center gap-4 flex flex-row justify-center'>
          <div  className=" flex flex-col mt-4 text-xl w-1/2">
            <div className='flex flex-row justify-center w-full '>
              <div className='w-1/6'></div>
              <div class="w-2/6 max-w-sm bg-gray-100 rounded-lg shadow-lg dark:border-gray-700 pt-6">
                <div className='flex flex-row items-center justify-center'>
                  <div class="flex flex-col items-center pb-10 pt-10">
                      <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={Logo} alt="logo imagen"/>
                      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">Richard Raul<br></br> Josephia Santos</h5>
                      <span class="text-sm text-gray-500 dark:text-gray-400">Ingeniero</span>
                      <div class="flex mt-4 md:mt-6">
                          <a href="#" class="inline-flex items-center ">
                            <MdOutlineFacebook className="w-8 h-8" />
                          </a>
                          <a href="#" class="inline-flex items-center ">
                            <AiFillLinkedin className="w-8 h-8" />
                          </a>
                          <a href="#" class="inline-flex items-center ">
                            <AiFillInstagram className="w-8 h-8" />
                          </a>
                      </div>
                  </div>
                </div>
              </div>
              <div className='w-3/6'></div>
            </div>
            <div className='flex flex-row justify-center w-full pt-[30px]'>
              <div className='w-3/6'></div>
              <div class="w-2/6 max-w-sm bg-gray-100 rounded-lg shadow-lg dark:border-gray-700 pt-6">
                <div className='flex flex-row items-center justify-center'>
                  <div class="flex flex-col items-center pb-10 pt-10">
                    <div className="w-24 h-24 mb-3 rounded-full shadow-lg overflow-hidden">
                      <img className="w-full h-full object-cover" src={RodrigoE} alt="RodrigoEsprella"/>
                    </div>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">Rodrigo Esprella</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Desarrollador Full Stack</span>
                    <div class="flex mt-4 md:mt-6">
                      <a href="https://www.facebook.com/profile.php?id=100005222862936" class="inline-flex items-center ">
                        <MdOutlineFacebook className="w-8 h-8" />
                      </a>
                      {/* <a href="#" class="inline-flex items-center ">
                        <AiFillLinkedin className="w-8 h-8" />
                      </a> */}
                      <a href="https://www.instagram.com/hairax_uwu/" class="inline-flex items-center ">
                        <AiFillInstagram className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-1/6'></div>
            </div>
            <div className='flex flex-row justify-center w-full pt-[30px]'>
              <div className='w-1/6'></div>
              <div class="w-2/6 max-w-sm bg-gray-100 rounded-lg shadow-lg dark:border-gray-700 pt-6">
                <div className='flex flex-row items-center justify-center'>
                  <div className="flex flex-col items-center pb-10 pt-10">
                    <div className="w-24 h-24 mb-3 rounded-full shadow-lg overflow-hidden">
                      <img className="w-full h-full object-cover" src={JoseG} alt="JoseGarcia"/>
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">Jose Garcia</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Project Manager</span>
                    <div className="flex mt-4 md:mt-6">
                      <a href="https://www.facebook.com/josedaniel.garcia.587" className="inline-flex items-center">
                        <MdOutlineFacebook className="w-8 h-8" />
                      </a>
                      {/* <a href="#" class="inline-flex items-center ">
                        <AiFillLinkedin className="w-8 h-8" />
                      </a> */}
                      <a href="https://www.instagram.com/jdg69219/" className="inline-flex items-center">
                        <AiFillInstagram className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-3/6'></div>
            </div>
          </div>
          <div className='mt-4 text-xl w-1/2 '>
            <div className='flex flex-row items-center justify-center'>
              <div className='w-1/3'></div>
              <div className='text-35px text-left justify-right font-inter bg-orangeabout opacity-75 py-20px pl-[80px] rounded-l-full w-2/3'>
                Equipo de trabajo
              </div>
            </div>
            <div className='flex flex-row items-center justify-center mt-[30px]'>
              <div className='w-1/5'></div>
              <div className='text-35px text-left justify-right font-inter bg-celeste opacity-75 py-20px pl-[40px] pr-[10px] rounded-l-3xl w-4/5'>
              En el crecimiento de la tecnología es necesario la simplificación de tareas y optimizar cálculos manuales que permitan acelerar el tiempo de producción o trabajo en distintas áreas.
              Con la guía del Ing. Richard Jhosepia y el trabajo conjunto del equipo de desarrollo [  ] se logró realizar este proyecto.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;