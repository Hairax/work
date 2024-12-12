import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import figura1 from "./Figura1.png";

export default function References() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Polígono de Vacíos
      </h1>

      <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
        <p>
          De acuerdo a Sánchez F. (2011), el polígono de vacíos es una
          construcción gráfica, en el espacio contenido de asfalto (
          <Latex>$P_b$</Latex>) versus densidad bruta (
          <Latex>${`G_{mb}`}$</Latex>), que permite obtener un contenido óptimo de
          asfalto, o fórmula de trabajo, de una mezcla asfáltica, basada solo en
          las definiciones y especificaciones de vacíos, y en la elaboración de
          tres especímenes hermanos compactados con la energía de diseño. Este
          contenido óptimo de asfalto es luego verificado con otras pruebas como
          estabilidad y flujo (diseño Marshall), o pérdida en tracción indirecta
          (Superpave, Protocolo mexicano).
        </p>

        <h2 className="text-2xl font-bold mt-6">Para graficar el Polígono de vacíos:</h2>
        
        <section className="mt-4" id={1}>
            <h3 className="text-xl font-bold mt-4">Paso 1:</h3>
            <p>
            Inicialmente determinamos la gravedad específica teórica máxima de la
            mezcla asfáltica, con la siguiente expresión:
            </p>
            <Latex>{`$$G_{mm} = \\frac{100}{\\frac{100 - P_b}{G_{se}} + \\frac{P_b}{G_b}}$$`}</Latex>

            <p className="mt-4">
            Donde:
            <ul className="list-style-type-none ml-6">
                <li><Latex>${`G_{mm}`}$</Latex> = gravedad específica teórica máxima de la mezcla asfáltica.</li>
                <li><Latex>${`G_{se}`}$</Latex> = gravedad específica efectiva del agregado.</li>
                <li><Latex>${`G_{b}`}$</Latex> = gravedad específica del cemento asfáltico.</li>
                <li><Latex>${`P_{b}`}$</Latex> = por ciento de cemento asfáltico.</li>
            </ul>
            </p>
        </section>
        
        <section className="mt-4" id={2}>
            <h3 className="text-xl font-bold mt-10">Paso 2:</h3>
            <p>
            Seguidamente graficamos las iso-líneas para vacíos de aire de: 0%, 3%, 4% y 5%, a través de la siguiente expresión:
            </p>
            <Latex>{`$$G_{mb} = \\frac{1 - \\frac{V_a}{100}}{G_{mm}}$$`}</Latex>
            
            <p className="mt-4">
            Donde:
            <ul className="list-style-type-none ml-6">
                <li><Latex>${`G_{mb}`}$</Latex> =  gravedad específica bulk de la mezcla compactada (densidad bruta).</li>
                <li><Latex>${`G_{mm}`}$</Latex> = gravedad específica teórica máxima de la mezcla asfáltica.</li>
                <li><Latex>${`V_{a}`}$</Latex> = vacíos de aire.</li>
            </ul>
            </p>
        </section>

        <section className="mt-4" id={3}>
            <h3 className="text-xl font-bold mt-10">Paso 3:</h3>
            <p>
            Para graficar las Iso-líneas del VMA (vacíos en el agregado mineral) con un porcentaje de 14% y 16%, se utiliza la siguiente ecuación:
            </p>
            <Latex>{`$$G_{mb} = \\frac{100 - VAM}{100 - P_b} \\cdot G_{sb}$$`}</Latex>

            <p className="mt-4">
            Donde:
            <ul className="list-style-type-none ml-6">
                <li><Latex>${`G_{mb}`}$</Latex> = gravedad específica bulk de la mezcla compactada (densidad bruta).</li>
                <li><Latex>$VAM$</Latex> = vacíos en el agregado mineral.</li>
                <li><Latex>${`G_{sb}`}$</Latex> = gravedad específica bulk del agregado.</li>
                <li><Latex>${`P_{b}`}$</Latex> = por ciento de cemento asfáltico.</li>
            </ul>
            </p>
        </section>

        <section className="mt-4" id={4}>
            <h3 className="text-xl font-bold mt-10">Paso 4:</h3>
            <p>
            Finalmente graficamos las Iso-líneas del VFA (vacíos rellenos de asfalto) con porcentajes de 65% y 75%, para tal efecto emplearemos la siguiente expresión:
            </p>
            <Latex>{`$$G_{mb} = \\left(\\frac{VFA}{\\frac{100}{G_{mm}} + \\frac{VFA(100-P_b)}{100G_{sb}} - \\frac{100-P_b}{G_{sb}}}\\right)$$`}</Latex>
            <p className="mt-4">
            Donde:
            <ul className="list-style-type-none ml-6">
                <li><Latex>${`G_{mb}`}$</Latex> = gravedad específica bulk de la mezcla compactada (densidad bruta).</li>
                <li><Latex>$VFA$</Latex> = vacíos rellenos de asfalto.</li>
                <li><Latex>${`G_{sb}`}$</Latex> = gravedad específica bulk del agregado.</li>
                <li><Latex>${`G_{mm}`}$</Latex> = gravedad específica teórica máxima de la mezcla asfáltica.</li>
                <li><Latex>$P_b$</Latex> = por ciento de cemento asfáltico.</li>
            </ul>
            </p>
        </section>

        <section className="mt-4" id={5}>
            <h3 className="text-xl font-bold mt-10">Paso 5:</h3>
            <p>
            Finalmente graficamos las Iso-líneas de <Latex>$V_a$</Latex>, <Latex>$VMA$</Latex>, y <Latex>$VFA$</Latex>, como se muestra en la Figura 1.
            </p>

            <div className="text-center">
                <img src={figura1} alt="Figura 1" className="mx-auto" />
                <p className="text-sm text-gray-500">Figura 1: Polígono de vacíos</p>
            </div>
            <p className="mt-4">
                De donde obtenemos:
                <ul className="list-style-type-none ml-6">
                    <li><Latex>${`P_{bo}`}$</Latex> = contenido de asfalto óptimo</li>
                    <li><Latex>${`G_{mb}`}$</Latex> = gravedad específica bulk de la mezcla compactada (densidad bruta)</li>
                </ul>
            </p>
        </section>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Referencias</h2>
          <ul className="list-disc ml-6 font-semibold">
            <li>
              Sánchez-Leal, F. J. (2007), Gradation Chart for Asphalt Mixes: Development. <i>Journal of Materials in Civil Engineering</i>, 19(2), 185-197.
            </li>
            <li>
              Sánchez-Leal, F. J.; Anguas, P. G.; Larreal, M.; Valdés, D. B. L. (2011), Polyvoids: Analytical Tool for Superpave HMA Design. <i>Journal of Materials in Civil Engineering</i>, 23(8), 1129-1137.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
