import express from 'express'
const app = express()

//const { Sequelize } = require('sequelize');
import Sequelize from 'sequelize'

const db = new Sequelize('final_tup', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'});

db.authenticate ()
.then(() => {
    console.log('Conectado.')
})
.catch((err) => 
console.log(err))

export default db