const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_create: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.now
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTablesName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
