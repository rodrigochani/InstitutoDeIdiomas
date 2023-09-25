import React, { useState } from "react";
import { Form, Col, Row, ListGroup, Button } from "react-bootstrap";
import "./listaExamenesInternacionales.css";

const ListaExamenesInternacionales = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const exams = {
    Ingles: [
      { name: "TOEFL", infoLink: "https://www.ets.org/toefl/" },
      { name: "IELTS", infoLink: "https://www.ielts.org/" },
      {
        name: "Cambridge English",
        infoLink: "https://www.cambridgeenglish.org/",
      },
    ],
    Aleman: [
      { name: "TestDaF", infoLink: "https://www.testdaf.de/" },
      { name: "Goethe-Zertifikat", infoLink: "https://www.goethe.de/" },
    ],
    Frances: [
      { name: "DELF", infoLink: "https://www.ciep.fr/en/delf-dalf" },
      { name: "DALF", infoLink: "https://www.ciep.fr/en/delf-dalf" },
      { name: "TCF", infoLink: "https://www.ciep.fr/en/tcf" },
    ],
    Italiano: [
      { name: "CILS", infoLink: "https://cils.it/" },
      { name: "CELI", infoLink: "https://www.cvcl.it/" },
      { name: "PLIDA", infoLink: "https://www.ladante.it/" },
    ],
  };

  return (
    <>
    <h1 style={{marginTop: '10px', textAlign: 'center', backgroundColor: 'lightblue', height: '70px'}}>Examenes internacionales</h1>
      <div className="center-container">
        <Form>
          <Form.Group as={Row} controlId="formLanguageSelect">
            <Form.Label column sm={4}>
              Seleccione una carrera:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                as="select"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="">-- Por favor seleccione una carrera --</option>
                <option value="Ingles">Ingles</option>
                <option value="Aleman">Aleman</option>
                <option value="Frances">Frances</option>
                <option value="Italiano">Italiano</option>
              </Form.Control>
            </Col>
          </Form.Group>

          {selectedLanguage && (
            <ListGroup>
              <ListGroup.Item variant="info">
                Examenes disponibles para {selectedLanguage}:
              </ListGroup.Item>
              {exams[selectedLanguage].map((exam) => (
                <ListGroup.Item key={exam.name}>
                  <a
                    href={exam.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exam.name}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Form>
      </div>
        <Button href="/">Voler a página principal</Button>
      
    </>
  );
};

export default ListaExamenesInternacionales;
