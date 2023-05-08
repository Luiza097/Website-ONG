const { Model, DataTypes } = require('sequelize')

class FotoAnimal extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
               },
               foto: {
                 type: DataTypes.STRING,
                 allowNull: true,
               },
               idAnimal: {
                 type: DataTypes.INTEGER,
                 allowNull: true,
               },
               idAnimalPerdido: {
                 type: DataTypes.INTEGER,
                 allowNull: true,
               },
        },{
            sequelize,
            tableName: 'fotoanimais'
        })
    }
}

module.exports = FotoAnimal