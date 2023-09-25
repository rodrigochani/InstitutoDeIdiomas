import React, { useState } from "react";
//import Header from "../headers/Header";
//import DropdownMenu from "./DropdownMenu";
//import HamburguerButton from "./HamburguerButton";
//import "./principalAdmin.css";
//import './dropDownMenu.css'
//import Navbar from "./Navbar";
//import Menu from "./Menu";
import Navbar from "./Navbar";

const PrincipalAdmin = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", width: "1300px" }}>
        <img
          src="/imagenes/admin3.jpg"
          alt="Not Found"
          className="imagen-grande"
        />
        <h1 style={{marginLeft: '150px'}}>Bienvenido al usuario administrador</h1>
      </div>
    </>
  );
};

export default PrincipalAdmin;
