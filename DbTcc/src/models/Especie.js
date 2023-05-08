const { Model, DataTypes } = require('sequelize')

class Especie extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
               },
               nomeEspecie: {
                 type: DataTypes.STRING,
                 allowNull: false,
               },
        },{
            sequelize,  
        })
    }
    static associate(models){
        Especie.hasMany(models.Animal, {foreignKey: 'idEspecie', as: 'animal'})
      }
}

module.exports = Especie