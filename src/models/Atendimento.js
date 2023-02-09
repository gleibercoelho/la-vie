const database = require('../database');
const { DataTypes } = require('sequelize');

const Pacientes = database.define("atendimento", {
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
            model: Atendimento,
            key: 'id'
        }
    },
    id_psicologo:{
        type: DataTypes.STRING,
        references: {
            model: Atendimento,
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