const Sequelize = require('sequelize');

const database = new Sequelize('la_vie_saude_mental', 'root', 'mysql1010!', {
    host: 'localhost',
    dialect: 'mysql'
});

const conexao = database.authenticate()
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