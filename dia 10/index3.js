//atribuindo variáveis 

let fibonacci = [];
let num = parseInt(prompt("Digite um número inteiro e positivo:"));

//populando array com Fibonacci

fibonacci [0] = num - 1;
fibonacci [1] = num;

for(let i = 2; i < 10; i++){
    fibonacci [i] = fibonacci [i - 2] + fibonacci [i - 1];
}

//mostrando resultado

console.log(`A Fibonacci com 10 elementos do seu número é: ${fibonacci}`)

