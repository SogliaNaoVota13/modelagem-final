const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nm_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    porcentagemDesconto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ft_produto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    }
},{
    timestamps: false,
     tableName: 'produtos'
})

module.exports = Produto