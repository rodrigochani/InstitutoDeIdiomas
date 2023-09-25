import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import Navbar from "../inicioAdmin/Navbar";

const MateriasIngresos = () => {
  useEffect(() => {
    getData();
    getDataCursos();
    getDataCarreras();
  }, []);
  const [profesores, setProfesores] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedCarrera, setselectedCarrera] = useState("");
  const [cursos, setCursos] = useState([]);
  const [ingresos, setIngresos] = useState({});
  const [carreras, setCarreras] = useState([]);
  const [listadoMaterias, setListadoMaterias] = useState({
    materias: [],
    nombre: [],
    apellido: [],
  });
  const [listadoProfesores, setListadoProfesores] = useState({
    nombre: "",
    apellido: "",
  });

  const getData = async () => {
    try {
      const datos = "http://localhost:3001/profesores";
      const resp = await fetch(datos);
      const data = await resp.json();
      setProfesores(data);
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

  const getDataCarreras = async () => {
    try {
      const datos = "http://localhost:3001/carreras";
      const resp = await fetch(datos);
      const data = await resp.json();
      setCarreras(data);
    } catch (error) {
      throw error;
    }
  };

  const prueba = profesores.map((data, i) => data.Nombres);
  const prueba2 = cursos.map((data, i) => data.Descripcion);
  const prueba3 = carreras.map((data, i) => data.Descripcion);
  const prueba4 = carreras.map((data, i) => data.cursos[i]);

  const handleAgregar = async () => {
    // const detalle = cursos.filter((prod) => prod.Descripcion === selectedCurso)
    const filtroProfesor = profesores.filter(
      (data) => data.Nombres === selectedName
    );
    setIngresos({
      Profesor: filtroProfesor[0].ID,
    });

    console.log(ingresos);
  };

  const handleConfirmar = async () => {
    console.log(ingresos);
    await axios.patch(
      `http://localhost:3001/cursos/update/${selectedCurso}`,
      ingresos
    );
    alert("profesor asignado");
  };

  const handleConsultas = () => {
    const filtroCarreras = carreras.filter(
      (data) => data.Descripcion === selectedCarrera
    );

    const prueba150 = cursos.filter(
      (data, i) => data.carrera.Descripcion === selectedCarrera
    );
    const materia = prueba150.map((data) => data.Descripcion);
    const profesorNombre = prueba150.map((data) => data.profesor.Apellidos)
    const profesorApellido = prueba150.map((data) => data.profesor.Nombres)

    //const tablaCursos = cursos
    const [cursosTabla] = filtroCarreras;
    const prueba = cursosTabla.cursos.map((data, i) => data.Descripcion);
    const prueba2 = cursosTabla.profesores.map((data, i) => data.Apellidos);
    const prueba3 = cursos.filter((data, i) => data.Descripcion === prueba[i]);
    const nombre = prueba3.map((data) => data.profesor.Nombres);
    const apellido = prueba3.map((data) => data.profesor.Apellidos);
    setListadoProfesores({
      nombre: nombre,
      apellido: apellido,
    });
    setListadoMaterias({
      materias: materia,
      nombre: profesorNombre,
      apellido: profesorApellido,
    });

    console.log(profesorNombre)
    //console.log(prueba3)
    //console.log(filtroCursos)
  };

  //console.log(listadoMaterias)
  //console.log(selectedCarrera)

  //const filtroCursos = cursos.filter((data) => data.carrera.Descripcion === selectedCarrera)

  //console.log(prueba151);

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
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            aria-label="Default select example"
            style={{ marginLeft: "100px" }}
          >
            <option value="">Seleccione un profesor</option>
            {prueba.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Row>
        <Row className="mb-3">
          <Button
            type="submit"
            style={{ display: "flex", marginTop: "30px", marginLeft: "100px" }}
            onClick={handleAgregar}
          >
            ver detalle
          </Button>
          <Button
            type="submit"
            style={{ display: "flex", marginTop: "30px", marginLeft: "100px" }}
            onClick={handleConfirmar}
          >
            Confirmar
          </Button>
        </Row>
        <h5>
          esta por registrar al profesor {selectedName} en la materia{" "}
          {selectedCurso}
        </h5>

        <Row
          style={{
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <h3>Listado de materias y profesores</h3>
        </Row>
        <Row className="mb-3" style={{ marginTop: "40px" }}>
          <div as={Col} md="3" controlId="validationCustom05">
            <h4>Carrera</h4>
            <select
              value={selectedCarrera}
              onChange={(e) => setselectedCarrera(e.target.value)}
              aria-label="Default select example"
              style={{ marginLeft: "100px" }}
            >
              <option value="">Seleccione una carrera</option>
              {prueba3.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <Button style={{ marginLeft: "100px" }} onClick={handleConsultas}>
              Consultar
            </Button>
          </div>
        </Row>

        <ul>
          {listadoMaterias.materias.map((materia, index) => (
            <li key={index}>
              materia: {materia} profesor: {listadoMaterias.nombre[index]}{" "}
              {listadoMaterias.apellido[index]}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MateriasIngresos;
