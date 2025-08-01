let btnAtualizar = document.getElementById('btnAtualizar')
let res = document.getElementById('res')

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let id = Number(document.getElementById('id').value)
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

    fetch('http://localhost:3000/usuario/id/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => response.json())
        .then(valores => {

            const usuario = valores;

            if (usuario) {
                res.innerHTML = `
                    <strong>Sucesso ao atualizar usuário!</strong><br>
                    <hr><br>
                    <strong>Nome:</strong> ${usuario.nm_usuario}<br>
                    <strong>Sobrenome:</strong> ${usuario.sobrenome}<br>
                    <strong>Idade:</strong> ${usuario.idade}<br>
                    <strong>Email:</strong> ${usuario.email}<br>
                    <strong>Telefone:</strong> ${usuario.telefone}<br>
                    <strong>Endereço:</strong> ${usuario.endereco}<br>
                    <strong>Cidade:</strong> ${usuario.cidade}<br>
                    <strong>Estado:</strong> ${usuario.estado}<br>
                    <strong>Data de Nascimento:</strong> ${usuario.dataNascimento}<br>
                `;
            } else {
                res.innerHTML = 'Erro: A resposta da API está vazia ou não contém dados do usuário.';
            }
        })
        .catch((err) => {
            console.error('Erro ao atualizar dados do usuário!',err)
            res.innerHTML = 'Erro ao atualizar dados do usuário!'
        })
})
