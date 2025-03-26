// atribuindo variáveis

let continuar

//loop dowhile

do {
    let nome = prompt("Digite seu nome:")
    let idade = parseInt(prompt("Digite sua idade:"))
    let peso = prompt("Digite seu peso:")
    let altura = prompt("Digite sua altura:")
    let profissao = prompt("Digite sua profissão")
    
    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`);

    //verificando idade

    if (idade >= 18) {
            console.log("Está liberado para tomar umas geladas");
    } else{
            console.log("Sem gelada para você");
    }

    //idade fracionada

    let idadeDia = idade * 365
    let idadeSemana = idade * 52
    let idadeMes = idade * 12

    console.log(`Sua idade em meses é de ${idadeMes} meses, em semanas é de ${idadeSemana} semanas e em dias é de ${idadeDia} dias.`)

    //descobrindo imc

    let imc =  parseFloat(peso/(altura * altura))

    if (imc < 18.5) {
        console.log(`Seu IMC e de ${imc}kg/m2 e está na faixa magreza`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu IMC e de ${imc}kg/m2 e está na faixa normal`);
    } else if (imc >= 25 && imc <= 30){
        console.log(`Seu IMC e de ${imc}kg/m2 e está na faixa sobrepeso`);
    } else {
        console.log(`Seu IMC e de ${imc}kg/m2 e está na faixa obesidade`);
    }

    //ano de nascimento

    let anoAtual = 2025
    let anoNasceu = anoAtual - idade
    console.log(`Você nasceu no ano ${anoNasceu}`)

    //descobrindo anos e idade

    for (let anoVivido = anoNasceu; anoVivido <= anoAtual; anoVivido++) {
    console.log(`${anoVivido} - ${anoVivido - anoNasceu} anos de idade`)
    }
    
    continuar = prompt("Deseja inserir os dados novamente? (s/n)")
    
} while (continuar == "s")
