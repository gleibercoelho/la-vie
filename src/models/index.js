const Atendimento = require ("./Atendimento")
const Pacientes = require ("./Pacientes")
const Psicologos = require ("./Psicologos")

Pacientes.belongsTo(Atendimento, {
    foreignKey: "id_paciente",
});

Psicologos.belongsTo(Atendimento, {
    foreignKey: "id_psicologo",
});

// descomentar e verificar qual deles vai dar bom

// Pacientes.hasMany(Atendimento);
// Psicologos.hasMany(Atendimento);

// Atendimento.belongsTo(Pacientes);
// Atendimento.belongsTo(Psicologos);

module.exports = {
    Atendimento,
    Pacientes,
    Psicologos,
};