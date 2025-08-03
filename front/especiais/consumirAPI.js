let api = document.getElementById('api')
let res = document.getElementById('res')

api.addEventListener('click', () => {
    consumirProdutos()
    consumirUsuarios()
    res.innerHTML = 'Dados Consumidos'
})

function consumirProdutos() {
    res.innerHTML = 'inserindo produtos'
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(valores => {
            console.log(valores)
            for (let i = 0; i < valores.products.length; i++) {
                const dados = {
                    nm_produto: valores.products[i].title,
                    descricao: valores.products[i].description,
                    categoria: valores.products[i].category,
                    preco: valores.products[i].price,
                    porcentagemDesconto: valores.products[i].discountPercentage,
                    estoque: valores.products[i].stock,
                    marca: valores.products[i].brand || 'marca',
                    ft_produto: valores.products[i].thumbnail
                }

                fetch('http://localhost:3000/produto', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                })
                    .then(response => response.json())
                    .then(valores2 => {
                        console.log(`${valores2.nm_produto}, produto cadastrado`);
                    })
                    .catch((err) => {
                        console.error('Erro ao cadastrar o produto: ', err);
                    })
            }
        })
        .catch((err) => {
            console.error('Erro ao buscar a API: ', err)
        })
}

function consumirUsuarios() {
    res.innerHTML = 'Cadastrando Usuarios'
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(valores => {            
            for (let i = 0; i < valores.users.length; i++) {
                const dados = {
                    nm_usuario: valores.users[i].firstName,
                    sobrenome: valores.users[i].lastName,
                    idade: valores.users[i].age,
                    email: valores.users[i].email,
                    telefone: valores.users[i].phone,
                    endereco: valores.users[i].address.address,
                    cidade: valores.users[i].address.city,
                    estado: valores.users[i].address.state,
                    dataNascimento: valores.users[i].birthDate
                }

                fetch('http://localhost:3000/usuario', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                })
                    .then(response => response.json())
                    .then(valores2 => {
                        console.log(`${valores2.nm_usuario}, usuario cadastrado`);
                    })
                    .catch((err) => {
                        console.error('Erro ao cadastrar o usuario: ', err);
                    })
            }
        })
        .catch((err) => {
            console.error('Erro ao buscar a API: ', err)
        })
}