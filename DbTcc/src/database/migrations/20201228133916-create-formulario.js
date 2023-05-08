'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('formularios', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
      },
      qtdAnimalCasa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipoResidencia: {
        type: Sequelize.ENUM('casa', 'apartamento', 'chacra/sitio', 'outros'),
        allowNull: false
      },
      tipoPiso: {
        type: Sequelize.ENUM('azuleijo', 'carpete', 'ceramica', 'cimentoQueimado', 'cimentoCru', 'terra/gramado', 'outros'),
        allowNull: false
      },
      dentroOuFora: {
        type: Sequelize.ENUM('dentroEfora', 'Dentro', 'Fora'),
        allowNull: true
      },
      tempoDisponivel: {
        type: Sequelize.ENUM('diariamente', 'tarde', 'manha', 'noite'),
        allowNull: true
      },
      animalPara: {
        type: Sequelize.ENUM('companhia', 'exposicao'),
        allowNull: true
      },
      castrar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alergia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vacinaEvermifugar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomeInteressado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idAnimal:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'animais', key: 'id'},
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
    return queryInterface.dropTable('formularios');
  }
};
