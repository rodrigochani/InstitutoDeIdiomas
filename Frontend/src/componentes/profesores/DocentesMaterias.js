import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import NavbarDocente from "../inicioAdmin/NavbarDocente";

const DocentesMaterias = () => {
  const profesorLogueado = JSON.parse(localStorage.getItem("Profesor"));
  useEffect(() => {
    getData();
    getDataCursos();
  }, []);
  const [profesor, setProfesor] = useState({});
  const [cursos, setCursos] = useState([]);
  const getData = async () => {
    try {
      const datos = "http://localhost:3001/profesores";
      const resp = await fetch(datos);
      const data = await resp.json();
      setProfesor(data);
    } catch (error) {
      throw error;
    }
  };
  const getDataCursos = async () => {
    try {
      const datos = "http://localhost:3001/cursos";
      const resp = await fetch(datos);
      const data = await resp.json();
      setCursos(data);
    } catch (error) {
      throw error;
    }
  };

  const cursosFiltrados = cursos.filter(
    (curso) => curso.profesor.Apellidos == profesorLogueado[0].Apellidos
  );

  console.log(cursosFiltrados);
  return (
    <>
      <NavbarDocente />
      <div style={{ marginTop: "30px", marginLeft: '400px' }}>
        <h3>
          cursos asignados a {profesorLogueado[0].Nombres}{" "}
          {profesorLogueado[0].Apellidos}
        </h3>
        <Row>
          <Col sm={7}>
            <Table style={{ marginTop: "30px" }}>
              <thead>
                <tr>
                  <th>Materias asignadas</th>
                  <th>Cantidad alumnos inscriptos</th>
                </tr>
              </thead>
              <tbody>
                {cursosFiltrados.map((data, index) => (
                  <tr key={index}>
                    <td>{data.Descripcion}</td>
                    <td>{data.curso_alumno.length}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DocentesMaterias;
