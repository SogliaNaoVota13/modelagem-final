let btnAtualizar = document.getElementById('btnAtualizar');
let res = document.getElementById('res');

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('id').value);
    let id_usuario = Number(document.getElementById('id_usuario').value);
    let id_produto = Number(document.getElementById('id_produto').value);
    let quant = Number(document.getElementById('quant').value);
    let dataCompra = document.getElementById('dataCompra').value;
    let precoUnitario = Number(document.getElementById('precoUnitario').value);
    let descontoAplicado = Number(document.getElementById('descontoAplicado').value);
    let precoFinal = Number(document.getElementById('precoFinal').value);
    let formaPagamento = document.getElementById('formaPagamento').value;
    let statusCompra = document.getElementById('statusCompra').value;

    const dados = {
        id,
        id_usuario,
        id_produto,
        quant,
        dataCompra,
        precoUnitario,
        descontoAplicado,
        precoFinal,
        formaPagamento,
        statusCompra
    };

    fetch('http://localhost:3000/compra/id/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
      .then(response => {
    if (response && response.compra) {
        const compra = response.compra;
        res.innerHTML = `
            <strong>Compra atualizada com sucesso!</strong><br><hr><br>
            <strong>ID da Compra:</strong> ${compra.id_compra}<br>
            <strong>ID do Usuário:</strong> ${compra.id_usuario}<br>
            <strong>ID do Produto:</strong> ${compra.id_produto}<br>
            <strong>Quantidade:</strong> ${compra.quant}<br>
            <strong>Data da Compra:</strong> ${new Date(compra.dataCompra).toLocaleDateString('pt-BR')}<br>
            <strong>Preço Unitário:</strong> R$${compra.precoUnitario}<br>
            <strong>Desconto Aplicado:</strong> ${compra.descontoAplicado}%<br>
            <strong>Preço Final:</strong> R$${compra.precoFinal}<br>
            <strong>Forma de Pagamento:</strong> ${compra.formaPagamento}<br>
            <strong>Status da Compra:</strong> ${compra.statusCompra}<br>
        `;
    } else {
        res.innerHTML = 'Erro: A resposta da API está vazia ou não contém dados da compra.';
    }
})

        .catch((err) => {
            console.error('Erro ao atualizar dados da compra!', err);
            res.innerHTML = 'Erro ao atualizar dados da compra!';
        });
});
