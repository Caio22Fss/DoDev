// Criando arrays de armazenamento
let nomes =  [];
let senhas = [];

// Funçào para solicitar escolha do usuário
function opcaoEscolhida() {
    let escolha = prompt("Escolha uma opção:\n1. Cadastrar\n2. Fazer login\n3. Excluir cadastro\n4. Encerrar o programa");
    return escolha
}
    
// Função para cadastro
function cadastroUsuario() {
    nomes.push(prompt("Digite o nome:"))
    senhas.push(prompt("Digite a senha:"))
}
    
// Função para login
function loginUsuario(nome, senha) {
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false;
    }
}
    
// Funçao para excluir cadastro
function excluirCadastro(nomeDel) {
    let indice = nomes.indexOf(nomeDel);
    if(indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        alert("Cadastro excluido com sucesso.")
    } else {
        alert("Cadastro não encontrado.")
    }
}
    
// Fluxo de funcionamento do código
let continuar = true;
while(continuar) {
    let escolha = opcaoEscolhida()

    switch(escolha) {
        case "1":
            cadastroUsuario()
            break;
        case "2":
            let nome = prompt("Digite seu nome:");
            let senha = prompt("Digite sua senha:")
            let login = loginUsuario(nome, senha);
            if(login) {
                alert("Login realizado com sucesso.")
            } else {
                alert("Login não encontrado.")
            }
            break;
        case "3":
            let nomeDel = prompt("Digite o nome do cadatro a ser excluido:");
            excluirCadastro(nomeDel);
            break;
        case "4":
            alert("Programa encerrado com sucesso.")
            continuar = false
            break;
        default: 
            alert("Opção inválida, escolha outra.")
    }
}
