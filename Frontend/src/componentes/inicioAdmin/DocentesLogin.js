import React, { useEffect, useState } from "react";
import "./admins.css";
import Header from "../headers/Header";
import { Button } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";


const DocentesLogin = () => {
  useEffect(() => {
    getData();
  }, []);

/*   const history = useHistory();
  const AccesoUsuario = () => {
    
    history.go('/profesores');
    console.log(history);
  }; */

  const [admin, setAdmin] = useState([])
  const [control, setControl] = useState({
    Email: "",
    Contraseña: "",
  });
  const [validar, setValidar] = useState(false)

  const { Email, Contraseña } = control;

  const getData = async () => {
    try {
      const datos = "http://localhost:3001/profesores";
      const resp = await fetch(datos);
      const data = await resp.json();
      setAdmin(data)
    } catch (error) {
      throw error;
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    //console.log(e.target.name)
    setControl({
      ...control,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    //console.log(control.email)
    const prueba = admin.filter((user) => user.Email == control.Email);
    if (prueba.length == 0) {
      alert("usuario no existe");
      return
    }
    const prueba2 = admin.filter(
      (user) => user.Contraseña == control.Contraseña
    );
    if (prueba2.length == 0) {
      alert("la contraseña no es valida");
      return
    } 
    //history.push('/admin')
    //console.log(usuario)
    setValidar(!validar)
    alert('usuario verificado')
    localStorage.setItem("Profesor", JSON.stringify(prueba));
   
  };

  console.log(admin)
  console.log(control)
  console.log(validar)


  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <img
          src="/imagenes/logo+round.png"
          alt="Not Found"
          className="imagen-grande"
        />
        <div className="_-05-textarea clip-contents">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ok4zg5om4b-I65%3A641%3B8%3A2128?alt=media&token=a6ff744e-c347-4aa5-9325-2bbccfd67e9c"
            alt="Not Found"
            className="drag-handle"
          />
          <p className="lorem-ipsum-dolor-sit-am">
            Bienvenido! esta sección es de inicio para los profesores de la
            institucion.
          </p>
          <input className="drag-handle2" placeholder="Email" name="Email" value={Email} onChange={handleInput} autoComplete='off'/>
          <input className="drag-handle3" placeholder="contraseña" name="Contraseña" value={Contraseña} onChange={handleInput} type='password'/>
          {/* <Link to='/admin'> */}
          <button className="buttonLogin" onClick={handleLogin}>validar</button>
          {/* </Link> */}
          {validar ? (
          <button className="buttonLogin2">
            <a href="/profesores">ingresar</a>
          </button>

          ): <h7 style={{marginLeft: '10px'}}>usuario no verificado</h7>}
        </div>
      </div>
    </>
  );
};

export default DocentesLogin;
