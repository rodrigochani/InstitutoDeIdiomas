import { request } from "express";
import { INTEGER, STRING } from "sequelize";
import alumnos_cursos from "../Modelos/alumnos_cursos.js";

export const getAllAlumnosCursos = async (request, response) => {
  try {
    const data = await alumnos_cursos.findAll({ include: { all: true } });
    if (data != null) {
      response.send(data);
    } else {
      response.status(404).send({
        mensaje: "Alumno_Curso no encontrado.",
      });
    }
  } catch (error) {
    throw error;
  }
};

export const createAlumnoCurso = (request, response) => {
  const body = request.body;

 

  const nuevoAlumnoCurso = {
    ID: body.ID,
    Alumno: body.Alumno,
    Curso: body.Curso,
    FechaInsc: body.FechaInsc,
    PrimerParcial: body.PrimerParcial,
    SegundoParcial: body.SegundoParcial,
    Final: body.Final,
    Aprobado: body.Aprobado,
    Administrador: body.Administrador,
  };

  alumnos_cursos
    .create(nuevoAlumnoCurso)
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        mensaje: error.message || "Algo salió mal.",
      });
    });
};


export const updateByIdAlumnos_Cursos = async (request, response) => {
  try {
    const cursoAlumnoId = request.params.Alumno;

    if (!cursoAlumnoId) {
      response.status(400).send({
        mensaje: "El id del alumno es inválido.",
      });

      return;
    }

    const alumno_cursoDB = await alumnos_cursos.findOne({
      where: { Alumno: cursoAlumnoId },
    });

    if (!alumno_cursoDB) {
      errorHelper(response, 404, "El alumno no existe.");
    }

    const body = request.body;

    const cursoAlumnoVacio = {};

    cursoAlumnoVacio.PrimerParcial = body.PrimerParcial;
    cursoAlumnoVacio.SegundoParcial = body.SegundoParcial;
    cursoAlumnoVacio.Final = body.Final;
    const filtro = {
      where: {
        Alumno: cursoAlumnoId,
      },
    };

    await alumnos_cursos.update(cursoAlumnoVacio, filtro);

    response.send({ mensaje: "El registro se actualizó con éxito." });
  } catch (error) {
    errorHelper(response, 500, "Error en el servidor.");
  }
};
