function preencherMensagem(link) {
    var mensagem = link.getAttribute("data-mensagem");
    document.getElementById("mensagem").value = mensagem;
}
