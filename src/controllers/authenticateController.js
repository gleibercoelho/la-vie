const Psicologos = require("../models/Psicologos");
const Atendimentos = require("../models/index");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcrypt");

const authController = {

    async login(req, res) {
        const { email, senha } = req.body;
        const usuario = await Psicologos.findOne({
            where: {
                email,
            }
        });
        if (!usuario  || !bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }
   /*      if (!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json("senha invalida")
        }
 */
        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome
            },
            secret.key
        );
        return res.json(token);
    },

};

module.exports = authController;
