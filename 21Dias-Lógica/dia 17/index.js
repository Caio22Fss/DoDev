//Classes para hotel e reserva

class Hotel {
  IdHotel
  Nome
  Categoria
  Endereco
  Telefone

  constructor(idHotel, nome, categoria, endereco, telefone) {
    this.IdHotel = idHotel
    this.Nome = nome
    this.Categoria = categoria
    this.Endereco = endereco
    this.Telefone = telefone
  }
}

class Reserva {
  IdReserva
  IdHotel
  Responsavel
  DiaEntrada
  DiaSaida

  constructor(idReserva, idHotel, responsavel, diaEntrada, diaSaida) {
    this.IdReserva = idReserva
    this.IdHotel = idHotel
    this.Responsavel = responsavel
    this.DiaEntrada = diaEntrada
    this.DiaSaida = diaSaida
  }
}

//Arrays para armazenamento e variáveis

const hoteis = []
const reservas = []
let idHotel = 1
let idReserva = 1

//Funções para cadastro

function cadastroHotel() {
  let nome = prompt("Digite o nome do hotel:")
  let categoria = parseInt(prompt("Digite a categoria do hotel:"))
  let endereco = prompt("Digite o endereço do hotel:")
  let telefone = prompt("DIgite o telefone do hotel:")
  let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
  hoteis.push(hotel)
  idHotel++
}

function cadastroReserva() {
  let idHotel
  let condicao = false
  do {
    idHotel = parseInt(prompt("Digite o id do hotel:"))
    for (let i = 0; i < hoteis.length; i++) {
      if (idHotel == hoteis[i].IdHotel) {
        condicao = true
        break
      } else if (i == hoteis.length - 1) {
        console.log("Id de hotel não cadastrado")
      }
    }
  } while (!condicao)

  let responsavel = prompt("Digite o nome do responsável pela reserva:")
  let diaEntrada = parseInt(
    prompt(
      "Digite a data de entrada no padrão americano, ano, mês e dia: ex(20031222)"
    )
  )
  let diaSaida
  do {
    diaSaida = parseInt(prompt("Digite o dia de saída:"))
    if (diaSaida < diaEntrada) {
      console.log("O dia de saída deve ser maior que o dia de entrada")
    }
  } while (diaSaida > diaEntrada)

  let reserva = new Reserva(
    idReserva,
    idHotel,
    responsavel,
    diaEntrada,
    diaSaida
  )
  reservas.push(reserva)
  idReserva++
}

//Função para exibir informações a partir do id do hotel

function procurandoReservasPeloHotel(idHotel) {
  reservas.forEach((reserva) => {
    if (idHotel == reserva.IdHotel) {
      let i = idHotel - 1
      console.log("Hotel: " + hoteis[i].Nome)
      console.log("Responsável: " + reserva.Responsavel)
      console.log("Dia de entrada: " + reserva.DiaEntrada)
      console.log("Dia de saída: " + reserva.DiaSaida)
    }
  })
}

//Função para exibir informações a partir do id da reserva

function procurandoHotelPelaReserva(idReserva) {
  let idHotel = reservas[idReserva - 1].IdHotel
  console.log("Hotel: " + hoteis[idHotel - 1].Nome)
  console.log("Endereço: " + hoteis[idHotel - 1].Endereco)
  console.log("Dia de entrada: " + reservas[idReserva - 1].DiaEntrada)
  console.log("Dia de saída " + reservas[idReserva - 1].DiaSaida)
}

//Função para exibir reservas apartir do nome do responsável

function procurandoReservaPeloNome(responsavel) {
  for (let i = 0; i < reservas.length; i++) {
    if (responsavel == reservas[i].Responsavel) {
      console.log("Id da reserva: " + reservas[i].IdReserva)
      console.log("Hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
    }
  }
}

//Função para exibir hotéis a partir da categoria

function procurandoHotelPelaCategoria(categoria) {
  let hoteisProcurados = []
  for (let i = 0; i < hoteis.length; i++) {
    if (categoria == hoteis[i].Categoria) {
    hoteisProcurados.push(hoteis[i].Nome)
    }
  }
  return hoteisProcurados
}

//Função para atualizar telefone cadastrado

function atualizaTelefoneCadastrado(idHotel, telefone) {
  hoteis[idHotel - 1].Telefone = telefone
  console.log("Telefone atualizado com sucesso")
}

//Fluxo de funcionamento 

let continuar = true

do {
  let escolha = prompt(
    "Escolha uma opção:\n" +
    "1. Cadastrar um hotel\n" +
    "2. Cadastrar uma reserva\n" + 
    "3. Procurar reserva apartir do hotel\n" +
    "4. Procurar hotel a partir da reserva\n" +
    "5. Procurar reserva pelo nome\n" +
    "6. Procurar hotel pela categoria\n" +
    "7. Atualizar telefone de cadastro do hotel\n" +
    "8. Encerrar o programa"
  )

  switch (escolha) {
    case "1":
      cadastroHotel()
      break;
    case "2":
      cadastroReserva()
      break;
    case "3":
      idHotel = prompt("Digite o id do hotel")
      procurandoReservasPeloHotel(idHotel)
      break;
    case "4":
      idReserva = prompt("Digite o id da reserva")
      procurandoHotelPelaReserva(idReserva)
      break;
    case "5":
      responsavel = prompt("Digite o nome do responsável")
      procurandoReservaPeloNome(responsavel)
      break;
    case "6":
      categoria = prompt("Digite a categoria do hotel")
      procurandoHotelPelaCategoria (categoria)
      break;
    case "7":
      idHotel = prompt("Digite o id do hotel")
      telefone = prompt("Digite o novo telefone a ser cadastrado")
      atualizaTelefoneCadastrado(idHotel, telefone)
      break;
    case "8":
      continuar = false
      console.log("Programa encerrado com sucesso")
    default:
      console.log("Opção inválida!!")
      break;
  }

} while (continuar)