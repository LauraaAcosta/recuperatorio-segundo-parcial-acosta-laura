import express from "express";
import { createLanguages, deleteLanguages, getAllLanguages, getLanguagesId, updateLanguages } from "../controllers/language.controllers.js";


export const languagesRouter = express.Router()


languagesRouter.get ("/languages",getAllLanguages)
languagesRouter.get ("/languages/:id",getLanguagesId)
languagesRouter.put ("/languages/:id",updateLanguages)
languagesRouter.post ("/languages",createLanguages)
languagesRouter.delete ("/languages/:id",deleteLanguages)

