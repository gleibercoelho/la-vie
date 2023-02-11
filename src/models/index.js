const Atendimentos = require ("./Atendimentos")
const Pacientes = require ("./Pacientes")
const Psicologos = require ("./Psicologos")

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_paciente",
});

Atendimentos.belongsTo(Psicologos, {
    foreignKey: "id_psicologo",
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "id_paciente",
})

Psicologos.hasMany(Atendimentos, {
    foreignKey: "id_psicologo",
});

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
};