import db from '../conexionDB.js'
import { Sequelize, INTEGER, STRING, DATE, FLOAT, BOOLEAN } from 'sequelize';
import alumnos from './alumnos.js';
import cursos from './cursos.js';
import administradores from './administradores.js';



const nombre = "alumnos_cursos"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Alumno: INTEGER,
Curso: INTEGER,
FechaInsc: DATE,
PrimerParcial: FLOAT,
SegundoParcial: FLOAT,
Final: FLOAT,
Aprobado: BOOLEAN,
Administrador: INTEGER 
}

const alumnos_cursos= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})

alumnos.hasMany(alumnos_cursos, {foreignKey: "Alumno",  as: "alumno_curso", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
alumnos_cursos.belongsTo(alumnos, {foreignKey: "Alumno", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

cursos.hasMany(alumnos_cursos, {foreignKey: "Curso",  as: "curso_alumno", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
alumnos_cursos.belongsTo(cursos, {foreignKey: "Curso", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

administradores.hasMany(alumnos_cursos, {foreignKey: "Administrador",  as: "inscripciones", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
alumnos_cursos.belongsTo(administradores, {foreignKey: "Administrador", as: "administrador", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

export default alumnos_cursos;