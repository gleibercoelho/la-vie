const database = require('../database');
const { DataTypes } = require('sequelize');
const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');

const Atendimento = database.define("atendimento", {
    id_atendimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: DataTypes.STRING,
    },
    observacao: {
        type: DataTypes.STRING,
    },
    id_paciente:{
        type: DataTypes.INTEGER,
        references:{
            model: Pacientes,
            key: 'id'
        }
    },
    id_psicologo:{
        type: DataTypes.STRING,
        references: {
            model: Psicologos,
            key: 'id'
        }
    },   
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
    {
        tablename: "atendimentos",
    }
);

module.exports = Atendimento;