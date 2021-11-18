var nome = "Leandro Campagnaro";
var cargo = "Desenvolvedor";
var nomehtml = document.getElementById("nome-no-html");

function colocaNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function logarNome() {
    console.log(nome);
}

colocaNomeNoHtml(nome);