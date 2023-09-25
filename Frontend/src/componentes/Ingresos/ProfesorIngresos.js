import React, { useState } from "react";
/* import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";*/
import Navbar from "../inicioAdmin/Navbar";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useEffect } from "react";

const ProfesorIngresos = () => {
  useEffect(() => {
    getData();
  }, []);
  const [validated, setValidated] = useState(false);
  const [profesor, setProfesor] = useState({
    Nombres: "",
    Apellidos: "",
    DNI: "",
    Telefono: "",
    Email: "",
    Usuario: "",
    Contraseña: "",
    Ciudad: "",
    Provincia: "",
    Carrera: "",
  });
  const [listadoProfesores, setListadoProfesores] = useState([]);

  const getData = async () => {
    try {
      const datos = "http://localhost:3001/profesores";
      const resp = await fetch(datos);
      const data = await resp.json();
      setListadoProfesores(data);
    } catch (error) {
      throw error;
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    //console.log(e.target.name)
    if (e.target.name == "DNI") {
      setProfesor({
        ...profesor,
        [e.target.name]: parseInt(e.target.value),
      });
    }
    if (
      e.target.name == "Telefono" ||
      e.target.name == "DNI" ||
      e.target.name == "Carrera"
    ) {
      setProfesor({
        ...profesor,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setProfesor({
        ...profesor,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    const filtroDNI = listadoProfesores.filter(
      (data) => data.DNI == profesor.DNI
    );
    const filtroEmail = listadoProfesores.filter(
      (data) => data.Email == profesor.Email
    );

    if (filtroDNI.length != 0) {
      alert("DNI ya ingresado");
      return;
    }
    if (filtroEmail.length != 0) {
      alert("ya existe un usuario con ese Email");
      return;
    } else {
      setValidated(true);
      await axios.post(`http://localhost:3001/profesores/create`, profesor);
      alert("profesor agregado");
      setProfesor({
        Nombres: "",
        Apellidos: "",
        DNI: "",
        Telefono: "",
        Email: "",
        Usuario: "",
        Contraseña: "",
        Ciudad: "",
        Provincia: "",
        Carrera: "",
      });
    }
  };

  console.log(listadoProfesores);
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <h3>Ingresar docente</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              name="Nombres"
              value={profesor.Nombres}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              name="Apellidos"
              value={profesor.Apellidos}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>DNI</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                required
                name="DNI"
                value={profesor.DNI}
                onChange={handleInput}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Ingrese una dirección.
            </Form.Control.Feedback>
          </Form.Group> */}
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              required
              name="Ciudad"
              value={profesor.Ciudad}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              type="text"
              required
              name="Provincia"
              value={profesor.Provincia}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              required
              name="Email"
              value={profesor.Email}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>telefono</Form.Label>
            <Form.Control
              type="text"
              required
              name="Telefono"
              value={profesor.Telefono}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          {/* <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>telefono</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
            
          </Form.Group> */}
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <select name="Carrera" onChange={handleInput}>
              <option value={1}>Inglés</option>
              <option value={2}>Frances</option>
              <option value={3}>Aleman</option>
              <option value={4}>Italiano</option>
            </select>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              required
              name="Usuario"
              value={profesor.Usuario}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>contraseña</Form.Label>
            <Form.Control
              type="text"
              required
              name="Contraseña"
              value={profesor.Contraseña}
              onChange={handleInput}
            />
          </Form.Group>
        </Row>
        <Button onClick={handleSubmit}>Agregar</Button>
      </div>
    </>
  );
};

export default ProfesorIngresos;
