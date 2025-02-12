//atribuindo variáveis e solicitando informações do usuário

const temFome = prompt("você está com fome? (sim/não)")
const temDinheiro = prompt("você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("o restaurante está aberto? (sim/não)")

//inserindo os resultados no console

if(temFome === "não" || temDinheiro === "não"){
console.log("Hoje a janta será em casa");
}else if (temDinheiro === "sim" && restauranteAberto === "sim"){
console.log("Hoje o jantar será no seu restaurate preferido");
}else{
console.log("Peça um delivery");
}