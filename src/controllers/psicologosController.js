const Psicologos = require("../models/Psicologos");
const bcrypt = require('bcrypt');

const psicologosController = {
    listarPsicologos: async (req, res) => {

        const listaDePsicologos = await Psicologos.findAll();
        res.status(200).json(listaDePsicologos);

    },
    //lista dos psicologos
    listarPsicologosId: async (req, res) => {
        const { id } = req.params;
        const listaDePsicologosId = await Psicologos.findByPk(id);
        res.status(200).json(listaDePsicologosId);

    },

    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentacao } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha: newSenha,
            apresentacao,
        })
        res.status(201).json(novoPsicologo);
    },

    async deletarPsicologo(req, res) {
        try{
        const { id } = req.params;
        await Psicologos.destroy({
            where: { id, },
        });

        res.status(204).json(res.status);
    } catch(error){
        return res.status(404).json("not found");
    }
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
        const newSenha = bcrypt.hashSync(senha, 10);
        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha: newSenha,
            apresentacao,
        },
            {
                where: {
                    id,
                },
            });
        res.status(200).json("Cadastro do Psicologo Atualizado");
    }
};

module.exports = psicologosController;