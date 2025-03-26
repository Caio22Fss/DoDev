//Declarando variáveis

let nome = ""
let idade = 0
let peso = 0
let altura = 0

//Solicitando dados do Usuário

nome = prompt("Insira seu nome")
idade = parseInt(prompt("Insira a sua idade"))
altura = parseFloat(prompt("Insira sua altura"))
peso = parseInt(prompt("Insira seu peso"))

//Calculando ano de nascimento e IMC do usuário

let anoNasc = 0
anoNasc = 2025 - idade 

let imc = 0
imc = peso / (altura * altura)

//Exibindo resultado 

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg, e seu IMC é " + imc + "kg/m2")
