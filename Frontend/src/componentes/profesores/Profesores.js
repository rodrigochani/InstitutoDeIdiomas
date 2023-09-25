import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./profesores.css";

const Profesores = () => {
  const profesores = [
    {
      nombre: "Juan Perez",
      imagen: "/imagenes/profesor1.webp",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nombre: "Maria Rodriguez",
      imagen: "/imagenes/profesor3.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nombre: "Pedro Gomez",
      imagen: "/imagenes/profesor2.avif",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nombre: "Ana Maria Lucena",
      imagen: "/imagenes/profesor8.jfif",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nombre: "Ruth Gomez",
      imagen: "/imagenes/profesor5.webp",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      nombre: "Pedro Gomez",
      imagen: "/imagenes/profesor6.jfif",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Container className="lista-profesores">
      <h1>Nuestro staff de profesores</h1>
      <Row style={{ marginTop: "30px", marginBottom: '10px' }}>
        {profesores.map((profesor, index) => (
          <Col md={4} key={index}>
            <Card className="profesor-card">
              <Card.Img
                variant="top"
                src={profesor.imagen}
                className="profesor-imagen"
              />
              <Card.Body>
                <Card.Title className="profesor-nombre">
                  {profesor.nombre}
                </Card.Title>
                <Card.Text className="profesor-descripcion">
                  {profesor.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profesores;
