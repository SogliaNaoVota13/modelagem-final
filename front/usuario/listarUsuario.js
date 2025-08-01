let btnListar = document.getElementById('btnListar')
let res = document.getElementById('res')

btnListar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/usuario/')
        .then(response => response.json())
        .then(dados => {
            console.log('API respondeu:', dados)

            const valores = dados.valores

            if (!Array.isArray(valores)) {
                res.innerHTML = '<p style="color:red;">Erro: dados.valores não é um array</p>'
                return
            }

            res.innerHTML = ''

            for (let i = 0; i < valores.length; i++) {
                let user = valores[i]

                res.innerHTML += "Nome: " + user.nm_usuario + "<br>"
                res.innerHTML += "Sobrenome: " + user.sobrenome + "<br>"
                res.innerHTML += "Idade: " + user.idade + "<br>"
                res.innerHTML += "Email: " + user.email + "<br>"
                res.innerHTML += "Telefone: " + user.telefone + "<br>"
                res.innerHTML += "Endereço: " + user.endereco + "<br>"
                res.innerHTML += "Cidade: " + user.cidade + "<br>"
                res.innerHTML += "Estado: " + user.estado + "<br>"
                res.innerHTML += "Data de Nascimento: " + new Date(user.dataNascimento).toLocaleDateString('pt-BR') + "<br><hr>"
            }
        })
        .catch((err) => {
            console.error('Erro ao listar o Usuário:', err)
            res.innerHTML = '<p style="color:red;">Erro ao listar o Usuário</p>'
        })
})
