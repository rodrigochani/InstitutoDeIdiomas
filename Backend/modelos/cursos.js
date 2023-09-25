import db from '../conexionDB.js'
import { Sequelize, INTEGER, STRING } from 'sequelize';
import carreras from './carreras.js';
import profesores from './profesores.js';



const nombre = "cursos"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Descripcion: STRING,
Carrera: INTEGER,
Profesor: INTEGER,
}

const cursos= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})

carreras.hasMany(cursos, {foreignKey: "Carrera",  as: "cursos", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
cursos.belongsTo(carreras, {foreignKey: "Carrera", as: "carrera", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

profesores.hasMany(cursos, {foreignKey: "Profesor",  as: "cursos", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
cursos.belongsTo(profesores, {foreignKey: "Profesor", as: "profesor", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})





export default cursos;