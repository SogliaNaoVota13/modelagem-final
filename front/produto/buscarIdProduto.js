let btnBuscar = document.getElementById('btnID')
let res = document.getElementById('res')

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault()
    let id = Number(document.getElementById('id').value)

    fetch('http://localhost:3000/produto/id/' + id)
        .then(response => response.json())
        .then(valores => {
            console.log(valores)

            const produto = valores.produto // <- acessando o objeto correto

            if (produto && produto.id_produto) {
                res.innerHTML = "Nome: " + produto.nm_produto + '<br>'
                res.innerHTML += "Descrição: " + produto.descricao + '<br>'
                res.innerHTML += "Categoria: " + produto.categoria + '<br>'
                res.innerHTML += "Preço: " + produto.preco + '<br>'
                res.innerHTML += "Desconto: " + produto.porcentagemDesconto + '<br>'
                res.innerHTML += "Estoque: " + produto.estoque + '<br>'
                res.innerHTML += "Marca: " + produto.marca + '<br>'
            } else {
                res.innerHTML = "Não foi possível encontrar o Produto"
            }
        })
        .catch((err) => {
            console.error('Erro ao listar Produto!', err)
            res.innerHTML = 'Erro ao listar Produto!'
        })
})
