import {sequelize} from "../db/db.js";
import {DataTypes} from "sequelize"

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
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    sequelize,
    freezeTableName: true
});

await User.sync({ force: true });

export default User

