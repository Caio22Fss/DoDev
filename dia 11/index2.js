//atribuindo variáveis

let modelos = [];
let valores = [];
let anos= [];
let contador = 0;
let continuar = true;

//adicionando modélos, valores e anos

while(continuar) {
    let modelo = prompt(`Digite o modelo do ${contador + 1}° carro:`);
    modelos [contador] = modelo;
    let ano = parseInt(prompt("Digite o ano:"));
    anos [contador] = ano;
    let valor = parseFloat(prompt("Digite o valor:"))
    valores [contador] = valor;  
    contador++;

    let parar = prompt("Deseja inserir um novo carro? (s/n)");
    if(parar == "n") {
        continuar = false
    }
}

//exibindo resultado

for(let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]} - R$${valores[i]}`)
}

//ordenando por preço

for(let i = 0; i < valores.length - 1; i++) {
    for(let j = 0; j < valores.length - i - 1; j++) {
        if(valores [j] > valores [j + 1]) {

            let modeloMaiorValor = modelos [j]
            modelos [j] = modelos [j + 1]
            modelos [j + 1] = modeloMaiorValor

            let anoMaiorValor = anos [j]
            anos [j] = anos [j + 1]
            anos [j + 1] = anoMaiorValor

            let maiorValor = valores [j]
            valores [j] = valores [j + 1]
            valores [j + 1] = maiorValor
        }
    }
}

//exibindo resultado ordenado por preço

console.log("Modelos ordenador pelo preço:")
for(let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]} - ${anos[i]} - R$${valores[i]}`)
}