//criando variáveis

let mediaGeral = 0
let quantosH = 0
let quantasMAcima7 = 0
let maiorNotaH = 0
let contador = 1
//nota e sexo

while(contador <= 10){
    let nota = Number(prompt('Insira a nota do ' + contador + '° aluno'))
    let sexo = prompt('Insira o sexo do aluno: (M/F)')
    if(sexo == 'M'){
        if(nota > maiorNotaH){
            maiorNotaH = nota

        }
        quantosH++
    }
    if(sexo == 'F' && nota > 7){
        quantasMAcima7++
    }
    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10
console.log("A média geral dos alunos foi de " + mediaGeral + " pontos")
console.log("A quantidade de homens cadastrados foi:" + quantosH)
console.log("A quantidade de mulheres que tiveram um nota maior que 7 foi:" + quantasMAcima7)
console.log("A maior nota entre os homens foi:" + maiorNotaH)