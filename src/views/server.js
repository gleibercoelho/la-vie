const express = require("express");
const routes = require ('../routes');

const database = require("../database/index");

const server = express();

database.hasConection();
/*  const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required().min(3),
        ano: Joi.string().required().min(4).max(4),
        duracao: Joi.string().required().required(),
        genero: Joi.string().items(Joi.number().interger().required).required(3),
    }),
}); */

server.use(express.json());

server.use(routes);


server.listen(3000, () => console.log("Ola gleiber"));  