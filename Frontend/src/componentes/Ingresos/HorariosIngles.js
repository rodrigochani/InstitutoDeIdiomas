import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Navbar from "../inicioAdmin/Navbar";

const HorariosIngles = () => {
  var miArrayRecuperado = JSON.parse(localStorage.getItem("ingles"));
  var miArrayRecuperado2 = JSON.parse(localStorage.getItem("frances"));
  var miArrayRecuperado3 = JSON.parse(localStorage.getItem("Aleman"));
  var miArrayRecuperado4 = JSON.parse(localStorage.getItem("Italiano"));

  const [tableData, setTableData] = useState(
 /*    [
    ["Ingles I", "Ingles II", "Ingles III", "Ingles IV", "Ingles V"],
    ["Ingles II", "Ingles IV", "Ingles I", "Ingles V", "Ingles III"],
    ["Ingles III", "Ingles V", "Ingles II", "Ingles IV", "Ingles I"],
  ] */
    miArrayRecuperado
  );

  const [horariosFrances, setHorariosFrances] = useState(miArrayRecuperado2)
  const [horariosAleman, setHorariosAleman] = useState(miArrayRecuperado3)
  const [horariosItaliano, setHorariosItaliano] = useState(miArrayRecuperado4)

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledFrances, setIsDisabledFrances] = useState(true);
  const [isDisabledAleman, setIsDisabledAleman] = useState(true);
  const [isDisabledItaliano, setIsDisabledItaliano] = useState(true);


/*   const frances = [[
    ["frances I", "frances II", "frances III", "frances IV", "frances V"],
    ["frances II", "frances IV", "frances I", "frances V", "frances III"],
    ["frances III", "frances V", "frances II", "frances IV", "frances I"],
  ]];
  localStorage.setItem("frances", JSON.stringify(frances)); */

  const handleInputChange = (e, row, col) => {
    const newData = [...tableData];
    newData[row][col] = e.target.value;
    setTableData(newData);
  };

  const handleInputChangeFrances = (e, row, col) => {
    const newData = [...horariosFrances];
    newData[row][col] = e.target.value;
    setHorariosFrances(newData);
  };

  const handleInputChangeAleman = (e, row, col) => {
    const newData = [...horariosAleman];
    newData[row][col] = e.target.value;
    setHorariosAleman(newData);
  };

  const handleInputChangeItaliano = (e, row, col) => {
    const newData = [...horariosItaliano];
    newData[row][col] = e.target.value;
    setHorariosItaliano(newData);
  };

  //console.log(tableData);

  const handleCambios = () => {
    //setHorarios(tableData)
    localStorage.setItem("ingles", JSON.stringify(tableData));
    alert("horarios modificados");
    setIsDisabled(!isDisabled)
  };
  const handleCambiosFrances = () => {
    //setHorarios(tableData)
    localStorage.setItem("frances", JSON.stringify(horariosFrances));
    alert("horarios modificados");
    setIsDisabledFrances(!isDisabledFrances)
  };
  const handleCambiosAleman = () => {
    //setHorarios(tableData)
    localStorage.setItem("Aleman", JSON.stringify(horariosAleman));
    alert("horarios modificados");
    setIsDisabledAleman(!isDisabledAleman)
  };

  const handleCambiosItaliano = () => {
    //setHorarios(tableData)
    localStorage.setItem("Italiano", JSON.stringify(horariosItaliano));
    alert("horarios modificados");
    setIsDisabledItaliano(!isDisabledItaliano)
  };

  console.log(miArrayRecuperado2);

  return (
    <>
      <Navbar />
      <h1>INGLES</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {`Horario ${rowIndex + 1}`}
              {rowData.map((cellData, colIndex) => (
                <td>
                  <input
                    disabled={isDisabled}
                    type="text"
                    value={cellData}
                    onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button style={{marginRight: '10px', marginLeft: '1000px'}} onClick={() => setIsDisabled(!isDisabled)}>Moficar horarios</Button>
      <Button onClick={handleCambios}>Guardar cambios</Button>
      <div style={{marginTop: '10px'}}>
      <h1>FRANCES</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {horariosFrances.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {`Horario ${rowIndex + 1}`}
              {rowData.map((cellData, colIndex) => (
                <td>
                  <input
                    disabled={isDisabledFrances}
                    type="text"
                    value={cellData}
                    onChange={(e) => handleInputChangeFrances(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button style={{marginRight: '10px', marginLeft: '1000px'}} onClick={() => setIsDisabledFrances(!isDisabledFrances)}>Moficar horarios</Button>
      <Button onClick={handleCambiosFrances}>Guardar cambios</Button>
      </div>
      <div style={{marginTop: '10px'}}>
      <h1>ALEMAN</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {horariosAleman.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {`Horario ${rowIndex + 1}`}
              {rowData.map((cellData, colIndex) => (
                <td>
                  <input
                    disabled={isDisabledAleman}
                    type="text"
                    value={cellData}
                    onChange={(e) => handleInputChangeAleman(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button style={{marginRight: '10px', marginLeft: '1000px'}} onClick={() => setIsDisabledAleman(!isDisabledAleman)}>Moficar horarios</Button>
      <Button onClick={handleCambiosAleman}>Guardar cambios</Button>
      </div>
      <div style={{marginTop: '10px'}}>
      <h1>ITALIANO</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          {horariosItaliano.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {`Horario ${rowIndex + 1}`}
              {rowData.map((cellData, colIndex) => (
                <td>
                  <input
                    disabled={isDisabledItaliano}
                    type="text"
                    value={cellData}
                    onChange={(e) => handleInputChangeItaliano(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button style={{marginRight: '10px', marginLeft: '1000px'}} onClick={() => setIsDisabledItaliano(!isDisabledItaliano)}>Moficar horarios</Button>
      <Button onClick={handleCambiosItaliano}>Guardar cambios</Button>
      </div>
      
      
    </>
  );
};

export default HorariosIngles;
