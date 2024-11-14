import Richard from '../About/imgs/Richard.png';
import Fredy from '../About/imgs/FreddySnachez.jpg';

export default function References() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Referencias</h1>
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
