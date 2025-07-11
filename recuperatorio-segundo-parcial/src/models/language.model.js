import { sequelize  } from "../config/database.js";
import { DataTypes } from "sequelize";

export const languages = sequelize.define( "Languages",
    {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true, 
            unique: true,
        },
        name: {
            type:DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        paradigm: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        release_date: {
            type:DataTypes.INTEGER,
            allowNull:true,
        },
    }
);