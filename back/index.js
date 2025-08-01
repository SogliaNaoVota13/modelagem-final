require('dotenv').config()
const cors = require('cors')

const express = require('express')
const app = express()

const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const conn = require('./db/conn')

const usuarioController = require('./controller/usuario.controller')
const produtoController = require('./controller/produto.controller')
const compraController = require('./controller/compra.controller')
const rel = require('./model/rel') // relacionamento

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//Controller Usuario
app.post('/usuario', usuarioController.cadastrarUsuario)
app.get('/usuario', usuarioController.listarUsuario)
app.get('/usuario/nome/:nome', usuarioController.listarPorNome)
app.get('/usuario/id/:id', usuarioController.listarPorID)
app.put('/usuario/id/:id', usuarioController.atualizarUsuario)
app.delete('/usuario/id/:id', usuarioController.apagarUsuario)

//Controller Produto
app.post('/produto', produtoController.cadastrarProduto)
app.get('/produto', produtoController.listarProduto)
app.get('/produto/nome/:nome', produtoController.listarProduto)
app.get('/produto/id/:id', produtoController.listarProdutoPorID)
app.put('/produto/id/:id', produtoController.atualizarProduto)
app.delete('/produto/id/:id', produtoController.apagarProduto)

//Controller Compra
app.post('/compra', compraController.cadastrarCompra)
app.get('/compra', compraController.listarCompra)
app.get('/compra/id/:id', compraController.listarCompraPorID)
app.put('/compra/id/:id', compraController.atualizarCompra)
app.delete('/compra/id/:id', compraController.apagarCompra)

app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação inicada com sucesso!"})
})

conn.sync() // "Force" Recria as tabelas após execução
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o Banco de Dados!',err)
})