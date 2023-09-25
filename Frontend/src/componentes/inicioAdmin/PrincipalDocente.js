import React from 'react'
import Navbar from "./Navbar";
import NavbarDocente from './NavbarDocente';

const PrincipalDocente = () => {
  const profesorLogueado = JSON.parse(localStorage.getItem("Profesor"));
  console.log(profesorLogueado)
  return (
    <>
    <NavbarDocente />
    <h3>Bienvenido profesor {profesorLogueado[0].Nombres} {profesorLogueado[0].Apellidos}</h3>
    <div style={{ display: "flex" }}>
        <img
          src="/imagenes/profesor2.avif"
          alt="Not Found"
          className="imagen-grande"
        />
      </div>
    </>
  )
}

export default PrincipalDocente