let btnBuscar = document.getElementById('btnNome');
let res = document.getElementById('res');

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();

    let nm_usuario = document.getElementById('nm_usuario').value.trim();

    if (!nm_usuario) {
        res.innerHTML = 'Por favor, digite um nome válido.';
        return;
    }

    fetch('http://localhost:3000/usuario/nome/' + nm_usuario)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);

            const valores = dados.usuarios; // <- aqui foi corrigido

            if (!valores || valores.length === 0) {
                res.innerHTML = 'Nenhum usuário encontrado.';
                return;
            }

            let resultado = '';
            for (let i = 0; i < valores.length; i++) {
                resultado += "Nome: " + valores[i].nm_usuario + '<br>';
                resultado += "Sobrenome: " + valores[i].sobrenome + '<br>';
                resultado += "Idade: " + valores[i].idade + '<br>';
                resultado += "Email: " + valores[i].email + '<br>';
                resultado += "Telefone: " + valores[i].telefone + '<br>';
                resultado += "Endereço: " + valores[i].endereco + '<br>';
                resultado += "Cidade: " + valores[i].cidade + '<br>';
                resultado += "Estado: " + valores[i].estado + '<br>';
                resultado += "Data de Nascimento: " + valores[i].dataNascimento + '<br><br>';
            }

            res.innerHTML = resultado;
        })
        .catch((err) => {
            console.error('Erro ao listar usuário:', err);
            res.innerHTML = 'Erro ao listar usuário.';
        });
});
