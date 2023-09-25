import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";



const Frances = () => {
    var miArrayRecuperado = JSON.parse(localStorage.getItem("frances"));
    const [tableData, setTableData] = useState(miArrayRecuperado);
  return (
    <>
      <h1 style={{marginTop: '10px', textAlign: 'center', backgroundColor: 'lightblue', height: '70px'}}>Horarios Frances</h1>;
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
              <h5 style={{marginTop: '10px'}}>{`Horario ${rowIndex + 1}`}</h5>
              {rowData.map((cellData, colIndex) => (
                <td>
                  <h5>{cellData}</h5>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <h6>* los horarios pueden ser modificados durante el período lectivo</h6>
      <Button href="/" style={{marginTop: '10px'}}>Volver al menú principal</Button>
    </>
  );
};

export default Frances;
