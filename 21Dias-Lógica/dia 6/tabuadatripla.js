//criando sistema que demonstre a duabuada do número desejado e as duas próximas

let num = parseInt(prompt("Digite um número inteiro e positivo:"))

for(let i = num; i <= num + 2; i++){
    console.log("Tabuada do número " + i)
    for(let multiplicador = 0; multiplicador <= 10; multiplicador++){
        console.log(i + " x " + multiplicador + " = " + (i * multiplicador))
    }
}