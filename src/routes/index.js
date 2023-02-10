const express = require('express');
const psicologosController = require("../controllers/psicologosController");
const pacienteController = require("../controllers/pacienteController");
const atendimentoController = require("../controllers/atendimentoController");
const authController = require("../controllers/authenticateController")
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreatValidation = require("../validations/usuarios");
const AuthLoginValidation = require("../validations/login");
const auth = require('../middlewares/auth')  
const routes = express.Router();



routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);
routes.post("/psicologos", auth, psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);

routes.get("/pacientes", requestLog, pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.listaPacientes);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletePaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);

routes.get("/atendimentos", requestLog, atendimentoController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentoController.listaAtendimento);
routes.post("atendimento", atendimentoController.cadastroAtendimento);
routes.delete("/atendimento/:id", atendimentoController.deleteAtendimento);
routes.put("/atendimento/:id", atendimentoController.atualizarAtendimento);

routes.post("/atendimento", requestLog, bloqueio, usuarioCreatValidation, psicologosController.listarPsicologos);
routes.post("/login", AuthLoginValidation, authController.login);


module.exports = routes;