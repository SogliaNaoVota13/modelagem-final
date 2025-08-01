let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/produto/')
        .then(response => response.json())
.then(dados => {
    const valores = dados.produtos; // pega o array certo

    for (let i = 0; i < valores.length; i++) {
        let produto = valores[i];

        res.innerHTML += `
            <strong>Nome:</strong> ${produto.nm_produto}<br>
            <strong>Descrição:</strong> ${produto.descricao}<br>
            <strong>Categoria:</strong> ${produto.categoria}<br>
            <strong>Preço:</strong> R$${produto.preco}<br>
            <strong>Desconto:</strong> ${produto.porcentagemDesconto}%<br>
            <strong>Estoque:</strong> ${produto.estoque}<br>
            <strong>Marca:</strong> ${produto.marca}<br>
            <img src="${produto.ft_produto}" alt="Imagem do produto" width="150"><br>
            <hr>
        `;
    }
})
        .catch((err) => {
            console.error('Erro ao listar o produto:', err)
            res.innerHTML = '<p style="color:red;">Erro ao listar o produto</p>'
        })
})
