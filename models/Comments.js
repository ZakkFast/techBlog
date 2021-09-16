const { Model, Datatypes, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Comments;
/*
id
subject
foreign key for post id and user id
*/
