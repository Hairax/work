function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

function EcuLin(){
  
}

export const gmm = [];
export const Va3 = [];
export const Va4 = [];
export const Va5 = [];
export const Vam14 = [];
export const Vam16 = [];
export const VFA65 = [];
export const VFA75 = [];
export const pb = [];


  function regLineal(PromX, SXX, x, y){
    let SumY = y.reduce((acc, yi) => acc + yi, 0);      
    let PromY = SumY/y.length;

    let SXY2 = x.reduce((acc, xi, i) => acc + (xi * y[i]) ** 2, 0);
    let SSXY = SXY2 - ((SumX*SumY)/x.length);

    let b1 = SSXY/SXX;
    let b0 = PromY - (b1*PromX);

    return {b0 , b1}
  }

  export function LGmm(Gsb, Gse, Gb) {
   // let gmm = [], Va3 = [], Va4 = [], Va5 = [], pb = [];

    for (let i = 6, j = 0; i <= 8; i += 0.1, j++) {
      pb[j] = round(i,1); 
      gmm[j] = round(100 / (((100 - i) / Gse) + (i / Gb)),3); 
      Va3[j] = round((1 - (3 / 100)) * gmm[j],3); 
      Va4[j] = round((1 - (4 / 100)) * gmm[j],3); 
      Va5[j] = round((1 - (5 / 100)) * gmm[j],3); 
    }

    //Funciones para calcular la linea de regresion
    const SumX = pb.reduce((acc, xi) => acc + xi, 0);      
    const SumX2 = pb.reduce((acc, xi) => acc + xi ** 2, 0);
    const SXX = SumX2 - ((SumX ** 2)/pb.length);
    const PromX = SumX/x.length;

    const {gmmBO , gmmB1 } = regLineal(PromX, SXX , pb , gmm);
    const {Va3BO , Va3B1 } = regLineal(PromX, SXX , pb , Va3); 
    const {Va4BO , Va4B1 } = regLineal(PromX, SXX , pb , Va4); 
    const {Va5BO , Va5B1 } = regLineal(PromX, SXX , pb , Va5); 
    
    console.log("BO Y B1" + gmmBO +" " + gmmB1);
    console.log("BO Y B1 VA3" + Va3BO +" " + Va3B1);
    console.log("BO Y B1 VA4" + Va4BO +" " + Va4B1);
    console.log("BO Y B1 VA5" + Va5BO +" " + Va5B1);



    const result = [["Pᵦ","Gₘₘ", "Va 0%", "Va 3%", "Va 4%", "Va 5%"]];
    
    for (let k = 0; k < gmm.length; k++) {
        result.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k]]);
    }

    return result; 
}


export function LGmb(Gsb, Gse, Gb) {
  //  let  Vam14 = [], Vam16 = [], pb = [];

    for (let i = 6, j = 0; i <= 8; i += 0.1, j++) {
      pb[j] = round(i,1); 

      Vam14[j] = round(((100-14) / (100-i)) * Gsb,3);
      Vam16[j] = round(((100-16) / (100-i)) * Gsb,3); 
    }

    
    const result = [["Pᵦ", "VAM 14%", "VAM 16%"]];
    
    for (let k = 0; k < pb.length; k++) {
        result.push([pb[k],Vam14[k], Vam16[k]]);
    }

    return result; 
}


export function VFA(Gsb, Gse, Gb) {
 // let  Vam14 = [], Vam16 = [], pb = [];

  for (let i = 6, j = 0; i <= 8; i += 0.1, j++) {
    pb[j] = round(i,1); 

    VFA65[j] = round(65/ ((100/gmm[j])+((65*(100-i))/(100*Gsb))-((100-i)/Gsb)),3);
    VFA75[j] = round(75/ ((100/gmm[j])+((75*(100-i))/(100*Gsb))-((100-i)/Gsb)),3);
  }

  
  const result = [["Pᵦ","Gₘₘ", "VFA 65%", "VFA 75%"]];
  
  for (let k = 0; k < pb.length; k++) {
      result.push([pb[k],gmm[k],VFA65[k], VFA75[k]]);
  }

  return result; 
}

export function ALLresult(){
  const result1 = [["Pᵦ","Gₘₘ", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%"]];
  const result2 = [];
  
  for (let k = 0; k < pb.length; k++) {
      result1.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k]]);
      result2.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k]]);
  }
  return { tb1all: result1, tb2all: result2 };
}

function Detpuntos(list) {
  let x = 0, c = 0, m = 0;
  // Cálculo de 'm', 'x' y 'c'
  m = (list[list.length - 1] - list[0]) / 2;
  x = m;
  c = list[0]-(m * 6);

  return { x, c }; // Retorna 'x', 'y', 'c'
}

function Intersección(li1,li2) {
  const { x: x1, c: c1 } = Detpuntos(li1);
  const { x: x2, c: c2 } = Detpuntos(li2);
  const px=round(-((c1-c2)/(x1-x2)),3);
  const py=round((x1*px)+c1,3);
 // console.log(x1, c1); 
 // console.log(x2,c2);
  return [px , py];
}

export function poligono(){
  const pA = Intersección(Vam14,VFA65);
  const pB = Intersección(Vam14,VFA75);
  const pC = Intersección(VFA75,Vam16);
  const pD = Intersección(Vam16,Va5);
  const pE = Intersección(Va5,VFA65);
  

  let rt = [["Pᵦ","Gₘₘ", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%","Área"]];
  for (let k = 0; k < pb.length; k++) {
    rt.push([pb[k], gmm[k], gmm[k], Va3[k], Va4[k], Va5[k], Vam14[k], Vam16[k], VFA65[k], VFA75[k],null]);
  }
  rt.push([pA[0],null,null,null,null,null,null,null,null,null,pA[1]]);
  rt.push([pB[0],null,null,null,null,null,null,null,null,null,pB[1]]);
  rt.push([pC[0],null,null,null,null,null,null,null,null,null,pC[1]]);
  rt.push([pD[0],null,null,null,null,null,null,null,null,null,pD[1]]);
  rt.push([pE[0],null,null,null,null,null,null,null,null,null,pE[1]]);
  rt.push([pA[0],null,null,null,null,null,null,null,null,null,pA[1]]);

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
