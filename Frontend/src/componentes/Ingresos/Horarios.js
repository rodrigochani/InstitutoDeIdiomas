import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from '../inicioAdmin/Navbar';

function Horarios() {
    useEffect(() => {
        getData();
      }, []);

    const [prueba, setPrueba] = useState('')

    const getData = async () => {
        try {
          const datos = "http://localhost:3001/administradores";
          const resp = await fetch(datos);
          const data = await resp.json();
          setPrueba(data)
        } catch (error) {
          throw error;
        }
      };

      console.log(prueba)
  return (
    <>
    hola
    {/* <Navbar />
    <h1>Ingles</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14 a 16</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>16 a 18</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>18 a 20</td>
          <td>Otto</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    <h1>Frances</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14 a 16</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>16 a 18</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>18 a 20</td>
          <td>Otto</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    <h1>Aleman</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14 a 16</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>16 a 18</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>18 a 20</td>
          <td>Otto</td>
          <td>@twitter</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table> */}


    </>
  );
}

export default Horarios;