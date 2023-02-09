var Sequelize = require('sequelize');

var database = new Sequelize('lavie-saude-mental', 'root', 'mysql1010!', {
    host: 'localhost',
    dialect: 'mysql'
});

/* var Artigos = connection.define('artigos', {
    titulo: Sequelize.STRING,
    assunto: Sequelize.TEXT
});

connection.sync().then(function () {
    Artigos.create({
        titulo: 'Usando Sequelize',
        assunto: 'Neste artigo vamos abordar como usar os recurso do Sequelize'
    })
});

connection.sync().then(function () {
    Artigos.findAll().then(function (artigos) {
        console.log(artigos.dataValues)
    });
}); */
var conexao = database.authenticate()
    .then(function () {
        console.log('conexao com o Mysql foi estabelecida com sucesso');
    })
    .catch(function (err) {
        console.log('nao foi possivel se conecta com o banco de dados MySql');
    });

async function hasConection() {
    try {
        await database.authenticate();
        console.log("banco de dados conectado.")
    } catch (error) {
        console.error("erro ao tentar conectar ao banco de dados");
    }
}
Object.assign(database, {
    hasConection,
});

module.exports = database;