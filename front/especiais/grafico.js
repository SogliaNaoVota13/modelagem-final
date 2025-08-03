let grafico = document.getElementById('grafico')

grafico.addEventListener('click', (e) => {
    e.preventDefault()
    let inicio = Number(document.getElementById('inicio').value)
    let final = Number(document.getElementById('final').value)

    let nm_produto = []
    let estoque = []
    let nm_usuario = []
    let idade = []

    if ((inicio > final) || (final - inicio >= 10)) {
        alert('os números não podem ser iguais, negativos ou com uma distancia maior que 10')
    } else {
        fetch('http://localhost:3000/produto')
            .then(response => response.json())
            .then(valores => {
                for (let i = 0; i < valores.length; i++) {
                    if ((valores[i].id_produto >= inicio) && (valores[i].id_produto <= final)) {
                        nm_produto.push(valores[i].nm_produto)
                        estoque.push(valores[i].estoque)
                    }
                }

                let chartExistente = Chart.getChart('graficoProdutos')
                if (chartExistente) {
                    chartExistente.destroy()
                }

                let ctx = document.getElementById('graficoProdutos').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nm_produto,
                        datasets: [{
                            label: 'Estoque',
                            data: estoque,
                            backgroundColor: 'rgba(54, 235, 226, 0.7)',
                            borderColor: 'rgba(54, 229, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                })
            })
            .catch((err) => {
                console.error('erro ao listar', err);
            })

        fetch('http://localhost:3000/usuario')
            .then(response => response.json())
            .then(valores => {
                for (let i = 0; i < valores.length; i++) {
                    if ((valores[i].id_usuario >= inicio) && (valores[i].id_usuario <= final)) {
                        nm_usuario.push(valores[i].nm_usuario)
                        idade.push(valores[i].idade)
                    }
                }

                let chartExistente = Chart.getChart('graficoUsuarios')
                if (chartExistente) {
                    chartExistente.destroy()
                }

                let ctx = document.getElementById('graficoUsuarios').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nm_usuario,
                        datasets: [{
                            label: 'Estoque',
                            data: idade,
                            backgroundColor: 'rgba(54, 235, 136, 0.7)',
                            borderColor: 'rgba(54, 235, 123, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                })
            })
            .catch((err) => {
                console.error('erro ao listar', err);
            })
    }
})