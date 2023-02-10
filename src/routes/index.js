const express = require('express');
const psicologosController = require("../controllers/psicologosController");
const pacienteController = require("../controllers/pacienteController");
const atendimentoController = require("../controllers/atendimentoController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const routes = express.Router();

/* routes.get("/clientes", (req, res)  => {
    res.send("ola gleiber");
}); */

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);

routes.get("/pacientes", requestLog, pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.listaPacientes);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletePaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPsicologo);

routes.get("/atendimentos", requestLog, atendimentoController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentoController.listaAtendimento);
routes.post("atendimento", atendimentoController.cadastroAtendimento);
routes.delete("/pacientes/:id", atendimentoController.deleteAtendimento);
routes.put("/pacientes/:id", atendimentoController.atualizarAtendimento);

routes.post("/atendimento", requestLog, bloqueio, psicologosController.listarPsicologos);



module.exports = routes;