import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';


const Instituto = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <Image src="/imagenes/logo+round.png" style={{width: '550px', marginTop: '30px'}}/>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Bienvenidos a nuestro instituto de idiomas!</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis magna eget ultricies
                porttitor. Nam auctor laoreet ex quis eleifend. Nullam sem metus, bibendum in rhoncus at,
                tempor a justo. Duis consectetur nunc nec velit rutrum, eget pharetra lectus commodo. Morbi
                quis magna sit amet sapien ornare posuere. Donec dictum vestibulum fermentum. Nam nec dui
                lacus. Nunc ut elit tristique, bibendum mauris ac, blandit enim.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Nuestras instalaciones</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis magna eget ultricies
                porttitor. Nam auctor laoreet ex quis eleifend. Nullam sem metus, bibendum in rhoncus at,
                tempor a justo. Duis consectetur nunc nec velit rutrum, eget pharetra lectus commodo. Morbi
                quis magna sit amet sapien ornare posuere. Donec dictum vestibulum fermentum. Nam nec dui
                lacus. Nunc ut elit tristique, bibendum mauris ac, blandit enim.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Image src="/imagenes/aulas.jpg" style={{height: '350px'}} />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Image src="/imagenes/sistemaEnsenanza.jfif" style={{height: '300px'}} />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Nuestro sistema de enseñanza</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis magna eget ultricies
                porttitor. Nam auctor laoreet ex quis eleifend. Nullam sem metus, bibendum in rhoncus at,
                tempor a justo. Duis consectetur nunc nec velit rutrum, eget pharetra lectus commodo. Morbi
                quis magna sit amet sapien ornare posuere. Donec dictum vestibulum fermentum. Nam nec dui
                lacus. Nunc ut elit tristique, bibendum mauris ac, blandit enim.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button href="/" style={{marginTop: '10px'}}>Volver al menú principal</Button>
    </Container>
  );
};

export default Instituto;
