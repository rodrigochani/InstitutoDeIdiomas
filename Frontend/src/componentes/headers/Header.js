import React from "react";
import { Button } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="group-1000004159">
        <div className="group-1000004158">
          <p className="logo">LOGO</p>
        </div>
      </div>
      <div className="auto-layout-horizontal">
        <a href="/ingles" className="home">Horarios Ingles</a>
        <a href="/frances" className="about-us">Horarios Frances</a>
        <a href="/aleman" className="contact">Horarios Aleman</a>
        <a href="/italiano" className="contact">Horarios Italiano</a>
        <DropdownButton
          id="dropdown-basic-button"
          title="Inicia sesion"
          className="my-dropdown"
        >
          <Dropdown.Item href="/login/alumno">Alumno</Dropdown.Item>
          <Dropdown.Item href="/login/profesor">Profesor</Dropdown.Item>
          <Dropdown.Item href="/login/admin">Admin</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
export default Header;
