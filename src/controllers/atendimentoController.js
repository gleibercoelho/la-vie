const {Atendimentos} = require ("../models/index");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");


const atendimentoController = {
    listarAtendimento: async (req, res) => {
        const listarAtendimento = await Atendimentos.findAll();
        res.status(200).json(listarAtendimento);
    }, 

    //listar atendimentos
    listaAtendimentoId: async (req, res) => {
        const {id} = req.params;
        const listaAtendimento = await Atendimentos.findByPk(id);
        res.status(200).json(listaAtendimento);
    },

    //cadastrar atendimentos
    async cadastroAtendimento(req, res) {
        const { data_atendimento, observacao, id_paciente, id_psicologo } = req.body;
        const psicologoid = req.auth.id;
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            observacao,
            id_paciente,
            id_psicologo: psicologoid,         
            
        });
        res.status(201).json(novoAtendimento);
    },

    //atualizar atendimento
    async atualizarAtendimento(req, res) {
        const {id} = req.params;
        const {data_atendimento, observacao} = req.body;
        const novoAtendimento = Atendimento.update({
            data_atendimento,
            observacao
        },
            {
                where:{
                    id,
                },
            });
        res.status(200).json("Atendimento atualizado");
        
    },

    //deletar atendimento

    async deleteAtendimento (req, res) {
        try{
            const {id_atendimento} = req.params;
            await Atendimento.destroy({
                where: { id_atendimento,},
            });

            res.status(204).json(res.status);
        } catch(error){
            return res.status(404).json("Atendimento apagado com sucesso!");
        }
    }
};

module.exports = atendimentoController;