const calculadora = require("./calculadora")

test('Somar, um mais um é igual a dois', () => {
    expect(calculadora.somar(1, 1)).toBe(2);
});

test('Subtrair, dois menos um é igual a um', () => {
    expect(calculadora.subtrair(2, 1)).toBe(1);
});

test('Multiplicar, um multiplicado por um é igual a um', () => {
    expect(calculadora.multiplicar(1, 1)).toBe(1);
});

test('Dividir, quatro dividido por dois é igual a dois', () => {
    expect(calculadora.dividir(4, 2)).toBe(2);
});

test('Multiplicar com numUm maior que um vai dar o mesmo resultado', () => {
    expect(calculadora.multiplicar(2, 1)).toBe(2);
  });