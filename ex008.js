// Implemente uma função que receba uma string e retorne uma nova string com todas as vogais em letras maiúsculas.

const palavra = "Converter vogais em letras maiúsculas"
let array = palavra.split("");
const vogais = ["a","e","i","o","u"]
var res = [];

function vogaisMaiúsculas() {
    console.log(`Palavra inteira minúscula: "${palavra}"`)

    array.forEach((l) => {
        if(vogais.includes(l)){
            res.push(l.toUpperCase())
        } else {
           res.push(l) 
        }
    })
    array = res.join("")

    return `Palavra com vogais maiúsculas: "${array}"`;
}
console.log(vogaisMaiúsculas())