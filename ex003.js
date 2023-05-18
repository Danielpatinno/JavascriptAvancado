// Escreva uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos.

const numeros = [1,5,2,9,7,5,1,5]

function somarNumeros(arrayNumeros) {
    let soma = 0;
    arrayNumeros.map((num) => {
        soma += num;
    })

    return soma;
}

console.log(somarNumeros(numeros))