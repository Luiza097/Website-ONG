const { Model, DataTypes } = require('sequelize')

class Formulario extends Model {
    static init(sequelize) {
        super.init({
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
           },
           qtdAnimalCasa: {
             type: DataTypes.STRING,
             allowNull: false,
           },
           tipoResidencia: {
             type: DataTypes.ENUM('casa', 'apartamento', 'chacra/sitio', 'outros'),
             allowNull: false
           },
           tipoPiso: {
             type: DataTypes.ENUM('azuleijo', 'carpete', 'ceramica', 'cimentoQueimado', 'cimentoCru', 'terra/gramado', 'outros'),
             allowNull: false
           },
           dentroOuFora: {
             type: DataTypes.ENUM('dentroEfora', 'Dentro', 'Fora'),
             allowNull: true
           },
           tempoDisponivel: {
             type: DataTypes.ENUM('diariamente', 'tarde', 'manha', 'noite'),
             allowNull: true
           },
           animalPara: {
             type: DataTypes.ENUM('companhia', 'exposicao'),
             allowNull: true
           },
           castrar: {
             type: DataTypes.STRING,
             allowNull: false
           },
           alergia: {
             type: DataTypes.STRING,
             allowNull: false
           },
           vacinaEvermifugar: {
             type: DataTypes.STRING,
             allowNull: false
           },
           nomeInteressado: {
             type: DataTypes.STRING,
             allowNull: false
           },
           email: {
             type: DataTypes.STRING,
             allowNull: false
           },
           idAnimal:{
             type: DataTypes.INTEGER,
             allowNull: false,
           },
        },{
            sequelize
        })
    }
    static associate(models){
      Formulario.belongsTo(models.Animal, {foreignKey: 'idAnimal', as: 'Animals'})
    }
}

module.exports = Formulario