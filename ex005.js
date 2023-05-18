// Implemente uma função que recebe um número e retorna uma nova função que soma o número recebido com outro número

let numero1 = 3;

function receberNumero(num) {

    function somarNumeros(num) {
        let resultado = 0;
        let numero2 = 5;

        resultado = numero2 + num;

        return resultado;
    }

    return somarNumeros(num);
}

console.log(receberNumero(numero1))