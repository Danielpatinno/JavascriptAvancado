// Implemente uma função que receba uma string e retorne a mesma string invertida.

let palavra = "Computador";

function inverterPalavra(string) {
    let invertida = string.split('').reverse().join('');

    return invertida;
}

console.log(`Palavra normal: ${palavra}`)
console.log(`Palavra invertida: ${inverterPalavra(palavra)}`)

