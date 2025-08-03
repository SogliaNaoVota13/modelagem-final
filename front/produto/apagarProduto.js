let btnApagar = document.getElementById('btnApagar')
let res = document.getElementById('res')

btnApagar.addEventListener('click', (e) => {
    e.preventDefault()
    let id = Number(document.getElementById('id').value)

    fetch('http://localhost:3000/produto/id/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(valores => {
            console.log(valores)
            res.innerHTML = valores.message
        })
        .catch((err) => {
            console.error('Erro ao deletar dados do Produto!',err)
            res.innerHTML = 'Erro ao deletar dados do Produto!'
        })
})