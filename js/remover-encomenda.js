var tabela = document.querySelector("table");

// escuta o duplo click na linha que será excluída
tabela.addEventListener("dblclick", function(event){
    // adiciona efeito de linha
    event.target.parentNode.classList.add("fadeOut");

    // atrasa exclusão da linha
    setTimeout(function(){
        // exclui linha clicada
        event.target.parentNode.remove();
    }, 300);
});