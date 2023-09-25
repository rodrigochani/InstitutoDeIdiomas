import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import Navbar from "../inicioAdmin/Navbar";



const HorariosEditable = () => {

    
 

    const [horarios, setHorarios] = useState([
        {
            horario1: ''
        }
    ])

    const {horario1} = horarios

  const options = [
    { value: "Ingles I", label: "Ingles I" },
    { value: "Ingles II", label: "Ingles II" },
    { value: "Ingles III", label: "Ingles III" },
  ];
  const [tableData, setTableData] = useState([
    { id: '14 a 16 hs' },
    { id: '16 a 18 hs'  },
    { id: '18 a 20 hs' },
  ]);

  const handleEdit = (id, field, value) => {
    const updatedData = tableData.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          [field]: value,
        };
      } else {
        return data;
      }
    });
    setTableData(updatedData);
  };

  const jsonData = JSON.stringify(tableData)
  localStorage.setItem('Ingles', jsonData)
  //console.log(jsonData)

  const handleInputChange = (e) => {
    e.preventDefault()
    setHorarios({
        ...horario1,
        [e.target.name]: e.target.value
    })
  }
  console.log(horarios)
  return (
    <>
      <Navbar />
      <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Horarios Ingles: </h2>
      
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
            <tr>
                <td>Horarios</td>
                <td><input style={{width: '100px'}} name='Lunes1' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} name='Martes1' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
                
            </tr>
            <tr>
            <td>Horarios</td>
                <td><input style={{width: '100px'}} name='prueba1' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} name='prueba2' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
            </tr>
            <tr>
            <td>Horarios</td>
                <td><input style={{width: '100px'}} name='prueba1' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} name='prueba2' onChange={handleInputChange}/></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
                <td><input style={{width: '100px'}} /></td>
            </tr>
         {/*  {tableData.map((data) => (
            <tr>
                <td>sdfs    </td>
              <td>{data.id}</td>
              <td>
                <Form.Select
                  value={data.option}
                  onChange={(e) => {
                    handleEdit(data.id, 'lunes', e.target.value);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </Form.Select>
                <input style={{width: '100px'}} onChange={handleInputChange}/>
              </td>
              <td>
                <Form.Select
                  value={data.option}
                  onChange={(e) => {
                    handleEdit(data.id, 'martes', e.target.value);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                <input style={{width: '100px'}} />
              </td>
              <td>
                <Form.Select
                  value={data.option}
                  onChange={(e) => {
                    handleEdit(data.id, 'miercoles', e.target.value);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                <input style={{width: '100px'}}/>
              </td>
              <td>
                <Form.Select
                  value={data.option}
                  onChange={(e) => {
                    handleEdit(data.id, 'jueves', e.target.value);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                <input style={{width: '100px'}}/>
              </td>
              <td>
                <Form.Select
                  value={data.option}
                  onChange={(e) => {
                    handleEdit(data.id, 'viernes', e.target.value);
                  }}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
                <input style={{width: '100px'}}/>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
      <Button style={{marginTop: '20px', marginBottom: '20px', marginLeft: '1100px'}}>Confirmar horarios</Button>
    </>
  );
};

export default HorariosEditable;
