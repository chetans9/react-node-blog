'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.addColumn('posts','post_image', { type: Sequelize.TEXT });
  },

  async down (queryInterface, Sequelize) {

     return queryInterface.removeColumn(
      'posts',
      'post_image'
    );
  }
};
