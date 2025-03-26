//criando classes

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Vencedor
    Participantes

    constructor(nome, tipo, distancia) {
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let i = 0; i < this.Participantes.length; i++){
            let tempo = this.Participantes[i].CalcularTempoMedio(this.Distancia)
            if(tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[i]    
            }
            return this.Vencedor = vencedor
        }
    }

    ExibirVencedor() {
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}


let corrida = new Corrida ("Bagres", "Fórmula 22", 22000)

corrida.Participantes[0] = new Carro("Monza", 220, 450, 2)
corrida.Participantes[1] = new Carro("Ferrari", 150, 250, 5)
corrida.Participantes[2] = new Carro("Unu Escada", 200, 430, 3)
corrida.Participantes[3] = new Carro("Lambo", 250, 400, 4)

corrida.DefinirVencedor()
corrida.ExibirVencedor()
