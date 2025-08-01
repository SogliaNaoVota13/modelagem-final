let btnAtualizar = document.getElementById('btnAtualizar');
let res = document.getElementById('res');

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('id').value);
    let nm_produto = document.getElementById('nm_produto').value;
    let descricao = document.getElementById('descricao').value;
    let categoria = document.getElementById('categoria').value;
    let preco = Number(document.getElementById('preco').value);
    let porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value);
    let estoque = Number(document.getElementById('estoque').value);
    let marca = document.getElementById('marca').value;
    let ft_produto = document.getElementById('ft_produto').value;

    const dados = {
        nm_produto,
        descricao,
        categoria,
        preco,
        porcentagemDesconto,
        estoque,
        marca,
        ft_produto
    };

    fetch('http://localhost:3000/produto/id/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(valores => {

            const produto = valores.produto;

            if (produto) {

                res.innerHTML = `
                    <strong>Sucesso ao atualizar produto!</strong><br>
                    <hr><br>
                    <strong>Nome:</strong> ${produto.nm_produto}<br>
                    <strong>Descrição:</strong> ${produto.descricao}<br>
                    <strong>Categoria:</strong> ${produto.categoria}<br>
                    <strong>Preço:</strong> R$${produto.preco}<br>
                    <strong>Desconto:</strong> ${produto.porcentagemDesconto}%<br>
                    <strong>Estoque:</strong> ${produto.estoque}<br>
                    <strong>Marca:</strong> ${produto.marca}<br>
                `;
            } else {
                res.innerHTML = 'Erro: A resposta da API está vazia ou não contém dados do produto.';
            }
        })
        .catch((err) => {
            console.error('Erro ao atualizar dados do produto!', err);
            res.innerHTML = 'Erro ao atualizar dados do produto!';
        });
});
