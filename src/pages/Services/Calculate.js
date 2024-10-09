import { MdCompareArrows } from "react-icons/md";

function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
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

  export function LGmm(Gsb, Gse, Gb) {
   // let gmm = [], Va3 = [], Va4 = [], Va5 = [], pb = [];

    for (let i = 6, j = 0; i <= 8; i += 0.1, j++) {
      pb[j] = round(i,1); 
      gmm[j] = round(100 / (((100 - i) / Gse) + (i / Gb)),3); 
      Va3[j] = round((1 - (3 / 100)) * gmm[j],3); 
      Va4[j] = round((1 - (4 / 100)) * gmm[j],3); 
      Va5[j] = round((1 - (5 / 100)) * gmm[j],3); 
    }

    
    const result = [["pb", "Gmm", "Va 0%", "Va 3%", "Va 4%", "Va 5%"]];
    
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

    
    const result = [["pb", "VAM 14%", "VAM 16%"]];
    
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

  
  const result = [["pb","Gmm", "VFA 65%", "VFA 75%"]];
  
  for (let k = 0; k < pb.length; k++) {
      result.push([pb[k],gmm[k],VFA65[k], VFA75[k]]);
  }

  return result; 
}

export function ALLresult(){
  const result1 = [["pb","Gmm", "VA 0%", "Va 3%", "Va 4%", "Va 5%" ,"VAM 14%", "VAM 16%", "VFA 65%", "VFA 75%"]];
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
  const px=-((c1-c2)/(x1-x2));
  const py=(x1*px)+c1;
  console.log(x1, c1); 
  console.log(x2,c2);
  console.log(px,py);
  return {px , py};
}

export function poligono(){
  const pA = Intersección(Vam14,VFA65);
  
}
