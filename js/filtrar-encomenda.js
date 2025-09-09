var campoFiltro = document.querySelector("#buscar");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    // verifica se tem informação para buscar
    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            var nome = cliente.querySelector(".nome").textContent;
            
            // busca com expressao regular
            // var expressao = new RegExp(this.value, "i");
            // verifica se o nome digitado é igual ao contador 
            // if (!expressao.test(nome))
            
            // busca com substring
            var comparavel = nome.substring(0,this.value.length);
            var comparavelMinusculo = comparavel.toLowerCase();
            var filtroBuscarMinusculo = this.value.toLowerCase();

            // verifica se o nome digitado é igual ao contador 
            if (filtroBuscarMinusculo != comparavelMinusculo) {
                // deixa invisivel
                cliente.classList.add("invisivel");
            } else {
                // deixa visivel
                cliente.classList.remove("invisivel");
            }
        }
    }else{
        // não tem filtro de busca, exibe lista novamente
        for(var cli = 0; cli < clientes.length; cli++){
            clientes[cli].classList.remove("invisivel");
        }
    }
});