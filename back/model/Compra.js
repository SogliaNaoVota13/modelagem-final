const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('compra', {
    id_compra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    descontoAplicado: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    precoFinal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    formaPagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    statusCompra: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'compras'
})

module.exports = Compra
