const database = require('../database');
const { DataTypes } = require('sequelize');

const Psicologos = database.define("psicologos", {
    id_psicologos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    apresentacao: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
    {
        tablename: "Psicologos",
    }
);

module.exports = Psicologos;