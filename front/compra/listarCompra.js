let btnListar = document.getElementById('btnListar');
let res = document.getElementById('res');

btnListar.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/compra/')
        .then(response => response.json())
        .then(dados => {
            console.log('API respondeu:', dados);

            const compras = dados.compras; // ← alterado aqui

            if (!Array.isArray(compras)) {
                res.innerHTML = '<p style="color:red;">Erro: dados.compras não é um array</p>';
                return;
            }

            res.innerHTML = '';

            for (let i = 0; i < compras.length; i++) {
                let compra = compras[i];

                res.innerHTML += "ID da Compra: " + compra.id_compra + "<br>";
                res.innerHTML += "ID do Usuário: " + compra.id_usuario + "<br>";
                res.innerHTML += "ID do Produto: " + compra.id_produto + "<br>";
                res.innerHTML += "Quantidade: " + compra.quant + "<br>";
                res.innerHTML += "Data da Compra: " + new Date(compra.dataCompra).toLocaleDateString('pt-BR') + "<br>";
                res.innerHTML += "Preço Unitário: R$" + compra.precoUnitario + "<br>";
                res.innerHTML += "Desconto Aplicado: " + compra.descontoAplicado + "%<br>";
                res.innerHTML += "Preço Final: R$" + compra.precoFinal + "<br>";
                res.innerHTML += "Forma de Pagamento: " + compra.formaPagamento + "<br>";
                res.innerHTML += "Status da Compra: " + compra.statusCompra + "<br><hr>";
            }
        })
        .catch((err) => {
            console.error('Erro ao listar compras:', err);
            res.innerHTML = '<p style="color:red;">Erro ao listar compras</p>';
        });
});
