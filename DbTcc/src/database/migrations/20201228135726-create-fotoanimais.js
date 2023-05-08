'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('fotoanimais', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
      },
      foto: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      idAnimal: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'animais', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idAnimalPerdido: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'animaisperdidos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fotoanimais');
  }
};
