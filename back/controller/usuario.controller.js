const { Op } = require('sequelize');
const Usuario = require('../model/Usuario_TEMP');

// Cadastrar
const cadastrarUsuario = async (req, res) => {
    const dados = req.body;
    try {
        const valores = await Usuario.create(dados);
        res.status(200).json(valores);
    } catch (err) {
        console.error('Erro ao cadastrar usuário', err);
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
};

// Listar todos
const listarUsuario = async (req, res) => {
    try {
        const valores = await Usuario.findAll();
        res.status(200).json({ message: 'Usuários listados com sucesso', valores });
    } catch (err) {
        console.error('Erro ao listar usuários', err);
        res.status(500).json({ message: 'Erro ao listar usuários' });
    }
};

// Listar por ID
const listarPorID = async (req, res) => {
    const id = req.params.id;   
    try {
        const valores = await Usuario.findByPk(id);
        if (valores === null) {
            console.log('ID não encontrado');
            res.status(404).json({ message: 'ID não encontrado' });
        } else {
            console.log(valores);
            res.status(200).json(valores);
        }
    } catch (err) {
        console.error('Erro ao listar por ID', err);
        res.status(500).json({ message: 'Erro ao listar por ID' });
    }
};

// Listar por nome (usando nm_usuario)
const listarPorNome = async (req, res) => {
    const nome = req.params.nome;
    try {
        const usuarios = await Usuario.findAll({
            where: {
                nm_usuario: {
                    [Op.like]: `%${nome}%`
                }
            }
        });

        if (usuarios.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário encontrado com esse nome' });
        }

        res.status(200).json({ message: 'Usuários encontrados', usuarios });
    } catch (err) {
        console.error('Erro ao buscar por nome', err);
        res.status(500).json({ message: 'Erro ao buscar por nome' });
    }
};

// Atualizar
const atualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    try {
        const valores = await Usuario.findByPk(id);
        if (valores === null) {
            console.log('Não foi possível encontrar dados por esse id!');
            return res.status(404).json({ message: 'Não foi possível encontrar dados por esse id!' });
        }

        await Usuario.update(dados, { where: { id_usuario: id } });
        const valoresAtual = await Usuario.findByPk(id);
        console.log('Os dados do usuário foram atualizados com sucesso!');
        res.status(200).json(valoresAtual);
    } catch (err) {
        console.error('Erro ao atualizar os dados', err);
        res.status(500).json({ message: 'Erro ao atualizar os dados' });
    }
};

// Apagar
const apagarUsuario = async (req, res) => {
    const id = req.params.id;
    try {
        const valores = await Usuario.findByPk(id);
        if (valores === null) {
            console.log('Não foi possível encontrar dados por esse id!');
            return res.status(404).json({ message: 'Não foi possível encontrar dados por esse id!' });
        }

        await Usuario.destroy({ where: { id_usuario: id } });
        console.log('Usuário apagado com sucesso!');
        res.status(200).json({ message: 'Usuário apagado com sucesso!' });
    } catch (err) {
        console.error('Erro ao apagar os dados', err);
        res.status(500).json({ message: 'Erro ao apagar os dados' });
    }
};

module.exports = {
    cadastrarUsuario,
    listarUsuario,
    listarPorID,
    listarPorNome,
    atualizarUsuario,
    apagarUsuario
};
