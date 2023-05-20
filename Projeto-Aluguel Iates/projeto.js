function cadastrarMensagem(){
 
    var campoMensagem = document.getElementById("mensagem").value;
    var campoEmail = document.getElementById("email").value;
    var campoNome = document.getElementById("nomeCompleto").value;

    var obj = {nome: campoNome, 
    email: campoEmail, 
    mensagem: campoMensagem};

    inserirMensagem(obj);
    alert("Mensagem Cadastrada com Sucesso!");
};

function login(){
    var campoEmail = document.getElementById("emailadmin").value;
    var campoSenha = document.getElementById("senha").value;

    var objLoginSenha = {email: campoEmail, 
    senha: campoSenha}

    var resposta = validarUsuario(objLoginSenha);
    if (resposta == true){
        alert("Login validado com sucesso!");
        window.open("mensagens.html");
    }else{
        alert("Insira um usuário válido");
    }
};

function exibirMensagem(){
    var mensagem = obterMensagens();
    mensagem.forEach((mensagem) => {
        var nome = mensagem.nome;
        var email = mensagem.email;
        var mensagem = mensagem.mensagem;

        var linha = document.createElement("tr");
        var colNome = document.createElement("td");
        colNome.innerHTML = nome;

        var colEmail = document.createElement("td");
        colEmail.innerHTML = email;

        var colMensagem = document.createElement("td");
        colMensagem.innerHTML = mensagem;

        linha.appendChild(colNome);
        linha.appendChild(colEmail);
        linha.appendChild(colMensagem);

        var tabela = document.getElementById("tabela");
        tabela.appendChild(linha);
    })
}