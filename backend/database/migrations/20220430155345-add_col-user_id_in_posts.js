'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.addColumn('posts','user_id', { type: Sequelize.INTEGER });
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.removeColumn(
      'posts',
      'user_id'
    );
  }
};
