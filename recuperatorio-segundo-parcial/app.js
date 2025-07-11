import express from "express";
import lenguagesRouter from "./src/routes/language.routes.js";
import dotenv from "dotenv"; 
import { startDb } from "./src/config/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use("api/Languages", lenguagesRouter);


app.listen(PORT, async () => {
    console.log(`Servidor corriendo en ${PORT}`);
});

startDb();