//vastloper... ik ga de oplossing checken

const calcVat=function(base, vatPerc){
    const vatPerc=(vat/100);
    return base*vatPerc;
};

console.log(calcVat(1000, 21));


const priceIncVat=function(base, calcVat){
    return base+calcVat;
};

priceIncVat();

console.log(priceIncVat(1000, calcVat));


