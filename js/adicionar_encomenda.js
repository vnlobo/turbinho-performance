var botaoAdicionar = document.querySelector("#adicionar");


botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    // capturar formulário
    var form = document.querySelector("#adicionar-encomenda");

    // captura a nova encomenda
    var novaEncomenda = obterEncomenda(form);

    // captura a tabela encomenda
    var tabela = document.querySelector("#tabela-cliente");

    // insere a nova encomenda na tabela
    tabela.appendChild(montaLinha(novaEncomenda));

    // limpa o formulário
    form.reset();
});

// captura os dados do formulário
function obterEncomenda(formulario) {
    var encomenda = {
        cliente: formulario.nome.value,
        qtde: formulario.qtde.value,
        produto: formulario.produto.value,
        unitario: formulario.unitario.value
    }

    return encomenda;
}

// função criar nova linha (tr)
function montaLinha(dadosNovaEncomenda) {
    var linha = document.createElement('tr');

    linha.appendChild(montaColuna(dadosNovaEncomenda.cliente));
    linha.appendChild(montaColuna(dadosNovaEncomenda.produto));
    linha.appendChild(montaColuna(dadosNovaEncomenda.qtde));
    linha.appendChild(montaColuna(formataValor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaColuna(calculaTotal(dadosNovaEncomenda.qtde, dadosNovaEncomenda.unitario)));

    return linha;
}

// função criar nova coluna (td)
function montaColuna(dadosColuna) {
    var coluna = document.createElement('td');

    coluna.textContent = dadosColuna;

    return coluna;
}