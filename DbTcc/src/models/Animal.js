const { Model, DataTypes } = require('sequelize')

class Animal extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
               },
               nome: {
                 type: DataTypes.STRING,
                 allowNull: false,
               },
               pelagem: {
                 type: DataTypes.STRING,
                 allowNull: false
               },
               sexo: {
                 type: DataTypes.ENUM('M', 'F'),
                 allowNull: false
               },
               porte: {
                 type: DataTypes.ENUM('P', 'M', 'G'),
                 allowNull: true
               },
               nascimento: {
                 type: DataTypes.DATE,
                 allowNull: true
               },
               descricao: {
                 type: DataTypes.TEXT,
                 allowNull: true
               },
               interessados: {
                 type: DataTypes.INTEGER,
                 allowNull: true
               }
        },{
            sequelize,
            tableName: 'animais'
        })
    }
    static associate(models){
      Animal.belongsTo(models.User, {foreignKey: 'idUsuario', as: 'user'})
      Animal.belongsTo(models.Especie, {foreignKey: 'idEspecie', as: 'especie'})
      Animal.hasMany(models.Formulario, {foreignKey: 'idAnimal', as: 'Animals'})
    }
}

module.exports = Animal 