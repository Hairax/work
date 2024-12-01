import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import RodrigoE from './imgs/RodrigoEsprella.png';
import JoseG from './imgs/JoseGarcia.jpg';
import Richard from './imgs/Richard.png';

function About() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-semibold text-gray-800">Equipo de Trabajo</h2>
                <p className="text-lg text-gray-600 mt-2">Conoce a los miembros detrás del proyecto</p>
            </div>

            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
                    <img src={Richard} alt="logo imagen" className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Richard Raul<br />Josephia Santos</h3>
                    <div className="flex justify-center gap-4 text-gray-500">
                        <a href="/" className="hover:text-blue-600">
                            <MdOutlineFacebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
                    <img src={RodrigoE} alt="Rodrigo Esprella" className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-gray-800">Rodrigo Raul <br />Esprella Valdez</h3>
                    <p className="text-gray-500 mb-4">Desarrollador Full Stack</p>
                    <div className="flex justify-center gap-4 text-gray-500">
                        <a href="https://www.facebook.com/profile.php?id=100005222862936" className="hover:text-blue-600">
                            <MdOutlineFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/hairax_uwu/" className="hover:text-pink-500">
                            <AiFillInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
                    <img src={JoseG} alt="Jose Garcia" className="w-24 h-24 mx-auto rounded-full shadow-lg mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-gray-800">José Daniel <br />Garcia Escobar</h3>
                    <p className="text-gray-500 mb-4">Project Manager</p>
                    <div className="flex justify-center gap-4 text-gray-500">
                        <a href="https://www.facebook.com/josedaniel.garcia.587" className="hover:text-blue-600">
                            <MdOutlineFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/jdg69219/" className="hover:text-pink-500">
                            <AiFillInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto p-6 bg-blue-100 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sobre el Proyecto</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                    En el crecimiento de la tecnología es necesario simplificar tareas y optimizar cálculos manuales para acelerar el tiempo de producción en distintas áreas. Con la guía del <br></br>Ing. Richard Raul
                    Josephia Santos y el esfuerzo del equipo de desarrollo, logramos llevar este proyecto a la realidad.
                </p>
            </div>
        </div>
    );
}

export default About;
