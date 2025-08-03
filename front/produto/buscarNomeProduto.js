let btnBuscar = document.getElementById('btnNome');
let res = document.getElementById('res');

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();

    let nm_produto = document.getElementById('nm_produto').value.trim();

    if (!nm_produto) {
        res.innerHTML = 'Por favor, digite um nome de produto válido.';
        return;
    }

    fetch('http://localhost:3000/produto/nome/' + nm_produto)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);

            const valores = dados.produtos; 
            if (!valores || valores.length === 0) {
                res.innerHTML = 'Nenhum produto encontrado.';
                return;
            }

            let resultado = '';
            for (let i = 0; i < valores.length; i++) {
                resultado += "Nome: " + valores[i].nm_produto + '<br>';
                resultado += "Descrição: " + valores[i].descricao + '<br>';
                resultado += "Categoria: " + valores[i].categoria + '<br>';
                resultado += "Preço: R$ " + valores[i].preco + '<br>';
                resultado += "Desconto: " + valores[i].porcentagemDesconto + '%<br>';
                resultado += "Estoque: " + valores[i].estoque + '<br>';
                resultado += "Marca: " + valores[i].marca + '<br><br>';
            }

            res.innerHTML = resultado;
        })
        .catch((err) => {
            console.error('Erro ao listar produto:', err);
            res.innerHTML = 'Erro ao listar produto.';
        });
});
