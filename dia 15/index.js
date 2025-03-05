//declarando arrays

let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//criando função para retornar números em comum nos arrays

function numerosComuns(arrayUm, arrayDois) {
    let resultado = [];
    let contador = 0

    for(let i = 0; i < arrayUm.length; i++) {
        for(let j = 0; j < arrayDois.length; j++) {
            if(arrayUm[i] == arrayDois[j]) {
                resultado[contador] = arrayUm[i]
                contador++
                j = arrayDois.length
            }
        }
    }
    return resultado
}

console.log(numerosComuns(arrayA,arrayB))