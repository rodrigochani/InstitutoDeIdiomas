import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Navbar from "./Navbar";


const Pagos = () => {
  useEffect(() => {
    getDataCursoAlumno();
  }, []);

  const [alumnosCurso, setAlumnosCurso] = useState([]);
  const [disabled, setDisabled] = useState(true)
  const [lineaSeleccionada, setLineaSeleccionada] = useState({});
  const [body, setBody] = useState({})

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

  const handleCompClick = (id,inscripcion) => {
    setLineaSeleccionada({ [id]: true });
    setBody({
      ...body,
      Inscripcion: inscripcion,
      Administrador: 1
    })
  };
  
  const handleInputChange = (e) => {
    e.preventDefault()
    setBody({
      ...body,
      Comprobante: parseInt(e.target.value),
      FechaPago: e.target.value
    })
  }

  const handlePagos = async () => {
    await axios.post("http://localhost:3001/pagos/create",body)
    alert('pago agregado')
   

  }
  
  const handleData = async () => {
   
  }
  
  
  

console.log(body)
  return (
    <>
      <Navbar />
      <h3>Listado de alumnos inscriptos en materias</h3>
      <hr />
      <Table>
      <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso Inscripto</th>
            <th>ID inscripcion</th>
            <th>Nota final</th>
            <th>Pagos</th>
            <th>Registros</th>
            <th>Comprobante</th>
            <th>fecha pago</th>
            <th>Registro</th>
          </tr>
        </thead>
        <tbody>
          {alumnosCurso.map((alumno,index) => (
            <tr key={index}>
              <td>{alumno.alumno.Nombres}</td>
              <td>{alumno.alumno.Apellidos}</td>
              <td>{alumno.curso.Descripcion}</td>
              <td>{alumno.ID}</td>
              <td>{alumno.Final == 0 ? ('sin nota'): (alumno.Final) }</td>
              <td>{alumno.pago == null ? ('no pagado') : ('pagado')}</td>
              <td>{alumno.pago == null ? (<Button style={{width: '70px'}} variant="secondary" onClick={() => handleCompClick(index, alumno.ID)}>comp</Button>) : ('---------')}</td>
              <td>{alumno.pago == null ? (<input style={{width: '150px'}} disabled={!lineaSeleccionada[index]} name='Comprobante' onChange={handleInputChange}/>) : ('---------------------')}</td>
              <td>{alumno.pago == null ? (<input style={{width: '150px'}} disabled={!lineaSeleccionada[index]} type='date' name='FechaPago' onChange={handleInputChange}/>) : ('---------------------')}</td>
              <td>{alumno.pago == null ? (<Button onClick={handlePagos}>Registrar</Button>) : ('----------')}</td>
              {/* <td>{alumno.pago == null ? (<Button onClick={handleData}>Confirmar</Button>) : ('----------')}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Pagos;
