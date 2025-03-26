//atribuindo variáveis

let array = [];
let indiceArray = [];
let contadorIndice = 0;

//populando array

for (let i = 0; i < 10; i ++) {
    let num = parseInt(prompt(`Digite o ${i + 1} elemento:`));
    array [i] = num;    
}

//perguntando qual número deseja procurar 

const numeroprocurado = parseInt(prompt("Digite o número a ser procurado:"));

//procurando número e mostrando resutado

for(let i = 0; i < 10; i++) {
    if(array [i] === numeroprocurado) {
        indiceArray [contadorIndice] = i;
        contadorIndice ++;
    }
}
    
console.log(`O número ${numeroprocurado} foi encontrado nos índices: ${indiceArray}`)

