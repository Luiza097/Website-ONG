const { Model, DataTypes } = require('sequelize')

class AnimalPerdido extends Model {
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
               raca: {
                type: DataTypes.STRING,
                allowNull: false
                },
                sexo: {
                  type: DataTypes.STRING,
                  allowNull: false
                },
                porte: {
                  type: DataTypes.STRING,
                  allowNull: false
                },
                idade: {
                  type: DataTypes.STRING,
                  allowNull: false
                },
               bairro: {
                 type: DataTypes.STRING,
                 allowNull: false
               },
               rua: {
                 type: DataTypes.STRING,
                 allowNull: false
               },
               aindaPerdido: {
                 type: DataTypes.BOOLEAN,
                 allowNull: true
               },
               descricao: {
                 type: DataTypes.TEXT,
                 allowNull: true
               },
               telefone: {
                 type: DataTypes.STRING,
                 allowNull: false
               },
               email: {
                 type: DataTypes.STRING,
                 allowNull: false,
               },
               exibirAte: {
                 type: DataTypes.DATE,
                 allowNull: false,
               },
               nomeDoProprietario: {
                type: DataTypes.STRING,
                allowNull: false
              },
        },{
            sequelize,
            tableName: 'animaisperdidos',
            hooks: {
              beforeValidate: (animal, options) => {
                animal.exibirAte = new Date()
                animal.exibirAte.setDate(animal.exibirAte.getDate() + 7)
              },
            }
        })
    }
}

module.exports = AnimalPerdido