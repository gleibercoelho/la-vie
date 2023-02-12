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
        const listaAtendimentoId = await Atendimentos.findByPk(id);
        if (!listaAtendimentoId){
            res.status(404).json("Id não encontrado");
            return;
        }
        res.status(200).json(listaAtendimentoId);
    },

    //cadastrar atendimentos
    async cadastroAtendimento(req, res) {
        try{
        const { data_atendimento, observacao, id_paciente, id_psicologo } = req.body;
        const psicologoid = req.auth.id;
        const novoAtendimento = await Atendimentos.create({
            data_atendimento,
            observacao,
            id_paciente,
            id_psicologo: psicologoid,         
            
        });
        res.status(201).json(novoAtendimento);}
        catch(error){res.status(400).json("Erro na requisição. Todos os campos são obrigatórios");}
    },
   
}
    

module.exports = atendimentoController;