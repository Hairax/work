//import { GiConsoleController } from "react-icons/gi";
import Latex from "react-latex-next";


function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

export function  xinitial( x1 , x2){
  Rx1=x1;
  Rx2=x2;
// Vaciando todas las listas con splice
gmm.splice(0, gmm.length);
Va3.splice(0, Va3.length);
Va4.splice(0, Va4.length);
Va5.splice(0, Va5.length);
Vam14.splice(0, Vam14.length);
Vam16.splice(0, Vam16.length);
VFA65.splice(0, VFA65.length);
VFA75.splice(0, VFA75.length);
pb.splice(0, pb.length);

// Vaciando las listas de funciones lineales
F_gmm.splice(0, F_gmm.length);
F_Va3.splice(0, F_Va3.length);
F_Va4.splice(0, F_Va4.length);
F_Va5.splice(0, F_Va5.length);
F_Vam14.splice(0, F_Vam14.length);
F_Vam16.splice(0, F_Vam16.length);
F_VFA65.splice(0, F_VFA65.length);
F_VFA75.splice(0, F_VFA75.length);



//De la regresion
SumX = 0 ;
SumX2 = 0;
SXX = 0;
PromX = 0;
}

export let Rx1=6;
export let Rx2=8;

export const gmm = [];
export const Va3 = [];
export const Va4 = [];
export const Va5 = [];
export const Vam14 = [];
export const Vam16 = [];
export const VFA65 = [];
export const VFA75 = [];
export const pb = [];

//para las funciones lineales
export const F_gmm = [];
export const F_Va3 = [];
export const F_Va4 = [];
export const F_Va5 = [];
export const F_Vam14 = [];
export const F_Vam16 = [];
export const F_VFA65 = [];
export const F_VFA75 = [];
//De la regresion
export let SumX = 0 ;
export let SumX2 = 0;
export let SXX = 0;
export let PromX = 0;

function regLineal(PromX, SXX, x, y) {
    let fSumX = x.reduce((acc, xi) => acc + xi, 0);
    let fSumY = y.reduce((acc, yi) => acc + yi, 0);
    let fPromY = fSumY / y.length;

    // Producto cruzado
    let SXY = x.reduce((acc, xi, i) => acc + (xi * y[i]), 0);
    let SSXY = SXY - ((fSumX * fSumY) / x.length);

    let b1 = SSXY / SXX;
    let b0 = fPromY - (b1 * PromX);

    return { b0, b1 };
}

export function LGmm(Gsb, Gse, Gb) {
  
    const round = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);

    //let gmm = [], Va3 = [], Va4 = [], Va5 = [], pb = [];

    for (let i = Rx1, j = 0; i <= Rx2; i += 0.1, j++) {
        pb[j] = round(i, 1);
        gmm[j] = round(100 / (((100 - i) / Gse) + (i / Gb)), 3);
        Va3[j] = round((1 - (3 / 100)) * gmm[j], 3);
        Va4[j] = round((1 - (4 / 100)) * gmm[j], 3);
        Va5[j] = round((1 - (5 / 100)) * gmm[j], 3);
    }

    // Cálculos para regresión lineal
    SumX = pb.reduce((acc, xi) => acc + xi, 0);
    SumX2 = pb.reduce((acc, xi) => acc + xi ** 2, 0);
    SXX = SumX2 - ((SumX ** 2) / pb.length);
    PromX = SumX / pb.length;

    [F_gmm[0] , F_gmm[1]] = Object.values(regLineal(PromX, SXX, pb, gmm));
    [F_Va3[0] , F_Va3[1]] = Object.values(regLineal(PromX, SXX, pb, Va3));
    [F_Va4[0] , F_Va4[1]] = Object.values(regLineal(PromX, SXX, pb, Va4));
    [F_Va5[0] , F_Va5[1]] = Object.values(regLineal(PromX, SXX, pb, Va5));



//Resultados para la tabla
const result1 = [[<Latex>${`P_{b}`}$</Latex>,<Latex>${`G_{mm}`}$</Latex>, "Va 0%", "Va 3%", "Va 4%", "Va 5%"]];
    
