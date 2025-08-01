let btnCadastrar = document.getElementById('btnCadastrar')
let res = document.getElementById('res')

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    let nm_produto = document.getElementById('nm_produto').value
    let descricao = document.getElementById('descricao').value
    let categoria = document.getElementById('categoria').value
    let preco = Number(document.getElementById('preco').value)
    let porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    let estoque = Number(document.getElementById('estoque').value)
    let marca = document.getElementById('marca').value
    let ft_produto = document.getElementById('ft_produto').value

    const dados = {
        nm_produto,
        descricao,
        categoria,
        preco,
        porcentagemDesconto,
        estoque,
        marca,
        ft_produto
    }

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
       .then(valores => {
    const produto = valores.produto;

    res.innerHTML = `
        <strong>Sucesso ao cadastrar produto!</strong><br>
        Nome: ${produto.nm_produto}<br>
        Descrição: ${produto.descricao}<br>
        Categoria: ${produto.categoria}<br>
        Preço: R$${produto.preco}<br>
        Desconto: ${produto.porcentagemDesconto}%<br>
        Estoque: ${produto.estoque}<br>
        Marca: ${produto.marca}<br>
    `;
})
        .catch((err) => {
            console.error('Erro ao cadastrar Produto!', err)
            res.innerHTML = 'Erro ao cadastrar Produto!'
        })
})
