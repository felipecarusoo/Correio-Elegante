document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".itens-lista-modelos a");

    links.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const mensagem = link.getAttribute("data-mensagem");
            document.getElementById("mensagem").value = mensagem;
        });
    });
});