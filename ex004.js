// Crie uma função que receba um array de números e uma função de transformação como parâmetros, e retorne um novo array com os elementos transformados pela função de transformação.

const nume = [1,2]

function receberNumeros(ar){
    console.log(nume)

    function transformação(numeros) {
        const numerosTransformados = [];
        numeros.map((n) => {
            numerosTransformados.push(n*2)
        })
        return numerosTransformados;
    }

    console.log(transformação(ar))
}

receberNumeros(nume)