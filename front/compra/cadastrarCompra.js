let btnCadastrar = document.getElementById('btnCadastrar');
let res = document.getElementById('res');

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();

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

    fetch('http://localhost:3000/compra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(valores => {
        console.log(valores);
        const compra = valores.compra;

        res.innerHTML = "Compra cadastrada com sucesso!<br>";
        res.innerHTML += "ID do Usuário: " + compra.id_usuario + "<br>";
        res.innerHTML += "ID do Produto: " + compra.id_produto + "<br>";
        res.innerHTML += "Quantidade: " + compra.quant + "<br>";
        res.innerHTML += "Data da Compra: " + compra.dataCompra + "<br>";
        res.innerHTML += "Preço Unitário: R$" + compra.precoUnitario + "<br>";
        res.innerHTML += "Desconto Aplicado: " + compra.descontoAplicado + "%<br>";
        res.innerHTML += "Preço Final: R$" + compra.precoFinal + "<br>";
        res.innerHTML += "Forma de Pagamento: " + compra.formaPagamento + "<br>";
        res.innerHTML += "Status da Compra: " + compra.statusCompra + "<br>";
    })
    .catch((err) => {
        console.error('Erro no cadastro da compra!', err);
        res.innerHTML = 'Erro no cadastro da compra!';
    });
});
