import db from '../conexionDB.js'

import { Sequelize, INTEGER, STRING } from 'sequelize';



const nombre = "alumnos"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Nombres: STRING,
Apellidos: STRING,
DNI: STRING,
Telefono: STRING,
Email: STRING,
Usuario: STRING,
Contraseña: STRING,
Ciudad: STRING,
Provincia: STRING}

const alumnos= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})



export default alumnos;