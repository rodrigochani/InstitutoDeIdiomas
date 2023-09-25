import { request } from "express";
import { INTEGER, STRING } from "sequelize";
import pagos from "../Modelos/pagos.js";

export const getAllPagos = async (request, response) => {
  try {
    const data = await pagos.findAll({ include: { all: true } });
    if (data != null) {
      response.send(data);
    } else {
      response.status(404).send({
        mensaje: "Pago no encontrado.",
      });
    }
  } catch (error) {
    throw error;
  }
};
export const createPago = (request, response) => {
  const body = request.body;


  const nuevoPago = {
    ID: body.ID,
    Comprobante: body.Comprobante,
    Inscripcion: body.Inscripcion,
    FechaPago: body.FechaPago,
    Administrador: body.Administrador,
  };

  pagos
    .create(nuevoPago)
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        mensaje: error.message || "Algo salió mal.",
      });
    });
};
