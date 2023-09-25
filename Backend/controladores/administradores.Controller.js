import { request } from "express";
import { INTEGER, STRING } from "sequelize";
import administradores from "../Modelos/administradores.js";
//import profesores from "../Modelos/profesores.js";

export const getAllAdministradores = async (request, response) => {
    try {
        const data = await administradores.findAll()
        if (data != null){
            response.send(data)
        } 
        else {
            response.status(404).send({
                mensaje: "Administrador no encontrado."
            });

        }
    } catch (error) {
        throw error
    }}