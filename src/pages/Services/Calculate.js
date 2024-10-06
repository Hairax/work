function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

  export function LGmm(Gsb, Gse, Gb) {
    let gmm = [], Va3 = [], Va4 = [], Va5 = [], pb = [];

    for (let i = 6.5, j = 0; i <= 8; i += 0.1, j++) {
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
    let  Vam14 = [], Vam16 = [], pb = [];

    for (let i = 6.5, j = 0; i <= 8; i += 0.1, j++) {
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
