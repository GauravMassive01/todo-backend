import {sequelize} from "../db/db.js";
import {DataTypes} from "sequelize"
import User from "./user.model.js";

const Todo = sequelize.define('todo', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    sequelize,
    freezeTableName: true
});
User.hasMany(Todo, { as: 'todos' });
Todo.belongsTo(User);
// await Todo.sync({ force: true });

export default Todo

