import db from '../conexionDB.js'

import { Sequelize, INTEGER, STRING } from 'sequelize';



const nombre = "carreras"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Descripcion: STRING
}

const carreras= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})





export default carreras;