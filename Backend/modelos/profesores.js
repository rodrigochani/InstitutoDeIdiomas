import db from '../conexionDB.js'

import { Sequelize, INTEGER, STRING } from 'sequelize';
import carreras from './carreras.js';



const nombre = "profesores"

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
Carrera: INTEGER,
Usuario: STRING,
Contraseña: STRING,
Ciudad: STRING,
Provincia: STRING,
}

const profesores= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})

carreras.hasMany(profesores, {foreignKey: "Carrera",  as: "profesores", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
profesores.belongsTo(carreras, {foreignKey: "Carrera", as: "carrera", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})




export default profesores;