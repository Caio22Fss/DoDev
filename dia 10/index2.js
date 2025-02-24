//atribuindo variáveis

let array = [];
let arrayReverso = [];
let quantidadeNum = parseInt(prompt("Digite a quantidade de números que deseja inserir no array:"));

//populando array

for (let i = 0; i < quantidadeNum; i ++) {
    let num = parseInt(prompt(`Digite o ${i + 1}° elemento do array:`));
    array [i] = num;    
}

//criando array com a sequência inversa 

let quantidadeIndices = quantidadeNum - 1;

for (let i = 0; i < quantidadeNum; i ++) {
    arrayReverso [quantidadeIndices] = array [i];
    quantidadeIndices --;
}

//mostrando o array, e o array inverso

console.log(`O seu array original é: ${array}.`);
console.log(`E o array invertido fica: ${arrayReverso}.`);