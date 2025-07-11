import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_DIALECT || "mysql",
        host: process.env.DB_HOST || "localhost"
    }
);

export const startDb = async() => {
    try {
        await sequelize.sync({force:true})
        
        console.log ("Se logró establecer conexión con la base de datos")
    } catch (error) {
        console.log("Error en el servidor", )
    }
}
