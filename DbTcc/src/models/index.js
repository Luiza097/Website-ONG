const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('./User')
const Especie = require('./Especie')
const Animal = require('./Animal')
const AnimalPerdido = require('./AnimalPerdido')
const FotoAnimal = require('./FotoAnimal')
const Formulario = require('./Formulario')

const connection = new Sequelize(dbConfig)

User.init(connection)
Especie.init(connection)
Animal.init(connection)
AnimalPerdido.init(connection)
Formulario.init(connection)
FotoAnimal.init(connection)

User.associate(connection.models)
Animal.associate(connection.models)
Especie.associate(connection.models)
Formulario.associate(connection.models)

try {
    Especie.create({
        id: 1,
        nomeEspecie: 'cachorro'
    })
    Especie.create({
        id: 2,
        nomeEspecie: 'gato'
    })
} catch (error) {
    console.log(error)
}

module.exports = connection
