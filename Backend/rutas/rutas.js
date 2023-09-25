import { Router } from "express";

import { getAllAdministradores } from "../Controladores/administradores.Controller.js";
import { createAlumno, getAllAlumnos } from "../controladores/alumnos.Controller.js";
import { createAlumnoCurso, getAllAlumnosCursos, updateByIdAlumnos_Cursos } from "../controladores/alumnos_cursos.Controller.js";
import { getAllCarreras } from "../controladores/carreras.controller.js";
import { getAllCursos, updateByDescripcionCursos } from "../controladores/cursos.Controller.js";
import { createPago, getAllPagos } from "../controladores/pagos.Controller.js";
import { createProfesor, getAllProfesores } from "../Controladores/profesores.Controller.js";





//ENDPOINT_GET
const router = Router()

//admin
router.get('/administradores',getAllAdministradores);
//profesores
router.get('/profesores', getAllProfesores)
router.post('/profesores/create', createProfesor)
//alumnos
router.get('/alumnos', getAllAlumnos)
router.post('/alumnos/create', createAlumno)
//carreras
router.get('/carreras', getAllCarreras)
//cursos
router.get('/cursos', getAllCursos)
router.patch('/cursos/update/:Descripcion', updateByDescripcionCursos)
//alumnos_cursos
router.get('/alumnos_cursos',getAllAlumnosCursos)
router.post('/alumnos_cursos/create', createAlumnoCurso)
router.patch('/alumnos_cursos/update/:Alumno', updateByIdAlumnos_Cursos)
//pagos
router.post('/pagos/create', createPago)
router.get('/pagos',getAllPagos)

export default router