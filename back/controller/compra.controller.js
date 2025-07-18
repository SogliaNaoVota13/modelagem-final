const Compra = require('../model/Compra');

const listarCompra = async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.status(200).json({ message: 'Compras listadas com sucesso', compras });
  } catch (err) {
    console.error('Erro ao listar compras:', err);
    res.status(500).json({ message: 'Erro ao listar compras' });
  }
};

const listarCompraPorID = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await Compra.findByPk(id);

    if (!compra) {
      return res.status(404).json({ message: 'Compra não encontrada' });
    }

    res.status(200).json({ message: 'Compra encontrada', compra });
  } catch (err) {
    console.error('Erro ao buscar compra por ID:', err);
    res.status(500).json({ message: 'Erro ao buscar compra por ID' });
  }
};

const cadastrarCompra = async (req, res) => {
  try {
    const dados = req.body;
    const novaCompra = await Compra.create(dados);
    res.status(201).json({ message: 'Compra cadastrada com sucesso', compra: novaCompra });
  } catch (err) {
    console.error('Erro ao cadastrar compra:', err);
    res.status(500).json({ message: 'Erro ao cadastrar compra' });
  }
};

const atualizarCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const compra = await Compra.findByPk(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra não encontrada' });
    }

    await Compra.update(dados, { where: { id_compra: id } });
    const atualizada = await Compra.findByPk(id);
    res.status(200).json({ message: 'Compra atualizada com sucesso', compra: atualizada });
  } catch (err) {
    console.error('Erro ao atualizar compra:', err);
    res.status(500).json({ message: 'Erro ao atualizar compra' });
  }
};

const apagarCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await Compra.findByPk(id);

    if (!compra) {
      return res.status(404).json({ message: 'Compra não encontrada' });
    }

    await Compra.destroy({ where: { id_compra: id } });
    res.status(200).json({ message: 'Compra apagada com sucesso' });
  } catch (err) {
    console.error('Erro ao apagar compra:', err);
    res.status(500).json({ message: 'Erro ao apagar compra' });
  }
};

module.exports = {
  listarCompra,
  listarCompraPorID,
  cadastrarCompra,
  atualizarCompra,
  apagarCompra
};
