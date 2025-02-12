//atribuindo variáveis 
let nome
let idade
let possuíCarta = false
let possuíCarro = false

//solicitando informações do usuário

nome = prompt("Digite seu nome:")
idade = parseInt(prompt("Digite sua idade:"))
let opçãoCarta = prompt("Você possuí carta de motorista? (sim/não)")
if(opçãoCarta == "sim"){
possuíCarta = true
}
let opçãoCarro = prompt("Você possuí algum carro? (sim/não)")
if(opçãoCarro == "sim"){
possuíCarro = true
}

//Inserindo resultados no console

if(idade < 18 || !possuíCarta){
console.log(nome + ", você não pode dirigir");
}else if(idade >= 18 && possuíCarta && !possuíCarro){
console.log(nome + ", você pode dirigir mas não tem um carro")
}else{
console.log(nome + ", você será o motorista!!")
}