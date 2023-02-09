const express = require('express');
const psicologosController = require("../controllers/psicologosController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const routes = express.Router();

/* routes.get("/clientes", (req, res)  => {
    res.send("ola gleiber");
}); */

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id_psicologos", psicologosController.listarPsicologosId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id_psicologos", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id_psicologos", psicologosController.atualizarPsicologo);

routes.get("/pacientes", requestLog, psicologosController.listarPsicologos);
routes.get("/pacientes/:id_cliente", psicologosController.listarPsicologosId);
routes.post("/pacientes", psicologosController.cadastrarPsicologo);
routes.delete("/pacientes/:id_cliente", psicologosController.deletarPsicologo);
routes.put("/pacientes/:id_cliente", psicologosController.atualizarPsicologo);

routes.post("/atendimento", requestLog, bloqueio, psicologosController.listarPsicologos);



module.exports = routes;