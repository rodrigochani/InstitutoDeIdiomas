import { request } from "express";
import { INTEGER, STRING } from "sequelize";
import carreras from "../Modelos/carreras.js";

export const getAllCarreras = async (request, response) => {
  try {
    const data = await carreras.findAll({ include: {all: true} });
    if (data != null) {
      response.send(data);
    } else {
      response.status(404).send({
        mensaje: "Carrera no encontrada.",
      });
    }
  } catch (error) {
    throw error;
  }
};
