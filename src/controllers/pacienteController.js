const {Pacientes} = require("../models/index");


const pacientesController = {
    listarPacientes: async (req, res) => {
        const listaPacientes = await Pacientes.findAll();
        res.status(200).json(listaPacientes);
    },

    //Listar Paciente
    listarPacientesId: async (req, res) => {
        const { id } = req.params;
        const listaPacientes = await Pacientes.findByPk(id);
        if (!listaPacientes){
            res.status(404).json("Id não encontrado");
            return;
        }
        res.status(200).json(listaPacientes);
    },
    //cadastro de paciente
    async cadastrarPaciente(req, res) {
        try{
        const { nome, email, idade } = req.body;
        const pacienteNovo = await Pacientes.create({
            nome,
            email,
            idade,
            
        });
        res.status(201).json(pacienteNovo);}
        catch(error){ 
            res.status(400).json("Erro na requisição. Todos os campos são obrigatórios");
        }
    },
    //deletar paciente
    async deletePaciente(req, res) {
        try{
            const { id } = req.params;
            const Procurardel = await Pacientes.findByPk(id);
            if (!Procurardel){
                res.status(404).json("Id não encontrado");
                return;
            }
            await Pacientes.destroy({
                where: { id },
            });

            res.status(204).json(res.status);
        } catch(error){
            return res.status(404).json("Cadastro apagado com sucesso");
        }
    },
    //atualizar paciente
    async atualizarPaciente(req, res) {
        try{
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
        catch(error){
            res.status(400).json("Erro na requisição. Todos os campos são obrigatórios");
        }
    }
};

module.exports = pacientesController;