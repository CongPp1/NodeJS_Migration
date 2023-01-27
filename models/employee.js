'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      employee.belongsTo(models.position, { foreignKey: 'position_id', targetKey: 'id' })
    }
  }
  employee.init({
    employee_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    position_id: DataTypes.INTEGER,
    entry_date: DataTypes.DATE,
    address: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee',
  });
  return employee;
};