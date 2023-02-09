const pacientes = require("../models/Pacientes");
const bcrypt = require('bcrypt');
const Pacientes = require("../models/Pacientes");

const pacientesController = {
    listarPacientes: async (req, res) => {
        const listaPacientes = await pacientes.findAll();
        res.status(200).json(listaPacientes);
    },

    //Paciente
    listaPacientes: async (req, res) => {
        const { id_paciente } = req.params;
        const listaPacientes = await pacientes.findByPk (id_paciente);
        res.status(200).json(listaPacientes);
    },
    //cadastro
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
    //deletar
    async deletePaciente(req, res) {
        try{
            const { id_paciente } = req.params;
            await Pacientes.destrooy({
                where: { id_paciente, },
            });

            res.status(204).json(res.status);
        } catch(error){
            return res.status(404).json("Paciente não encontrado");
        }
    },
}