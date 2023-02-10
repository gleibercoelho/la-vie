// const pacientes = require("../models/Pacientes");
const {Pacientes} = require("../models");
const bcrypt = require('bcrypt');

const pacientesController = {
    listarPacientes: async (req, res) => {
        const listaPacientes = await Pacientes.findAll();
        res.status(200).json(listaPacientes);
    },

    //Listar Paciente
    listaPacientes: async (req, res) => {
        const { id_paciente } = req.params;
        const listaPacientes = await Pacientes.findByPk (id_paciente);
        res.status(200).json(listaPacientes);
    },
    //cadastro de paciente
    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body;
        const pacienteNovo = await Pacientes.create({
            nome,
            email,
            idade,
            id
        });
        res.status(201).json(pacienteNovo);
    },
    //deletar paciente
    async deletePaciente(req, res) {
        try{
            const { id_paciente } = req.params;
            await Pacientes.destroy({
                where: { id_paciente, },
            });

            res.status(204).json(res.status);
        } catch(error){
            return res.status(404).json("Cadastro apagado com sucesso");
        }
    },
    //atualizar paciente
    async atualizarPaciente(req, res) {
        const {id} = req.params;
        const {nome, email, idade,} = req.body;
        const pacienteNovo = await Pacientes.update({
            nome,
            email,
            idade
        },
            {
                where: {
                    id,
                },
            });
        res.status(200).json("Paciente atualizado");
        
    }
};

module.exports = pacientesController;