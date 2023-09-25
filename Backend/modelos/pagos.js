import db from '../conexionDB.js'
import { Sequelize, INTEGER, STRING,DATE } from 'sequelize';
import administradores from './administradores.js';
import alumnos_cursos from './alumnos_cursos.js';


const nombre = "pagos"

const modelo = {
ID: {type:INTEGER,
allowNull:true,
autonIncrement: true, 
primaryKey:true},
Comprobante: INTEGER,
Inscripcion: INTEGER,
FechaPago: DATE,
Administrador: INTEGER
}

const pagos= db.define(nombre, modelo, {timestamps:false,
    freezetablename:true
})

administradores.hasMany(pagos, {foreignKey: "Administrador",  as: "pagos", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
pagos.belongsTo(administradores, {foreignKey: "Administrador", as: "administrador", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})

alumnos_cursos.hasOne(pagos, {foreignKey: "Inscripcion",  as: "pago", onDelete: 'CASCADE',
onUpdate: 'CASCADE'});
pagos.belongsTo(alumnos_cursos, {foreignKey: "Inscripcion", as: "inscripcion", onDelete: 'CASCADE',
onUpdate: 'CASCADE'})


export default pagos;