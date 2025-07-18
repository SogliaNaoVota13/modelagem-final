const Usuario = require('./Usuario_TEMP')
const Compra = require('./Compra')
const Produto = require('./Produto')

Usuario.hasMany(Compra, {
    foreignKey: 'id_usuario'
})
Compra.belongsTo(Usuario, {
    foreignKey: 'id_usuario'
})

Produto.hasMany(Compra, {
    foreignKey: 'id_produto'
})
Compra.belongsTo(Produto, {
    foreignKey: 'id_produto'
})

module.exports = {Usuario,Compra,Produto}