for (let k = 0; k < gmm.length; k++) {
  result1.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k]]);
}
// Resultados para el gráfico
    const result2 = [["Pb","Gmm", "Va 0%", "Va 3%", "Va 4%", "Va 5%", "", "", "", ""]];
    
    for (let k = 0; k < gmm.length; k++) {
      result2.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], (F_gmm[0]+(pb[k]*F_gmm[1] )) ,
      (F_Va3[0]+(pb[k]*F_Va3[1])), (F_Va4[0]+(pb[k]*F_Va4[1])), (F_Va5[0]+(pb[k]*F_Va5[1])) ]);
    }

    return [result1,result2]; 
}


export function LGmb(Gsb, Gse, Gb) {
  //  let  Vam14 = [], Vam16 = [], pb = [];

    for (let i = Rx1, j = 0; i <= Rx2; i += 0.1, j++) {
      pb[j] = round(i,1); 

      Vam14[j] = round(((100-14) / (100-i)) * Gsb,3);
      Vam16[j] = round(((100-16) / (100-i)) * Gsb,3); 
    }

    /* Cálculos para regresión lineal
    const SumX = pb.reduce((acc, xi) => acc + xi, 0);
    const SumX2 = pb.reduce((acc, xi) => acc + xi ** 2, 0);
    const SXX = SumX2 - ((SumX ** 2) / pb.length);
    const PromX = SumX / pb.length;
    */

    [F_Vam14[0] , F_Vam14[1]] = Object.values(regLineal(PromX, SXX, pb, Vam14));
    [F_Vam16[0] , F_Vam16[1]] = Object.values(regLineal(PromX, SXX, pb, Vam16));

    //para la tabla
    const result1 = [["Pb", "VAM 14%", "VAM 16%"]];
    
    for (let k = 0; k < pb.length; k++) {
        result1.push([pb[k],Vam14[k], Vam16[k]]);
    }
    //resultados para la grafica
    const result2 = [["Pb", "VAM 14%", "VAM 16%", "", ""]];
    
    for (let k = 0; k < pb.length; k++) {
        result2.push([pb[k],Vam14[k], Vam16[k], (F_Vam14[0]+(pb[k]*F_Vam14[1])), (F_Vam16[0]+(pb[k]*F_Vam16[1]))]);
    }

    return [result1,result2]; 
}


export function VFA(Gsb, Gse, Gb) {
  
  for (let i = Rx1, j = 0; i <= Rx2; i += 0.1, j++) {
    pb[j] = round(i,1); 
    VFA65[j] = round(65/ ((100/gmm[j])+((65*(100-i))/(100*Gsb))-((100-i)/Gsb)),3);
    VFA75[j] = round(75/ ((100/gmm[j])+((75*(100-i))/(100*Gsb))-((100-i)/Gsb)),3);
    
  }

    /* Cálculos para regresión lineal
    const SumX = pb.reduce((acc, xi) => acc + xi, 0);
    const SumX2 = pb.reduce((acc, xi) => acc + xi ** 2, 0);
    const SXX = SumX2 - ((SumX ** 2) / pb.length);
    const PromX = SumX / pb.length;
    */
  

  [F_VFA65[0] , F_VFA65[1]] = Object.values(regLineal(PromX, SXX, pb, VFA65));
  [F_VFA75[0] , F_VFA75[1]] = Object.values(regLineal(PromX, SXX, pb, VFA75));


//para la tabla
const result1 = [["Pb","Gmm", "VFA 65%", "VFA 75%"]];
  
for (let k = 0; k < pb.length; k++) {
    result1.push([pb[k],gmm[k],VFA65[k], VFA75[k] ]);
}
//para el grafico
  const result2 = [["Pb","Gmm", "VFA 65%", "VFA 75%","","",""]];
  
  for (let k = 0; k < pb.length; k++) {
      result2.push([pb[k],gmm[k],VFA65[k], VFA75[k], (F_gmm[0]+(pb[k]*F_gmm[1])),
       (F_VFA65[0]+(pb[k]*F_VFA65[1])) ,(F_VFA75[0]+(pb[k]*F_VFA75[1])) ]);
  }

  return [result1,result2]; 
}

