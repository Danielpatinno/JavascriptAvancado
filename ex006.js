// Escreva uma função que receba três números como parâmetros e retirne a soma dos três


function somarNumeros(n1,n2,n3) {
    
    return n1 + n2 + n3;
}

// console.log(somarNumeros(2,5,4));

// Somar 3 números que estão dentro de um array

const numeros = [2,5,4]

function somarArray(numeros) {

    let resultado = 0;

    numeros.map((n) => {
        resultado += n;
    })

    return resultado;
}

console.log(somarArray(numeros))