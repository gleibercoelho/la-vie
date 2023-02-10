const express = require('express');
const psicologosController = require("../controllers/psicologosController");
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

routes.get("/pacientes", requestLog, psicologosController.listarPsicologos);
routes.get("/pacientes/:id", psicologosController.listarPsicologosId);
routes.post("/pacientes", psicologosController.cadastrarPsicologo);
routes.delete("/pacientes/:id", psicologosController.deletarPsicologo);
routes.put("/pacientes/:id", psicologosController.atualizarPsicologo);

routes.post("/atendimento", requestLog, bloqueio, usuarioCreatValidation, psicologosController.listarPsicologos);
routes.post("/login", AuthLoginValidation, authController.login);


module.exports = routes;