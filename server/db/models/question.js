const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Question.belongsTo(Topic, { foreignKey: 'id_topic' });
    }
  }
  Question.init({
    question_text: DataTypes.STRING,
    question_price: DataTypes.INTEGER,
    question_answer: DataTypes.STRING,
    id_topic: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Topics',
        },
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
