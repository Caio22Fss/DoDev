function gastoCombustivel(tipoCombustivel, distancia) {
    let quantidade
    if (tipoCombustivel == "gasolina") {
        quantidade = distancia / 16
    } if (tipoCombustivel == "etanol") {
        quantidade = distancia / 11
    }
    return quantidade
}

module.exports = {gastoCombustivel}