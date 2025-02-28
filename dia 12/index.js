//atribuindo varáveis

let nomes = [];
let senhas = [];
let contador = 0;
let condicao = true

//solicitando dados do usuário

while(condicao) {

    let escolha = prompt("Digite (1) para se cadastrar, (2) para fazer login, (3) prar excluir cadastro ou 4 para encerrar.");

    
    switch(escolha) {
        case "1":

            nomes [contador] = prompt("Digite seu nome:");
            senhas [contador] = prompt("Digite uma senha de sua preferência:");
            contador ++

            break;

        case "2":

            let nome = prompt("Digite seu nome:");
            let senha = prompt("Digite sua senha:");
            let loginInvalido = false

            for(let i = 0; i < nomes.length; i++) {
                if(nome == nomes [i] && senha == senhas [i]) {
                    loginInvalido = true
                }    
            }

            if(loginInvalido) {
                alert("Login realizado com sucesso!")
            } else {
                alert("Login ou senha inválidos")
            }
            
            break;

        case "3":
            
            let nomeExcluir = prompt("Digite o nome que deseja excluir:");
            let nomesAux = [];
            let senhasAux = [];
            let contadorAux = 0

            for(let i = 0; i < contador; i++) {
                if(nomeExcluir == nomes [i]) {
                    alert("Cadastro excluido com sucesso.")
                } else {
                    nomesAux [contadorAux] = nomes [i];
                    senhasAux [contadorAux] = senhas [i];
                    contadorAux++

                }  
            }
        
            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;

        case "4":

            condicao = false

            break;

        default:

            alert("Opção inválida, escolha outra!")

            break;

    }    
}
