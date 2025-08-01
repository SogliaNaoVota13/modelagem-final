let btnBuscar = document.getElementById('btnID')
let res = document.getElementById('res')

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault()
    let id = Number(document.getElementById('id').value)

    fetch('http://localhost:3000/usuario/id/' + id)
        .then(response => response.json())
        .then(valores => {

            if (valores.id_usuario) {
                console.log(valores)
                res.innerHTML = "Nome: " + valores.nm_usuario + '<br>'
                res.innerHTML += "Sobrenome: " + valores.sobrenome + '<br>'
                res.innerHTML += "Idade: " + valores.idade + '<br>'
                res.innerHTML += "Email: " + valores.email + '<br>'
                res.innerHTML += "Telefone: " + valores.telefone + '<br>'
                res.innerHTML += "Endereço: " + valores.endereco + '<br>'
                res.innerHTML += "Cidade: " + valores.cidade + '<br>'
                res.innerHTML += "Estado: " + valores.estado + '<br>'
                res.innerHTML += "Data do Nascimento: " + valores.dataNascimento + '<br>'
            } else {
                console.log(valores)
                res.innerHTML = "Não foi possível encontrar o usuário"
            }
        })
        .catch((err) => {
            console.error('Erro ao listar Usuário!', err)
            res.innerHTML = 'Erro ao listar Usuário!'
        })
})
