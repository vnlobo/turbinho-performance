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
    if(qtde<1 || isNaN(qtde) || unit<=0 || isNaN(unit)){
        // a quant menor que 1 e não numérica
        clientes[count].querySelector(".qtde").textContent="Quantidade inválida";
        clientes[count].querySelector(".unitario").textContent="-";

        // // deixa a palavra de erro em vermelho
        // clientes[count].querySelector(".qtda").style.color="red";
        
        // // deixa todo texto da linha em vermelho
        // clientes[count].style.color="red";

        // deixa a linha inteira vermelha
        clientes[count].style.backgroundColor="red";
    }else{
        // calcula e exibe o total
        clientes[count].querySelector(".total").textContent = calcula_total(qtde, unit);

        // envia formatacao pro valor unitario
        clientes[count].querySelector(".unitario").textContent=formataValor(parseFloat(unit))
    }

    // calculo do valor total
    // clientes[count].querySelector(".total").textContent = qtde * unit;

    // calculo total usando function
    // clientes[count].querySelector(".total").textContent = calcula_total();

}


// função de calculo valor total
function calcula_total(param_qtde, param_unit){
    var total = 0;

    total = param_qtde * param_unit;

    return formataValor(total);
}

// 1 fazer validacao unitaro
// 2 fazer estizacao
//  2.1 texto vermelho linha branca
//  2.2 texto branco linha vermelha


// FUNÇÃO Q FORMTA EM REAIS
function formataValor(valor){
    var valor_formatado = valor.toLocaleString('pt-br', {style:'currency', currency:'BRL'});

    return valor_formatado;
}