export function ALLresult(){
  const result1 = [["Pb","Gmm", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%"]];
  const result2 = [["Pb","Gmm", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%",
                          "","","","","","","",""
  ]];

  for (let k = 0; k < pb.length; k++) {
      result1.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k]]);
      result2.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k],
        (F_gmm[0]+(pb[k]*F_gmm[1])) ,(F_Va3[0]+(pb[k]*F_Va3[1])), 
        (F_Va4[0]+(pb[k]*F_Va4[1])) , (F_Va5[0]+(pb[k]*F_Va5[1])),
        (F_Vam14[0]+(pb[k]*F_Vam14[1])) , (F_Vam16[0]+(pb[k]*F_Vam16[1])),
        (F_VFA65[0]+(pb[k]*F_VFA65[1])) ,(F_VFA75[0]+(pb[k]*F_VFA75[1])) ] 
      );
  }
  return { tb1all: result1, tb2all: result2 };
}


function Detpuntos(list) {
  let x = 0, c = 0, m = 0;
  // Cálculo de 'm', 'x' y 'c'
  m = (list[list.length - 1] - list[0]) / (Rx2-Rx1);
  x = m;
  c = list[0]-(m * Rx1);

  return { x, c }; // Retorna 'x', 'y', 'c'
}

function Intersección(li1,li2) {
  const { x: x1, c: c1 } = Detpuntos(li1);
  const { x: x2, c: c2 } = Detpuntos(li2);
  const px=round(-((c1-c2)/(x1-x2)),3);
  const py=round((x1*px)+c1,3);

  return [px , py];
}

export function poligono(){
  const pA = Intersección(Vam14,VFA65);
  const pB = Intersección(Vam14,VFA75);
  const pC = Intersección(VFA75,Vam16);
  const pD = Intersección(Vam16,Va5);
  const pE = Intersección(Va5,VFA65);
  

  let rt = [[ "Pb","Gmm", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%",
                      "","","","","","","","","Área" ]];
  for (let k = 0; k < pb.length; k++) {
    rt.push( [pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k],
      (F_gmm[0]+(pb[k]*F_gmm[1])) ,
      (F_Va3[0]+(pb[k]*F_Va3[1])), 
      (F_Va4[0]+(pb[k]*F_Va4[1])), 
      (F_Va5[0]+(pb[k]*F_Va5[1])),
      (F_Vam14[0]+(pb[k]*F_Vam14[1])), 
      (F_Vam16[0]+(pb[k]*F_Vam16[1])),
      (F_VFA65[0]+(pb[k]*F_VFA65[1])),
      (F_VFA75[0]+(pb[k]*F_VFA75[1])), null ]  );
  }
  rt.push([pA[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pA[1]]);
  rt.push([pB[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pB[1]]);
  rt.push([pC[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pC[1]]);
  rt.push([pD[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pD[1]]);
  rt.push([pE[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pE[1]]);
  rt.push([pA[0],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,pA[1]]);


  const mp = [["","","",{ role: 'annotation' }]];

  mp.push([pA[0],pA[1],pA[1],"A"]);
  mp.push([pB[0],pB[1],pB[1],"B"]);
  mp.push([pC[0],pC[1],pC[1],"C"]);
  mp.push([pD[0],pD[1],pD[1],"D"]);
  mp.push([pE[0],pE[1],pE[1],"E"]);
  mp.push([pA[0],pA[1],pA[1],null]);


  let areaPol = mp.slice(1).map(([x, y]) => [x, y]);
  areaPol = areaPol.reverse();

  // Cálculo del área
  let CalArea = 0, Sx = 0, Sy = 0, Cx = 0, Cy = 0;

  for (let k = 0; k < areaPol.length - 1; k++) {
    const xi = areaPol[k][0];
    const yi = areaPol[k][1];
    const xi1 = areaPol[k + 1][0];
    const yi1 = areaPol[k + 1][1];

    // Cálculo de la suma para el área
    const termino = (xi * yi1 - xi1 * yi);
    CalArea += termino;

    // Sumas para las coordenadas del centroide
    Sx += (xi + xi1) * termino;
    Sy += (yi + yi1) * termino;
  }

  // Ajustar el área
  CalArea = Math.abs(CalArea * 0.5);

  // Coordenadas
  Cx = Sx / (6 * CalArea);
  Cy = Sy / (6 * CalArea);

  mp.push([Cx,Cy,null,"Centroide"]);


  return {rt:rt , mp:mp,  CalArea:CalArea};
}
