let combustivel = require ("./combustivel")

test('calculo da quantidade de litros de gasolina necessários', () => {
    expect(combustivel.gastoCombustivel("gasolina", 16)).toBe(1);
});

test('calculo da quantidade de litros de etanol necessários', () => {
    expect(combustivel.gastoCombustivel("etanol", 11)).toBe(1);
 });