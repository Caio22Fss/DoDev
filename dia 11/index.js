// atribuindo variáveis 

let nomes = [];
let notas = [];
let contador = 0;
let continuar = true;

//adicionando nomes e notas dos alunos

while(continuar) {
    let nome = prompt(`Digite o nome do ${contador + 1}° aluno:`);
    let nota = parseFloat(prompt("Digite a nota do aluno:"));

    nomes [contador] = nome;
    notas [contador] = nota;
    contador++;

    let parar = prompt("Deseja inserir os dados de um novo aluno? (s/n)");
    if(parar == "n") {
        continuar = false
    }
}

//Exibindo resultados

let somaNotas = 0

for(let i = 0; i < nomes.length; i++) {
    console.log(`O aluno ${nomes [i]}, recebeu nota ${notas [i]}.`);
    somaNotas += notas [i]
}
 
let media = somaNotas / nomes.length
console.log(`A soma das notas dos alunos foi: ${somaNotas}`)
console.log(`A média das notas dos alunos foi: ${media}`)


