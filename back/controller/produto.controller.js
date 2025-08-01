const Produto = require('../model/Produto');
const { Op } = require('sequelize');

const listarProduto = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json({ message: 'Produtos listados com sucesso', produtos });
  } catch (err) {
    console.error('Erro ao listar produtos:', err);
    res.status(500).json({ message: 'Erro ao listar produtos' });
  }
};

const listarProdutoPorID = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    else{
      res.status(200).json({ message: 'Produto encontrado', produto });
    }

    
  } catch (err) {
    console.error('Erro ao buscar produto por ID:', err);
    res.status(500).json({ message: 'Erro ao buscar produto por ID' });
  }
};

const listarProdutoPorNome = async (req, res) => {
  try {
    const { nome } = req.params;
    const produtos = await Produto.findAll({
      where: {
        nome: { [Op.like]: `%${nome}%` }
      }
    });

    if (produtos.length === 0) {
      return res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' });
    }

    res.status(200).json({ message: 'Produtos encontrados', produtos });
  } catch (err) {
    console.error('Erro ao buscar por nome:', err);
    res.status(500).json({ message: 'Erro ao buscar por nome' });
  }
};

const cadastrarProduto = async (req, res) => {
  try {
    const dados = req.body;
    const novoProduto = await Produto.create(dados);
    res.status(201).json(novoProduto);
  } catch (err) {
    console.error('Erro ao cadastrar produto:', err);
    res.status(500).json({ message: 'Erro ao cadastrar produto' });
  }
};

const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Produto.update(dados, { where: { id_produto: id } });
    const atualizado = await Produto.findByPk(id);
    res.status(200).json({ message: 'Produto atualizado com sucesso', produto: atualizado });
  } catch (err) {
    console.error('Erro ao atualizar produto:', err);
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
};

const apagarProduto = async (req, res) => {
  try {
    const { id } = req.params;

    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    await Produto.destroy({ where: { id_produto: id } });
    res.status(200).json({ message: 'Produto apagado com sucesso' });
  } catch (err) {
    console.error('Erro ao apagar produto:', err);
    res.status(500).json({ message: 'Erro ao apagar produto' });
  }
};

module.exports = {
  listarProduto,
  listarProdutoPorID,
  listarProdutoPorNome,
  cadastrarProduto,
  atualizarProduto,
  apagarProduto
};
