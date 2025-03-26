//Criando classe

class Carro {
    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor

    constructor (marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria 
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

//Array de armazenamento

let carros = []

//Funções

function Get () {
    return fetch('https://api-generator.retool.com/2KZQ0M/Carro')
        .then((response) => response.json())
        .then((data) => {
            for(let i = 0; i < data.lenght; i++) {
                carros[i] = new Carro(data[i].Marca, data[i].Modelo, data[i].Categoria, data[i].Ano, data[i].Quilometragem, data[i].Valor)
            }
        });
}



async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)

    });

    return response.json();
}


postData('COLOQUE URL AQUI', cep /* OBJETO A SER USADO */)
  .then((data) => {
    console.log(data);  
});


