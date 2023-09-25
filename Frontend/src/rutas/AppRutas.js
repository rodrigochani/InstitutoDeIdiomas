import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AlumnosLogin from '../componentes/alumnos/AlumnosLogin';
import PrincipalAlumnos from '../componentes/alumnos/PrincipalAlumnos';
import ListaExamenesInternacionales from '../componentes/examenesInternacionales/ListaExamenesInternacionales';
import Aleman from '../componentes/horarios/Aleman';
import Frances from '../componentes/horarios/Frances';
import Ingles from '../componentes/horarios/Ingles';
import Italiano from '../componentes/horarios/Italiano';
import AlumnosIngreso from '../componentes/Ingresos/AlumnosIngreso';
import Horarios from '../componentes/Ingresos/Horarios';
import HorariosEditable from '../componentes/Ingresos/HorariosEditable';
import HorariosIngles from '../componentes/Ingresos/HorariosIngles';
import Inscripciones from '../componentes/Ingresos/Inscripciones';
import MateriasIngresos from '../componentes/Ingresos/MateriasIngresos';
import ProfesorIngresos from '../componentes/Ingresos/ProfesorIngresos';
import Admin from '../componentes/inicioAdmin/Admin';
import DocentesLogin from '../componentes/inicioAdmin/DocentesLogin';
import Pagos from '../componentes/inicioAdmin/Pagos';
import PrincipalAdmin from '../componentes/inicioAdmin/PrincipalAdmin';
import PrincipalDocente from '../componentes/inicioAdmin/PrincipalDocente';
import Instituto from '../componentes/instituto/Instituto';
import Principal from '../componentes/principal/Principal';
import DocentesMaterias from '../componentes/profesores/DocentesMaterias';
import DocentesNotas from '../componentes/profesores/DocentesNotas';
import Profesores from '../componentes/profesores/Profesores';





const AppRutas = () => {
  return (
    <BrowserRouter>
    <div>
        <Switch>
            <Route exact path='/' component={Principal} />
            <Route exact path='/ingles' component={Ingles} />
            <Route exact path='/frances' component={Frances} />
            <Route exact path='/aleman' component={Aleman} />
            <Route exact path='/italiano' component={Italiano} />
            <Route exact path='/examenesInternacionales' component={ListaExamenesInternacionales} />
            <Route exact path='/instituto' component={Instituto} />
            <Route exact path='/listado/profesores' component={Profesores} />
            <Route  exact path='/login/admin' component={Admin} />
            <Route  exact path='/login/alumno' component={AlumnosLogin} />
            <Route  exact path='/login/profesor' component={DocentesLogin} />
            <Route exact path='/admin' component={PrincipalAdmin} />
            <Route exact path='/inicio/alumnos' component={AlumnosIngreso}/>
            <Route exact path='/inicio/profesores' component={ProfesorIngresos}/>
            <Route exact path='/inicio/materias' component={MateriasIngresos}/>
            <Route exact path='/inscripciones' component={Inscripciones}/>
            <Route exact path='/inicio/pagos' component={Pagos}/>
            <Route exact path='/horarios' component={HorariosIngles}/>
            <Route exact path='/inicio/profesores/materias' component={DocentesMaterias}/>
            <Route exact path='/inicio/profesores/notas' component={DocentesNotas}/>
            <Route exact path='/alumnos' component={PrincipalAlumnos}/>
            <Route exact path='/profesores' component={PrincipalDocente}/>
            
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default AppRutas