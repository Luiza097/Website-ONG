'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('animais', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pelagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false
      },
      porte: {
        type: Sequelize.ENUM('P', 'M', 'G'),
        allowNull: true
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      interessados: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idEspecie: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'especies', key: 'id'},
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
    return queryInterface.dropTable('animais');
  }
};
