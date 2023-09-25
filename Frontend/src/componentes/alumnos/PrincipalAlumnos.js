import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
//import Navbar from "./Navbar";
import NavbarAlumnos from "./NavbarAlumnos";
//import NavbarDocente from './NavbarDocente';

const PrincipalAlumnos = () => {
  useEffect(() => {
    getDataCursoAlumno();
  }, []);
  const alumnoLogueado = JSON.parse(localStorage.getItem("Alumno"));
  const [alumnosCurso, setAlumnosCurso] = useState([]);
  const getDataCursoAlumno = async () => {
    try {
      const datos = "http://localhost:3001/alumnos_cursos";
      const resp = await fetch(datos);
      const data = await resp.json();
      setAlumnosCurso(data);
    } catch (error) {
      throw error;
    }
  };

  const alumnoFiltro = alumnosCurso.filter(
    (data, i) => data.alumno.ID == alumnoLogueado[0].ID
  );
  //console.log(alumnosCurso.alumno.ID);
  console.log(alumnoFiltro);
  return (
    <>
      <NavbarAlumnos />
      <h3>
        Bienvenido alumno {alumnoLogueado[0].Nombres}{" "}
        {alumnoLogueado[0].Apellidos}
      </h3>
      <br />
      <hr />
      <div style={{ display: "flex" }}>
        <h5>
          Listado de los cursos que te inscribiste y situacion arancelaria
          <hr />
        </h5>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso Inscripto</th>
              <th>ID inscripcion</th>
              <th>Nota final</th>
              <th>Pagos</th>
              {/* <th>Comprobante</th> */}
             {/*  <th>fecha pago</th> */}
            </tr>
          </thead>
          <tbody>
            {alumnoFiltro.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.alumno.Nombres}</td>
                <td>{alumno.alumno.Apellidos}</td>
                <td>{alumno.curso.Descripcion}</td>
                <td>{alumno.ID}</td>
                <td>{alumno.Final == 0 ? "sin nota" : alumno.Final}</td>
                <td>{alumno.pago == null ? "no pagado" : "pagado"}</td>
                {/* <td>{alumno.pago.Comprobante == null ? "sin comprobante" : (alumno.pago.Comprobante)}</td> */}
                {/* <td>{alumno.pago.FechaPago}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div style={{marginTop: '100px'}}>
        *para consultas o inscribirte en otras materias consulta con nuestro staff de administracion
      </div>
    </>
  );
};

export default PrincipalAlumnos;
