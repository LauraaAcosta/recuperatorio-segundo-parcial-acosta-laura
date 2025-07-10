import express from "express";
import dotenv from "dotenv"; 
import { startDb } from "./src/config/database.js";
import { languagesRouter } from "./src/routes/language.routes.js";
dotenv.config();

const app = express();
app.use (express.json());

app.use('/api', languagesRouter);

const port = process.env.PORT || 3000

app.listen(port.async()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
    await startDb()
})