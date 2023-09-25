import db from '../conexionDB.js'

import { Sequelize, INTEGER, STRING } from 'sequelize';



const nombre = "administradores"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Nombres: STRING,
Apellidos: STRING,
DNI: INTEGER,
Telefono: INTEGER,
Email: STRING,
Usuario: STRING,
Contraseña: STRING,
Ciudad: STRING,
Provincia: STRING}

const administradores= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})



export default administradores;