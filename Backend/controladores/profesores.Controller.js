import profesores from "../modelos/profesores.js";



export const createProfesor = (request, response) => {
  const body = request.body;

  if (body.Nombres && body.Apellidos == null) {
    response.status(400).send({
      mensaje: "El nombre es obligatorio.",
    });

    return;
  }

  const nuevoProfesor = {
    ID: body.ID,
    Nombres: body.Nombres,
    Apellidos: body.Apellidos,
    DNI: body.DNI,
    Telefono: body.Telefono,
    Email: body.Email,
    Carrera: body.Carrera,
    Usuario: body.Usuario,
    Contraseña: body.Contraseña,
    Ciudad: body.Ciudad,
    Provincia: body.Provincia,
  };

  profesores
    .create(nuevoProfesor)
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        mensaje: error.message || "Algo salió mal.",
      });
    });
};

export const getAllProfesores = async (request, response) => {
  try {
    const data = await profesores.findAll({include: {all: true}});
    if (data != null) {
      response.send(data);
    } else {
      response.status(404).send({
        mensaje: "Profesor no encontrado.",
      });
    }
  } catch (error) {
    throw error;
  }
};
