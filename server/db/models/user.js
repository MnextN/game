const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4, 20],
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 30],
      unique: true,
      validate: {
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      },
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4, 20],
    },
    user_score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
