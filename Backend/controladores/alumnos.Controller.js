import alumnos from "../modelos/alumnos.js";



export const createAlumno = (request, response) => {
  const body = request.body;

  if (body.Nombres && body.Apellidos == null) {
    response.status(400).send({
      mensaje: "El nombre es obligatorio.",
    });

    return;
  }

  const nuevoAlumno = {
    ID: body.ID,
    Nombres: body.Nombres,
    Apellidos: body.Apellidos,
    DNI: body.DNI,
    Telefono: body.Telefono,
    Email: body.Email,
    Usuario: body.Usuario,
    Contraseña: body.Contraseña,
    Ciudad: body.Ciudad,
    Provincia: body.Provincia,
  };

  alumnos
    .create(nuevoAlumno)
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({
        mensaje: error.message || "Algo salió mal.",
      });
    });
};
export const getAllAlumnos = async (request, response) => {
    try {
        const data = await alumnos.findAll()
        if (data != null){
            response.send(data)
        } 
        else {
            response.status(404).send({
                mensaje: "Alumno no encontrado."
            });

        }
    } catch (error) {
        throw error
    }}
