const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log('Conexão com o banco efetuada com SUCESSO')
})
.catch((err)=>{
    console.error('Erro ao efetuar conexão com o banco de dados',err)
    
})

module.exports = sequelize