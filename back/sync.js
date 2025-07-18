const db = require('./db/conn')

const { Produto, Usuario, Compra} = require('./model/rel')

async function syncDataBase() {
    try {
        await db.sync({force: true})
        console.log('Conexão bem-sucedida com o Banco de Dados!')
    } catch (err) {
        console.error('Erro ao conectar com o Banco de Dados!',err)
    } finally {
        await db.close()
        console.log('A conexão foi finalizada!')
    }
}

syncDataBase()