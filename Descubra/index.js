function proximoElementoA() {
    const sequenciaA = [1, 3, 5, 7];
    const proximo = sequenciaA[sequenciaA.length - 1] + 2;
    console.log("Próximo elemento de A:", proximo); 
}

function proximoElementoB() {
    const sequenciaB = [2, 4, 8, 16, 32, 64];
    const proximo = sequenciaB[sequenciaB.length - 1] * 2;
    console.log("Próximo elemento de B:", proximo); 
}

function proximoElementoC() {
    const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
    const proximo = Math.pow(sequenciaC.length, 2);
    console.log("Próximo elemento de C:", proximo); 
}

function proximoElementoD() {
    const sequenciaD = [4, 16, 36, 64];
    const proximo = Math.pow((sequenciaD.length * 2) + 2, 2);
    console.log("Próximo elemento de D:", proximo); 
}

function proximoElementoE() {
    const sequenciaE = [1, 1, 2, 3, 5, 8];
    const proximo = sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
    console.log("Próximo elemento de E:", proximo); 
}

function proximoElementoF() {
    const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
    const proximo = sequenciaF[sequenciaF.length - 1] + 1;
    console.log("Próximo elemento de F:", proximo); 
}

proximoElementoA();
proximoElementoB();
proximoElementoC();
proximoElementoD();
proximoElementoE();
proximoElementoF();
