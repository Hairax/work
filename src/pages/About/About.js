import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import RodrigoE from './imgs/RodrigoEsprella.png';
import JoseG from './imgs/JoseGarcia.jpg';
import Richard from './imgs/Richard.png';
import Fredy from '../About/imgs/FreddySnachez.jpg';

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
                        <a href="https://www.facebook.com/people/Richard-Ra%C3%BAl-Josephia-Santos/pfbid0ZyCP5zUJ1GgtPkpEGppcmheTiejTMqtibcSPJn3K4ucRSjrkV79nroKRp3jsezN3l/" className="hover:text-blue-600">
                            <MdOutlineFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/richard-raul-josephia-santos-7783a63a/" className="hover:text-pink-500">
                            <FaLinkedin className="w-6 h-6" />
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
                        <a href="https://www.linkedin.com/in/rodrigo-esprella-valdez-4947a6278/" className="hover:text-pink-500">
                            <FaLinkedin className="w-6 h-6" />
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
                        <a href="https://www.linkedin.com/in/jose-daniel-garcia-escobar-9ab6b4328/" className="hover:text-pink-500">
                            <FaLinkedin className="w-6 h-6" />
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

            <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center mt-8">
                Referencias Bibliográficas
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Tarjeta de Richard */}
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
                    <img src={Richard} alt="Richard Raul Josephia Santos" className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-3">
                        M. Sc. Ing. Richard Raúl Josephia Santos
                    </h2>
                    <p className="text-gray-600 text-lg text-center mb-6">
                        Universidade de São Paulo, Brasil<br />
                        Universidad Nacional Autónoma de México, UNAM, México<br />
                        Facultad Nacional de Ingeniería, Oruro, Bolivia
                    </p>
                    <div className="text-gray-700 text-base leading-relaxed text-justify">
                        <p>
                            <strong>Resumen de trayectoria profesional:</strong> El ingeniero Josephia realizó estudios de ingeniería en la Facultad Nacional de Ingeniería de Bolivia. Becado por el Consejo Nacional de Ciencia y Tecnología de México (CONACYT) con número de registro CVU: 509448, en la “Maestría en Ingeniería Civil (área de geotecnia)” de la Sección de Estudios de Posgrado e Investigación, Escuela Superior de Ingeniería y Arquitectura Unidad Zacatenco (ESIA-IPN), Instituto Politécnico Nacional de México.
                        </p>
                        <p className="mt-4">
                            Es Magister Scientiarum en Ingeniería Estructural, Especialista en Diseño de Estructuras de Hormigón Armado y Diplomado en Análisis y Diseño de Estructuras Antisísmicas en la Escuela Militar de Ingeniería (EMI-La Paz) de Bolivia. Es autor de varios artículos técnicos en mecánica de suelos y asfaltos y ha desempeñado funciones en diversas empresas y proyectos como el NAICM en México.
                        </p>
                        <p className="mt-4">
                            Actualmente, es profesor en la Universidad Técnica de Oruro y realiza su doctorado en ingeniería de Transportes en la Universidade de São Paulo, Brasil, con una estancia de investigación en la UNAM.
                        </p>
                    </div>
                </div>

                {/* Tarjeta de Freddy */}
                <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
                    <img src={Fredy} alt="Freddy Sanchez Leal" className="w-32 h-32 rounded-full shadow-lg mb-6 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-3">
                        M.I. Freddy Sánchez Leal
                    </h2>
                    <p className="text-gray-600 text-lg text-center mb-6">
                        Consultor Geotécnico - Tijuana, Baja California, México
                    </p>
                    <div className="text-gray-700 text-base leading-relaxed text-justify">
                        <p>
                            Experimentado consultor geotécnico radicado en Tijuana, Baja California, México. Ingeniero civil venezolano (1992), bilingüe, con una maestría en ingeniería (mecánica de suelos, 1998) por la Universidad Nacional Autónoma de México (UNAM).
                        </p>
                        <p className="mt-4">
                            Especialista en terracerías, muros y diseños de cimentaciones, así como en el diseño de pavimentos flexibles, rígidos y de adoquines para altas demandas de carga. Experto en aseguramiento estadístico de calidad de la construcción con suelos compactados, la producción y tendido de mezclas asfálticas y de concreto.
                        </p>
                        <p className="mt-4">
                            Actualmente imparte capacitación profesional en cursos “in company” y en línea a través de la Academia Geotechtips.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
