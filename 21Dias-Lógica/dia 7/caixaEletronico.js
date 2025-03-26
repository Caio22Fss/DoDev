//criando variáveis

let saldo = 5000;
let maiorValor = 0;
let somaValores = 0;
let totalTransações = 0;
let continuar = false;
const nome = prompt("Digite seu nome:");
const cpf = prompt("Digite seu cpf:");

do{
    const valor = Number(prompt("Digite o valor desejado:"));
    const operação = prompt("Digite s para ultilizar o saque ou d para ultilizar o depósito?");

    if(valor < 0){
        console.log("Valor inválido. A transação nào foi realizada.")
    }else if(operação == "s" && valor > saldo){
        console.log("Saldo insuficiente. A transação nào foi realizada.")
    }else if(operação == "s"){
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        somaValores += valor;
        totalTransações ++;
        if(valor > maiorValor){
            maiorValor = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`)
    }else{
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        somaValores += valor;
        totalTransações++;
        if(valor > maiorValor){
            maiorValor = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }

    const opcao = prompt("Deseja continuar? (1 para continuar e 2 para parar)")
    if(opcao === "1"){
        continuar = true
    }else if(opcao === "2"){
        continuar = false
    }else{
        console.log("Operação inválida. Programa encerrado")
        continuar = false
    }

}while(continuar)
console.log(`Saldo final: R$${saldo}`)
console.log(`Maior valor inserido: R$${maiorValor}`)
console.log(`Média doa valores inserido: R$${somaValores / totalTransações}`)
