function preencherMensagem(sugestao) {
    var mensagemCampo = document.getElementById("message");
    var sugestaoTexto = sugestao.getAttribute("data-mensagem");
    
    if (mensagemCampo && sugestaoTexto) {
        mensagemCampo.value = sugestaoTexto;
    }
}