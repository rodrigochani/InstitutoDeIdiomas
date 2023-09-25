import { request } from "express";
import { INTEGER, STRING } from "sequelize";
import cursos from "../Modelos/cursos.js";

export const getAllCursos = async (request, response) => {
  try {
    const data = await cursos.findAll({ include: {all:true} });
    if (data != null) {
      response.send(data);
    } else {
      response.status(404).send({
        mensaje: "Curso no encontrado.",
      });
    }
  } catch (error) {
    throw error;
  }
};

export const updateByDescripcionCursos = async (request, response) => {
  try {
    const cursoDescripcion = request.params.Descripcion;

    if (!cursoDescripcion) {
      response.status(400).send({
        mensaje: "El nombre es obligatorio.",
      });

      return;
    }

    const cursoDB = await cursos.findOne({
      where: { Descripcion: cursoDescripcion },
    });

    if (!cursoDB) {
      errorHelper(response, 404, "El curso no existe.");
    }

    const body = request.body;

    const cursoVacio = {};

    cursoVacio.Profesor = body.Profesor;

    const filtro = {
      where: {
        Descripcion: cursoDescripcion,
      },
    };

    await cursos.update(cursoVacio, filtro);

    response.send({ mensaje: "El registro se actualizó con éxito." });
  } catch (error) {
    errorHelper(response, 500, "Error en el servidor.");
  }
};

const errorHelper = (response, codigo, mensaje) => {
  response.status(codigo).send({
    mensaje: mensaje,
  });
};
