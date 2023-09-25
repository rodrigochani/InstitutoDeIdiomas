import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import NavbarDocente from "../inicioAdmin/NavbarDocente";

const DocentesNotas = () => {
  const profesorLogueado = JSON.parse(localStorage.getItem("Profesor"));
  const [renderizado, setRenderizado] = useState(false)
  useEffect(() => {
    getData();
    getDataCursos();
    getDataCursoAlumno();
  }, [renderizado]);
  const [profesor, setProfesor] = useState({});
  const [cursos, setCursos] = useState([]);
  const [alumnosCurso, setAlumnosCurso] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState("");
  const [dataAlumnos, setDataAlumnos] = useState({
    nombre: [],
    apellido: [],
    primerParcial: [],
    segundoParcial: [],
    Final: [],
    id: [],
  });
  const [body, setBody] = useState({
    PrimerParcial: "",
    SegundoParcial: "",
    Final: "",
  });
  console.log(body)
  const [disabled, setDisabled] = useState(true);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0); // Inicialmente, ninguna fila está seleccionada
 
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

  const cursosFiltrados = cursos.filter(
    (curso) => curso.profesor.Apellidos == profesorLogueado[0].Apellidos
  );

  const handleConsultas = () => {
    //const cursoSeleccionado = cursos.filter((curso) => curso.Descripcion == selectedMateria)
    const filteredData = alumnosCurso.filter(
      (item) => item.curso.Descripcion === selectedMateria
    );
    const nombre = filteredData.map((data, i) => data.alumno.Nombres);
    const apellido = filteredData.map((data, i) => data.alumno.Apellidos);
    const primerParcial = filteredData.map((data, i) => data.PrimerParcial);
    const segundoParcial = filteredData.map((data, i) => data.SegundoParcial);
    const final = filteredData.map((data, i) => data.Final);
    const id = filteredData.map((data, i) => data.alumno.ID);
    setDataAlumnos({
      nombre: nombre,
      apellido: apellido,
      primerParcial: primerParcial,
      segundoParcial: segundoParcial,
      Final: final,
      id: id,
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setBody({
      ...body,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleNotas = (parametro,idAlumno) => {
    //console.log(parametro)
    setSelectedRowIndex(parametro);
    setDisabled(!disabled);
  };

  const handleConfirmar = async (id) => {
    await axios.patch(
      `http://localhost:3001/alumnos_cursos/update/${id}`,
      body
    );
    alert("notas agregadas");
    setDisabled(!disabled)
    setRenderizado(!renderizado)
    setSelectedRowIndex(0)
  };

  console.log(selectedRowIndex);
  return (
    <>
      <NavbarDocente />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Row style={{ marginTop: "10px" }}>
          <Col sm={6}>
            <h3>Seleccione una materia</h3>
          </Col>
          <Col sm={7}>
            <select
              style={{ width: "190px", height: "40px" }}
              value={selectedMateria}
              onChange={(e) => setSelectedMateria(e.target.value)}
              aria-label="Default select example"
            >
              <option value="">Seleccione una materia</option>
              {cursosFiltrados.map((data, index) => (
                <option key={data.Descripcion} value={data.Descripcion}>
                  {data.Descripcion}
                </option>
              ))}
            </select>
            <Button
              onClick={handleConsultas}
              style={{ marginLeft: "10px", height: "40px" }}
            >
              Consultar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{marginRight: '300px'}}>
            <ul>
              {dataAlumnos.nombre.map((nombre, index) => (
                <li key={index}>
                  <h6>Nombre:</h6> {nombre} <h6>Apellido:</h6>{" "}
                  {dataAlumnos.apellido[index]} <br />
                  <h7>Primer parcial: </h7> 
                  {dataAlumnos.primerParcial[index]} {"  "}
                  {selectedRowIndex === index && ( // Aquí se comprueba si la fila actual debe estar habilitada
                    <input
                      style={{ width: "50px" }}
                      name="PrimerParcial"
                      onChange={handleInputChange}
                      disabled={disabled}
                    />
                  )}
                  {/* <input style={{width: '50px'}} name='PrimerParcial' onChange={handleInputChange} disabled={disabled}/> */}
                  <h7>Segundo parcial:</h7>
                  {"  "}
                  {dataAlumnos.segundoParcial[index]}{" "}
                  {selectedRowIndex === index && ( // Aquí se comprueba si la fila actual debe estar habilitada
                    <input
                      style={{ width: "50px" }}
                      name="SegundoParcial"
                      onChange={handleInputChange}
                      disabled={disabled}
                    />
                  )}
                 {/*  <input
                    style={{ width: "50px" }}
                    name="SegundoParcial"
                    onChange={handleInputChange}
                    disabled={disabled}
                  /> */}
                  <h7>Final:</h7> {dataAlumnos.Final[index]}{" "}{" "}
                  {selectedRowIndex === index && ( // Aquí se comprueba si la fila actual debe estar habilitada
                    <input
                      style={{ width: "50px" }}
                      name="Final"
                      onChange={handleInputChange}
                      disabled={disabled}
                    />
                  )}
                  {/* <input
                    style={{ width: "50px" }}
                    name="Final"
                    onChange={handleInputChange}
                    disabled={disabled}
                  /> */}
                  <hr />
                  
                  <Button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleNotas(index)}
                  >
                    Modificar
                  </Button>
                  <Button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleConfirmar(dataAlumnos.id[index])}
                  >
                    Confirmar
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DocentesNotas;
