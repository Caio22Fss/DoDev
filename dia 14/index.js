//Criando função para perguntar nome e salário do funcionário

var nome;
var salario;

function dadosFuncionario(){
    nome = prompt("Digite o nome do funcionário:");
    salario = parseFloat(prompt("Digite o salario do funcionário:"));
    calculoAumentoSalarial(nome, salario);
}

//Função para calcular aumento slarial

var aumento;

function calculoAumentoSalarial(nome, salario){
    if(salario <= 1500) {
        aumento = 0.2
    } else if(salario <= 2000) {
        aumento = 0.15
    } else if(salario <= 3000) {
        aumento = 0.1
    }else {
        aumento = 0.05
    }

var novoSalario = salario + (salario * aumento);

console.log("Nome: " + nome);
console.log("Salário: R$" + salario);
console.log("Aumento: " + (aumento * 100) + "%");
console.log("Salário reajustado: R$" + novoSalario);

perguntarNovamente()

}

//Função para perguntar colaborador se deseja iserir novos dados

function perguntarNovamente() {
 var reiniciar = prompt("Deseja inserir novos dados? (s/n)")

 if(reiniciar == "s") {
    dadosFuncionario()
 } else {
    console.log("Programa encerrado")
 }
}
