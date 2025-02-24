//criando variáveis e loop

let confirmar = "n"

while (confirmar != "s") {
    let nome = prompt("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual:"))
    console.log('Nome:' + nome + ', Idade:' + idade + ', Salario ataual:' + salarioAtual)
    confirmar = prompt("As informações estão corretas? (s/n)")


//previsão salárial

let aumento = 0.015
console.log("Previsão salárial para os próximos 10 anos:")

for (let ano = 1; ano<= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2025 + ano) + "= R$" + salarioAtual)
}
}
