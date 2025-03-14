//Criando classe Livro

class Livro {
    Titulo
    Autor
    Editora
    AnoPublicado
    Disponibilidade = true

    constructor (titulo, autor, editora, anoPublicado) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicado = anoPublicado
    }
}

//Criando array de armazenamento e populando o array

const livros = []

livros.push(new Livro("One piece", "Eichiro Oda", "Shonen Jump", 1997))
livros.push(new Livro("Hunter x Hunter", "Yoshihiro Togashi", "Shonen Jump", 1998))
livros.push(new Livro("Senhor dos anéis", "J. R. R. Tolkien", "Allen & Unwin", 1954))
livros.push(new Livro("Harry Potter", "J. K. Rowling", "Pottermore Publishing", 1997))
livros.push(new Livro("Solo leveling", "Chu-Gong", "KakaoPage", 2016))

//Criando classe Biblioteca e adicionando metodos

class Biblioteca {
    Nome
    Endereco
    Telefone
    Acervo = []

    constructor (nome, endereco, telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.Acervo = acervo
    }

    //Método para exibir informações de um livro a partir de seu nome

    buscarLivro (titulo) {
        const livro = this.Acervo.find(livro => livro.Titulo === titulo)
        if (livro) {
            console.log(livro)
        } else {
            console.log("Livro não encontrado.")
        }
    }

    //Método de empréstimo de livros

    emprestimoLivro (titulo) {
        const livro = this.Acervo.find(livro => livro.Titulo === titulo)
        if (livro && livro.Disponibilidade) {
            console.log(`O livro "${titulo}" foi emprestado com sucesso.`)
            livro.Disponibilidade = false
            return true
        } else {
            console.log(`Não foi possível emprestar o livro "${titulo}".`)
            return false
        }
    }

    //Método de devolução

    devolucaoLivro (titulo) {
        const livro = this.Acervo.find(livro => livro.Titulo === titulo);
        if (livro) {
            console.log(`O livro "${titulo}" foi devolvido com sucesso.`)
            livro.Disponibilidade = true
        } else {
            console.log("Livro não encontrado.")
        }
    }



}

//Criando objeto da classe biblioteca e chamando metodos

let biblioteca = new Biblioteca("Biblioteca DoDev", "Rua dos livros", 123456789, livros)

biblioteca.buscarLivro("Hunter x Hunter")
biblioteca.buscarLivro("Naruto")
biblioteca.emprestimoLivro("One piece")
biblioteca.emprestimoLivro("One piece")
biblioteca.devolucaoLivro("One piece")
biblioteca.devolucaoLivro("Naruto")