'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       this.belongsTo(models.CategoriesModel,{

        foreignKey : 'category_id',
        as: 'category'


       });



      
    }
  }
  PostsModel.init({
    title: DataTypes.STRING,
    slug: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostsModel',
    tableName : 'posts'
  });
  return PostsModel;
};