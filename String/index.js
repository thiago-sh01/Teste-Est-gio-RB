function contarLetraA(str) {
    const minuscula = str.toLowerCase();
    
    let contador = 0;


    for (let i = 0; i < minuscula.length; i++) {
        if (minuscula[i] === 'a') {
            contador++;
        }
    }

    if (contador > 0) {
        console.log(`A letra 'a' ocorre ${contador} vezes na string.`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }
}

const string = "Thiago Sanches Hohlenwerger";

contarLetraA(string);
