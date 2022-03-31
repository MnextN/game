const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      Topic.hasMany(Question, { foreignKey: 'id_topic' });
    }
  }
  Topic.init({
    topic_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
