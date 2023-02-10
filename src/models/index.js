const Atendimento = require ("./Atendimento")
const Pacientes = require ("./Pacientes")
const Psicologos = require ("./Psicologos")

Pacientes.belongsTo(Atendimento, {
    foreignKey: "id_paciente",
});

Psicologos.belongsTo(Atendimento, {
    foreignKey: "id_psicologo",
});

module.exports = {
    Atendimento,
    Pacientes,
    Psicologos,
};