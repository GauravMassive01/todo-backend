import {sequelize} from "../db/db.js";
import {DataTypes} from "sequelize"
import Todo from "./todo.model.js";

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    freezeTableName: true
});

// await User.sync({ force: true });

export default User

