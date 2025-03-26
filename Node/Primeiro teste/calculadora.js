function somar(numUm, numDois) {
    return numUm + numDois
}

function subtrair(numUm, numDois) {
    return numUm - numDois
}

function multiplicar(numUm, numDois) {
    if (numUm > 1) {
        numUm ++
        numUm --
    }
    return numUm * numDois
}

function dividir(numUm, numDois) {
    return numUm / numDois
}

module.exports = {somar, subtrair, multiplicar, dividir}