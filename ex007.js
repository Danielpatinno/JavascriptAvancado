// Crie uma função que verifique se um objeto possui uma determinada propiedade.

const usuario = {
    nome: "Daniel",
    profissao: "Programador",
    nacionalidade: "Paraguaia",
}

let res;
let propiedade = "idade"
if(usuario.hasOwnProperty(propiedade)){
    res = `A propiedade ${propiedade} existe dentro do objeto`
} else {
    res = `A propiedade ${propiedade} não existe dentro do objeto`
}

console.log(res)