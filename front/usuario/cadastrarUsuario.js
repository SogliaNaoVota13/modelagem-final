let btnCadastrar = document.getElementById('btnCadastrar')
let res = document.getElementById('res')

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    let nm_usuario = document.getElementById('nm_usuario').value
    let sobrenome = document.getElementById('sobrenome').value
    let idade = Number(document.getElementById('idade').value)
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let endereco = document.getElementById('endereco').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let dataNascimento = document.getElementById('dataNascimento').value

    const dados = {
        nm_usuario,
        sobrenome,
        idade,
        email,
        telefone,
        endereco,
        cidade,
        estado,
        dataNascimento
    }

    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(valores => {
            console.log(valores)
            res.innerHTML = "Sucesso ao cadastrar usuario!<br>"
            res.innerHTML = "Nome: "+valores.nm_usuario + '<br>'
            res.innerHTML += "Sobrenome: "+valores.sobrenome + '<br>'
            res.innerHTML += "Idade: "+valores.idade + '<br>'
            res.innerHTML += "Email: "+valores.email + '<br>'
            res.innerHTML += "Telefone: "+valores.telefone + '<br>'
            res.innerHTML += "Endereço: "+valores.endereco + '<br>'
            res.innerHTML += "Cidade: "+valores.cidade + '<br>'
            res.innerHTML += "Estado: "+valores.estado + '<br>'
            res.innerHTML += "Data do Nascimento: "+valores.dataNascimento + '<br>'
        })
        .catch((err) => {
            console.error('Erro ao cadastrar Usuário!',err)
            res.innerHTML = 'Erro ao cadastrar Usuário!'
        })
})