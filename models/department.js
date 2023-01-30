'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      department.hasMany(models.employee, { targetKey: 'id', foreignKey: 'department_id' });
    }
  }
  department.init({
    department_name: DataTypes.STRING,
    describes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'department',
  });
  return department;
};