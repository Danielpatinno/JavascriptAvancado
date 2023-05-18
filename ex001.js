// Crie uma função que receba um objeto como parâmetro e retorne a quantidade de propiedades do objeto.

const pessoa = {
    nome:"Daniel",
    sobrenome:"Patino de Souza",
    Nascimento:"29/09/2003",
    idade:19,
    CPF: "802.182.699-19",
}

function qtdePropiedade(obj) {
    let qtde = Object.keys(obj).length;

    return qtde;
}

console.log(qtdePropiedade(pessoa))