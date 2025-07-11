import {where} from "sequelize";
import { languages } from "../models/language.model.js";

export const getAllLanguages = async(req,res) => {
    try {
        const buscarTdLenguajes = await languages.findAll();
        if(!buscarTdLenguajes){
            return res.status(404).json({Message: "No se encontró ningún lenguaje"})
        }
        return res.status(200).json({Message: "Se encontraron los lenguajes", buscarTdLenguajes})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Message:"Error del Servidor"})
    }
}

export const getLanguagesId = async(req,res) => {
    try {
        const {id} = req.params
        const buscarLenguaje = await languages.findOne({where:{id}})
        if(!buscarLenguaje){
            return res.status(404).json({Message: "No se encuentra el lenguaje"})
        }
        return res.status (200).json ({Message: "lenguaje encontrado", buscarLenguaje})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Message:"Error del servidor"})
        
    }
}

export const createLanguages = async(req,res) => {
    try {
        const{name, paradigm, release_year} = req.body
        if(!name || !paradigm || !release_year){
            return res.status(400).json ({Message: "Los campos son obligatorios"})
        }
        const unicoLenguaje = await languages.findOne({where:{name}})
        if (unicoLenguaje){
            return res.status(400).json ({Message: "El lenguaje ya existe, pruebe con otro"})
        }
        const crearLenguaje = await languages.create({name, paradigm, release_year})
        return res.status(201).json ({Message: "El lenguaje ha sido creado de manera exitosa", crearLenguaje})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Message:"Error del Servidor"})
    }
}
export const deleteLanguages = async(req,res) => {
    try {
        const {id} = req.params;
        const buscarLenguaje = await languages.findOne ({where: {id}})
        if(!buscarLenguaje){
            return res.status(404).json({Message: "No se encontró ningún lenguaje"})
        }
        const borrarLenguaje = await languages.destroy ({where: {id}})
        return res.status(500).json({Message: "Libro eliminado exitosamente"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Message:"Error del Servidor"})
    }
}


export const updateLanguages= async (req, res) =>{
    try {
        const { id } = req.params;
        const {name, paradigm, release_year} = req.body
        const languages = await languages.findByPk(id)
        if(!languages){
            return res.status(404).json({Message: "No se encuentra el lenguaje"})
        }
        if(name) languages.name = name.trim();
        if(paradigm) languages.paradigm = paradigm.trim();
        if(release_year || release_year ===0) languages.release_year = release_year
        
        await languages.save();
        res.status(200).json({Message: "Se actualizó un lenguage exitosamente", languages})
    } catch (error) {
        res.status(500).json({Message: "Error con el servidor"})
        console.log("Hubo un error con el servidor", error)
    }
};
