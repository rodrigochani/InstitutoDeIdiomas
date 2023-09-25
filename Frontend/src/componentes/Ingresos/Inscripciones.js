import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import Navbar from "../inicioAdmin/Navbar";

const Inscripciones = () => {
  useEffect(() => {
    getDataAlumnos();
    getDataCursos();
    getDataAlumnosCursos();
  }, []);

  const [cursos, setCursos] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedAlumno, setSelectedAlumno] = useState("");
  const [selectedMateria, setSelectedMateria] = useState("");
  const [selectedFecha, setSelectedFecha] = useState("");
  const [bodyInscripcion, setBodyInscripcion] = useState({
    Alumno: "",
    Curso: "",
    FechaInsc: "",
    PrimerParcial: "",
    SegundoParcial: "",
    Final: "",
    Aprobado: "",
    Administrador: "",
  });
  const [alumnosCurso, setAlumnosCurso] = useState([]);
  const [listadoAlumnos, setListadoAlumnos] = useState({
    nombre: [],
    apellido: [],
    fechaInsc: [],
    notaFinal: [],
  });

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

  const getDataAlumnos = async () => {
    try {
      const datos = "http://localhost:3001/alumnos";
      const resp = await fetch(datos);
      const data = await resp.json();
      setAlumnos(data);
    } catch (error) {
      throw error;
    }
  };

  const getDataAlumnosCursos = async () => {
    try {
      const datos = "http://localhost:3001/alumnos_cursos";
      const resp = await fetch(datos);
      const data = await resp.json();
      setAlumnosCurso(data);
    } catch (error) {
      throw error;
    }
  };

  const prueba2 = cursos.map((data, i) => data.Descripcion);
  const prueba = alumnos.map((data, i) => data.Apellidos);

  //const prueba4 = prueba3.alumno.map(data => data.Apellidos)
  //console.log(cursos)
  //console.log(prueba2)
  //console.log(prueba)

  const handleConsultar = () => {
    const filtroMateria = cursos.filter(
      (data, i) => data.Descripcion === selectedCurso
    );
    const filtroAlumno = alumnos.filter(
      (data, i) => data.Apellidos === selectedAlumno
    );
    setBodyInscripcion({
      Alumno: filtroAlumno[0].ID,
      Curso: filtroMateria[0].ID,
      FechaInsc: selectedFecha,
      PrimerParcial: 0.0,
      SegundoParcial: 0.0,
      Final: 0.0,
      Aprobado: false,
      Administrador: 1,
    });
  };

  const handleInscripcion = async () => {
    //console.log(ingresos);
    await axios.post(
      "http://localhost:3001/alumnos_cursos/create",
      bodyInscripcion
    );
    alert("alumno inscripto");
  };

  const handleListado = () => {
    const filteredArray = alumnosCurso.filter(
      (item) => item.curso.Descripcion === selectedMateria
    );
    const prueba3 = filteredArray.map(
      (inscripcion) => inscripcion.alumno.Nombres
    );
    const apellido = filteredArray.map(
      (inscripcion) => inscripcion.alumno.Apellidos
    );
    const fecha = filteredArray.map((inscripcion) => inscripcion.FechaInsc);
    const final = filteredArray.map((inscripcion) => inscripcion.Final);
    setListadoAlumnos({
      nombre: prueba3,
      apellido: apellido,
      fechaInsc: fecha,
      notaFinal: final,
    });
  };
  
  console.log(listadoAlumnos);
  //console.log(filteredArray)
  //console.log(prueba3)
  //console.log(prueba4)
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Row className="mb-3">
          <select
            value={selectedCurso}
            onChange={(e) => setSelectedCurso(e.target.value)}
            aria-label="Default select example"
            style={{ marginLeft: "100px" }}
          >
            <option value="">Seleccione una materia</option>
            {prueba2.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            value={selectedAlumno}
            onChange={(e) => setSelectedAlumno(e.target.value)}
            aria-label="Default select example"
            style={{ marginLeft: "100px" }}
          >
            <option value="">Seleccione un alumno</option>
            {prueba.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <input
            type="date"
            style={{ marginLeft: "10px" }}
            value={selectedFecha}
            onChange={(e) => setSelectedFecha(e.target.value)}
          />
        </Row>
        <Row className="mb-3">
          <Button
            style={{ display: "flex", marginTop: "30px", marginLeft: "100px" }}
            onClick={handleConsultar}
          >
            ver detalle
          </Button>
          <Button
            style={{ display: "flex", marginTop: "30px", marginLeft: "100px" }}
            onClick={handleInscripcion}
          >
            inscribir alumno
          </Button>
        </Row>
        <h6>

        esta por registrar en la materia {selectedCurso} al alumno {selectedAlumno} en fecha {selectedFecha}
        </h6>

        <Row
          style={{
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <h3>Listado de Alumnos incscriptos</h3>
        </Row>
        <Row className="mb-3" style={{ marginTop: "40px" }}>
          <select
            value={selectedMateria}
            onChange={(e) => setSelectedMateria(e.target.value)}
            aria-label="Default select example"
            style={{ marginLeft: "100px" }}
          >
            <option value="">Seleccione una materia</option>
            {prueba2.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button style={{ marginLeft: "100px" }} onClick={handleListado}>
            Consultar
          </Button>
        </Row>
        <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de inscripcion</th>
            <th>Nota final</th>
          </tr>
        </thead>
        <tbody>
              {listadoAlumnos.nombre.map((data, index) => (
                <tr key={index}>
                  <td>{data}</td>
                  <td>{listadoAlumnos.apellido[index]}</td>
                  <td>{listadoAlumnos.fechaInsc[index] == '0000-00-00' ? ('2023-04-13'):(listadoAlumnos.fechaInsc[index])}</td>
                  <td>{listadoAlumnos.notaFinal[index] == 0 ? (
                    'sin nota final'
                  ): (listadoAlumnos.notaFinal[index])}</td>
                </tr>
              ))}
        </tbody>
        </Table>
        {/* <ul>
          {listadoAlumnos.nombre.map((data, index) => (
            <li key={index}>
              nombre: {data} apellido: {listadoAlumnos.apellido[index]} fecha de inscripcion: {listadoAlumnos.fechaInsc[index]} nota final: {listadoAlumnos.notaFinal[index]}
            </li>
          ))}
        </ul> */}
        
      </div>
    </>
  );
};

export default Inscripciones;
