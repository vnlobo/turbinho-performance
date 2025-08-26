// document.querySelector(".total").textContent = document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

// Captura as encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Estrutura de repetição --> passa por tdas as encomendas e calcula o valor total
for(var count=0; count<clientes.length; count++){
    // clientes[count].querySelector(".total").textContent = clientes[count].querySelector(".qtde").textContent * clientes[count].querySelector(".unitario").textContent;

    // recebe a quantidade da encomenda
    var qtde = clientes[count].querySelector(".qtde").textContent;

    // recebe o valor unitário da encomenda
    var unit = clientes[count].querySelector(".unitario").textContent;

    // verifica se a quantidade é válida
    if(qtde<1 || isNaN(qtde)){
        clientes[count].querySelector(".qtde").textContent="Quantidade inválida";
        clientes[count].querySelector(".unitario").textContent="--";
        clientes[count].classList.add("qtde-invalida");
        
        // ---------------------------------------------------------
        // aplica cor na célula que possui a msg de erro
        // clientes[count].querySelector(".qtda").style.color="red";
        // ---------------------------------------------------------
        // aplica cor em todo texto da linha
        // clientes[count].style.color="white";
        // ---------------------------------------------------------
        // aplixa cor em toda linha
        // clientes[count].style.backgroundColor="red";
        // ---------------------------------------------------------
    }else{
        // calcula usando um função e exibe o total
        clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unit);

        // envia formatação pro valor unitário
        clientes[count].querySelector(".unitario").textContent=formataValor(parseFloat(unit));
    }
    
    // ------------------------------------------------------------------------
    // calculo do valor total
    // clientes[count].querySelector(".total").textContent = qtde * unit;
    // ------------------------------------------------------------------------

    if(unit<1 || isNaN(unit)){
        clientes[count].querySelector(".unitario").textContent="Valor inválido";
        clientes[count].querySelector(".qtde").textContent="--";
        clientes[count].classList.add("valor-invalido");
    }else{
        clientes[count].querySelector(".total").textContent = calculaTotal(qtde, unit);
    }
}

// -----------------------------------------------------------------------------------------

// Função de calculo valor total
function calculaTotal(param_qtde, param_unit){
    var total = 0;

    total = param_qtde * param_unit;

    return formataValor(total);
}

// Função para formatar valores em R$
function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'});

    return valor_formatado;
}