const { Psicologos } = require("../models/index");
const bcrypt = require('bcrypt');


const psicologosController = {
    listarPsicologos: async (req, res) => {

        const listaDePsicologos = await Psicologos.findAll();
        res.status(200).json(listaDePsicologos);

    },
    //lista dos psicologos
    listarPsicologosId: async (req, res) => {
        try {
            const { id } = req.params;

            const listaDePsicologosId = await Psicologos.findByPk(id)
            const { nome, email, apresentacao, createdAt, updatedAt } = listaDePsicologosId;
            res.status(200);
            res.json({ nome, email, apresentacao, createdAt, updatedAt });
        }
        catch (error) {
            res.status(404).json("Id não encontrado");
            /* console.log(listaDePsicologosId); */
        }
    },

    async cadastrarPsicologo(req, res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const newSenha = bcrypt.hashSync(senha, 10);
            const novoPsicologo = await Psicologos.create({
                nome,
                email,
                senha: newSenha,
                apresentacao,
            })

            res.status(201).json(novoPsicologo);
        }
        catch (error) {
            res.status(400).json("Erro na requisição. Todos os campos são obrigatórios");
        }


    },

    async deletarPsicologo(req, res) {
        
            const { id } = req.params;
            const Procurar = await Psicologos.findByPk(id);
            if (!Procurar){
                res.status(404).json("Id não encontrado");
                return;
            }
            await Psicologos.destroy({
                where: { id, },
            });
            res.status(204).json(res.status);
        
    },

    async atualizarPsicologo(req, res) {
        try {
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
        catch (error) {
            res.status(400).json("Erro na requisição. Todos os campos são obrigatórios");

        }
    }
};

module.exports = psicologosController;