//atribuindo variáveis

let primeiroNum = parseInt(prompt("Digite o primeiro número:"))
let segundoNum = parseInt(prompt("Digite o segundo número:"))
let escolhaOper = prompt("Digite qual tipo de operção você deseja fazer entre os números selecionados:")

//criando switchcase

switch(escolhaOper){
    case "soma":
        console.log(primeiroNum + " + " + segundoNum + " = " + (primeiroNum + segundoNum))
        break;
    case "subtração":
        console.log(primeiroNum + " - " + segundoNum + " = " + (primeiroNum - segundoNum))
        break;
    case "multiplicação":
        console.log(primeiroNum + " * " + segundoNum + " = " + (primeiroNum * segundoNum))
        break;
    case "divisão":
        console.log(primeiroNum + " / " + segundoNum + " = " + (primeiroNum / segundoNum))
        break;
    case "módulo":
        console.log(primeiroNum + " % " + segundoNum + " = " + (primeiroNum % segundoNum))
        break; 
    default:
        break;
}