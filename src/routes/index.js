const express = require('express');
const psicologosController = require("../controllers/psicologosController");
const authController = require("../controllers/authenticateController")
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreatValidation = require("../validations/usuarios");
const AuthLoginValidation = require("../validations/login");
const auth = require('../middlewares/authenticate')  
const routes = express.Router();

/* routes.get("/clientes", (req, res)  => {
    res.send("ola gleiber");
}); */

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", auth, psicologosController.listarPsicologosId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
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